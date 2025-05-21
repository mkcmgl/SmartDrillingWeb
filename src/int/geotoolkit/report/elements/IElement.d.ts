/**
 * @module geotoolkit/report/elements/IElement
 */
import type { Element as DomElement } from '@int/geotoolkit/report/dom/Element';
import type { ElementStyle } from '@int/geotoolkit/report/elements/styles/ElementStyle';
/**
 * Define an object that represents the report element
 * @interface
 */
export declare abstract class IElement {
    /**
     * Returns DOM element
     * @returns return DOM element
     */
    abstract getDomElement(): DomElement;
    /**
     * Set DOM element
     * @param element DOM element
     * @returns this
     */
    abstract setDomElement(element: DomElement): this;
    /**
     * Returns element style
     * @param [elementStyle] element style
     * @returns return element style
     */
    abstract getElementStyle(elementStyle?: string): string | number | ElementStyle | Record<string, any> | null;
    /**
     * Set element style
     * @param elementStyle
     * @param [styleValue]
     * @returns this
     */
    abstract setElementStyle(elementStyle: string | ElementStyle | Record<string, any> | null, styleValue?: any): this;
    /**
     * Rebuild DOM Layout
     * @returns this
     */
    abstract rebuildDomLayout(): this;
}
