import { VectorTile as VectorTileSource } from '@int/geotoolkit/map/sources/VectorTile';
import { Vector } from '@int/geotoolkit/map/layers/Vector';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Query } from '@int/geotoolkit/map/util/Query';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * This layer connects to Mapbox VectorTile server and displays received features.
 */
export declare class VectorTile extends Vector {
    /**
     * @param [options]
     */
    constructor(options?: VectorTile.Options);
    /**
     * Gets features iterator
     * @param [filter] features query filter.
     * @returns feature iterator (over all features if filter is null)
     */
    getFeatures(filter?: Query | ((feature: AbstractFeature) => boolean)): Iterator;
    /**
     * Returns font names that are used in VectorTile styling
     */
    getFonts(): string[];
}
export declare namespace VectorTile {
    type Options = Vector.Options & {
        /**
         * the layer data source
         */
        source?: VectorTileSource;
        /**
         * features drawing styles file url, if no set default styles are used
         */
        styleurl?: string;
    };
}
