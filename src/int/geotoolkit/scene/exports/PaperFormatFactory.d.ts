import { AbstractPaperFormat } from '@int/geotoolkit/scene/exports/AbstractPaperFormat';
import { PaperOrientation } from '@int/geotoolkit/scene/exports/PaperOrientation';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { CustomPaperFormat } from '@int/geotoolkit/scene/exports/CustomPaperFormat';
/**
 * Paper format factory
 */
export declare class PaperFormatFactory {
    /**
     * Return the instance of paper format factory. Will build new one if one has not been constructed.
     *
     * @returns format factory
     */
    static getInstance(): PaperFormatFactory;
    /**
     * Return an instance of paper format.
     *
     * @param paperformat paper format
     * @param [unit] optional
     * @param [orientation] optional
     * @returns result
     */
    getPaper(paperformat: string | AbstractPaperFormat | PaperFormatFactory.PaperOptions, unit?: AbstractUnit | string, orientation?: PaperOrientation): AbstractPaperFormat | null;
    /**
     * Register a custom paper format to the paper format factory. The paper format must extend AbstractPaperFormat.
     * @throws Error if paper is not an instance of AbstractPaperFormat
     * @param newPaper custom paper format
     */
    registerNewPaperFormat(newPaper: CustomPaperFormat): void;
    /**
     * Return the list of all papers supported by the factory.
     *
     * @returns paperList all of the supported paper types
     */
    getPaperList(): string[];
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace PaperFormatFactory {
    /**
     * Options
     */
    type PaperOptions = {
        /**
         * Paper format name
         */
        name: string;
        /**
         * Paper margins
         */
        margins: {
            /**
             * top
             */
            top: number;
            /**
             * bottom
             */
            bottom: number;
            /**
             * left
             */
            left: number;
            /**
             * right
             */
            right: number;
        };
        /**
         * Paper format unit
         */
        unit?: AbstractUnit | string;
    };
}
