import type { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
import type { ConnectorShape } from '@int/geotoolkit/schematics/labeling/ConnectorShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { ValueViewMode, WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import type { LabelsFilter } from '@int/geotoolkit/schematics/labeling/LabelsFilter';
import type { LocationType } from '@int/geotoolkit/schematics/labeling/LocationType';
/**
 * Abstraction for schematics well bore elements labeling.
 */
export declare abstract class LabelingStrategy {
    protected constructor(options?: LabelingStrategy.Options);
    /**
     * Returns strategy options
     * @returns options
     */
    getOptions(): LabelingStrategy.OptionsOut;
    /**
     * Sets strategy options
     *
     * @param options strategy options see {@link import("geotoolkit/schematics/labeling/LabelingStrategy").LabelingStrategy.setProperties}
     * @returns this
     */
    setOptions(options: LabelingStrategy.Options): this;
    /**
     * Returns strategy options
     *
     * @returns strategy options
     */
    getProperties(): LabelingStrategy.OptionsOut;
    /**
     * Gets legend mode
     * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels~WellBoreWithLabels} with 'nextlabel' instead.
     */
    getLegendMode(): boolean;
    /**
     * Sets legend mode
     * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels~WellBoreWithLabels} with 'nextlabel' instead.
     * @param mode mode
     */
    setLegendMode(mode: boolean): this;
    /**
     * Sets strategy options
     *
     * @param options strategy options
     * @returns this
     */
    setProperties(options?: LabelingStrategy.Options): this;
    setActiveComponentsArea(activeComponentsArea: Rect): this;
    protected getActiveComponentsArea(): Rect | null;
    /**
     * Performs labels and connecting lines layout.
     * @param localContext rendering context
     * @param wellBoreNode well bore node to build the labeling of
     * @param [options] options
     * @returns an array of label data to render
     */
    abstract doLabeling(localContext: RenderingContext, wellBoreNode: WellBoreNode, options?: LabelingStrategy.DoLabelingOptions & LabelingStrategy.Options): LabelData[];
    /**
     * Sets labeling area(s) bounds
     * @param bounds labeling area bounds
     * @returns this
     */
    abstract setLabelsBounds(bounds: Partial<Record<'Left' | 'Right' | 'Top' | 'Bottom', Rect>>): this;
    /**
     * Gets labeling area(s) bounds
     * @param [location] permitted values: "Left", "Right", "Top" or "Bottom"
     */
    abstract getLabelsBounds(location: 'Left' | 'Right' | 'Top' | 'Bottom'): Rect | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LabelingStrategy {
    /**
     * strategy options
     */
    type Options = {
        /**
         * label shape
         * @deprecated since 4.0 Use labeling.labelshape on WellBoreWithLabels
         */
        labelshape?: LabelShape;
        /**
         * label shape
         * @deprecated since 4.0 Use labeling.labelsfilter on WellBoreWithLabels
         */
        labelsfilter?: LabelsFilter;
        /**
         * highlighted label shape
         * @deprecated since 4.0 Use labeling.styleshandler on WellBoreWithLabels
         */
        labelshapehighlighted?: LabelShape;
        /**
         * @deprecated since 4.0 Use labeling.labelsfilter instead
         * label info provider
         */
        labelinfoprovider?: Function;
        /**
         * @deprecated since 4.0 Use labeling.labelsfilter instead
         * "before labeling" procedure
         */
        beforelabelingproc?: Function;
        /**
         * @deprecated since 4.0 Use labeling.labelsfilter instead
         * "after labeling" procedure
         */
        afterlabelingproc?: Function;
        /**
         * @deprecated since 4.0 Use labeling.labelsfilter instead
         * callback to provide next label in legend mode
         */
        nextlabel?: Function;
        /**
         * connector shape
         * @deprecated since 4.0 Use labeling.connectorshape on WellBoreWithLabels
         */
        connectorshape?: ConnectorShape;
        /**
         * @deprecated since 4.0 Use labeling.defaultlocation on WellBoreWithLabels
         */
        defaultlocation?: LocationType;
        /**
         * @deprecated since 4.0 Use labeling.locationmap on WellBoreWithLabels
         */
        locationmap?: {
            location: LocationType;
            component: string[];
            id?: string | string[];
        }[];
    };
    type DoLabelingOptions = {
        /**
         * value view mode
         */
        valueviewmode?: ValueViewMode;
        /**
         * shape to draw label
         */
        labelshape?: LabelShape;
        /**
         * shape to draw connector line between node and label
         */
        connectorshape?: ConnectorShape;
        /**
         * label filter
         */
        labelsfilter?: LabelsFilter;
        defaultlocation?: LocationType;
        legendmode?: boolean;
        locationmap?: {
            location: LocationType;
            component: string[];
            id?: string | string[];
        }[];
    };
    /**
     * strategy options
     */
    type OptionsOut = Required<Options>;
}
