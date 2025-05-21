/**
 * @module geotoolkit/seismic/cgmplus/CgmPlusExport
 */
import { CgmExport } from '@int/geotoolkit/cgm/CgmExport';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import type { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Utility class for CGM+ rendering. NOTE: use exportToCgmStreamAsync() method.
 */
export declare class CgmPlusExport extends CgmExport {
    /**
     * Export group to CGM stream asynchronously
     */
    exportToCgmStreamAsync(options: CgmPlusExport.ExportToCgmStreamAsyncRoot): void;
    /**
     * Stops exporting
     */
    cancel(): void;
}
export declare namespace CgmPlusExport {
    /**
     * root node to be used for export.
     */
    type ExportToCgmStreamAsyncRoot = {
        /**
         * root node to be used for export.
         */
        root?: IExportable | AbstractDocumentElement | Group | Shape;
        /**
         * output stream
         */
        stream?: IWritable;
        /**
         * set true if use two-colored gradients
         */
        usesimplegradient?: boolean;
        /**
         * export bounds
         */
        exportbounds?: Rect;
        /**
         * options to be used with IExportable element
         */
        exportoptions?: Record<string, any>;
        /**
         * progress function
         */
        progress?: (value: number) => void;
        /**
         * callback function
         */
        callback?: (message?: string) => void;
    };
}
