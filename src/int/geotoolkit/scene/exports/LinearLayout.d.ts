/**
 * @module geotoolkit/scene/exports/LinearLayout
 */
import { LinearLocation } from '@int/geotoolkit/scene/exports/LinearLocation';
import type { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import type { LayoutedDimension } from '@int/geotoolkit/scene/exports/LayoutedDimension';
import type { NodeExport } from '@int/geotoolkit/scene/exports/NodeExport';
export declare class LinearLayout {
    constructor(parent: CompositeDocumentElement, orientation: LinearLocation);
    /**
     * set the parent
     *
     * @param parent parent
     * @returns this
     */
    setParent(parent: CompositeDocumentElement): this;
    /**
     * set the layout orientation
     *
     * @param orientation layout orientation
     * @returns this
     */
    setOrientation(orientation: LinearLocation): this;
    /**
     * compute the dimension in the layout this dimension is represented by a fixed dimension and a scaled dimension
     */
    getLayoutedDimension(): LayoutedDimension;
    /**
     * update the position of elements in the layout
     * @param printSettings printSettings
     */
    updateLayout(printSettings?: NodeExport.PageSettings): void;
    updatePageLayout(pageInfo: NodeExport.PageSettings): void;
    static getClassName(): string;
    getClassName(): string;
}
