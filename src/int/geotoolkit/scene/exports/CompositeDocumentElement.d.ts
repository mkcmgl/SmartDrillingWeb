/**
 * @module geotoolkit/scene/exports/CompositeDocumentElement
 */
import { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import { IExportLayoutable } from '@int/geotoolkit/scene/exports/IExportLayoutable';
import { Layout } from '@int/geotoolkit/layout/Layout';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { AnnotatedLayout } from '@int/geotoolkit/scene/exports/AnnotatedLayout';
import type { LinearLayout } from '@int/geotoolkit/scene/exports/LinearLayout';
import type { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import type { FreeLayout } from '@int/geotoolkit/scene/exports/FreeLayout';
import type { LayoutedDimension } from '@int/geotoolkit/scene/exports/LayoutedDimension';
import type { AbstractNodeAdapter } from '@int/geotoolkit/scene/exports/AbstractNodeAdapter';
import type { NodeExport } from '@int/geotoolkit/scene/exports/NodeExport';
/**
 * CompositeDocumentElement class contains layouts as children for PDF rendering
 */
export declare class CompositeDocumentElement extends AbstractDocumentElement implements IExportLayoutable {
    /**
     * @param list of DocumentElement
     * @param [layout] layout of elements
     */
    constructor(list: CompositeDocumentElement.Item[], layout?: AnnotatedLayout | LinearLayout | Layout | FreeLayout);
    /**
     * Add DocumentElement as child
     *
     * @param child Document Element
     */
    addChild(child: CompositeDocumentElement.Item): CompositeDocumentElement.Item;
    /**
     * Set child at specific index
     *
     * @param index index where to set the child
     * @param child Document Element
     * @returns this
     */
    setChild(index: number, child: CompositeDocumentElement.Item): this;
    /**
     * Add child at specific index
     *
     * @param index index where to insert the child
     * @param child Document Element
     */
    insertChildAtIndex(index: number, child: CompositeDocumentElement.Item): void;
    /**
     * Clear all children
     */
    clearChild(): void;
    /**
     * Get child at index.
     *
     * @param index index where to get the child
     * @returns child DocumentElement at index.
     */
    getChild(index: number): CompositeDocumentElement.Item | null;
    /**
     * Get the number of children in the composite document element.
     *
     * @returns count
     */
    getChildrenCount(): number;
    /**
     * Get index of a specified element.
     *
     * @param element document element
     * @returns index
     */
    getIndex(element: CompositeDocumentElement.Item): number;
    /**
     * Gets the list of children.
     *
     * @returns list
     */
    getList(): CompositeDocumentElement.Item[];
    /**
     * Compute dimensions in the layout, this dimension is described by a fixed dimension and a scaled dimension.
     *
     * @returns layoutedDimension object contains fixed and scaled dimensions
     */
    getLayoutedDimension(): LayoutedDimension;
    /**
     * Render the document in the context.
     *
     * @param context rendering context
     * @param position position of the current document relative to the parent document
     */
    render(context: DocumentRenderingContext, position?: Point): void;
    /**
     * set the layout
     *
     * @param layout current layout
     * @returns this
     */
    setLayout(layout: AnnotatedLayout | LinearLayout | FreeLayout | Layout): this;
    /**
     * set the document scale depending on the parameters isScaledVertically and isScaledHorizontally
     *
     * @param sx scale factor if scaledVertically
     * @param sy scale factor if ScaledHorizontally
     * @returns this
     */
    setScale(sx: number, sy: number): this;
    /**
     * set the document translation
     *
     * @param x offset x coordinate
     * @param y offset y coordinate
     * @returns this
     */
    setTranslation(x: number, y: number): this;
    /**
     * Return preferred size to layout children
     * @param [rect] layout area of document
     */
    getPreferredSize(rect?: Rect): Rect | null;
    /**
     * Sets bounds of the document if it is a part of layout
     * @param bounds bound of the node
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * update the layout of the document
     * @param [rect] layout area of document
     */
    updateLayout(rect?: Rect): void;
    updatePageLayout(pageInfo: NodeExport.PageSettings): Rect;
}
export declare namespace CompositeDocumentElement {
    type Item = any | (IExportable & AbstractNodeAdapter);
}
