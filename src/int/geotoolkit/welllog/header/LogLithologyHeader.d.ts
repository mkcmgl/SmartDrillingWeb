import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import type { LogLithology } from '@int/geotoolkit/welllog/LogLithology';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Enum of lithography header display types
 * @readonly
 * @enum
 */
export declare enum HeaderType {
    /**
     * Default (TextInside) display type
     */
    Default = "default",
    /**
     * Text will appear centered and inside the key rectangles.
     */
    FullWidth = "fullwidth",
    /**
     * Text will appear legend-style outside the key rectangles, with the boxes to the left
     */
    BoxesLeft = "boxesleft",
    /**
     * Text will appear legend-style outside the key rectangles, with the boxes to the right
     */
    BoxesRight = "boxesright",
    /**
     * Text will appear vertically legend-style outside the key rectangles, with the boxes to the top
     */
    VerticalBoxesRight = "verticalboxesright"
}
/**
 * Define visual to render curve header
 */
export declare class LogLithologyHeader extends LogVisualHeader<LogLithology> {
    /**
     * @param [options] visual for the header or properties object
     */
    constructor(options?: LogLithologyHeader.Options | LogLithology);
    clone(): LogLithologyHeader;
    protected copyConstructor(src: LogLithologyHeader, deepCopy?: boolean): this;
    /**
     * Sets Header Type
     *
     * @param type Enum of lithography header display types
     * @returns this
     */
    setHeaderType(type: HeaderType): this;
    /**
     * Gets the current header type
     */
    getHeaderType(): HeaderType;
    /**
     * Sets a current text style for displayed value
     * @deprecated since 4.0. Use setTextStyle() instead
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setDisplayValueTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     * @deprecated since 4.0. Use getTextStyle() instead
     */
    getDisplayValueTextStyle(): TextStyle;
    /**
     * Set flexbox layout options
     * @param flexBox Flexbox layout options
     * @returns this
     */
    setFlexBoxOptions(flexBox: LogLithologyHeader.FlexBoxOptions): this;
    /**
     * Get flexbox layout options
     * @returns flexbox layout options
     */
    getFlexBoxOptions(): LogLithologyHeader.FlexBoxOptionsOut;
    /**
     * Hit test in device coordinates
     * @param area the device area or position
     * @param radius the selection radius
     */
    hitTest(area: LogLithologyHeader.HitTestArea, radius?: number): LogLithologyHeader.Hits[] | null;
    render(inputContext: RenderingContext): void;
    /**
     * Get header desired height
     * @returns header desired height
     */
    getDesiredHeight(): number;
    /**
     * Set manual header desired height, only works if auto desired height set as false
     * @param desiredHeight Desired height
     * @returns this
     */
    setDesiredHeight(desiredHeight: number): this;
    /**
     * Update state.
     * @returns this
     */
    updateState(): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogLithologyHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogLithologyHeader.Options): this;
    /**
     * Enable the header auto height calculation
     * @param enabled Whether to enable the header auto height calculation
     * @returns this
     */
    setAutoDesiredHeight(enabled: boolean): this;
    /**
     * Get whether the header auto height calculation is enabled
     * @returns Whether the header auto height calculation is enabled
     */
    isAutoDesiredHeight(): boolean;
}
export declare namespace LogLithologyHeader {
    /**
     * visual for the header or properties object
     */
    type Options = LogVisualHeader.Options<LogLithology> & {
        /**
         * display value textstyle
         * @deprecated since 4.0. Use textstyle property instead.
         */
        displayvaluetextstyle?: TextStyle | string | TextStyle.Options;
        /**
         * symbol to set
         */
        symbol?: SymbolShape;
        /**
         * Enum of header type
         */
        headertype?: HeaderType;
        /**
         * flexbox layout options
         */
        flexbox?: FlexBoxOptions;
        /**
         * Auto calculate desired height for header
         */
        autodesiredheight?: boolean;
    };
    /**
     * Flexbox layout options
     */
    type FlexBoxOptions = {
        /**
         * Enable/disable flexbox layout options
         */
        enabled?: boolean;
        /**
         * Flexbox item margins
         */
        margin?: SpaceStyle | SpaceStyle.Options;
        /**
         * Flexbox lithology options
         */
        lithology?: {
            /**
             * Flexbox lithology width
             */
            width?: number;
            /**
             * Flexbox lithology height
             */
            height?: number;
        };
        /**
         * Flexbox item title options
         */
        title?: {
            /**
             * Flexbox item title location
             */
            alignment?: AnchorType | string;
            /**
             * Flexbox item title maximum width
             */
            maxwidth?: number;
            /**
             * Flexbox item title spaces from lithology box
             */
            margin?: number;
        };
    };
    /**
     * flexbox layout options
     */
    type FlexBoxOptionsOut = {
        /**
         * Enable/disable flexbox layout options
         */
        enabled: boolean;
        /**
         * Flexbox item margins
         */
        margin: SpaceStyle;
        /**
         * Flexbox lithology options
         */
        lithology: {
            /**
             * Flexbox lithology width
             */
            width: number;
            /**
             * Flexbox lithology height
             */
            height: number;
        };
        /**
         * Flexbox item title options
         */
        title: {
            /**
             * Flexbox item title location
             */
            alignment?: AnchorType | string;
            /**
             * Flexbox item title maximum width
             */
            maxwidth: number;
            /**
             * Flexbox item title spaces from lithology box
             */
            margin: number;
        };
    };
    /**
     * properties object
     */
    type OptionsOut = LogVisualHeader.OptionsOut<LogLithology> & {
        /**
         * display value textstyle
         * @deprecated since 4.0. Use textstyle property instead.
         */
        displayvaluetextstyle: TextStyle;
        /**
         * symbol to set
         */
        symbol: SymbolShape;
        /**
         * Enum of header type
         */
        headertype: HeaderType;
        /**
         * flexbox layout options
         */
        flexbox: FlexBoxOptionsOut;
        /**
         * Auto calculate desired height for header
         */
        autodesiredheight: boolean;
    };
    /**
     * model area or position
     */
    type HitTestArea = Rect | Point | {
        /**
         * optional array of x coordinates
         */
        x?: number[];
        /**
         * optional array of y coordinates
         */
        y?: number[];
    };
    type Header = {
        bounds?: Rect;
        lineStyle?: LineStyle;
        fillStyle: FillStyle;
        textStyle: TextStyle;
        text: string;
    };
    type Hits = {
        index: number;
        header: LogLithologyHeader.Header;
    };
}
