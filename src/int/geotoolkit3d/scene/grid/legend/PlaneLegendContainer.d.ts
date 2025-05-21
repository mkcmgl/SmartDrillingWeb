/**
 * @module geotoolkit3d/scene/grid/legend/PlaneLegendContainer
 */
import type { OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { Vector3 } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { Label } from '@int/geotoolkit3d/scene/label/Label';
import type { Grid } from '@int/geotoolkit3d/scene/grid/Grid';
/**
 * Hold the label for grid legends, feature a plane collision detection.
 */
export declare class PlaneLegendContainer extends Object3D {
    constructor();
    setOptions(options: PlaneLegendContainer.OptionsBase): this;
    beforeRender(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, plot: Plot, renderer: WebGLRenderer): this;
}
export declare namespace PlaneLegendContainer {
    /**
     * options object
     */
    type OptionsBase = Object3D.Options & {
        /**
         * the label to display
         */
        legendlabel: Label;
        /**
         * the grid the legend is displayed on (used for collision detection)
         */
        grid: Grid;
        /**
         * the panel position relative to the grid center.
         */
        position: Vector3;
        /**
         * the panel scale
         */
        scale: Vector3;
        /**
         * if true, hide the legend text when it doesnt fit inside it's panel.
         */
        hideiftoolarge: boolean;
        /**
         * if true and "hide if too large" enabled, will try to shift the legend text to fit inside the panel if possible.
         */
        centerbeforehiding: boolean;
    };
}
