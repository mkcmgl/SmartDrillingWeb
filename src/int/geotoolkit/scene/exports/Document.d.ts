/**
 * @module geotoolkit/scene/exports/Document
 */
import { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import type { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import type { DocumentElement } from '@int/geotoolkit/scene/exports/DocumentElement';
import type { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { ScalingOptions } from '@int/geotoolkit/scene/exports/ScalingOptions';
/**
 * Document class represents a pdf document
 * this class can contains a :
 * - root element {@link @int/geotoolkit/scene/exports/CompositeDocumentElement~CompositeDocumentElement} || {@link @int/geotoolkit/scene/exports/DocumentElement~DocumentElement}
 * - header : pdf header component {@link @int/geotoolkit/scene/exports/PageElement~PageElement}
 * - footer : pdf footer component {@link @int/geotoolkit/scene/exports/PageElement~PageElement}
 */
export declare class Document {
    constructor(root: CompositeDocumentElement | DocumentElement | Document.Options, pageHeader?: PageElement, pageFooter?: PageElement, trueScale?: boolean, options?: Document.OptionsType);
    /**
     * Returns options
     * @returns options
     */
    getOptions(): Document.OptionsType;
    /**
     * Set Root document
     *
     * @param root Root document
     * @returns this
     */
    setRoot(root: CompositeDocumentElement | DocumentElement): this;
    /**
     * Get root document
     * @returns root
     */
    getRoot(): CompositeDocumentElement | DocumentElement;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): void;
    /**
     * Used to prepare object before exporting
     */
    beginExport(): void;
    /**
     * Set PDF Page Header component.
     *
     * @param pageHeader Page Header
     * @returns this
     */
    setPageHeader(pageHeader: PageElement): this;
    /**
     * Get PDF Page Header component
     *
     * @returns Page Header
     */
    getPageHeader(): PageElement;
    /**
     * Set PDF Page Footer Component
     *
     * @param pageFooter Page Footer
     * @returns this
     */
    setPageFooter(pageFooter: PageElement): this;
    /**
     * Get PDF Page Footer Component
     *
     * @returns Page Footer
     */
    getPageFooter(): PageElement;
    /**
     * Get function to check PDF Page Footer visibility
     *
     * @returns Page Config
     */
    isFooterVisible(): () => boolean;
    /**
     * Get function to check PDF Page Header visibility
     *
     * @returns Header Config
     */
    isHeaderVisible(): () => boolean;
    /**
     * Set PDF Document Header component.
     *
     * @param docHeader Document Header
     * @returns this
     */
    setDocumentHeader(docHeader: PageElement): this;
    /**
     * Get PDF Document Header component
     *
     * @returns Document Header
     */
    getDocumentHeader(): PageElement;
    /**
     * Set PDF Document Footer Component
     *
     * @param docFooter Document Footer
     * @returns this
     */
    setDocumentFooter(docFooter: PageElement): this;
    /**
     * Get PDF Document Footer Component
     *
     * @returns Document Footer
     */
    getDocumentFooter(): PageElement;
    /**
     * Get true if true scale mode is enabled
     *
     * @returns true scale
     */
    getTrueScale(): boolean;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Document {
    /**
     * root object or settings
     */
    type Options = {
        /**
         * root object
         */
        root?: AbstractDocumentElement;
        /**
         * page object
         */
        page?: {
            header?: PageElement;
            footer?: PageElement;
            /**
             * an optional function to return
             * if header should be printed. If it is not specified then header isElementVisible function is used or a standard rule if it snot defined.
             */
            isheadervisible?: PageElement.isVisiblePageElementCallback;
            /**
             * an optional function to return
             * if header should be printed. If it is not specified then header isElementVisible function is used or a standard rule if it snot defined.
             */
            isfootervisible?: PageElement.isVisiblePageElementCallback;
        };
        /**
         * additional options
         */
        options?: OptionsType;
        /**
         * options
         */
        document?: {
            header?: PageElement;
            footer?: PageElement;
        };
        /**
         * enable true scale
         */
        truescale?: boolean;
    };
    type OptionsType = {
        scaling?: ScalingOptions;
        orientation?: Orientation;
        imagescalefactor?: number;
        exportscale?: number;
        limits?: Rect | {
            start?: number;
            end?: number;
        };
    };
}
