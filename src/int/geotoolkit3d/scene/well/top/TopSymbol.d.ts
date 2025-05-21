/**
 * @module geotoolkit3d/scene/well/top/TopSymbol
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Color } from 'three';
import { Sphere } from '@int/geotoolkit3d/scene/well/top/Sphere';
import { Ellipse } from '@int/geotoolkit3d/scene/well/top/Ellipse';
import type { TrajectoryTube } from '@int/geotoolkit3d/scene/well/TrajectoryTube';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * A series of tops for a well.
 */
export declare class TopSymbol extends Object3D {
    /**
     * @param well The well which is the parent of the topsymbol
     * @param options The options
     */
    constructor(well: TrajectoryTube, options: TopSymbol.Options);
    /**
     * Get well.
     * @returns The well which is the parent of the topsymbol
     */
    getWell(): TrajectoryTube;
    /**
     * Get symbols
     * @returns symbols
     */
    getSymbols(): (Sphere | Ellipse)[];
    /**
     * Sets options
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: TopSymbol.Options): this;
    /**
     * Get options
     * @returns options
     */
    getOptions(): TopSymbol.OptionsOut;
}
export declare namespace TopSymbol {
    /**
     * The options
     */
    type Options = Object3D.Options & {
        /**
         * The opacity of symbol
         */
        opacity?: number;
        /**
         * The type of symbol
         */
        type?: string;
        /**
         * The size of symbol
         */
        size?: number;
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string | Color;
        color?: Color;
        /**
         * The heights of symbols, and they should be negative
         */
        heights?: number[];
    };
    type OptionsOut = Required<Object3D.Options & Omit<Options, 'color' | 'colorprovider'>> & {
        colorprovider: string | Color;
    };
}
