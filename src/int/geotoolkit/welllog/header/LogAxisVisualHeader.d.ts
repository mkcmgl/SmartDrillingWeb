import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { LogAxis } from '@int/geotoolkit/welllog/LogAxis';
import type { Format } from '@int/geotoolkit/util/Format';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * Enum of value type style to specify how to display a scale value
 * @enum
 * @readonly
 */
export declare enum TypeStyles {
    /**
     * Display text of scale
     */
    Text = "Text",
    /**
     * Display a button with scale
     */
    Button = "Button",
    /**
     * Display nothing
     */
    None = "None"
}
/**
 * Enum of HeaderType
 * @enum
 * @readonly
 */
export declare enum HeaderType {
    /**
     * Display scale, name and scale unit and device unit
     */
    Scale = "scale",
    /**
     * Display scale, name and scale unit
     */
    SimpleScale = "simplescale",
    /**
     * Display name and unit only
     */
    Simple = "simple",
    /**
     * Display name, unit and visible range
     */
    Range = "range",
    /**
     * Display name, unit and full model range
     */
    FullRange = "fullrange",
    /**
     * Custom
     */
    Custom = "custom"
}
/**
 * Define header for LogAxis. Any of the predefined {@link @int/geotoolkit/welllog/header/LogAxisVisualHeader~HeaderType} can be used for displaying axis labels. <br>
 * It is not possible to modify the existing header, but user can provide own callback function to return text, which can have only necessary
 * information to be displayed in the header.
 * User also has an option to define custom Header Types. please refer to the example below.
 */
export declare class LogAxisVisualHeader extends LogVisualHeader<LogAxis> {
    /**
     * @param [options] logaxis visual or properties object
     */
    constructor(options?: LogAxisVisualHeader.Options | LogAxis);
    clone(): LogAxisVisualHeader;
    protected copyConstructor(src: LogAxisVisualHeader, deepCopy?: boolean): this;
    /**
     * Set auto label rotation
     * @param bool enable automatic label rotation
     * @returns this
     */
    setAutoLabelRotation(bool: boolean): this;
    /**
     * Get auto label rotation
     */
    getAutoLabelRotation(): boolean;
    /**
     * Sets label rotation angle in radians
     * @param angle label rotation angle, in radians
     * @returns this
     * @example
     * // user can customize the label rotation angle
     * setLabelRotationAngle(-Math.PI / 2)
     */
    setLabelRotationAngle(angle: number): this;
    /**
     * Returns label rotation angle
     * @returns label rotation angle in radians
     */
    getLabelRotationAngle(): number;
    /**
     * Scale format to format depth scale. if scale format is not specified, default one is used.
     */
    getScaleFormat(): Format;
    /**
     * Scale format to format depth scale
     * @param format format
     * @returns this
     */
    setScaleFormat(format: Format): this;
    /**
     * Gets textStyle of the value displayed
     */
    getDisplayValueTextStyle(): TextStyle;
    /**
     * Sets a type of header. In addition to predefined header types Custom header type can be used.
     *
     * @param headerType type of header (Enum of header type)
     * @example
     * import {HeaderType} from '@int/geotoolkit/welllog/header/LogAxisVisualHeader';
     * import {LogAxis} from '@int/geotoolkit/welllog/LogAxis';
     * // This header is an option to display header for index track. To set it to simple index track header
     * // you need to call a method getHeaderContainer on your WellLogWidget and change a property of the prototype axis before inserting tracks in your widget.
     * // The code below shows it.
     * const headerProvider = widget.getHeaderContainer().getHeaderProvider();
     * const logAxisVisualHeader = headerProvider.getHeaderProvider(LogAxis.getClassName());
     * logAxisVisualHeader.setHeaderType(HeaderType.Simple);
     */
    setHeaderType(headerType: HeaderType): this;
    /**
     * Return a type of the header
     */
    getHeaderType(): HeaderType;
    /**
     * Sets a current text style for displayed value
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setDisplayValueTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Set displayed unit  for date time axis.
     * If null, units will be automatically calculated
     * ex. ['h','min','s','ms'] and 1 inch of 4830040 ms  will be displayed
     * 1: 1:20:30:40
     * in:h:min:s:ms
     * @param units unit for date time axis.
     * @returns this
     */
    setTimeIntervalUnits(units: string[]): this;
    /**
     * Get displayed unit for date time axis
     */
    getTimeIntervalUnits(): string[];
    render(context: RenderingContext): void;
    /**
     * Sets format header handler
     * @param handler handler is called to specify format of the header
     * @returns this
     */
    setFormatHeaderHandler(handler: LogAxisVisualHeader.FormatHeaderHandler): this;
    /**
     * Return value type style how to display scale if header type is Scale.
     */
    getValueTypeStyle(): TypeStyles;
    /**
     * Sets a value type style how to display scale value if header type is Scale.
     * @param style a style how to display a scale value if header type is scale
     * @returns this
     */
    setValueTypeStyle(style: TypeStyles): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns of the header
     */
    getProperties(): LogAxisVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogAxisVisualHeader.Options): this;
    /**
     * used to trigger a redraw when styles has been changed
     */
    protected getInvalidateMethod(): IStyleListener.AttributeCallback;
}
export declare namespace LogAxisVisualHeader {
    /**
     * logaxis visual or properties object
     */
    type Options = LogVisualHeader.Options<LogAxis> & {
        /**
         * text style of the display value
         */
        displayvaluetextstyle?: TextStyle | string | TextStyle.Options;
        /**
         * enum of header type
         */
        headertype?: HeaderType;
        /**
         * define automatic label rotation if track is narrow
         */
        autolabelrotation?: boolean;
        /**
         * define optional label rotation angle relative to header
         */
        labelrotationangle?: number;
        /**
         * scale label format. if scale format is not specified, default one is used.
         */
        scaleformat?: Format;
        /**
         * style a style how to display a scale value if header type is scale
         */
        valuetypestyle?: TypeStyles;
    };
    /**
     * Callback for setFormatHeaderHandler to specify a custom header formatter
     */
    type FormatHeaderHandler = (header?: LogAxisVisualHeader, visual?: LogAxis, context?: RenderingContext, info?: ScaleInfo) => null | string;
    type ScaleInfo = {
        /**
         * depth or time vertical scale
         */
        scale: number;
        /**
         * a scale unit or string symbol
         */
        scaleunit: AbstractUnit;
        /**
         * unit of the device
         */
        deviceunit: AbstractUnit;
        /**
         * scale text
         */
        scaletext: string;
        /**
         * abbreviation text
         */
        abbreviationtext: string;
    };
    /**
     * of the header
     */
    type OptionsOut = LogVisualHeader.OptionsOut<LogAxis> & {
        /**
         * text style to display value
         */
        displayvaluetextstyle: TextStyle;
        /**
         * a type of the header
         */
        headertype: HeaderType;
        /**
         * define automatic label rotation if track is narrow
         */
        autolabelrotation: boolean;
        /**
         * define optional label rotation angle relative to header
         */
        labelrotationangle: number;
        /**
         * optional scale format if it is not equal to default one.
         */
        scaleformat: Format;
        /**
         * style a style how to display a scale value if header type is scale
         */
        valuetypestyle: TypeStyles;
    };
}
