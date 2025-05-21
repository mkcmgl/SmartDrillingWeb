/**
 * @module geotoolkit/scene/exports/FreeLayout
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import type { LayoutedDimension } from '@int/geotoolkit/scene/exports/LayoutedDimension';
export declare class FreeLayout {
    constructor(width: number, height: number);
    constructor(rect: Rect | Dimension);
    /**
     * compute the dimension in the layout this dimension is represented by a fixed dimension and a scaled dimension
     */
    getLayoutedDimension(): LayoutedDimension;
    /**
     * set the parent
     * @param parent parent document for this layout
     * @returns this
     */
    setParent(parent: CompositeDocumentElement): this;
    /**
     * update the position of elements in the layout
     */
    updateLayout(): void;
    static getClassName(): string;
    getClassName(): string;
}
