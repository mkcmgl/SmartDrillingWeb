import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
/**
 * KML source format that formats feature queries and parses the KML formatted response
 */
export declare class KML extends AbstractFormat {
    parse(data: string | XMLDocument): this;
}
