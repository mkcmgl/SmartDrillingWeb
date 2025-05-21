import { Orientation } from '@int/geotoolkit/util/Orientation';
import { ScalingOptions } from '@int/geotoolkit/scene/exports/ScalingOptions';
import { ImageCompression } from '@int/geotoolkit/pdf/ImageCompression';
import { SpeedCompression } from '@int/geotoolkit/pdf/SpeedCompression';
import { PaperOrientation } from '@int/geotoolkit/scene/exports/PaperOrientation';
import { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import type { Node } from '@int/geotoolkit/report/dom/Node';
import type { ParserContext } from '@int/geotoolkit/report/ParserContext';
import type { Element } from '@int/geotoolkit/report/elements/Element';
import type { Document as DomDocumentElement } from '@int/geotoolkit/report/dom/elements/Document';
import type { AbstractPaperFormat } from '@int/geotoolkit/scene/exports/AbstractPaperFormat';
import type { HeaderComponent } from '@int/geotoolkit/scene/exports/HeaderComponent';
import type { FooterComponent } from '@int/geotoolkit/scene/exports/FooterComponent';
import type { EmbededFont } from '@int/geotoolkit/pdf/EmbededFont';
import type { CompositeElement } from '@int/geotoolkit/report/elements/CompositeElement';
import type { PageContext } from '@int/geotoolkit/scene/exports/PageContext';
/**
 * Define parsed document
 */
export declare class Document {
    constructor(context: ParserContext);
    /**
     * Dispose.
     */
    dispose(): void;
    /**
     * Return known property value
     * @param propertyName property name
     * @param [defaultValue] property default value
     * @returns property value
     */
    getProperty(propertyName: string, defaultValue?: object | string | number): object | string | number | null;
    /**
     * Returns returns a boolean indicating whether the object has the specified property as its own property.
     * @param propertyName property name
     */
    hasOwnProperty(propertyName: string): boolean;
    /**
     * Returns root element
     * @param [width] width
     * @param [height] height
     * @returns root element
     */
    getRootElement(width?: number, height?: number): Element;
    /**
     * Return Document Element
     */
    getDocument(): CompositeElement;
    /**
     * Returns dom document element
     * @returns document element
     */
    getDomElement(): DomDocumentElement;
    /**
     * Returns exportable page header element
     * @param [options] export options
     * @returns return exportable element
     */
    getPageHeaderElement(options?: PageContext.PageInfo): PageElement | null;
    /**
     * Returns exportable page footer element
     * @param [options] export options
     * @returns return exportable element
     */
    getPageFooterElement(options?: PageContext.PageInfo): PageElement | null;
    /**
     * Return default print settings
     * @returns default print settings
     */
    getDefaultPrintSettings(): Document.DefaultPrintSettings;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param [options] export options
     * @returns promise with output stream
     * @example
     * // following example shows how to use exportPdf to get stream without downloading PDF
     * // and create Blob based on it
     *  document.exportPdf({
     *  'skipoutput': true,
     *   ...
     * }).then((stream) => {
     *   const content = stream.getContent();
     *   const blob = new Blob([content], {'type': 'application\/pdf'});
     *   const url = URL.createObjectURL(blob);
     *   ...
     * });
     */
    exportToPdf(options?: Document.ExportToPdfOptions): Promise<IWritable>;
    /**
     * Parse DOM elements
     * @param xml XML template
     */
    parseDomElements(xml: string): Promise<Node[]>;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Document {
    /**
     * default print settings
     */
    type DefaultPrintSettings = {
        /**
         * paper format
         */
        paperformat?: AbstractPaperFormat;
        /**
         * paper orientation
         */
        orientation?: PaperOrientation | string;
        /**
         * scaling type
         */
        scaling?: ScalingOptions | string;
        /**
         * margin left
         */
        left?: number;
        /**
         * margin top
         */
        top?: number;
        /**
         * margin right
         */
        right?: number;
        /**
         * margin bottom
         */
        bottom?: number;
        /**
         * margin units
         */
        units?: string;
        /**
         * keepAspectRatio flag
         */
        keepaspectratio?: boolean;
        /**
         * continuous flag
         */
        continuous?: boolean;
    };
    /**
     * export options
     */
    type ExportToPdfOptions = {
        /**
         * document title
         */
        title?: string;
        /**
         * document title
         */
        date?: Date;
        /**
         * define optional output filename
         */
        output?: string;
        /**
         * flag to save the pdf directly to file or open dialog
         */
        save?: boolean;
        /**
         * flag to skip using output and return stream in promise
         */
        skipoutput?: boolean;
        /**
         * an optional PDF page header
         */
        header?: PageElement;
        /**
         * an optional PDF page footer
         */
        footer?: PageElement;
        /**
         * an optional document PDF header
         */
        documentheader?: HeaderComponent;
        /**
         * an optional document PDF footer
         */
        documentfooter?: FooterComponent;
        /**
         * define optional paper and export parameters
         */
        printsettings?: {
            /**
             * define optional paper paper format
             */
            paperformat?: AbstractPaperFormat;
            /**
             * define optional top margin
             */
            top?: number;
            /**
             * define optional bottom margin
             */
            bottom?: number;
            /**
             * define optional left margin
             */
            left?: number;
            /**
             * define optional top margin
             */
            right?: number;
            /**
             * define optional paper orientation
             */
            orientation?: PaperOrientation | string;
            /**
             * define optional scaling mode. Specify to fit all tracks in your page width.
             */
            scaling?: ScalingOptions | string;
            /**
             * keep aspect ratio
             */
            keepaspectratio?: boolean;
            /**
             * continuous printing
             */
            continuous?: boolean;
        };
        /**
         * options to specify the image scale factor, right now 8 is maximum, Math.floor(600 / 72)
         */
        imagescalefactor?: number;
        /**
         * options to specify the image compression
         */
        imagecompression?: {
            /**
             * image compression method used to exporting pdf.
             */
            mode?: ImageCompression;
            /**
             * quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
             */
            quality?: number;
            /**
             * speed referring to the png compression speed, available  for png mode only.
             */
            speed?: SpeedCompression;
        };
        /**
         * enable or disable pdf output compression
         */
        streamcompression?: boolean;
        /**
         * enable or disable true scale rendering
         */
        truescale?: boolean;
        /**
         * array of embedded fonts
         */
        embededfonts?: EmbededFont[];
        /**
         * optional user-customized Stream object
         */
        pdfstream?: IWritable;
        /**
         * Pdf options
         */
        options?: {
            imagescalefactor: number;
            orientation: Orientation;
            exportscale: number;
        };
        /**
         * Callback to show export progress
         */
        progress?: (currentPage: number, totalPages: number) => void;
    };
}
