import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { Format } from '@int/geotoolkit/util/Format';
import { LogTrackContainer } from '@int/geotoolkit/welllog/widgets/visuals/LogTrackContainer';
import { LogCurve } from '@int/geotoolkit/welllog/LogCurve';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { DateTimeFormat } from '@int/geotoolkit/util/DateTimeFormat';
/**
 * This class is used internally in WellLogWidget to show selected depths.
 */
export declare class DepthMarkerShape extends ScaledShape {
    /**
     * @param [options] shape options
     * @param [trackContainer] track container to display depth markers
     */
    constructor(options?: DepthMarkerShape.Options, trackContainer?: LogTrackContainer);
    /**
     * copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: DepthMarkerShape): this;
    /**
     * Return text style
     * @returns text style
     */
    getTextStyle(): TextStyle;
    /**
     * Set text style
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type | null, merge?: boolean): this;
    /**
     * Return bounds
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Return marker depth
     */
    getDepth(): number;
    /**
     * Set depth value
     * @param depth depth value
     * @returns this
     */
    setDepth(depth: number): this;
    render(context: RenderingContext): void;
}
export declare namespace DepthMarkerShape {
    /**
     * shape options
     */
    type Options = Shape.Options & {
        /**
         * style applied on text
         */
        textstyle?: TextStyle.Type;
        /**
         * show depths
         */
        showdepth?: boolean;
        /**
         * show labels
         */
        showlabel?: boolean;
        /**
         * display symbol for interpolated values
         */
        showinterpolatedvalues?: boolean;
        /**
         * date time format in case if track container scale unit belongs to 'time'
         */
        datetimeformat?: DateTimeFormat.Options;
        /**
         * depth index format that accept number
         */
        depthformatter?: Format | DepthFormatHandler;
        /**
         * curve value format
         */
        valueformatter?: Format | ValueFormatHandler;
    };
    type DepthFormatHandler = (value: number) => string;
    type ValueFormatHandler = (obj: {
        curve: LogCurve;
        depth: number;
        value: number;
    }) => string;
}
