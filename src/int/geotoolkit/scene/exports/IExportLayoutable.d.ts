/**
 * @module geotoolkit/scene/exports/IExportLayoutable
 */
import type { NodeExport } from '@int/geotoolkit/scene/exports/NodeExport';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Define an object that represents the export element with dynamic layout
 * @interface
 */
export declare abstract class IExportLayoutable {
    /**
     * Return Layouted bounds
     * @param pageInfo page settings
     */
    abstract updatePageLayout(pageInfo: NodeExport.PageSettings): Rect;
}
