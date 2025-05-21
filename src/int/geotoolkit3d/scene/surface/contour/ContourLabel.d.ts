import { Vector3 } from 'three';
import { Label } from '@int/geotoolkit3d/scene/label/Label';
import type { Contour } from '@int/geotoolkit3d/scene/surface/contour/Contour';
/**
 * Label used specifically for contour surfaces.
 * This label adjust it's value based on the label z position and the given surfacescale.
 * @deprecated since 4.0, please use geotoolkit3d/scene/label/Label instead.
 */
export declare class ContourLabel extends Label {
    constructor(options: ContourLabel.Options);
    /**
     * set text properties and options
     * @param options The ContourLabel options (See geotoolkit3d.scene.label.Label.setOptions for common options)
     * @returns this
     */
    setOptions(options: ContourLabel.OptionsBase): this;
}
export declare namespace ContourLabel {
    /**
     * The options (See geotoolkit3d.scene.label.Label for common options)
     */
    export type Options = Label.Options & CommonOptions & {
        /**
         * text to display. If not provided, text will be the z-component of origin
         */
        text?: number | string;
    };
    /**
     * The ContourLabel options (See geotoolkit3d.scene.label.Label.setOptions for common options)
     */
    export type OptionsBase = Label.OptionsBase & CommonOptions;
    type CommonOptions = {
        /**
         * the scale of contour surface
         */
        surfacescale?: Vector3;
        /**
         * The function that takes value and scale to format the label text
         */
        formatter?: Contour.Formatter;
    };
    export {};
}
