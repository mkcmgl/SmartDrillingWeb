import type { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import type { LayoutedDimension } from '@int/geotoolkit/scene/exports/LayoutedDimension';
/**
 * Layout class that represents an AnnotatedLayout
 */
export declare class AnnotatedLayout {
    /**
     * @param parent parent document element of this layout
     */
    constructor(parent: CompositeDocumentElement);
    /**
     * Set the parent of this annotated layout.
     *
     * @param parent parent document element of this layout
     * @returns this
     */
    setParent(parent: CompositeDocumentElement): this;
    /**
     * Compute the dimension in the layout this dimension is represented by a fixed dimension and a scaled dimension.
     *
     * @returns that contains two objects
     */
    getLayoutedDimension(): LayoutedDimension | null;
    /**
     * update the position of elements in the layout
     */
    updateLayout(): void;
    static getClassName(): string;
    getClassName(): string;
}
