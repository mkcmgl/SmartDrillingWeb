import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Color, Side } from 'three';
import type { MultiLateralPipeData } from '@int/geotoolkit3d/data/well/MultiLateralPipeData';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * Object for displaying pipes
 * @throws {Error} if options object has no data inside
 */
export declare class Pipe extends Object3D {
    constructor(options: Pipe.Options);
    /**
     * Sets options
     * @param [options] options object
     * @param [index] The index-th well pipe
     * @returns this
     */
    setOptions(options?: Pipe.OptionsBase, index?: number): this;
    /**
     * Gets options
     * @param [index] The index-th well pipe
     * @returns options
     * @throws {Error} if the index is out of range
     */
    getOptions(index?: number): Pipe.OptionsBaseOut;
}
export declare namespace Pipe {
    /**
     * options object
     */
    type Options = {
        /**
         * The data options
         */
        data: MultiLateralPipeData.PipeData | MultiLateralPipeData.PipeData[] | MultiLateralPipeData;
        /**
         * tube size factor
         */
        size?: number;
        /**
         * The ellipsis shape is approximated using triangles. This factor is used to define how many
         * triangles will be used for the approximation.
         */
        tubeprecision?: number;
        /**
         * False if the tube should have a cap at both ends
         */
        openended?: boolean;
        /**
         * create hard edges for size changes
         */
        hardedges?: boolean;
        /**
         * Optional single color (new THREE.Color(0xffffff) by default)
         */
        color?: Color;
        /**
         * A color provider to generate the colormap
         */
        colorprovider?: ColorProvider;
        /**
         * opacity
         */
        opacity?: number;
        /**
         * transparent
         */
        transparent?: boolean;
        /**
         * side (geotoolkit3d.Constants.Side.DoubleSide by default)
         */
        side?: Side;
        /**
         * emissive color (new THREE.Color(0x000000) by default)
         */
        emissive?: Color;
        /**
         * intensity emissive
         */
        emissiveintensity?: number;
        /**
         * unlit
         * @deprecated since 4.0, please use Pipe.Options.lights instead.
         */
        unlit?: number;
        /**
         * Defines whether this material uses lighting or not.
         */
        lights?: boolean;
        /**
         * radius scale
         */
        radiusscale?: number;
        /**
         * global radius
         */
        globalradius?: number;
    };
    /**
     * options object
     */
    type OptionsBase = Object3D.Options & Partial<Options> & {
        data?: MultiLateralPipeData.PipeData;
    };
    /**
     * options
     */
    type OptionsBaseOut = Required<OptionsBase>;
}
