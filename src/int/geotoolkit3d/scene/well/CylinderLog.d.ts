/**
 * @module geotoolkit3d/scene/well/CylinderLog
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
/**
 * A well log as a cylinder like 3D shape.<br>
 * <br>
 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
 * The diameter and color of the tube will vary for each log curve sample.<br>
 * <br>
 * Note that this object assumes that the given path and curve values have the same sampling.<br>
 */
export declare class CylinderLog extends Object3D {
    constructor(options?: CylinderLog.Options);
    /**
     * Set options
     */
    setOptions(options?: CylinderLog.OptionsBase): this;
    /**
     * Get options
     */
    getOptions(): CylinderLog.OptionsBaseOut;
}
export declare namespace CylinderLog {
    type Options = Geometry.Options & Material.Options;
    type OptionsBase = Object3D.Options & Material.OptionsBase & Geometry.Options;
    type OptionsBaseOut = Required<Object3D.Options> & Material.OptionsBaseOut & Geometry.OptionsBaseOut;
    namespace Geometry {
        /**
         * The options
         */
        type Options = {
            /**
             * Input cylinder datas.
             * Note that specifying the data option object will trigger a geometry update.
             */
            data?: {
                /**
                 * The x deviation values
                 */
                x?: number[];
                /**
                 * The y deviation values
                 */
                y?: number[];
                /**
                 * The elevation values
                 */
                z?: number[];
                /**
                 * A curve attribute used for the size of the cylinder
                 */
                radius?: number[];
                /**
                 * The nullvalue for the radius
                 */
                radiusnullvalue?: number;
                /**
                 * A value attribute used for coloring the cylinder (see options.colorprovider)
                 */
                values?: number[];
                /**
                 * The nullvalue for color attribute
                 */
                valuesnullvalue?: number;
                /**
                 * The minimum radius in the data series. Usefull for normalization purpose if the provided data series is only a sub-group of a larger data series.
                 * If not provided, the minimum source radius will be determined by the given radiuses.
                 */
                radiusdatamin?: number;
                /**
                 * The maximum radius in the data series. Usefull for normalization purpose if the provided data series is only a sub-group of a larger data series.
                 * If not provided, the maximum source radius will be determined by the given radiuses.
                 */
                radiusdatamax?: number;
            };
        };
        type OptionsBaseOut = {
            /**
             * input cylinder data
             */
            data: {
                /**
                 * A curve attribute used for the size of the cylinder
                 */
                radius?: number[];
                /**
                 * The nullvalue for the radius
                 */
                radiusnullvalue: number;
                /**
                 * A value attribute used for coloring the cylinder (see options.colorprovider)
                 */
                values: number[];
                /**
                 * The nullvalue for color attribute
                 */
                valuesnullvalue: number;
            };
        };
    }
    namespace Material {
        type Options = MeshColorMapLambertMaterial.Options & Shader.Options;
        type OptionsBase = MeshColorMapLambertMaterial.OptionsBase & Shader.Options;
        type OptionsBaseOut = MeshColorMapLambertMaterial.OptionsBaseOut & Shader.OptionsOut;
    }
    namespace Shader {
        type OptionsOut = {
            /**
             * The cylinder minimum radius.
             */
            radiusmin: number;
            /**
             * The cylinder maximum radius.
             */
            radiusmax: number;
            /**
             * The radius log minimum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.
             */
            radiuslogmin: number;
            /**
             * The radius log maximum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.
             */
            radiuslogmax: number;
        };
        type Options = Partial<OptionsOut>;
    }
}
