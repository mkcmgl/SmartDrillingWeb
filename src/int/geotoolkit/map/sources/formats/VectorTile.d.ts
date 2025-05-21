import { Tile } from '@int/geotoolkit/map/sources/formats/Tile';
import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * VectorTile source format that formats tile queries to Mapbox server and parses Pbf (Protocolbuffer Binary Format) formatted response
 */
export declare class VectorTile extends Tile {
    /**
     * Creates format
     * @param [options] options
     */
    constructor(options?: VectorTile.Options);
    query(query: VectorTile.FormatQuery): this;
}
export declare namespace VectorTile {
    /**
     * options
     */
    type Options = Tile.Options & {
        /**
         * connector to use
         */
        connector?: AbstractConnector;
    };
    /**
     * query params
     */
    type FormatQuery = Tile.Query & {
        /**
         * destination object
         */
        dst: {
            tile?: Record<string, AbstractFeature[]>;
        };
    };
}
