import { ArcGISToken } from '@int/geotoolkit/map/sources/connectors/ArcGISToken';
import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
/**
 * Stream source format that formats feature queries and parses the ArcGIS Stream formatted response
 */
export declare class Stream extends AbstractFormat {
    /**
     * Creates format
     * @param [options] options
     */
    constructor(options?: AbstractFormat.Options);
    query(query?: ArcGISToken.SendOptions): this;
}
