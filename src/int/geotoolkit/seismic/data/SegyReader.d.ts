import { AbstractSegyReader } from '@int/geotoolkit/seismic/data/AbstractSegyReader';
import type { LocalFile } from '@int/geotoolkit/seismic/data/LocalFile';
import { SeismicFormat } from '@int/geotoolkit/seismic/data/SeismicFormat';
/**
 * Defines reader of local SEG-Y files.
 */
export declare class SegyReader extends AbstractSegyReader {
    /**
     * Creates reader
     * @param file The file object
     * @param [options] options or instance of format to specify the trace
     * data format and location of headers
     */
    constructor(file: LocalFile, options?: SegyReader.Options);
    /**
     * Creates reader
     * @param file The file object
     * @param [format] seismic format
     * @param [samplePower] sample power
     * @param [nullValue] null value
     */
    constructor(file: LocalFile, format?: SeismicFormat, samplePower?: number, nullValue?: number);
    protected copyConstructor(src: SegyReader, deepCopy?: boolean): this;
    /**
     * Return clone of the reader
     */
    clone(): SegyReader;
    /**
     * Returns file name
     */
    getSeismicFileName(): string;
    /**
     * Return file size in bytes
     */
    getFileSize(): number;
    /**
     * Returns file
     */
    protected getSeismicFile(): LocalFile;
    /**
     * Read a binary section
     * @param callback callback function
     * @param start start position in bytes
     * @param end end position in bytes
     */
    readBinarySection(callback: AbstractSegyReader.ReadBinarySectionCallback, start: number, end: number): void;
}
export declare namespace SegyReader {
    /**
     * options or instance of format to specify the  trace
     * data format and location of headers
     */
    type Options = AbstractSegyReader.Options & {
        /**
         * synchronous requests
         */
        synchronous?: boolean;
    };
}
