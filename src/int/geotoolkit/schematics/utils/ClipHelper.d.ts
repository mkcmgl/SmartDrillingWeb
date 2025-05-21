/**
 * @module geotoolkit/schematics/utils/ClipHelper
 */
import { ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * Clip helper class
 */
export declare class ClipHelper {
    /**
     * @param md measured depth to convert to depth in current "viewMode"
     * @param viewMode current view mode
     * @param componentNode componentNode
     */
    static mdToViewModeDepth(md: number, viewMode: ViewMode, componentNode: ComponentNode): number;
    static getClassName(): string;
    getClassName(): string;
}
