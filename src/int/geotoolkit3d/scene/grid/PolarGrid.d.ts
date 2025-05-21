/**
 * @module geotoolkit3d/scene/grid/PolarGrid
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Text2d } from '@int/geotoolkit3d/scene/Text2d';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
/**
 * A polar grid for 3D.<br>
 * <br>
 * The grid can be positioned in space using its position attribute.<br>
 * The labels/ticks displayed are controlled trough 'modelCenter' and 'modelSize'
 * <br>
 */
export declare class PolarGrid extends Object3D {
    constructor(options: PolarGrid.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: PolarGrid.Options): this;
    /**
     * Get polar grid options
     */
    getOptions(): Required<PolarGrid.Options> & Object3D.Options;
    /**
     * Gets outline
     * @returns options
     */
    getOutline(): Text2d.OutlineOptions;
    /**
     * Return the grid's tick counts
     * @returns The tick count
     */
    getCount(): number;
    /**
     * Return the grid's 'modelCenter'
     * @returns The center
     */
    getModelCenter(): number;
    /**
     * Return the grid's 'modelSize'
     * @returns The size
     */
    getModelSize(): number;
}
export declare namespace PolarGrid {
    /**
     * The options
     */
    type Options = Object3D.Options & {
        /**
         * The center of the polar grid's model
         */
        modelcenter?: number;
        /**
         * The size of the polar grid's model
         */
        modelsize?: number;
        /**
         * The grid tick count
         */
        count?: number;
        /**
         * The axis options
         */
        axis?: {
            /**
             * Defines the axis linestyle. Note that linestyle.width is not supported by windows-webgl.
             */
            linestyle?: LineStyle;
            /**
             * The axis textstyle
             */
            textstyle?: TextStyle;
            /**
             * Function responsible for formatting the axis text values
             */
            formatter?: FormatterFunction;
            /**
             * if provided, text will have outline
             */
            outline?: Text2d.OutlineOptions;
        };
        /**
         * The grid options
         */
        grid?: {
            /**
             * Defines the grid linestyle. Note that linestyle.width is not supported by windows-webgl.
             */
            linestyle?: LineStyle;
        };
    };
    type FormatterFunction = (el: number) => string;
}
