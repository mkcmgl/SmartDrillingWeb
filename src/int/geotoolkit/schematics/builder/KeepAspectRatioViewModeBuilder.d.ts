/**
 * @module geotoolkit/schematics/builder/KeepAspectRatioViewModeBuilder
 */
import { AbstractViewModeBuilder } from '@int/geotoolkit/schematics/builder/AbstractViewModeBuilder';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { IGetRangeHeight } from '@int/geotoolkit/schematics/builder/IGetRangeHeight';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * Builder for schematics "KeepAspectRatio" view mode
 */
export declare class KeepAspectRatioViewModeBuilder extends AbstractViewModeBuilder {
    constructor(options?: KeepAspectRatioViewModeBuilder.Options);
    /**
     * Gets AspectRatio for the component; or "NoAspectRatio"-value
     * @param name component name
     */
    getAssignedAspectRatio(name: string): number;
    build(it: Iterator<ComponentNode>, modelLimits?: Rect): IViewModeBuilder.BuildOptions;
    /**
     * Gets builder options
     *
     * @returns builder options
     */
    getOptions(): Required<KeepAspectRatioViewModeBuilder.Options>;
    /**
     * Sets builder options
     * @param options builder options
     * @returns this
     */
    setOptions(options: KeepAspectRatioViewModeBuilder.Options): this;
}
export declare namespace KeepAspectRatioViewModeBuilder {
    /**
     * view mode options
     */
    type Options = {
        excluded?: string[];
        included?: string[] | {
            name: string;
            aspectratio: number;
        }[];
        /**
         * default aspect ratio value
         */
        defaultaspectratio?: number;
        /**
         * regular ranges settings
         */
        rangeheight?: {
            /**
             * top range height calculator
             */
            top?: IGetRangeHeight;
            /**
             * "between" range(s) height calculator
             */
            between?: IGetRangeHeight;
            /**
             * bottom range height calculator
             */
            bottom?: IGetRangeHeight;
        };
    };
}
