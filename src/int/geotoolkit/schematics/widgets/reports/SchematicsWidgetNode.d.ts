import { AbstractElement } from '@int/geotoolkit/report/dom/elements/AbstractElement';
import { DisplayMode } from '@int/geotoolkit/schematics/scene/WellBoreWithLabels';
import type { Node } from '@int/geotoolkit/report/dom/Node';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { CompositeSchematicsWidget } from '@int/geotoolkit/schematics/widgets/CompositeSchematicsWidget';
import type { LabelingStrategyBase } from '@int/geotoolkit/schematics/labeling/LabelingStrategyBase';
import type { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
export declare class SchematicsWidgetNode extends AbstractElement {
    constructor(options: Node.Options);
    getWellBoreData(): WellBoreData;
    setWellBoreData(wellBoreData: WellBoreData): this;
    getTrajectory(): Trajectory2d;
    setTrajectory(trajectory: Trajectory2d): this;
    getDisplayMode(): DisplayMode;
    setDisplayMode(displayMode: DisplayMode): this;
    getOptions(): SchematicsWidgetNode.Options;
    setOptions(options?: SchematicsWidgetNode.Options): this;
}
export declare namespace SchematicsWidgetNode {
    type Options = CompositeSchematicsWidget.Options & {
        /**
         * Display mode
         */
        displaymode?: DisplayMode;
        /**
         * labeling options
         */
        labeling?: CompositeSchematicsWidget.Options['labeling'] & {
            /**
             * labeling strategy
             */
            strategy?: LabelingStrategyBase;
        };
        /**
         * legend options
         */
        legend?: CompositeSchematicsWidget.Options['legend'] & {
            /**
             * legend alignment area.
             */
            alignmentarea?: AnnotationLocation;
        };
    };
}
