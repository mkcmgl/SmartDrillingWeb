/**
 * @module geotoolkit/pdf/PdfExport
 */
import { ImageCompression } from '@int/geotoolkit/pdf/ImageCompression';
import { SpeedCompression } from '@int/geotoolkit/pdf/SpeedCompression';
import { Rect } from '@int/geotoolkit/util/Rect';
import { NodeExport } from '@int/geotoolkit/scene/exports/NodeExport';
import type { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Document } from '@int/geotoolkit/scene/exports/Document';
import type { FontSubType } from '@int/geotoolkit/pdf/FontSubType';
/**
 * Utility class to export node
 */
export declare class PdfExport {
    constructor();
    /**
     * Export group to PDF
     *
     * @throws {Error} if memory is not enough
     * @param root root node to be used for export.
     * @param imageWidth image width(Optional)
     * @param imageHeight image height (Optional)
     * @param modelLimits modellimits (Optional)
     * @returns PDF Content
     */
    exportToPdf(root: Group, imageWidth: number, imageHeight: number, modelLimits: Rect): IWritable;
    /**
     * Export document to PDF
     *
     * @throws {Error} if memory is not enough
     * @param document document to be exported
     * @param printSettings info about print settings
     * @returns PDF in string
     */
    documentExportToPdf(document: Document, printSettings: PdfExport.DocumentExportSettings): string | Uint8Array;
    /**
     * set image compression settings for the pdf export.
     * right now three methods are available {@link @int/geotoolkit/pdf/ImageCompression~ImageCompression},
     * if you select the PNG method, then you could pass a {@link @int/geotoolkit/pdf/SpeedCompression~SpeedCompression} speed parameter
     * if you select the JPEG method, then you could pass a number ranged from 0 to 1 to specify the quality of the image
     * if you select the NONE method, all parameters will be ignored.
     * WARNING! if you select the NONE method and memory is not enough, the PNG method will be selected
     *
     * @param method method
     * @param [quality] level of quality
     * @param [speed] compression speed
     */
    setImageCompression(method: ImageCompression, quality?: number, speed?: SpeedCompression): this;
    /**
     * Enable or disable stream compression. By default it is enable
     * @param enable enable or disable image compression
     */
    setStreamCompression(enable: boolean): this;
    /**
     * Return status of stream compression if it is enable or disable
     */
    getStreamCompression(): boolean;
    /**
     * Embeds font into PDF
     * @param subType sub type
     * @param fontName - font name
     * @param fontWeight - font weight
     * @param fontStyle - font style
     * @param fontBase64EncodedFile - base64 encoded True Type Font file (TTF)
     * @param encoding - encoding Identity-H
     */
    embedFont(subType: FontSubType, fontName: string, fontWeight: string, fontStyle: string, fontBase64EncodedFile: string, encoding: string): void;
    /**
     * Export document to PDF stream
     *
     * @throws {Error} if memory is not enough
     * @param document document to export
     * @param printSettings info about print settings
     * @param [pdfStream] output stream for pdf
     * @returns PDF stream
     */
    documentExportToPdfStream(document: Document, printSettings: PdfExport.DocumentExportSettings, pdfStream?: IWritable): IWritable;
    /**
     * Export document to PDF stream asynchronously
     *
     * @param document document to export
     * @param printSettings info about print settings
     * @param [pdfStream] output stream for pdf
     */
    documentExportToPdfStreamAsync(document: Document, printSettings: PdfExport.DocumentExportSettings, pdfStream?: IWritable, progress?: (currentPage: number, totalPages: number) => void): Promise<IWritable>;
    /**
     * Returns true if exporting a PDF is supported by this browser
     */
    static isSupported(): boolean;
    /**
     * Static method to Enable/Disable Text and Image Clipping in Pdf
     * @param textClippingEnabled - Text Shape Clipping (default: true)
     * @param imageClippingEnabled - Image Shape Clipping (default: true)
     */
    static enableClipping(textClippingEnabled: boolean, imageClippingEnabled: boolean): void;
    /**
     * Sets maximum image size (in bytes)
     * @param maximumImageSize image size for forced selecting PNG compression method
     */
    static setMaximumImageSize(maximumImageSize: number): void;
}
export declare namespace PdfExport {
    /**
     * info about print settings
     */
    type DocumentExportSettings = NodeExport.PrintDocumentSettings & {
        /**
         * output stream for pdf
         */
        pdfstream?: IWritable;
        /**
         * author
         */
        author?: string;
        /**
         * if this flag is set then clipping is enabled
         */
        clippingenabled?: boolean;
    };
}
