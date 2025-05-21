/**
 * @module geotoolkit/http/HttpRequest
 */
import { MB as HttpError } from "../../impl/geotoolkit.http.js";
import { DB as ErrorCodes } from "../../impl/geotoolkit.http.js";
import http from 'http';
import https from 'https';
import { yB as AbstractHttpService } from "../../impl/geotoolkit.http.js";
const encode = function (val) {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/g, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/g, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/g, '[')
        .replace(/%5D/g, ']');
};
const encodeParam = function (param) {
    if (param == null) {
        return param;
    }
    if (typeof param === 'object') {
        try {
            param = JSON.stringify(param);
        }
        catch (e) {
            return null;
        }
    }
    return encode(param);
};
const getFullUrl = function (baseURL, relativeURL) {
    if (baseURL && !(/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(relativeURL))) {
        return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
    }
    return relativeURL;
};
const getUrl = function (config) {
    let url = getFullUrl(config['baseurl'], config['url']);
    if (config.params && typeof config.params === 'object') {
        let paramsStr = null, pair;
        for (const key in config.params) {
            if (config.params.hasOwnProperty(key)) {
                pair = encode(key) + '=' + encodeParam(config.params[key]);
                if (paramsStr) {
                    paramsStr += '&' + pair;
                }
                else {
                    paramsStr = pair;
                }
            }
        }
        if (url && paramsStr) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + paramsStr;
        }
    }
    return url;
};
const createError = function (message, options, code, request, response) {
    return new HttpError(message, options, code, request, response);
};
const handleResponseData = function (res, options, resultHandler) {
    const headers = res.headers;
    let result = '';
    let transferredBytes = 0;
    const contentLength = parseInt(headers['content-length']);
    res.setEncoding('utf8');
    // Handle progress if needed
    res.on('data', function (chunk) {
        result += chunk;
        if (typeof contentLength === 'number') {
            const onProgressHandler = options['onprogress'];
            if (typeof onProgressHandler === 'function') {
                const totalBytes = contentLength;
                transferredBytes += chunk.length;
                onProgressHandler({
                    'loaded': transferredBytes,
                    'total': totalBytes
                });
            }
        }
    });
    res.on('end', function () {
        if (headers != null && headers['content-type'] != null &&
            headers['content-type'].toLowerCase() === 'application/json') {
            try {
                result = JSON.parse(result);
            }
            catch (e) { }
        }
        resultHandler(result);
    });
    return res;
};
export var HttpRequest = (function () {
    /**
     * Http or Https request
     * @private
     */
    var HttpRequest = class {
        /**
         * Send request based using http or https nodejs packages
         * @param options options
         */
        static send(options) {
            const url = getUrl(options);
            let req = null;
            const HttpRequest = url.substring(0, 5) === 'https' ? https : http;
            return new Promise(function (resolve, reject) {
                const httpOptions = options;
                req = HttpRequest.request(url, httpOptions, function (res) {
                    if (res.statusCode === 200) {
                        handleResponseData(res, options, function (responseData) {
                            resolve({
                                'options': options,
                                'data': responseData,
                                'status': res.statusCode,
                                'statusText': res.statusMessage
                            });
                        });
                    }
                    else {
                        reject(createError(res, options));
                    }
                });
                // Handle request cancellation (as opposed to a manual cancellation)
                req.on('abort', function () {
                    reject(createError('Request aborted', options, ErrorCodes.Aborted));
                });
                // Handle low level network errors
                req.on('error', function () {
                    reject(createError('Network Error', options));
                });
                // Handle and set timeout in ms
                req.setTimeout(options['timeout'] !== undefined ? options['timeout'] : 0, function () {
                    reject(createError('timeout of ' + options['timeout'] + 'ms exceeded', options, ErrorCodes.Timeout));
                });
                // Set headers
                const headers = options['headers'];
                if (headers) {
                    for (const key in headers) {
                        if (headers.hasOwnProperty(key)) {
                            req.setHeader(key, headers[key]);
                        }
                    }
                }
                if (options['cancel']) {
                    // TODO temp 'fixedOptions' should be removed after pruning DeprecatedCancelCallback type
                    const fixedOptions = AbstractHttpService.processCancelOption(options);
                    if (fixedOptions['cancel'].isCanceled()) {
                        return;
                    }
                    // Handle cancellation
                    fixedOptions['cancel'].setErrorHandler(function () {
                        req.destroy();
                    });
                }
                req.end();
            });
        }
    };
    return HttpRequest;
})();
