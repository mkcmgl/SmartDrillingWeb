/**
 * @module geotoolkit/seismic/data/LocalFile
 */
import fs from 'fs';
/**
 * Creates wrapper class for a file reader.
 * @class module:geotoolkit/seismic/data/LocalFile~LocalFile
 * @param {string} fileName file names
 */
export const LocalFile = /* #__PURE__*/ (function () {
    const LocalFile = function (fileName) {
        if (typeof fileName !== 'string') {
            console.log('NodeJS version of LocalFile only supports string as argument.'); // eslint-disable-line
        }
        this.fileName = fileName;
        const fd = fs.openSync(this.fileName, 'r');
        const stat = fs.fstatSync(fd);
        this.fileSize = stat.size;
        fs.closeSync(fd);
    };
    /**
     * Returns file name
     * @returns {string} file name
     */
    LocalFile.prototype.getFileName = function () {
        return this.fileName;
    };
    /**
     * Returns binary raw data
     *
     * @param {Function} callback this is the function called when data is ready
     * @param {number} from offset in bytes
     * @param {number} to offset in bytes
     */
    LocalFile.prototype.readBinarySection = function (callback, from, to) {
        fs.open(this.fileName, 'r', function (status, fd) {
            if (status) {
                console.log(status.message); // eslint-disable-line
                return;
            }
            if (from > to) {
                const tmp = from;
                from = to;
                to = tmp;
            }
            const bufferSize = to - from + 1, data = new Uint8Array(bufferSize), buffer = Buffer.from(data.buffer);
            fs.read(fd, buffer, 0, bufferSize, from, function (err, bytesRead, buffer) {
                fs.closeSync(fd);
                callback(data);
            });
        });
    };
    /**
     * Return file size
     * @returns {number}
     */
    LocalFile.prototype.getFileSize = function () {
        return this.fileSize;
    };
    /**
     * Return true if local file is supported
     *
     * @returns {boolean}
     */
    LocalFile.isSupported = function () {
        return true;
    };
    return LocalFile;
})();
