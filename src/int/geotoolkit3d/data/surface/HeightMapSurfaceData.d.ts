import { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
import type { Texture } from 'three';
import { BasicTriangulator } from '@int/geotoolkit3d/util/surface/BasicTriangulator';
/**
 * Surface data using a heightmap.<br>
 * <br>
 * This surface data object implements a {@link https://en.wikipedia.org/wiki/Heightmap heighmap}.<br>
 * Elevations are stored as normalized values into the given 2D texture.
 */
export declare class HeightMapSurfaceData extends AbstractSurfaceData {
    constructor(options: HeightMapSurfaceData.Options);
    /**
     * Returns the HeightMap surface attributes
     */
    getAttributes(): HeightMapSurfaceData.Attributes;
}
export declare namespace HeightMapSurfaceData {
    type HeightMapData = {
        /**
         * The number of vertices of the heightmap Mesh on its local X axis.<br>
         * More vertices means a more detailed heightmap surface. Default to 256.
         */
        width: number;
        /**
         * The number of vertices of the heightmap Mesh on its local Y axis.<br>
         * More vertices means a more detailed heightmap surface. Default to 256.
         */
        height: number;
        /**
         * The elevation map as a texture.<br>
         * Note that it's assumed to be greyscale.<br>
         * This parameter is optional, and the heightmap can be set later via server data, using {@link @int/geotoolkit3d/scene/surface/Surface~Surface}'s geometry option.
         */
        heightmap?: Texture;
    };
    /**
     * The options
     */
    type Options = AbstractSurfaceData.Options & Partial<BasicTriangulator.Options> & {
        /**
         * The HeightMap data options.
         */
        data?: Partial<HeightMapData>;
    };
    /**
     * The HeightMap attributes.
     */
    type Attributes = AbstractSurfaceData.AttributesOut & HeightMapData;
}
