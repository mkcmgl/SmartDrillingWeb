/**
 * @module geotoolkit/schematics/labeling/ILabelsFilter
 */
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
/**
 * Labels filter interface
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/labeling/LabelsFilter~LabelsFilter} instead.
 * @interface
 */
export declare abstract class ILabelsFilter {
    /**
     * Gets filtered labels
     * @param labels input array
     * @param context rendering context
     * @param labelShape label shape template
     * @returns result filtered labels array
     */
    abstract filterLabels(labels: LabelData[], context: RenderingContext, labelShape: LabelShape): LabelData[];
    /**
     * Resets itself
     * @returns this
     */
    abstract reset(): this;
}
