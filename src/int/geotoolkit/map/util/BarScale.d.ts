/**
 * @module geotoolkit/map/util/BarScale
 */
import { BarScaleLabelMode } from '@int/geotoolkit/map/util/BarScaleLabelMode';
import { MapScale } from '@int/geotoolkit/map/util/MapScale';
import { UnitSystem } from '@int/geotoolkit/map/util/UnitSystem';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Bar Scale object label position (where to show labels)
 * @enum
 * @readonly
 */
export declare enum TickPosition {
    /**
     * Top labels visible
     */
    Top = "Top",
    /**
     * Bottom labels visible
     */
    Bottom = "Bottom",
    /**
     * Show both top and bottom labels
     */
    Both = "Both"
}
/**
 * Defines a graphical or bar scale object.
 * Shape consists of one or two lines of bars and axis connected to it.
 */
export declare class BarScale extends MapScale {
    /**
     * @param [options] bar scale object options
     */
    constructor(options?: BarScale.Options);
    protected copyConstructor(src: BarScale, deepCopy?: boolean): this;
    /**
     * Sets fill style list for the bar scale rectangular sections
     * @param styles fill styles
     * @returns this
     */
    setFillStyleList(styles: (FillStyle.Options | string | FillStyle)[]): this;
    /**
     * Returns list of fill styles used for the bar scale rectangular sections
     */
    getFillStyleList(): FillStyle[];
    setFillStyle(style: string | FillStyle | FillStyle.Options, merge?: boolean): this;
    /**
     * Sets minor (inner) ticks height value
     * @param value minor ticks height
     * @returns this
     */
    setMinorTickHeight(value: number): this;
    /**
     * Returns minor ticks height
     */
    getMinorTickHeight(): number;
    /**
     * Sets major (far left and right) ticks height value
     * @param value major ticks height
     * @returns this
     */
    setMajorTickHeight(value: number): this;
    /**
     * Returns major ticks height
     */
    getMajorTickHeight(): number;
    /**
     * Sets unit system to use for the second bar line (null to use one bars line only)
     * @param system system for the second bar line
     * @returns this
     */
    setSecondSystem(system: UnitSystem | null): this;
    /**
     * Returns current system for the second bar line
     */
    getSecondSystem(): UnitSystem | null;
    /**
     * Sets bar scale axis label mode
     * @param mode bar scale axis label mode (what labels are shown)
     * @returns this
     */
    setLabelMode(mode: BarScaleLabelMode): this;
    /**
     * Returns current bar scale axis label mode
     */
    getLabelMode(): BarScaleLabelMode;
    /**
     * Sets bar scale tick visibility
     * @param value true to show the tick lines, false otherwise
     * @returns this
     */
    setTickVisible(value: boolean): this;
    /**
     * Returns current tick visibility
     */
    getTickVisible(): boolean;
    /**
     * Sets bar scale tick position (where to display ticks and their labels)
     * @param position label position
     * @returns this
     */
    setTickPosition(position: TickPosition): this;
    /**
     * Returns scale tick position
     */
    getTickPosition(): TickPosition;
    /**
     * Sets the bar scale object ticks amount
     * @param value the amount of rectangular bars with tick
     * @returns this
     */
    setTicksAmount(value: number): this;
    /**
     * Returns current ticks amount
     */
    getTicksAmount(): number;
    /**
     * Sets bar scale object properties
     * @param props bar scale properties
     * @returns this
     */
    setProperties(props?: BarScale.Options): this;
    /**
     * Returns properties
     * @returns bar scale properties
     */
    getProperties(): BarScale.OptionsOut;
}
export declare namespace BarScale {
    /**
     * bar scale object options
     */
    type Options = MapScale.Options & {
        /**
         * fill style list to fill the bar rectangles or objects with properties see {@link import("geotoolkit/attributes/FillStyle").FillStyle.setProperties}
         */
        fillstyles?: (FillStyle.Options | string | FillStyle)[];
        /**
         * height from 0 to 1 (where 1 means full shape height) for the inner bar scale ticks
         */
        minortickheight?: number;
        /**
         * height from 0 to 1 (where 1 means full shape height) for the far left and right bar scale ticks
         */
        majortickheight?: number;
        /**
         * the amount of bar rectangular tick bars
         */
        ticksamount?: number;
        /**
         * true to show the tick lines, false otherwise
         */
        tickvisible?: boolean;
        /**
         * position for the ticks (and their labels) relative to the main bar scale shape
         */
        tickposition?: TickPosition;
        /**
         * bar scale axis label mode (what labels are shown)
         */
        labelmode?: BarScaleLabelMode;
        /**
         * unit system to use for the second line (null to use one bars line only)
         */
        secondsystem?: UnitSystem | null;
    };
    /**
     * bar scale properties
     */
    type OptionsOut = MapScale.OptionsOut & {
        /**
         * fill style list to fill the bar rectangles
         */
        fillstyles?: FillStyle[];
        /**
         * height from 0 to 1 (where 1 means full shape height) for the inner bar scale ticks
         */
        minortickheight?: number;
        /**
         * height from 0 to 1 (where 1 means full shape height) for the far left and right bar scale ticks
         */
        majortickheight?: number;
        /**
         * the amount of rectangular bars with ticks
         */
        ticksamount?: number;
        /**
         * true to show the tick lines, false otherwise
         */
        tickvisible?: boolean;
        /**
         * position for the ticks (and their labels) relative to the main bar scale shape
         */
        tickposition?: TickPosition;
        /**
         * unit system to use for the second line (null to use one bars line only)
         */
        secondsystem?: UnitSystem;
        /**
         * bar scale axis label mode (what labels are shown)
         */
        labelmode?: BarScaleLabelMode;
    };
}
