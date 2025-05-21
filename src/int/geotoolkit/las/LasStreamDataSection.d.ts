/**
 * @module geotoolkit/las/LasStreamDataSection
 */
import { LasDataSection } from '@int/geotoolkit/las/LasDataSection';
import type { LasStreamParser } from '@int/geotoolkit/las/LasStreamParser';
/**
 * A LAS Data Section supporting stream access.
 */
export declare class LasStreamDataSection extends LasDataSection {
    /**
     * Constructor
     * @param section section
     * @param stream The underlying LAS stream
     * @param rawDataStart The line index of the data section
     */
    constructor(section: LasStreamDataSection.Options, stream: LasStreamParser, rawDataStart: number);
    /**
     * Reads the values for the given range.<br>
     * Note that the range will not be extrapolated nor the values interpolated in the case the given start/end do not exist in the file (see examples).<br>
     * <br>
     * Also, this function will not reorder the data nor reorder the given start/end (if start > depth).<br>
     * It assumes those are coherent with the LAS data order.<br>
     * For example, providing start>end for a dataset that has an increasing index will not work properly.<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * <br>
     * @param [start] The first depth to read (no interpolation or extrapolation)
     * @param [end] The last depth to read (no interpolation or extrapolation)
     * @param [mnemonics] The mnemonics of the curves to retain, if null, all curves will be fetched
     * @param [success] A function called when the range has been read
     * @param [error] A function called if the parsing fails
     * @returns A promise fulfilled when the range has been read
     * @example
     * // File depths: 10,20,30,40
     * getDataInRange(0,20); // => values returned are for depths [10, 20]
     * getDataInRange(30,50); // => values returned are for depths [30, 40]
     * getDataInRange(35,50); // => values returned are for depths [40]
     * getDataInRange(5,15); // => values returned are for depths [10]
     */
    getDataInRange(start?: number, end?: number, mnemonics?: string[], success?: LasStreamParser.Callback, error?: LasStreamParser.Callback): Promise<number[][]>;
    /**
     * Reads the values for the given range.<br>
     * Note that the range will not be extrapolated nor the values interpolated in the case the given start/end do not exist in the file (see examples).<br>
     * <br>
     * Also, this function will not reorder the data nor reorder the given start/end (if start > depth).<br>
     * It assumes those are coherent with the LAS data order.<br>
     * For example, providing start>end for a dataset that has an increasing index will not work properly.<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * <br>
     * @param [start] The first depth to read (no interpolation or extrapolation)
     * @param [end] The last depth to read (no interpolation or extrapolation)
     * @param [indexes] The indexes of the curves to retain, if null, all curves will be fetched
     * @param [success] A function called when the range has been read
     * @param [error] A function called if the parsing fails
     * @returns A promise fulfilled when the range has been read
     * @example
     * // File depths: 10,20,30,40
     * getDataInRange(0,20); // => values returned are for depths [10, 20]
     * getDataInRange(30,50); // => values returned are for depths [30, 40]
     * getDataInRange(35,50); // => values returned are for depths [40]
     * getDataInRange(5,15); // => values returned are for depths [10]
     */
    getDataInRangeByIndex(start?: number, end?: number, indexes?: number[], success?: LasStreamParser.Callback, error?: LasStreamParser.Callback): Promise<number[][]>;
}
export declare namespace LasStreamDataSection {
    /**
     * section
     */
    type Options = LasDataSection.Options;
}
