/**
 * @module geotoolkit/schematics/labeling/LabelingStrategyBase
 */
import { LocationType } from '@int/geotoolkit/schematics/labeling/LocationType';
import { Mode } from '@int/geotoolkit/schematics/labeling/Mode';
import { AlignmentType } from '@int/geotoolkit/schematics/labeling/AlignmentType';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { ConnectorLocationType } from '@int/geotoolkit/schematics/labeling/ConnectorLocationType';
import { LabelingStrategy } from '@int/geotoolkit/schematics/labeling/LabelingStrategy';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { IComponentsFilter } from '@int/geotoolkit/schematics/labeling/IComponentsFilter';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
/**
 * Abstraction for schematics well bore elements labeling.
 */
export declare abstract class LabelingStrategyBase extends LabelingStrategy {
    protected constructor(options?: LabelingStrategyBase.Options);
    /**
     * Returns all properties
     * @returns strategy properties (see base class for inherited properties)
     */
    getProperties(): LabelingStrategyBase.OptionsOut;
    /**
     * Set all properties
     * @param [properties] strategy properties (see base class for inherited properties)
     * @returns this
     */
    setProperties(properties?: LabelingStrategyBase.Options): this;
    /**
     * Sets strategy options (See base class method API for more options)
     *
     * @param options strategy options
     * @returns this
     */
    setOptions(options: LabelingStrategyBase.Options): this;
    setLabelsBounds(bounds: Partial<Record<'Left' | 'Right' | 'Top' | 'Bottom', Rect>>): this;
    getLabelsBounds(location: 'Left' | 'Right' | 'Top' | 'Bottom'): Rect | null;
    doLabeling(context: RenderingContext, wellBoreNode: WellBoreNode, options?: LabelingStrategy.DoLabelingOptions & LabelingStrategyBase.Options): LabelData[];
    /**
     * @param locationType location type
     * @param [isHorizontal] horizontal flag
     */
    protected calculateLabelAnchorType(locationType: LocationType, isHorizontal?: boolean): AnchorType;
}
export declare namespace LabelingStrategyBase {
    /**
     * strategy options (see base class for inherited options)
     */
    type Options = LabelingStrategy.Options & {
        /**
         * @deprecated
         */
        labelinfo?: Function;
        /**
         * labeling mode
         */
        mode?: Mode;
        /**
         * alignment type
         */
        defaultalignment?: AlignmentType;
        /**
         * connector location along trajectory
         */
        connectorlocation?: ConnectorLocationType;
        /**
         * components filter
         * @deprecated since 4.0 Use parameter labeling.labelsfilter on WellBoreWithLabels
         */
        componentsfilter?: IComponentsFilter;
    };
    /**
     * strategy properties (see base class for inherited properties)
     */
    type OptionsOut = Required<Options>;
}
