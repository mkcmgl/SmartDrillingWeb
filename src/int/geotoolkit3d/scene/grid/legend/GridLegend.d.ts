/**
 * @module geotoolkit3d/scene/grid/legend/GridLegend
 */
import { Vector2 } from 'three';
import { Label } from '@int/geotoolkit3d/scene/label/Label';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Grid } from '@int/geotoolkit3d/scene/grid/Grid';
/**
 * Widget for projecting texts/legends on the grid's 4 cardinal directions.
 */
export declare class GridLegend {
    constructor(options: GridLegend.Options);
    setOptions(options?: GridLegend.Options): void;
    /**
     * Add this legend to the given Grid
     * @param grid the grid to add the legend to
     */
    addToGrid(grid: Grid): void;
    /**
     * Dispose widget
     */
    dispose(): void;
}
export declare namespace GridLegend {
    /**
     * options object
     */
    type Options = {
        /**
         * planes options object
         */
        planes?: {
            /**
             * back plane options object
             */
            back?: PlaneOptions;
            /**
             * left plane options object
             */
            left?: PlaneOptions;
            /**
             * right plane options object
             */
            right?: PlaneOptions;
            /**
             * front plane options object
             */
            front?: PlaneOptions;
        };
        /**
         * if true, hide the legend text when it doesnt fit inside it's panel.
         */
        hideiftoolarge?: boolean;
        /**
         * if true and hideiftoolarge enabled, will try to shift the legend text to fit inside the panel if possible.
         */
        centerbeforehiding?: boolean;
    };
    type PlaneOptions = {
        /**
         * if the plane text is visible or not.
         */
        enable?: boolean;
        /**
         * the plane text to display, supports newlines/carriage returns.
         */
        text?: string;
        /**
         * if true, show the text on the near face of the grid cube, if false, show on the far face of the grid cube.
         */
        nearside?: boolean;
        /**
         * if true, the on-screen size of the text will always be the same, if false, it will depend on zoom level.
         */
        sizeindevice?: boolean;
        /**
         * the text scale. To use with sizeindevice=false. If text is blury, it is recommended to increase testStyle font size before increasing textscale.
         */
        textscale?: number;
        /**
         * local X,Y offset for text position, (0,0 is bottom left, 1,1 is top right, relative to the plane)
         */
        textoffset?: Vector2;
        /**
         * the style of the legend text (Font, size, color...)
         */
        style?: TextStyle;
        /**
         * outline options
         */
        outline?: Label.OutlineOptions;
        /**
         * The vertical anchor position for the legend (default is Center)
         */
        verticalanchor?: string;
        hideiftoolarge?: boolean;
        centerbeforehiding?: boolean;
    };
}
