import { Element } from '@int/geotoolkit/report/dom/Element';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { Node } from '@int/geotoolkit/report/dom/Node';
import type { BorderStyle } from '@int/geotoolkit/report/elements/styles/BorderStyle';
/**
 * Enum of page break
 * @enum
 * @readonly
 */
export declare enum PageBreak {
    /**
     * Never page break
     */
    None = "none",
    /**
     * Page break after element
     */
    After = "after",
    /**
     * Page break before element
     */
    Before = "before"
}
/**
 * Element is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 * <br>
 */
export declare class AbstractElement extends Element {
    constructor(options: Node.Options);
    /**
     * Set element visible state
     * @param visible element visibility flag
     */
    setVisible(visible: boolean | null): this;
    /**
     * Get element visible state
     */
    getVisible(): boolean | null;
    /**
     * Set element transform
     * @param transformOrigin transform origin
     * @param [transformation] transformations array
     */
    setElementTransform(transformOrigin: null | string, transformation?: {
        name: string;
        parameters: string[] | null;
    }[]): void;
    /**
     * Return transform origin
     */
    getTransformOrigin(): null | string;
    /**
     * Return array of transformation instructions
     * @returns array of transformations
     */
    getElementTransform(): null | {
        name: string;
        parameters: string[] | null;
    }[];
    /**
     * Sets layout style
     * @param [layout] layout style
     * @param [merge] true if you want to merge layoutStyle with existing attribute, false by default
     * @param [silent] silent setting
     */
    setLayoutStyle(layout?: LayoutStyle | LayoutStyle.Options, merge?: boolean, silent?: boolean): this;
    /**
     * Return layout style
     * @returns layout style
     */
    getLayoutStyle(): LayoutStyle | null;
    /**
     * Sets margins style
     * @param [margins] margins style
     * @param [merge] true if you want to merge marginsStyle with existing attribute, false by default
     */
    setMarginsStyle(margins?: SpaceStyle | SpaceStyle.Options, merge?: boolean): this;
    /**
     * Return margins style
     * @returns margins style
     */
    getMarginsStyle(): SpaceStyle | null;
    /**
     * Sets padding style
     * @param [padding] padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(padding?: SpaceStyle | SpaceStyle.Options, merge?: boolean): this;
    /**
     * Return padding style
     * @returns padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Set background style
     * @param backgroundStyle background style
     * @param merge merge flag
     * @returns this
     */
    setBackgroundStyle(backgroundStyle: string | FillStyle | FillStyle.Options, merge?: boolean): this;
    /**
     * Return background style
     *
     * @returns background current background style
     */
    getBackgroundStyle(): FillStyle | null;
    /**
     * Sets border line style
     * Returns this
     *
     * @param borderStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setBorderLineStyle(borderStyle: BorderStyle | LineStyle.Type, merge?: boolean): this;
    /**
     * Return border line style
     */
    getBorderLineStyle(): LineStyle | null;
    /**
     * Return element layout orientation
     * @returns element layout orientation
     */
    getOrientation(): Orientation;
    /**
     * Set element layout orientation
     * @param orientation element layout orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Return element content flip flag
     * @returns element layout orientation
     */
    getFlip(): boolean;
    /**
     * Set element content flip orientation
     * @param flip element content flip
     */
    setFlip(flip: boolean): this;
    /**
     * Returns element page break
     * @returns page break
     */
    getPageBreak(): PageBreak | null;
    /**
     * Set element page break
     * @param pageBreak page break style
     * @returns this
     */
    setPageBreak(pageBreak: PageBreak | null): this;
    /**
     * Gets the element properties
     */
    getProperties(): AbstractElement.Options;
    /**
     * Sets the element properties
     * @param props props
     * @returns this
     */
    setProperties(props: AbstractElement.Options): this;
}
export declare namespace AbstractElement {
    /**
     * The options
     */
    type Options = Element.Options & {
        /**
         * background style
         */
        backgroundstyle?: FillStyle;
        /**
         * border linestyle
         */
        borderlinestyle?: LineStyle;
        /**
         * borders
         */
        borders?: LineStyle;
        /**
         * margin style
         */
        marginstyle?: SpaceStyle;
        /**
         * padding style
         */
        paddingstyle?: SpaceStyle;
        /**
         * layout style
         */
        layoutstyle?: LayoutStyle;
        /**
         * orientation
         */
        orientation?: Orientation;
        /**
         * flip
         */
        flip?: boolean;
        /**
         * pagebreak
         */
        pagebreak?: PageBreak;
    };
}
