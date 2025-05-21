import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
/**
 * ArcGIS source format that formats feature queries to the FeatureService server. Supports ArcGIS version 10.0 and higher.
 */
export declare class ArcGISFeature extends AbstractFormat {
    /**
     * @param [options] options
     */
    constructor(options?: ArcGISFeature.Options);
    query(query: AbstractFormat.RectQuery): this;
}
export declare namespace ArcGISFeature {
    /**
     * options
     */
    type Options = AbstractFormat.Options & {
        /**
         * connector to use
         */
        connector?: AbstractConnector;
    };
}
