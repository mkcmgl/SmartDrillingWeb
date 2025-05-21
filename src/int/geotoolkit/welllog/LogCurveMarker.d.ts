import { LogCurve } from '@int/geotoolkit/welllog/LogCurve';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * LogCurveMarker object can render symbol in position of the last/latest depth and value of the curve provided.
 */
export declare class LogCurveMarker extends LogAbstractVisual {
    /**
     * @param [curve] a curve to draw markers or properties object
     */
    constructor(curve?: LogCurveMarker.Options | LogCurve);
    clone(): LogCurveMarker;
    protected copyConstructor(src: LogCurveMarker, deepCopy?: boolean): this;
    /**
     * Return fill style
     *
     * @returns fillStyle current fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns curve
     */
    getCurve(): LogCurve;
    /**
     * Sets curve
     *
     * @param curve curve
     * @returns this
     */
    setCurve(curve: LogCurve): this;
    /**
     * Returns symbol
     */
    getSymbol(): SymbolShape;
    /**
     * Sets symbol
     *
     * @param symbol used for points along the curve
     * @returns this
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns bound in the parent coordinates
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Retrieves the world transformation of the spatial.
     */
    getContentsTransform(): Transformation | null;
    /**
     * Returns false
     */
    isSelectable(): boolean;
    /**
     * set marker indexes
     * @param indexes array of numbers with marker indexes
     * @returns this
     */
    setIndexes(indexes: number[]): this;
    /**
     * Draw symbols
     *
     * @param gr RenderingContext
     * @param tr Transformation of symbols
     * @param deviceRect invalid area of the device
     */
    drawSymbols(gr: RenderingContext, tr: Transformation, deviceRect: Rect): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogCurveMarker.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogCurveMarker.Options): this;
}
export declare namespace LogCurveMarker {
    /**
     * a curve to draw markers or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * array of numbers with marker indexes
         */
        indexes?: number[];
        /**
         * symbol used for points along the curve
         */
        symbol?: SymbolShape;
        /**
         * symbol fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * curve
         */
        curve?: LogCurve;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * array of numbers with marker indexes
         */
        indexes?: number[];
        /**
         * symbol used for points along the curve
         */
        symbol?: SymbolShape;
        /**
         * symbol fill style
         */
        fillstyle?: FillStyle;
        /**
         * curve
         */
        curve?: LogCurve;
    };
}
