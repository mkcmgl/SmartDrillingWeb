import type { LasParameterSection } from '@int/geotoolkit/las/LasParameterSection';
/**
 * LAS Stream based Parser.
 * <br>
 * This is the parent class of LAS parsers using a Stream paradigm.
 */
export declare abstract class LasStreamParser {
    /**
     * Opens the LAS stream and parse its headers.<br>
     * <br>
     * The stream can also be opened in 'legacy mode' in order to be accessed like a non-stream based parser.<br>
     * However this is discouraged as it can lead to memory issues for huge datasets.<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * @param fullload If true, the stream will be fully read and parsed during its opening. (legacy mode)
     * @param [success] A function called when the headers have been parsed and the stream is ready
     * @param [error] A function called if the header parsing failed
     * @returns A promise fulfilled when the headers have been parsed and the stream is ready
     */
    abstract open(fullload: boolean, success?: LasStreamParser.Callback, error?: LasStreamParser.Callback): Promise<LasStreamParser>;
    /**
     * Returns the LAS sections
     */
    abstract getSections(): LasParameterSection[];
    /**
     * Returns the LAS section groups
     */
    abstract getSectionGroups(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LasStreamParser {
    type Callback = () => void;
}
