import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { Color } from 'three';
import { AbstractSurface } from '@int/geotoolkit3d/scene/surface/AbstractSurface';
import type { DefaultColorProvider } from '@int/geotoolkit/util/DefaultColorProvider';
import type { PillarSurfaceData } from '@int/geotoolkit3d/data/surface/PillarSurfaceData';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
/**
 * Fault surface implementation
 * @throws {Error} if options object has no PillarSurfaceData inside
 */
export declare class Fault extends AbstractSurface {
    constructor(options: Fault.Options);
    /**
     * Set this Fault options
     */
    setOptions(options?: Fault.OptionsBase): this;
    /**
     * Get this Fault options
     */
    getOptions(): Fault.OptionsBaseOut;
}
export declare namespace Fault {
    type Options = AbstractSurface.Material.Options & OptionsBase & {
        /**
         * data object
         */
        data: {
            /**
             * The fault pillar data
             */
            surface: PillarSurfaceData;
        };
    };
    type OptionsBase = Object3D.Options & AbstractSurface.Material.OptionsBase & {
        /**
         * is fault surface visible
         */
        fault?: boolean;
        /**
         * is fault lines visible
         */
        lines?: boolean;
        /**
         * is fault points visible
         */
        points?: boolean;
        /**
         * color provider used for the Fault surface
         */
        colorprovider?: string | Color | ColorProvider;
        /**
         * color for the Fault lines
         */
        linescolor?: string | Color | string[] | Color[] | DefaultColorProvider;
        /**
         * color for the Fault points
         */
        pointscolor?: string | Color | string[] | Color[] | DefaultColorProvider;
    };
    type OptionsBaseOut = Required<Object3D.Options> & Partial<AbstractSurface.Material.OptionsBaseOut> & {
        /**
         * is fault surface visible. Note: returns null, if fault has no surface
         */
        fault?: boolean;
        /**
         * is fault lines visible
         */
        lines: boolean;
        /**
         * is fault points visible
         */
        points: boolean;
        /**
         * color for the Fault lines
         */
        linescolor: DefaultColorProvider;
        /**
         * color for the Fault points
         */
        pointscolor: DefaultColorProvider;
    };
}
