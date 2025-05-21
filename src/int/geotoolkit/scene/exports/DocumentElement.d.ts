/**
 * @module geotoolkit/scene/exports/DocumentElement
 */
import { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import type { LayoutedDimension } from '@int/geotoolkit/scene/exports/LayoutedDimension';
/**
 * Document Element class that is used to layout the pdf document
 */
export declare class DocumentElement extends AbstractDocumentElement {
    /**
     * @param node node
     * @param isScaledVertically flag to scale vertically
     * @param isScaledHorizontally flag to scale horizontally
     */
    constructor(node: Group, isScaledVertically: boolean, isScaledHorizontally: boolean);
    getLayoutedDimension(): LayoutedDimension;
    /**
     * get the Element node
     *
     * @returns node
     */
    getNode(): Group;
    /**
     * get if the document element is scaled vertically
     *
     * @returns isScaledVertically
     */
    isScaledVertically(): boolean;
    /**
     * get if the document element is scaled horizontally
     *
     * @returns isScaledHorizontally
     */
    isScaledHorizontally(): boolean;
    render(context: DocumentRenderingContext, position: Point): void;
    setTranslation(x: number, y: number): this;
    setScale(sx: number, sy: number): this;
    updateLayout(): void;
}
