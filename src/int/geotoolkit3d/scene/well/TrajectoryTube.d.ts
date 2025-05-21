/**
 * @module geotoolkit3d/scene/well/TrajectoryTube
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { MultiLateralWellData } from '@int/geotoolkit3d/data/well/MultiLateralWellData';
import type { Merge } from '@int/geotoolkit/base';
import { TubeGeometry } from '@int/geotoolkit3d/scene/well/TubeGeometry';
import type { AnnotationBase } from '@int/geotoolkit3d/scene/AnnotationBase';
import type { Matrix3 } from 'three';
import type { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
/**
 * A well trajectory as a 3D tube.<br>
 * <br>
 * This shape displays a well trajectory as a tube that can be colored with an optional attribute.<br>
 * Note that the shape of the tube will be preserved even when changing the global scale of the plot.<br>
 */
export declare class TrajectoryTube extends Object3D {
    constructor(options: TrajectoryTube.Options | {
        data: MultiLateralWellData;
    });
    setOptions(options?: TrajectoryTube.OptionsBase): this;
    getOptions(): TrajectoryTube.OptionsBaseOut;
    /**
     * Gets annotation label
     * @returns annotation label
     */
    getAnnotation(): AnnotationBase;
    /**
     * Sets annotation label
     * @param annotation label
     * @param [anchorDepth] depth to anchor label (central depth by default)
     * @returns this
     */
    setAnnotation(annotation: AnnotationBase, anchorDepth?: number): this;
}
export declare namespace TrajectoryTube {
    type Options = Merge<TubeGeometry.Options, Material.Options> & {
        /**
         * True if the tube should have a cap at both ends
         */
        closed?: boolean;
    };
    type OptionsBase = Merge<Object3D.Options & TubeGeometry.OptionsBase, Material.OptionsBase>;
    type OptionsBaseOut = Merge<Required<Object3D.Options> & MultiLateral.OptionsBaseOut, Merge<TubeGeometry.OptionsBase, Material.OptionsBaseOut>>;
    namespace Material {
        type Options = Merge<Partial<NormScale> & MeshColorMapLambertMaterial.Options, Shader.Options>;
        type OptionsBase = Merge<Partial<NormScale> & MeshColorMapLambertMaterial.OptionsBase, Shader.Options>;
        type OptionsBaseOut = Merge<NormScale & MeshColorMapLambertMaterial.OptionsBaseOut, Shader.OptionsOut>;
    }
    namespace MultiLateral {
        /**
         * The options
         */
        type OptionsBase = {
            /**
             * The data options
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
                 * Radiuses of the ellipsis for the East-West axis (For first ellipsis)
                 */
                widths?: number[] | number;
                /**
                 * Radiuses of the ellipsis North-South axis (For first ellipsis)
                 */
                heights?: number[] | number;
                /**
                 * Rolling angles in radians
                 */
                rolls?: number[] | number;
                /**
                 * A value attribute used for coloring the trajectory (see options.colorprovider)
                 */
                values?: number[];
                bots?: number[];
                tops?: number[];
            };
            /**
             * The tube size factor
             */
            size?: number;
            /**
             * The minimum radius, this is used as a size factor applied to the ellipses
             */
            radiusmin?: number;
            /**
             * The maximum radius, this is used as a size factor applied to the ellipses
             */
            radiusmax?: number;
            /**
             * The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
             */
            tubeprecision?: number;
        };
        type OptionsBaseOut = Required<OptionsBase>;
    }
    type NormScale = {
        /**
         * The norm scale Matrix3
         */
        normscale: Matrix3;
    };
    namespace Shader {
        type OptionsOut = {
            /**
             * tube size factor.
             */
            size: number;
        };
        type Options = Partial<OptionsOut>;
    }
}
