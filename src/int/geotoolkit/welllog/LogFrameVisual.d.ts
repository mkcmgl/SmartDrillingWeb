import { Rect } from '@int/geotoolkit/util/Rect';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define frame visual with bounds
 */
export declare abstract class LogFrameVisual extends LogAbstractVisual {
    /**
     * @param [options] bounds of the visual or properties object
     */
    protected constructor(options?: LogFrameVisual.Options | Rect);
    protected copyConstructor(src: LogFrameVisual, deepCopy?: boolean): this;
    /**
     * Enables height of the frame to be fixed in
     * the device coordinates
     *
     * @param enable Enables height of the frame to be fixed in the device coordinates
     * @returns this
     */
    setFixedHeight(enable: boolean): this;
    /**
     * Returns true if height is fixed in the device coordinates
     */
    isFixedHeight(): boolean;
    /**
     * Checks culling
     * Returns true if object is inside of renderable area
     *
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Returns calculated bounds
     *
     * @param [context] Rendering Context
     */
    getBounds(context?: RenderingContext): Rect;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Sets rectangle geometry
     *
     * @param rect Sets rectangle geometry based on bounds of the visual
     * @returns this
     */
    setRect(rect: Rect): this;
    /**
     * Return rectangle geometry
     */
    getRect(): Rect;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogFrameVisual.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogFrameVisual.Options): this;
}
export declare namespace LogFrameVisual {
    /**
     * bounds of the visual or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * FillStyle
         */
        fillstyle?: FillStyle.Type;
        /**
         * Enables height of the frame to be fixed in the device coordinates
         */
        fixedheight?: boolean;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * FillStyle
         */
        fillstyle: FillStyle;
        /**
         * Enables height of the frame to be fixed in the device coordinates
         */
        fixedheight: boolean;
    };
}
