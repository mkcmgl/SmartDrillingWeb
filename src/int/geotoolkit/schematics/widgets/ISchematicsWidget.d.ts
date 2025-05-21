/**
 * @module geotoolkit/schematics/widgets/ISchematicsWidget
 */
import type { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { ViewMode, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * Defines base interface for all schematics widgets
 * @interface
 */
export declare abstract class ISchematicsWidget {
    /**
     * Gets well bore view mode
     * @returns viewMode
     */
    abstract getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @param [options] the mode options
     * @returns "model limits to bounds" depths mapping
     */
    abstract setViewMode(viewMode: ViewMode | WellBoreNode.ViewModeInfo): IViewModeBuilder.BuildOptions;
    /**
     * Gets labeling strategy (if any)
     */
    abstract getLabelingStrategy(): LabelingStrategy | null;
    /**
     * Gets WellBoreNode's model limits
     */
    abstract getCenterModelLimits(): Rect | null;
    /**
     * Sets data
     * @param data wellbore data to set
     * @returns this
     */
    abstract setData(data: any): this;
    /**
     * Gets widget options
     * @returns widget options
     */
    abstract getOptions(): Record<string, any>;
    /**
     * Sets widget options
     * @param options widget options
     * @returns this
     */
    abstract setOptions(options: Record<string, any>): this;
    getClassName(): string;
    static getClassName(): string;
}
