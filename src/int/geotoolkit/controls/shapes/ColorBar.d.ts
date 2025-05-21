/**
 * @module geotoolkit/controls/shapes/ColorBar
 */
import { ColorBarLocation } from '@int/geotoolkit/controls/shapes/ColorBarLocation';
import { Group } from '@int/geotoolkit/scene/Group';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import type { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
/**
 * ColorBar Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when the location has changed
     */
    LocationChanged = "LocationChanged"
}
/**
 * Defines a color bar shape. The ColorBar shape is an advanced shape that can display a colorprovider as a legend.<br>
 * It will render the colors from the colorprovider along with an axis and the corresponding ticks & labels.
 */
export declare class ColorBar extends Group {
    /**
     * Creates color bar
     * @param [options] option to create color bar
     */
    constructor(options?: ColorBar.Options);
    on<E extends keyof ColorBar.EventMap>(type: E, callback: (eventType: E, sender: this, args: ColorBar.EventMap[E]) => void): this;
    off<E extends keyof ColorBar.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ColorBar.EventMap[E]) => void): this;
    notify<E extends keyof ColorBar.EventMap>(type: E, source: ColorBar, args?: ColorBar.EventMap[E]): this;
    clone(): ColorBar;
    /**
     * Sets color bar options
     * @param [options] colorbar options
     * @returns this
     */
    setOptions(options?: ColorBar.Options): this;
    /**
     * Gets color bar options
     * @returns options (see setOptions for the JSON-object detailed description)
     */
    getOptions(): ColorBar.Options;
    /**
     * Updates layout
     * @param [targets] optional parameter about which element to layout
     * @returns this
     */
    updateLayout(targets?: ILayoutable[]): this;
    /**
     * Gets the location of the color bar.
     */
    getLocation(): ColorBarLocation;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): ColorBar.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: ColorBar.Options): this;
    /**
     * Returns the tick generator of inner axis for manipulations
     */
    getTickGenerator(): TickGenerator | null;
    /**
     * Set tick generator
     * @param tickGenerator tick generator
     * @returns this
     */
    setTickGenerator(tickGenerator: TickGenerator | AdaptiveTickGenerator.Options): this;
    /**
     * Gets the offset of value on ColorBar
     * @param value value
     * @returns offset on ColorBar
     */
    getPointAtValue(value: number): number;
}
export declare namespace ColorBar {
    type Options = Group.Options & {
        /**
         * default color provider
         */
        colorprovider?: ColorProvider;
        /**
         * color bar location
         */
        location?: ColorBarLocation | AnnotationLocation;
        /**
         * flip or not
         */
        flip?: boolean;
        /**
         * data range
         */
        range?: {
            /**
             * data range min value. If not specified then color provider's getMinValue() is used.
             */
            min?: number;
            /**
             * data range max value. If not specified then color provider's getMaxValue() is used.
             */
            max?: number;
        };
        /**
         * data range min value. If not specified then color provider's getMinValue() is used.
         */
        min?: number;
        /**
         * data range max value. If not specified then color provider's getMaxValue() is used.
         */
        max?: number;
        /**
         * title text
         */
        titletext?: string;
        /**
         * title text style
         */
        titletextstyle?: TextStyle.Type;
        /**
         * color bar title
         */
        title?: {
            /**
             * title area desired size
             */
            size?: number;
            /**
             * title visibility
             */
            visible?: boolean;
            /**
             * title text
             */
            text?: string;
            /**
             * title textstyle
             */
            textstyle?: TextStyle.Type;
            /**
             * title text object instance
             */
            item?: Text;
        };
        /**
         * color bar axis
         */
        axis?: Axis.Options & {
            /**
             * axis area desired size
             */
            size?: number;
            /**
             * axis label rotation in radians
             */
            labelrotation?: number;
            /**
             * axis object instance
             */
            item?: Axis;
            /**
             * axis baseline
             */
            baseline?: {
                /**
                 * baseline visibility
                 */
                visible?: boolean;
                /**
                 * baseline linestyle
                 */
                linestyle?: LineStyle | string | LineStyle.Options;
            };
        };
        /**
         * enable keeping the precise limits and calculate only step
         */
        preciselimits?: boolean;
        /**
         * color box attributes
         */
        colorbox?: {
            /**
             * colorbox area desired size
             */
            size?: number | string;
            /**
             * colorbox visibility
             */
            visible?: boolean;
            /**
             * colorbox outline rectangle linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * colorbox independent range
             */
            independentrange?: boolean;
        };
        /**
         * size of components
         */
        componentsizes?: {
            /**
             * title area desired size
             */
            title?: number;
            /**
             * colorbox area desired size
             */
            colorbox?: number;
            /**
             * axis area desired size
             */
            axis?: number;
            /**
             * named colors desired size
             */
            namedcolors?: number;
        };
        /**
         * namedcolors options
         */
        namedcolors?: {
            /**
             * named colors desired size
             */
            size?: number;
            /**
             * named colors visibility
             */
            visible?: boolean;
        };
        /**
         * tickgenerator
         */
        tickgenerator?: TickGenerator;
    };
    /**
     * properties
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * default color provider
         */
        colorprovider?: ColorProvider;
        /**
         * color bar location
         */
        location?: ColorBarLocation;
        /**
         * flip or not
         */
        flip?: boolean;
        /**
         * line style
         */
        /**
         * data range min value. If not specified then color provider's getMinValue() is used.
         */
        min?: number;
        /**
         * data range max value. If not specified then color provider's getMaxValue() is used.
         */
        max?: number;
        /**
         * colorbar range
         */
        range?: {
            /**
             * data range min value. If not specified then color provider's getMinValue() is used.
             */
            min?: number;
            /**
             * data range max value. If not specified then color provider's getMaxValue() is used.
             */
            max?: number;
        };
        /**
         * title attributes
         */
        title?: {
            /**
             * title text object instance
             */
            item?: Text;
        };
        /**
         * colorbar axis
         */
        axis?: {
            /**
             * axis object instance
             */
            item?: Axis;
        };
        /**
         * enable keeping the precise limits and calculate only step
         */
        preciselimits?: boolean;
        /**
         * color box
         */
        colorbox?: {
            /**
             * colorbox area desired size
             */
            size?: number | string;
            /**
             * colorbox visibility
             */
            visible?: boolean;
            /**
             * colorbox outline rectangle linestyle
             */
            linestyle?: LineStyle;
        };
        /**
         * namedcolors properties
         */
        namedcolors?: {
            /**
             * named colors desired size
             */
            size?: number | string;
            /**
             * named colors visibility
             */
            visible?: boolean;
        };
        /**
         * title text style
         */
        titletextstyle?: TextStyle.Type;
        /**
         * title size
         */
        titlesize?: number;
        /**
         * title text
         */
        titletext?: string;
        /**
         * title visible
         */
        titlevisible?: boolean;
        /**
         * title item
         */
        titleitem?: Text;
        /**
         * axis auto label rotation
         */
        axisautolabelrotation?: boolean;
        /**
         * axis auto label rotation angle
         */
        axisautolabelrotationangle?: number;
        /**
         * axis size
         */
        axissize?: number;
        /**
         * axis visible
         */
        axisvisible?: boolean;
        /**
         * axis title
         */
        axistitle?: Axis.Title | string;
        /**
         * axis item
         */
        axisitem?: Axis;
        /**
         * axis baseline visibility
         */
        axisbaselinevisible?: boolean;
        /**
         * axis baseline style
         */
        axisbaselinestyle?: LineStyle;
        /**
         * colorbox independent range
         */
        colorboxindependentrange?: boolean;
        /**
         * colorbox line style
         */
        colorboxlinestyle?: LineStyle.Type;
        /**
         * colorbox size
         */
        colorboxsize?: number | string;
    };
    type EventMap = Group.EventMap & {
        [Events.LocationChanged]: ColorBarLocation;
    };
}
