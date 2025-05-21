/**
 * @module geotoolkit/schematics/labeling/LabelsFilter
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { LabelData } from '@int/geotoolkit/schematics/labeling/LabelData';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Orientation } from '@int/geotoolkit/util/Orientation';
import type { LabelShape } from '@int/geotoolkit/schematics/labeling/LabelShape';
export declare class LabelsFilter {
    constructor(options?: LabelsFilter.Options);
    /**
     * Gets iterator over filtered components
     * @param iterator input components iterator
     * @param context rendering context
     * @param options options
     * @returns iterator iterator over components to label
     */
    beforeLabeling(iterator: Iterator, context: RenderingContext, options: LabelsFilter.BeforeLabelingOptions): Iterator;
    /**
     * Runs after labeling, can be used for filter overlapped labels
     * @param labels input array
     * @param context rendering context
     * @param labelShape label shape template
     * @returns result filtered labels array
     */
    afterLabeling(labels: LabelData[], context: RenderingContext, labelShape: LabelShape): LabelData[];
    /**
     * Returns label in legend mode
     */
    nextLabel(): string;
    /**
     * Returns label in non legend mode
     * @param node component
     */
    labelInfo(node: ComponentNode): string;
    /**
     * Resets itself
     * @returns this
     */
    reset(): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LabelsFilter {
    type Options = {
        /**
         * labels weight to specify which labels to show/hide.
         * Labels weight can be based on a custom weight function (Labels with more weight are annotated).
         * By default, uses labels text length as labels priority (longer label has higher priority).
         */
        weight?: labelWeight;
    };
    /**
     * options
     */
    type BeforeLabelingOptions = {
        /**
         * components area
         */
        activecomponentsarea: Rect;
        /**
         * components area in model space
         */
        activecomponentsareamodel: Rect;
        /**
         * wellbore orientation
         */
        orientation: Orientation;
    };
    /**
     * Callback label weight
     */
    type labelWeight = (info: LabelData) => number;
}
