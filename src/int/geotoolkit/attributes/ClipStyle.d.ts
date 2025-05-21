/**
 * @module geotoolkit/attributes/ClipStyle
 */
import { Style } from '@int/geotoolkit/attributes/Style';
import { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
/**
 * Defines style to be used as model clipping style.
 */
export declare class ClipStyle extends Style {
    /**
     * Create ClipStyle
     * @param [geometry] clipping geometry or options object
     * @param [evenodd] true if evenodd mode is on ('nonzero' mode otherwise)
     */
    constructor(geometry?: ClipStyle.Options | GraphicsPath, evenodd?: boolean);
    clone(): ClipStyle;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ClipStyle): this;
    /**
     * Sets clipping geometry
     *
     * @param geometry region or area
     */
    setGeometry(geometry: GraphicsPath): this;
    /**
     * Gets clipping geometry
     */
    getGeometry(): GraphicsPath;
    /**
     * Sets evenodd clipping mode
     *
     * @param bool true if evenodd mode is on
     * @returns this
     */
    setEvenOdd(bool: boolean): this;
    /**
     * Returns true if evenodd clipping mode is on
     */
    getEvenOdd(): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): ClipStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: ClipStyle.Options): this;
    /**
     * Create or get clipping style from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/attributes/ClipStyle~ClipStyle}
     * @returns clipping style
     */
    static fromObject(object?: ClipStyle.Options | ClipStyle | GraphicsPath): ClipStyle | null;
}
export declare namespace ClipStyle {
    /**
     * clipping geometry or options object
     */
    type Options = {
        /**
         * clipping geometry
         */
        geometry?: GraphicsPath;
        /**
         * true if evenodd mode is on ('nonzero' mode otherwise)
         */
        evenodd?: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * clipping geometry
         */
        geometry?: GraphicsPath;
        /**
         * true if evenodd mode is on ('nonzero' mode otherwise)
         */
        evenodd: boolean;
    };
}
