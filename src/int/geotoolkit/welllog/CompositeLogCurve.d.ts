import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { LogCurve } from '@int/geotoolkit/welllog/LogCurve';
import { FillType, LogFill } from '@int/geotoolkit/welllog/LogFill';
import { LogReferenceLine } from '@int/geotoolkit/welllog/LogReferenceLine';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * Creates the custom representation of a well log curve with optional left and right fill. Data is passed in an LogAbstractData.
 * It uses {@link @int/geotoolkit/welllog/LogCurve~LogCurve} internally. Please refer to WellLog Widget Visuals Tutorial ( Composite curve fill section) for an example.
 */
export declare class CompositeLogCurve extends LogCurve {
    /**
     * Constructor
     * @param [properties] properties object
     */
    constructor(params?: CompositeLogCurve.Options);
    /**
     * Constructor
     * @param [data] data source to be displayed
     * @param [autoUpdate] automatic update from data
     */
    constructor(data?: LogAbstractData, autoUpdate?: boolean);
    clone(): CompositeLogCurve;
    protected copyConstructor(src: CompositeLogCurve, deepCopy?: boolean): this;
    /**
     * @param event broadcast event
     * @param source who is initializing this event
     * @param args additional parameter
     */
    notify(event: string, source: LogAbstractVisual, args: any): this;
    /**
     * Return curve bounds
     */
    getBounds(): Rect | null;
    /**
     * Return left fill
     */
    getLeftFill(): LogFill | null;
    /**
     * Return right fill
     */
    getRightFill(): LogFill | null;
    /**
     * returns the left fill type
     */
    getLeftFillType(): FillType;
    /**
     * returns the right fill type
     */
    getRightFillType(): FillType;
    /**
     * Sets reference point set to fill to the left
     * @param reference reference point set
     */
    setLeftReferencePointSet(reference: LogCurve | LogReferenceLine | null): this;
    /**
     * Sets reference point set
     */
    getLeftReferencePointSet(): LogCurve | LogReferenceLine | null;
    /**
     * Sets reference point set to fill to the right
     * @param reference reference point set
     */
    setRightReferencePointSet(reference: LogCurve | LogReferenceLine | null): this;
    /**
     * returns the reference point set
     */
    getRightReferencePointSet(): LogCurve | LogReferenceLine | null;
    /**
     * Sets fill type
     * @param type type of the fill
     */
    setLeftFillType(type: FillType | string): this;
    /**
     * Sets fill type
     * @param type type of the fill
     */
    setRightFillType(type: FillType | string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): CompositeLogCurve.OptionsOut;
    /**
     * Sets left fill
     * @param fill left fill
     */
    setLeftFill(fill: LogFill | null): this;
    /**
     * Sets right fill
     * @param fill right fill
     */
    setRightFill(fill: LogFill | null): this;
    /**
     * Helper method to set up value-fills visibility.
     *
     * @param enable value-fills visibility on or off
     * @returns this
     */
    setVisibleFill(enable: boolean): this;
    /**
     * Returns true if value-fills are visible
     */
    isVisibleFill(): boolean;
    /**
     * Returns display mode
     * @returns any combination of values: 'line', 'symbol', 'value', 'bar', 'fill' or an empty array
     */
    getDisplayMode(): string[];
    /**
     * Sets display mode
     * @param displayMode display mode; an array with a combination of values: 'line', 'symbol', 'both', 'value', 'bar', 'fill' or 'none'
     * @returns this
     */
    setDisplayMode(displayMode: string[]): this;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: CompositeLogCurve.Options): this;
}
export declare namespace CompositeLogCurve {
    /**
     * data source to be displayed or properties object
     */
    type Options = LogCurve.Options & {
        /**
         * left fill
         */
        leftfill?: LogFill;
        /**
         * right fill
         */
        rightfill?: LogFill;
        /**
         * type of the left fill
         */
        leftfilltype?: FillType;
        /**
         * type of the right fill
         */
        rightfilltype?: FillType;
        /**
         * left referencepointset point set
         */
        leftreferencepointset?: LogCurve | LogReferenceLine;
        /**
         * right referencepointset point set
         */
        rightreferencepointset?: LogCurve | LogReferenceLine;
    };
    type OptionsOut = LogCurve.OptionsOut & {
        /**
         * left fill
         */
        leftfill?: LogFill;
        /**
         * right fill
         */
        rightfill?: LogFill;
        /**
         * type of the left fill
         */
        leftfilltype?: FillType;
        /**
         * type of the right fill
         */
        rightfilltype?: FillType;
        /**
         * left referencepointset point set
         */
        leftreferencepointset?: LogCurve | LogReferenceLine;
        /**
         * right referencepointset point set
         */
        rightreferencepointset?: LogCurve | LogReferenceLine;
    };
}
