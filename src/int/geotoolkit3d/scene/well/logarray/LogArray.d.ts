/**
 * @module geotoolkit3d/scene/well/logarray/LogArray
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
import type { ReferenceMode } from '@int/geotoolkit3d/util/well/logarray/LogArrayUtil';
/**
 * A LogArray as a tubular shape.<br>
 * <br>
 * A logarray is the 3D equivalent of geotoolkit/welllog/Log2DVisual, it displays a two dimension welllog.<br>
 * Its representation is a tubular shape where each 'edge' of the tube is a sector that has its own radius and color.<br>
 * <br>
 * The orientation of the sector 0 is configurable using {@link @int/geotoolkit3d/util/well/logarray/LogArrayUtil~ReferenceMode} enum.<br>
 * <br>
 * Note that the logarray allows changing on the fly of the values but also path.<br>
 * However, the amount of data/mds should remain constant.<br>
 * This is intended to implement a sliding window in order to display a subpart of a logarray that would be too big to fit in memory/gpu.<br>
 * <br>
 */
export declare class LogArray extends Object3D {
    constructor(options: LogArray.Options);
    /**
     * Set options
     */
    setOptions(options?: LogArray.Options): this;
    /**
     * Get options
     */
    getOptions(): LogArray.OptionsBaseOut;
}
export declare namespace LogArray {
    type Options = Object3D.Options & Material.OptionsBase & Material.Options;
    type OptionsBaseOut = Required<Object3D.Options> & Material.OptionsBaseOut;
    namespace Material {
        type Options = {
            /**
             * input logarray data
             */
            data?: {
                /**
                 * path
                 */
                path: {
                    /**
                     * The x deviation values
                     */
                    x: number[];
                    /**
                     * The y deviation values
                     */
                    y: number[];
                    /**
                     * The z deviation values
                     */
                    z: number[];
                };
                /**
                 * The log array values
                 */
                logarray: number[][];
                /**
                 * The color values
                 */
                values?: number[][];
            };
        };
        type OptionsBase = ShaderOptions & MeshColorMapLambertMaterial.OptionsBase;
        type OptionsBaseOut = ShaderOptionsOut & MeshColorMapLambertMaterial.OptionsBaseOut;
    }
    type ShaderOptionsOut = {
        /**
         * The min value of all log array values (for normalization).
         */
        logarraymin: number;
        /**
         * The max value of all log array values (for normalization).
         */
        logarraymax: number;
        /**
         * The min radius for all points (the distance between all points and trajectory is bigger than this value).
         */
        radiusmin: number;
        /**
         * The delta radius for all points (all points are between "radiusmin" and "radiusmin + radiusdelta").
         */
        radiusdelta: number;
        /**
         * The null value for log array values.
         */
        logarraynullvalue: number;
        /**
         * The null value for color values.
         */
        valuesnullvalue: number;
        /**
         * The reference mode to determine the sector 0 orientation.
         */
        referencemode: ReferenceMode;
    };
    type ShaderOptions = Partial<ShaderOptionsOut>;
}
