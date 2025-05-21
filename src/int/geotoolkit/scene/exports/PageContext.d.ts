/**
 * @module geotoolkit/scene/exports/PageContext
 */
import { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { DocumentElement } from '@int/geotoolkit/scene/exports/DocumentElement';
import type { AbstractPaperFormat } from '@int/geotoolkit/scene/exports/AbstractPaperFormat';
import type { Point } from '@int/geotoolkit/util/Point';
import type { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { ScalingOptions } from '@int/geotoolkit/scene/exports/ScalingOptions';
import type { Document } from '@int/geotoolkit/scene/exports/Document';
/**
 * Define context to be pass to check if page header or footer should be drawn
 */
export declare class PageContext {
    /**
     * @param root Root document
     * @param pageInfo page info
     * @param pageTransformation page transformation
     * @param position position of the current page relative to the parent document
     */
    constructor(root: CompositeDocumentElement | DocumentElement, pageInfo: PageContext.PageInfo, pageTransformation: Transformation, position: Point);
    /**
     * Returns page info
     * @returns page info
     */
    getPageInfo(): PageContext.PageInfo;
    /**
     * Return page element
     * @param element exported element
     * @returns page element
     */
    getPageElement(element: Node): AbstractDocumentElement | null;
    /**
     * Return page element bounds
     * @param element exported element
     * @returns bounds
     */
    getElementBounds(element: Node): Rect | null;
    /**
     * Checks if the provided exported element in this page
     * @param element exported element
     */
    containsElement(element: Node): boolean;
    /**
     * Return model page area
     */
    getPageModelRect(): Rect;
    /**
     * Get root document
     * @returns root
     */
    getRoot(): CompositeDocumentElement | DocumentElement;
    /**
     * Returns page transformation
     * @returns page transformation
     */
    getPageTransformation(): Transformation;
    /**
     * Returns position transformation
     * @returns position transformation
     */
    getPositionTransform(): Transformation;
    /**
     * Return position of the current page relative to the parent document
     */
    getPosition(): Point;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace PageContext {
    /**
     * page info
     */
    type PageInfo = {
        /**
         * JSON Object
         */
        margin?: Margin;
        /**
         * page
         */
        page?: AbstractPaperFormat;
        /**
         * current page
         */
        currentpage?: number;
        /**
         * amount of pages
         */
        numberpage?: number;
        isfirstpage?: boolean;
        islastpage?: boolean;
        date?: Date;
        options?: Document.OptionsType;
        pagecount?: {
            x: number;
            y: number;
        };
        scaling?: ScalingOptions;
        pageindex?: {
            x: number;
            y: number;
        };
        title?: string;
        truescale?: Transformation;
    };
    type Margin = {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
}
