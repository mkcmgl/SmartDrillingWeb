import type { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
/**
 * Class defines CSVWriter for datatable or Array.
 * 'stream' defines instance of {@link @int/geotoolkit/util/stream/IWritable~IWritable}. It must be passed as parameter to write to stream.
 * User can provide their own stream or use stream such as {@link @int/geotoolkit/util/stream/TextStream~TextStream}.
 * @example
 * import {CSVWriter} from '@int/geotoolkit/data/CSVWriter';
 * import {TextStream} from '@int/geotoolkit/util/stream/TextStream';
 * ...
 * new CSVWriter({
 *     'stream': new TextStream({
 *         'filename': 'csvfile.csv',
 *         'type': 'text\/csv',
 *         'save': true
 *     })
 * })
 * .writeTable(table, {
 *    'includeHeaders': true
 * })
 * .close();
 */
export declare class CSVWriter {
    constructor(options: CSVWriter.Options);
    /**
     * Set options for writer
     * @param options options
     */
    setOptions(options: CSVWriter.Options): this;
    /**
     * Get Options
     * @returns options see {@link import("geotoolkit/data/CSVWriter").CSVWriter.setOptions}
     */
    getOptions(): CSVWriter.OptionsOut;
    /**
     * write Datatable to stream
     * @param datatable DataTable or DataTableView to write
     * @param [options] options
     */
    writeTable(datatable: AbstractDataTable, options?: CSVWriter.WriteOptions): this;
    /**
     * Write a row to stream
     * @param row row
     */
    writeRow(row: string[]): this;
    /**
     * Write array of rows to stream
     * @param rows array of rows
     * @param [maxBuffer] maxBuffer maxRows to save in memory before writing to stream
     */
    writeRows(rows: string[][], maxBuffer?: number): this;
    /**
     * Write text to stream
     * @param text text
     * @param [eol] indicate if it's end of line
     */
    writeText(text: string, eol?: boolean): this;
    /**
     * Closes writer. It is necessary to close the writer in order to save and stream
     */
    close(): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace CSVWriter {
    /**
     * options
     */
    type Options = {
        /**
         * stream
         */
        stream: IWritable;
        /**
         * string used to separate fields.
         */
        delimiter?: string;
        /**
         * string used to terminate lines produced by writer.
         */
        lineterminator?: string;
    };
    /**
     * options
     */
    type WriteOptions = {
        /**
         * maxRows to save in memory before writing to stream
         */
        maxbuffer?: number;
        /**
         * whether to include header or not
         */
        includeheaders?: boolean;
    };
    /**
     * options
     */
    type OptionsOut = Required<Options>;
}
