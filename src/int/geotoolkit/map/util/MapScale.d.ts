import { UnitSystem } from '@int/geotoolkit/map/util/UnitSystem';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines "Map scale" object
 */
export declare class MapScale extends AnchoredShape {
    /**
     * @param [options] map scale options
     */
    constructor(options?: MapScale.Options | LineStyle | string | number);
    protected copyConstructor(src: MapScale, deepCopy?: boolean): this;
    /**
     * Sets scale
     *
     * @param scale scale to set
     * @returns this
     */
    setMapScale(scale: number): this;
    /**
     * Sets unit system to use
     * @param system unit system
     * @returns this
     */
    setSystem(system: UnitSystem): this;
    /**
     * Returns current unit system
     */
    getSystem(): UnitSystem;
    /**
     * Returns the style associated with this map scale text
     */
    getTextStyle(): TextStyle;
    /**
     * Sets map scale text style
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Renders itself
     *
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
    /**
     * Sets map scale object properties
     * @param props map scale object properties
     * @returns this
     */
    setProperties(props?: MapScale.Options): this;
    /**
     * Returns properties
     * @returns map scale object properties
     */
    getProperties(): MapScale.OptionsOut;
}
export declare namespace MapScale {
    /**
     * map scale options
     */
    type Options = AnchoredShape.Options & {
        /**
         * horizontal position offset (in px)
         */
        x?: number;
        /**
         * vertical position offset (in px)
         */
        y?: number;
        /**
         * label text style or object with properties see {@link import("geotoolkit/attributes/TextStyle").TextStyle.setProperties}
         */
        textstyle?: TextStyle.Type;
        /**
         * alignment for the scale object on the map widget
         */
        alignment?: AnchorType;
        /**
         * alignment for the text label on the scale object
         */
        textalign?: AnchorType;
        /**
         * tick height from 0 to 1 (where 1 means full shape height)
         */
        tickheight?: number;
        /**
         * unit system to use
         */
        system?: UnitSystem;
    };
    /**
     * map scale object properties
     */
    type OptionsOut = AnchoredShape.OptionsOut & {
        /**
         * horizontal position offset (in px)
         */
        x?: number;
        /**
         * vertical position offset (in px)
         */
        y?: number;
        /**
         * tick height from 0 to 1 (where 1 means full shape height)
         */
        tickheight?: number;
        /**
         * unit system to use
         */
        system?: UnitSystem;
        /**
         * map scale text style
         */
        textstyle?: TextStyle;
        /**
         * alignment for the text label on the scale object
         */
        textalign?: AnchorType;
    };
}
