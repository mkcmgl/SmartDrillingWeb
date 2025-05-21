import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
/**
 * GeoRSS source format that formats feature queries and parses the GeoRSS formatted response
 */
export declare class GeoRSS extends AbstractFormat {
    parse(data: string | XMLDocument): this;
}
