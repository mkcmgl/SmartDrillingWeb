import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
/**
 * WFS source format that formats feature queries to the WFS (Web Feature Service) server
 */
export declare class WFS extends AbstractFormat {
    /**
     * Creates format
     * @param [options] options
     */
    constructor(options?: WFS.Options);
    query(query: AbstractFormat.RectQuery): this;
}
export declare namespace WFS {
    /**
     * options
     */
    type Options = AbstractFormat.Options & {
        /**
         * format to request from server
         */
        format?: string;
        /**
         * parser format to parse the server response
         */
        parser?: AbstractFormat;
    };
}
