/**
 * @module geotoolkit/welllog/header/AdaptiveLogVisualHeader
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { Events as DomEvents } from '@int/geotoolkit/dom';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Point } from '@int/geotoolkit/util/Point';
import type { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import { Orientation } from '@int/geotoolkit/util/Orientation';
/**
 * @example
 * import {AdaptiveLogVisualHeader} from '@int/geotoolkit/welllog/header/AdaptiveLogVisualHeader';
 * const header = new AdaptiveLogVisualHeader();
 * // Add custom 'ElementA' with a _static_ text 'MyCustomText'
 * // that can be cut on the left side (if no room for the whole string)
 * header.setElement('ElementA', { 'cut': 'left-to-right', 'text': 'MyCustomText' });
 * @example
 * // 'updatemethod' format (for textual elements):
 *  ...
 * 'updatemethod': (header) => {
 *     // return name
 *  },
 * ...
 * @example
 * // 'drawmethod' format (for graphical elements):
 * 'drawmethod': (header, rect, context) => {
 *    // rendering context draws header in the rect
 * }
 */
export declare class AdaptiveLogVisualHeader<T extends LogAbstractVisual = LogAbstractVisual> extends LogVisualHeader<T> {
    /**
     * @param [options] visual or properties object
     */
    constructor(options?: AdaptiveLogVisualHeader.Options<T> | T);
    protected copyConstructor(src: AdaptiveLogVisualHeader<T>, deepCopy?: boolean): this;
    /**
     * Sets text style for all textual elements
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Gets header elements with their parameters.
     * NOTE: deep copy of elements is created and returned.
     * @returns header elements
     */
    getElements(): AdaptiveLogVisualHeader.ElementOptionsOut[];
    /**
     * Gets header elements with their parameters.
     * NOTE: deep copy of elements is created and returned.
     * @returns header elements
     */
    getSections(): AdaptiveLogVisualHeader.SectionOptions<T>[];
    /**
     * Sets header element's parameters.
     * @param names names include<br>
     * (a) element name or <br>
     * (b) an array of element names or <br>
     * (c) JSON-object with entries in the form of: "an_element_name": `{ the_element_JSON_options }`
     * (see second parameter description for details)
     * @param [options] options to set
     * @returns this
     */
    setElement(names: string | string[] | Record<string, AdaptiveLogVisualHeader.ElementOptions>, options?: AdaptiveLogVisualHeader.ElementOptions): this;
    /**
     * Sets header section's parameters. [known section names is 'top', 'middle', 'bottom']
     * @param names names include<br>
     * (a) section name or <br>
     * (b) an array of section names or <br>
     * (c) JSON-object with entries in the form of: "an_section_name": `{ the_section_JSON_options }`
     * (see second parameter description for details)
     * @param [options] options to set
     * @returns this
     */
    setSection(names: string | string[] | Record<string, AdaptiveLogVisualHeader.SectionOptions<T>>, options?: AdaptiveLogVisualHeader.SectionOptions<T>): this;
    /**
     * Gets general settings.
     * NOTE: deep copy of settings is created and returned.
     * @returns settings
     */
    getSettings(): AdaptiveLogVisualHeader.Settings;
    /**
     * Sets settings element's parameters.
     * @param settings settings
     * @returns this
     */
    setSettings(settings: AdaptiveLogVisualHeader.Settings): this;
    render(inputContext: RenderingContext): void;
    /**
     * Gets all the properties pertaining to the header
     * @returns header properties
     */
    getProperties(): AdaptiveLogVisualHeader.OptionsOut;
    /**
     * Sets properties pertaining to this object
     * @param properties object containing properties to set
     * @returns this
     */
    setProperties(properties?: AdaptiveLogVisualHeader.Options<T>): this;
    /**
     * Returns vertical flag
     * @returns true, if header is vertical, false otherwise
     */
    isVertical(): boolean;
    /**
     * Sets vertical flag
     * @param vertical true, if header is vertical, false otherwise
     * @returns this
     */
    setVertical(vertical: boolean): this;
    /**
     * Hit test in the device coordinate. This method checks if any point is intersects <html> node inside text
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns selected items
     */
    hitTest(area: AdaptiveLogVisualHeader.HitTestArea, radius?: number): AdaptiveLogVisualHeader.Hits[] | null;
}
export declare namespace AdaptiveLogVisualHeader {
    /**
     * visual or properties object
     */
    export type Options<T extends LogAbstractVisual = LogAbstractVisual> = LogVisualHeader.Options<T> & {
        /**
         * gap
         */
        gap?: number;
        /**
         * element priority list
         */
        priority?: string[];
        /**
         * element order list
         */
        order?: string[];
        /**
         * header orientation
         */
        orientation?: Orientation;
        /**
         * desired height
         */
        desiredheight?: number;
        /**
         * element properties
         */
        element?: Record<string, ElementOptions>;
    };
    export type ElementOptionsOut = {
        name?: string;
        /**
         * visibility flag
         */
        visible?: boolean;
        /**
         * static text for textual element(s)
         */
        text?: string;
        /**
         * values supported: 'left-to-right', 'right-to-left' and undefined (no cut is allowed)
         */
        cut?: string | CutCallback;
        /**
         * text style for textual element(s)
         */
        textstyle?: TextStyle;
        /**
         * radius of the rounded box
         */
        radius?: number;
        /**
         * line style for rounded box
         */
        linestyle?: LineStyle;
        /**
         * fill style for rounded box
         */
        fillstyle?: FillStyle;
        /**
         * padding object
         */
        paddings?: {
            /**
             * left padding for rounded box
             */
            left?: number;
            /**
             * top padding for rounded box
             */
            top?: number;
            /**
             * right padding for rounded box
             */
            right?: number;
            /**
             * bottom padding for rounded box
             */
            bottom?: number;
        };
        /**
         * callback for textual element's contents update
         */
        updatemethod?: UpdateCallback;
        /**
         * callback for non-textual element's contents update
         */
        drawmethod?: DrawCallback;
        /**
         * number format
         */
        numberformat?: NumberFormat;
        /**
         * values supported: 'top', 'bottom', 'center'
         */
        verticalpos?: string;
        /**
         * values supported: 'left', 'right', 'center'
         */
        horizontalpos?: string;
        options?: any;
        events?: {
            [key: string]: IStyleListener.AttributeCallback;
        };
    };
    /**
     * options to set
     */
    export type SectionOptions<T extends LogAbstractVisual = LogAbstractVisual> = {
        name?: string;
        /**
         * visibility flag
         */
        visible?: boolean;
        /**
         * section size in pixels or units
         */
        size?: number | string | MeasureSizeCallback<T>;
    };
    /**
     * options to set
     */
    export type ElementOptions = {
        name?: string;
        /**
         * visibility flag
         */
        visible?: boolean;
        /**
         * static text for textual element(s)
         */
        text?: string;
        /**
         * values supported: 'left-to-right', 'right-to-left' and undefined in case if no cut is allowed, or callback to cut specified text
         */
        cut?: 'left-to-right' | 'right-to-left' | null | CutCallback;
        /**
         * text style for textual element(s)
         */
        textstyle?: TextStyle | string | TextStyle.Options;
        /**
         * radius of the rounded box
         */
        radius?: number;
        /**
         * line style for rounded box
         */
        linestyle?: LineStyle.Type;
        /**
         * fill style for rounded box
         */
        fillstyle?: FillStyle.Type;
        /**
         * padding object
         */
        paddings?: {
            /**
             * left padding for rounded box
             */
            left?: number;
            /**
             * top padding for rounded box
             */
            top?: number;
            /**
             * right padding for rounded box
             */
            right?: number;
            /**
             * bottom padding for rounded box
             */
            bottom?: number;
        };
        /**
         * callback for textual element's contents update
         */
        updatemethod?: UpdateCallback;
        /**
         * callback for non-textual element's contents update
         */
        drawmethod?: DrawCallback;
        /**
         * number format
         */
        numberformat?: NumberFormat;
        /**
         * values supported: 'top', 'bottom', 'center'
         */
        verticalpos?: string;
        /**
         * values supported: 'left', 'right', 'center'
         */
        horizontalpos?: string;
        /**
         * additional options
         */
        options?: any;
        events?: Partial<Record<DomEvents, (eventType: string, sender?: AdaptiveLogVisualHeader, eventArgs?: Hits) => void>>;
    };
    /**
     * settings
     */
    export type Settings = {
        /**
         * gap value in pixels
         */
        gap?: number;
        /**
         * spatial order of textual elements:
         * first "Left-to-right" then "top-to-bottom":
         */
        order?: string[];
        /**
         * "least-to-most" important textual elements
         */
        priority?: (string | string[])[];
    };
    /**
     * header properties
     */
    export type OptionsOut<T extends LogAbstractVisual = LogAbstractVisual> = LogVisualHeader.OptionsOut<T> & {
        /**
         * gap
         */
        gap: number;
        /**
         * element priority list
         */
        priority: (string | string[])[];
        /**
         * element order list
         */
        order: string[];
        /**
         * header orientation
         */
        orientation: Orientation;
        [key: string]: any;
    };
    /**
     * model area or position
     */
    export type HitTestArea = Rect | Point | {
        /**
         * optional array of x coordinates
         */
        x?: number[];
        /**
         * optional array of y coordinates
         */
        y?: number[];
    };
    export type Hits = {
        element?: AdaptiveLogVisualHeader.ElementOptionsOut;
        text?: string;
        data?: Text.Hits[];
    };
    /**
     * Cut specified text, should return new text
     * @param text text to cut
     * @param nRemove amount of characters to remove
     */
    type CutCallback = (text: string, nRemove?: number) => string;
    type UpdateCallback = (header: AdaptiveLogVisualHeader, numberFormat?: NumberFormat, renderingContext?: RenderingContext, options?: any) => string;
    type DrawCallback = (header: AdaptiveLogVisualHeader, rect: Rect, context: RenderingContext, options?: any) => void;
    export type MeasureSizeCallback<T extends LogAbstractVisual = LogAbstractVisual> = (header: AdaptiveLogVisualHeader, visual: T, position: string) => number;
    export {};
}
