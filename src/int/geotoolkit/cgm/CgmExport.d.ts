import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import type { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import type { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Group } from '@int/geotoolkit/scene/Group';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Utility class for CGM rendering
 */
export declare class CgmExport {
    constructor();
    /**
     * Export group to CGM stream
     *
     * @param options options object or root node to be used for export.
     * @returns CGM stream
     */
    exportToCgmStream(options: CgmExport.Options): IWritable;
}
export declare namespace CgmExport {
    /**
     * options object or root node to be used for export.
     */
    type Options = {
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
    };
}
