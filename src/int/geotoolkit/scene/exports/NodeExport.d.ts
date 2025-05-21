import { Node } from '@int/geotoolkit/scene/Node';
import { Rect } from '@int/geotoolkit/util/Rect';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import { ScalingOptions } from '@int/geotoolkit/scene/exports/ScalingOptions';
import { PageContext } from '@int/geotoolkit/scene/exports/PageContext';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { Surface } from '@int/geotoolkit/renderer/Surface';
import type { DocumentRenderingContext } from '@int/geotoolkit/renderer/DocumentRenderingContext';
import type { Document } from '@int/geotoolkit/scene/exports/Document';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
import type { AbstractPaperFormat } from '@int/geotoolkit/scene/exports/AbstractPaperFormat';
import type { Unit } from '@int/geotoolkit/util/Unit';
/**
 * Utility class to export nodes of various types for PDF output.
 */
export declare class NodeExport {
    /**
     * Exports node to image.
     *
     * @param node node
     * @param [imageWidth] width
     * @param [imageHeight] height
     * @param [horizontalFlip] flag to set horizontal flip
     * @param [verticalFlip] flag to set vertical flip
     * @param [modelLimits] model limits. if it is not specified then node model limits is used.
     * @param [handler] called when image is ready
     * @returns image
     */
    static exportToImage(node: Node | IExportable | AbstractDocumentElement, imageWidth?: number, imageHeight?: number, horizontalFlip?: boolean, verticalFlip?: boolean, modelLimits?: Rect, handler?: (ev: Event) => void): HTMLElement;
    /**
     * Exports node to image.
     *
     * @param options options
     * @returns image
     */
    static exportToImage(options: NodeExport.ToImageOptions): HTMLElement;
    /**
     * Exports node to image Url
     *
     * @param node node
     * @param [imageWidth] width
     * @param [imageHeight] height
     * @param [horizontalFlip] flag to set horizontal flip
     * @param [verticalFlip] flag to set vertical flip
     * @param [modelLimits] model limits. if it is not specified then node model limits is used.
     * @returns 64bit encoded url for the rendered image
     */
    static exportToImageUrl(node: Node | IExportable | AbstractDocumentElement, imageWidth?: number, imageHeight?: number, horizontalFlip?: boolean, verticalFlip?: boolean, modelLimits?: Rect): string;
    /**
     * Exports node to image Url
     *
     * @param options options
     * @returns 64bit encoded url for the rendered image
     * @example
     * // Export of widget
     * let url = NodeExport.exportToImageUrl({
     *      'node': widget,
     *      'exportoptions': {
     *           'limits': {
     *               'start': 4600,
     *               'end': 4700
     *           }
     *       }
     * })
     */
    static exportToImageUrl(options: NodeExport.ToImageUrlOptions): string;
    /**
     * Exports node imageUrl
     *
     * @param node node
     * @param imageWidth width
     * @param imageHeight height
     * @param horizontalFlip flag to set horizontal flip
     * @param verticalFlip flag to set vertical flip
     * @param [modelLimits] model limits. if it is not specified then node model limits is used.
     * @returns promise
     */
    static exportToImageUrlAsync(node: Node | IExportable | AbstractDocumentElement | NodeExport.ToImageUrlOptions, imageWidth: number, imageHeight: number, horizontalFlip: boolean, verticalFlip: boolean, modelLimits?: Rect): Promise<string>;
    /**
     * Export to surface
     *
     * @param node node to export
     * @param imageWidth image width
     * @param imageHeight image height
     * @param horizontalFlip flag to set horizontal flip
     * @param verticalFlip flag to set vertical flip
     * @param [modelLimits] model limits. model limits. if it is not specified then node model limits is used.
     * @throws {Error} if model limits are not specified and Node has not got it
     * @returns canvas
     */
    static exportToSurface(node: Node, imageWidth: number, imageHeight: number, horizontalFlip: boolean, verticalFlip: boolean, modelLimits?: Rect): Surface;
    /**
     * Export the node using a given context in asynchronous mode
     * This will separate the scene into pages using print settings, header and footer information
     *
     * @param context rendering context
     * @param document Document class representing a pdf document
     * @param printSettings print settings
     * @returns return a promise
     */
    static renderAsync(context: DocumentRenderingContext, document: Document, printSettings: NodeExport.PrintDocumentSettings, progress?: (currentPage: number, totalPages: number) => void): Promise<void>;
    /**
     * Export the node using a given context.
     * This will separate the scene into pages using print settings, header and footer information
     *
     * @param context rendering context
     * @param document Document class representing a pdf document
     * @param printSettings print settings
     */
    static render(context: DocumentRenderingContext, document: Document, printSettings: NodeExport.PrintDocumentSettings): void;
}
export declare namespace NodeExport {
    /**
     * node or options
     */
    type ToImageOptions = ToImageUrlOptions & {
        /**
         * called when image is ready
         */
        handler?: (ev: Event) => void;
    };
    /**
     * node or options
     */
    type ToImageUrlOptions = {
        /**
         * node
         */
        node?: Node | AbstractDocumentElement;
        /**
         * width
         */
        imagewidth?: number;
        /**
         * height
         */
        imageheight?: number;
        /**
         * flag to set horizontal flip
         */
        horizontalflip?: boolean;
        /**
         * flag to set vertical flip
         */
        verticalflip?: boolean;
        /**
         * model limits. if it is not specified then node model limits is used.
         */
        modellimits?: Rect;
        /**
         * export options if node is IExportable
         */
        exportoptions?: Record<string, any>;
    };
    type PrintDocumentSettings = PrintPageSettings & {
        /**
         * Keep ascept ration for output
         */
        keepaspectratio?: boolean;
    };
    /**
     * Define print page setting
     */
    type PrintPageSettings = {
        /**
         * Units for margins
         */
        units?: string | Unit;
        /**
         * Paper format
         */
        paperformat?: AbstractPaperFormat | string;
        /**
         * top margin
         */
        top?: number;
        /**
         * bottom margin
         */
        bottom?: number;
        /**
         * left margin
         */
        left?: number;
        /**
         * right margin
         */
        right?: number;
        /**
         * scaling options
         */
        scaling?: ScalingOptions;
        /**
         * continuous mode
         */
        continuous?: boolean;
        /**
         * output unit
         */
        outputunit?: AbstractUnit | string;
    };
    type PageSettings = {
        continuous: boolean;
        horizontal: boolean;
        scaling: ScalingOptions;
        header: {
            size: number;
            maxsize: number;
            element?: PageElement;
        };
        footer: {
            size: number;
            maxsize: number;
            element?: PageElement;
        };
        pageinpixels: AbstractPaperFormat;
        margininpixels: PageContext.Margin;
        pagespaceinpixels: Dimension;
        options: Document.OptionsType;
        isdesigntime?: boolean;
    };
}
