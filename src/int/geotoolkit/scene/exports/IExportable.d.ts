import type { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
/**
 * Define an interface to provide exportable elements.
 * It is used to provide custom layouting for printing and exporting
 * to various graphic formats.
 * @interface
 */
export declare abstract class IExportable {
    /**
     * Returns exportable element
     * @param [options]
     * @returns return exportable element
     */
    abstract getExportElement(options?: Record<string, any>): AbstractDocumentElement;
    /**
     * Used to prepare object before exporting
     * @param [options]
     */
    abstract beginExport(options?: Record<string, any>): void;
    /**
     * Used to restore object's state after exporting
     */
    abstract endExport(): void;
    getClassName(): string;
    static getClassName(): string;
}
