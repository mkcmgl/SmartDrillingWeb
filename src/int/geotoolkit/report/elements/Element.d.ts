import { IElement } from '@int/geotoolkit/report/elements/IElement';
import { IWireElement } from '@int/geotoolkit/report/elements/IWireElement';
import { Group } from '@int/geotoolkit/scene/Group';
import { Node } from '@int/geotoolkit/scene/Node';
import { ElementContent } from '@int/geotoolkit/report/elements/ElementContent';
import { AbstractElement } from '@int/geotoolkit/report/dom/elements/AbstractElement';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Image } from '@int/geotoolkit/scene/shapes/Image';
import { ElementStyle } from '@int/geotoolkit/report/elements/styles/ElementStyle';
import type { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { Element as DomElement } from '@int/geotoolkit/report/dom/Element';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { NodeEventArgs } from '@int/geotoolkit/report/dom/NodeEventArgs';
/**
 * Define representation of DOM element
 */
export declare class Element extends Group implements IElement, IWireElement {
    /**
     * @param [options] contentElement or properties object
     */
    constructor(options?: Element.Options | ElementContent);
    clone(): Element;
    protected copyConstructor(src: Element, deepCopy?: boolean): this;
    getRoot(): CompositeNode;
    /**
     * Rebuild DOM layout
     * @param element element
     */
    static rebuildDomLayout(element: IElement & Node): IElement & Node;
    getParent(): ElementContent;
    /**
     * Rebuild element DOM layout
     */
    rebuildDomLayout(): this;
    getDomElement(): AbstractElement;
    setDomElement(domElement: DomElement): this;
    /**
     * Update element from domElement
     * @param eventType event type
     * @param source event source
     * @param eventArgs argument args
     */
    protected onDomElementChanged(eventType: string, sender: DomElement, eventArgs: NodeEventArgs): this;
    /**
     * Return array of transformations
     * @param [bounds] element bounds
     * @returns array of transformations
     */
    getElementTransformations(bounds?: Rect): Transformation[] | null;
    /**
     * Export element to image (without rotation)
     * @param [showWireBorder] show wire border
     * @returns image
     */
    exportToImage(showWireBorder?: boolean): Image;
    getElementStyle(): ElementStyle | null;
    getElementStyle(elementStyle: string): string | number | ElementStyle | any | null;
    /**
     * Set element style
     * @param elementStyle element style
     * @param [styleValue] object of value for element style
     * @returns this
     */
    setElementStyle(elementStyle: string | ElementStyle | Record<string, any> | null, styleValue?: any): this;
    /**
     * Return inner content element
     */
    getContentElement(): ElementContent;
    /**
     * Calculate layout bounds
     * @param limits container limits
     * @param cssLayout element layout
     * @returns preferred bounds
     */
    protected getPreferredElementBounds(limits: Rect, cssLayout: LayoutStyle): Rect;
    /**
     * Rebuild layout
     */
    dropCache(): this;
    getWireMode(): boolean;
    setWireMode(enabled: boolean): this;
}
export declare namespace Element {
    /**
     * contentElement or properties object
     */
    type Options = Group.Options & {
        /**
         * contentElement
         */
        contentelement?: ElementContent;
    };
}
