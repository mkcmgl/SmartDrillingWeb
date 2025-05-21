import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
/**
 * CSV source format that formats feature queries and parses the CSV formatted response
 */
export declare class CSV extends AbstractFormat {
    /**
     * Sets CSV data string delimiter (',' by default)
     * @param delimiter CSV delimiter to use for CSV parse
     */
    static setDelimiter(delimiter: string): void;
    parse(data: string | string[][]): this;
}
