import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import type { WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { ViewMode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { CompositeSchematicsWidget } from '@int/geotoolkit/schematics/widgets/CompositeSchematicsWidget';
import { ISchematicsWidget } from '@int/geotoolkit/schematics/widgets/ISchematicsWidget';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/BaseWidget~BaseWidget} class
 * to work with two {@link @int/geotoolkit/schematics/data/WellBoreData~WellBoreData} instances
 * to show/compare two states of schematics (for example, "Planned" vs. "Actual")
 * </p>
 *
 * @example
 * import {DualSchematicsWidget} from '@int/geotoolkit/schematics/widgets/DualSchematicsWidget';
 * // Initialize the data
 * // ...
 * // Create the widget using the data
 * const widget = new DualSchematicsWidget({
 *      // ... common options
 *     'planned': {
 *      // ... 'planned' options
 *      },
 *      'actual':  {
 *         // ... 'actual' options
 *      }
 *     'data': {
 *         'planned': {
 *             // ... 'planned' data
 *         },
 *         'actual':  {
 *             // ... 'actual' data
 *         }
 *      }
 * });
 */
export declare class DualSchematicsWidget extends BaseWidget implements ISchematicsWidget {
    constructor(options?: DualSchematicsWidget.Options);
    /**
     * Sets properties
     * @param [properties] argument object
     * @returns this
     */
    setProperties(properties?: DualSchematicsWidget.Options): this;
    /**
     * Returns properties
     * @returns argument object
     */
    getProperties(): DualSchematicsWidget.OptionsOut;
    protected initializeTools(): this;
    /**
     * Sets widget data
     * @param [data] data to set
     */
    setData(data?: DualSchematicsWidget.Data): this;
    /**
     * Gets well bore view mode.<br>
     * The implementations returns {@link @int/geotoolkit/schematics/scene/WellBoreNode~ViewMode.Regular} always.
     * @returns viewMode
     */
    getViewMode(): ViewMode.Regular;
    setViewMode(viewMode: ViewMode | WellBoreNode.ViewModeInfo): IViewModeBuilder.BuildOptions;
    /**
     * Gets labeling strategy. The implementation returns null.<br>
     * To retrieve specific ("planned" or "actual" widget's) strategy call for
     * this.getPlannedWidget().getLabelingStrategy() or this.getActualWidget().getLabelingStrategy().
     */
    getLabelingStrategy(): LabelingStrategy | null;
    /**
     * Gets widget options
     * @see {@link @int/geotoolkit/schematics/widgets/DualSchematicsWidget~DualSchematicsWidget.setOptions} for details
     * @returns widget options
     */
    getOptions(): DualSchematicsWidget.OptionsOut;
    /**
     * Gets data model limits as a union of underlying widget's data model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Sets widget options
     *
     * @param options widget options<br>
     * The top-most options may include settings common for both halves.<br>
     * If an option defined in the top-most section is also defined in specific display mode,
     * then the specific value overrides common one.
     * @returns this
     */
    setOptions(options: DualSchematicsWidget.OptionsBase): this;
    /**
     * Gets 'planned' schematics widget (widget on left side)
     */
    getPlannedWidget(): CompositeSchematicsWidget;
    /**
     * Gets 'actual' schematics widget (widget on right side)
     */
    getActualWidget(): CompositeSchematicsWidget;
}
export declare namespace DualSchematicsWidget {
    /**
     * argument object
     */
    type Options = BaseWidget.Options & OptionsBase & {
        /**
         * data
         */
        data?: Data;
    };
    /**
     * argument object
     */
    type OptionsOut = BaseWidget.OptionsOut & OptionsBase;
    /**
     * data to set
     */
    type Data = {
        /**
         * planned wellbore data to set
         */
        planned?: CompositeSchematicsWidget.Data;
        /**
         * actual wellbore data to set
         */
        actual?: CompositeSchematicsWidget.Data;
    };
    /**
     * widget options<br>
     * The top-most options may include settings common for both halves.<br>
     * If an option defined in the top-most section is also defined in specific display mode,
     * then the specific value overrides common one.
     */
    type OptionsBase = Omit<CompositeSchematicsWidget.Options, 'data'> & {
        /**
         * planned-half options
         */
        planned?: Omit<CompositeSchematicsWidget.Options, 'data'>;
        /**
         * actual-half
         */
        actual?: Omit<CompositeSchematicsWidget.Options, 'data'>;
    };
}
