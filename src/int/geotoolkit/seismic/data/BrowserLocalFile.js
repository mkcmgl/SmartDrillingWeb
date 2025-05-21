/**
 * @module geotoolkit/seismic/data/BrowserLocalFile
 */
import { Lp as TaskScheduler } from '../../../impl/geotoolkit.base.js';
import { Mi as $window } from '../../../impl/geotoolkit.base.js';
import { Gi as log } from '../../../impl/geotoolkit.base.js';
/**
 * Creates wrapper class for a file reader.
 *
 * @class module:geotoolkit/seismic/data/BrowserLocalFile~LocalFile
 * @private
 * @param {File|string} file the local file for e.g SEG-Y file.
 */
export const LocalFile = /* #__PURE__*/ (function () {
    const LocalFile = function (file) {
        if (typeof file === 'string') {
            warn('Browser version of LocalFile does not support string as argument.');
        }
        this.file = file;
        this.fileSize = file.size;
        this.fileName = file.name;
        this.taskScheduler = new TaskScheduler({
            'numberofparalleltasks': 1
        });
        // lastModifiedDate is deprecated. Keep for compatibility only
        this.lastModifiedDate = file.lastModifiedDate;
        this.lastModified = file.lastModified;
        this.fileReader = null;
        if (!LocalFile.isSupported) {
            return;
        }
        this.fileReader = new $window.FileReader(this.file);
    };
    /**
     * Returns file name
     * @returns {string} file name
     */
    LocalFile.prototype.getFileName = function () {
        return this.fileName;
    };
    /**
     * Return file size
     * @returns {number}
     */
    LocalFile.prototype.getFileSize = function () {
        return this.fileSize;
    };
    /**
     * Returns the last modified date of the file as the number of milliseconds
     * since the Unix epoch (January 1, 1970 at midnight). Files without
     * a known last modified date return the current date.
     * @returns {number}
     */
    LocalFile.prototype.getLastModified = function () {
        if (this.lastModified) {
            return this.lastModified;
        }
        const date = this.lastModifiedDate ? this.lastModifiedDate : new Date();
        return date.getTime();
    };
    /**
     * Returns binary raw data
     *
     * @param {Function} callback this is the function called when data is ready
     * @param {number} from offset in bytes
     * @param {number} to offset in bytes
     */
    LocalFile.prototype.readBinarySection = function (callback, from, to) {
        const file = this.file;
        const reader = this.fileReader;
        const start = from;
        const stop = to;
        this.taskScheduler.addTask(function (resolve, reject) {
            reader.onloadend = function (evt) {
                if (evt.target.readyState === $window.FileReader.DONE) {
                    if (callback)
                        callback(reader.result);
                    resolve(reader.result);
                }
                else {
                    log('unexpected readyState result : ' + evt.target.readyState);
                    reject(evt.target.readyState);
                }
            };
            try {
                // An index into the Blob indicating the first byte that will *not*
                // be included in the new Blob
                // https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice
                const blob = file.slice(start, stop + 1);
                reader.readAsArrayBuffer(blob);
            }
            catch (exception) {
                reject(exception);
            }
        });
    };
    /**
     * Return true if local file is supported
     *
     * @returns {boolean}
     */
    LocalFile.isSupported = function () {
        return $window.File &&
            $window.FileReader &&
            $window.FileList &&
            $window.Blob;
    };
    return LocalFile;
})();
