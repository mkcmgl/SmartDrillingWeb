import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
/**
 * GPX source format that formats feature queries and parses the GPX formatted response
 */
export declare class GPX extends AbstractFormat {
    parse(data: string | XMLDocument): this;
}
