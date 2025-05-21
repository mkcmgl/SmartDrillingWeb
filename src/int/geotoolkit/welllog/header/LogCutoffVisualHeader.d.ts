import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { HorizontalAlignment } from '@int/geotoolkit/util/HorizontalAlignment';
import { VerticalAlignment } from '@int/geotoolkit/util/VerticalAlignment';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Range } from '@int/geotoolkit/util/Range';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogCutoffVisual } from '@int/geotoolkit/welllog/LogCutoffVisual';
/**
 * Define visual to render log cutoff visual header
 */
export declare class LogCutoffVisualHeader extends LogVisualHeader<LogCutoffVisual> {
    /**
     * @param [options] visual for discrete curve header or properties object
     */
    constructor(options?: LogCutoffVisualHeader.Options | LogCutoffVisual);
    clone(): LogCutoffVisualHeader;
    protected copyConstructor(src: LogCutoffVisualHeader, deepCopy?: boolean): this;
    /**
     * Set the visibility of curve name
     * @param visible The visibility of the curve name
     */
    setTitleVisible(visible: boolean): this;
    /**
     * Gets visibility of curve name
     */
    getTitleVisible(): boolean;
    /**
     * Return title horizontal alignment
     */
    getTitleAlignment(): HorizontalAlignment;
    /**
     * Set title horizontal alignment
     * @param horizontalAlignment title horizontal alignment
     */
    setTitleAlignment(horizontalAlignment: HorizontalAlignment): this;
    /**
     * Return title preferred height
     */
    getTitlePreferredSize(): Range | null;
    /**
     * Set title preferred height
     * @param min minimum height
     * @param max maximum height
     * @returns this
     */
    setTitlePreferredSize(min: LogCutoffVisualHeader.MinMax | Range | number, max?: number): this;
    /**
     * Sets title padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     * @returns this
     */
    setTitlePaddingStyle(paddingStyle: SpaceStyle.Options | SpaceStyle | null, merge?: boolean): this;
    /**
     * Returns title padding style
     * @returns padding
     */
    getTitlePaddingStyle(): SpaceStyle | null;
    /**
     * Sets a sub-title text style
     *
     * @param textStyle a new sub-title text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setSubTitleTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Return a sub-title text style
     *
     * @returns text style
     */
    getSubTitleTextStyle(): TextStyle | null;
    /**
     * Returns sub-title vertical alignment
     */
    getSubTitleAlignment(): VerticalAlignment;
    /**
     * Set sub-title vertical alignment
     * @param verticalAlignment sub-title vertical alignment
     * @returns this
     */
    setSubTitleAlignment(verticalAlignment: VerticalAlignment): this;
    /**
     * Sets sub-title padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     * @returns this
     */
    setSubTitlePaddingStyle(paddingStyle: SpaceStyle.Options | SpaceStyle | null, merge?: boolean): this;
    /**
     * Returns sub-title padding style
     * @returns padding
     */
    getSubTitlePaddingStyle(): SpaceStyle | null;
    /**
     * Gets visibility of fill icon
     */
    getSubTitleIconVisible(): boolean;
    /**
     * Set the visibility of fill icon
     * @param visible The visibility of the curve name
     */
    setSubTitleIconVisible(visible: boolean): this;
    /**
     * Return sub-title icon preferred size
     */
    getSubTitleIconSize(): number;
    /**
     * Set sub-title icon preferred size
     * @param iconSize sub-title icon size
     * @returns this
     */
    setSubTitleIconSize(iconSize: number): this;
    /**
     * Return sub-title icon icon border radius in device coordinates
     */
    getSubTitleIconRadius(): number;
    /**
     * Set sub-title icon preferred radius
     * @param iconRadius sub-title icon border radius in device coordinates
     * @returns this
     */
    setSubTitleIconRadius(iconRadius: number): this;
    /**
     * Returns sub-title-icon vertical alignment
     */
    getSubTitleIconAlignment(): VerticalAlignment;
    /**
     * Set sub-title-icon vertical alignment
     * @param verticalAlignment sub-title vertical alignment
     * @returns this
     */
    setSubTitleIconAlignment(verticalAlignment: VerticalAlignment): this;
    /**
     * Return sub-title preferred height
     */
    getSubTitlePreferredSize(): Range | null;
    /**
     * Set sub-title preferred height
     * @param min minimum height
     * @param max maximum height
     * @returns this
     */
    setSubTitlePreferredSize(min: LogCutoffVisualHeader.MinMax | Range | number, max?: null | number): this;
    /**
     * Sets sub-title icon margins style
     * @param marginsStyle margins style
     * @param [merge] true if you want to merge marginsStyle with existing attribute, false by default
     * @returns this
     */
    setSubTitleIconMarginsStyle(marginsStyle: SpaceStyle.Options | SpaceStyle | null, merge?: boolean): this;
    /**
     * Returns sub-title icon margins style
     * @returns margins
     */
    getSubTitleIconMarginsStyle(): SpaceStyle | null;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns horizontal flip
     */
    isHorizontalFlip(): boolean;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns The object properties
     */
    getProperties(): LogCutoffVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogCutoffVisualHeader.Options): this;
}
export declare namespace LogCutoffVisualHeader {
    /**
     * visual for discrete curve header or properties object
     */
    type Options = LogVisualHeader.Options<LogCutoffVisual> & {
        title?: {
            /**
             * title visibility flag
             */
            visible?: boolean;
            /**
             * title horizontal alignment
             */
            alignment?: HorizontalAlignment;
            /**
             * title preferred size
             */
            size?: {
                /**
                 * title minimum height
                 */
                min?: number;
                /**
                 * title maximum height
                 */
                max?: number;
            };
            /**
             * title padding style
             */
            padding?: SpaceStyle | SpaceStyle.Options;
        };
        subtitle?: {
            /**
             * the sub-title text style
             */
            textstyle?: TextStyle | string | TextStyle.Options;
            /**
             * sub-title vertical alignment
             */
            alignment?: VerticalAlignment;
            /**
             * sub-title preferred size
             */
            size?: {
                /**
                 * sub-title minimum height
                 */
                min?: number;
                /**
                 * sub-title maximum height
                 */
                max?: number;
            };
            /**
             * sub-title padding style
             */
            padding?: SpaceStyle | SpaceStyle.Options;
            /**
             * sub-title icon properties
             */
            icon?: {
                /**
                 * sub-title icon visibility flag
                 */
                visible?: boolean;
                /**
                 * sub-title icon vertical alignment
                 */
                alignment?: VerticalAlignment;
                /**
                 * sub-title icon preferred size
                 */
                size?: number;
                /**
                 * sub-title 'radius'
                 * This defines if the icon has rounded border corners. 'radius' is the length denoting a radius for the rounded border of each icon corner.
                 */
                radius?: number;
                /**
                 * sub-title icon margins style
                 */
                margins?: SpaceStyle | SpaceStyle.Options;
            };
        };
    };
    /**
     * minimum height
     */
    type MinMax = {
        /**
         * minimum height
         */
        min?: number;
        /**
         * maximum height
         */
        max?: number;
    };
    /**
     * The object properties
     */
    type OptionsOut = LogVisualHeader.OptionsOut<LogCutoffVisual> & {
        /**
         * title properties
         */
        title: {
            /**
             * title visibility flag
             */
            visible: boolean;
            /**
             * title horizontal alignment
             */
            alignment: HorizontalAlignment;
            /**
             * title preferred size
             */
            size: {
                /**
                 * title minimum height
                 */
                min: number;
                /**
                 * title maximum height
                 */
                max: number;
            };
            /**
             * title padding style
             */
            padding: SpaceStyle;
        };
        /**
         * sub-title properties
         */
        subtitle: {
            /**
             * the sub-title text style
             */
            textstyle?: TextStyle;
            /**
             * sub-title vertical alignment
             */
            alignment: VerticalAlignment;
            /**
             * sub-title preferred size
             */
            size: {
                /**
                 * sub-title minimum height
                 */
                min: number;
                /**
                 * sub-title maximum height
                 */
                max: number;
            };
            /**
             * sub-title padding style
             */
            padding: SpaceStyle;
            /**
             * sub-title icon properties
             */
            icon: {
                /**
                 * sub-title icon visibility flag
                 */
                visible: boolean;
                /**
                 * sub-title icon vertical alignment
                 */
                alignment: VerticalAlignment;
                /**
                 * sub-title icon preferred size
                 */
                size: number;
                /**
                 * sub-title 'radius'
                 * This defines if the icon has rounded border corners. 'radius' is the length denoting a radius for the rounded border of each icon corner.
                 */
                radius: number;
                /**
                 * sub-title icon margins style
                 */
                margins: SpaceStyle;
            };
        };
    };
}
