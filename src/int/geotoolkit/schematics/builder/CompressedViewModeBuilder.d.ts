/**
 * @module geotoolkit/schematics/builder/CompressedViewModeBuilder
 */
import { AbstractViewModeBuilder } from '@int/geotoolkit/schematics/builder/AbstractViewModeBuilder';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * Builder for schematics "Compressed" view mode
 */
export declare class CompressedViewModeBuilder extends AbstractViewModeBuilder {
    constructor(options?: CompressedViewModeBuilder.Options);
    build(it: Iterator<ComponentNode>, modelLimits?: Rect): IViewModeBuilder.BuildOptions;
    getOptions(): Required<CompressedViewModeBuilder.Options>;
    setOptions(options: CompressedViewModeBuilder.Options): this;
}
export declare namespace CompressedViewModeBuilder {
    /**
     * view mode options
     */
    type Options = {
        /**
         * elements orientation
         */
        horizontal?: boolean;
        /**
         * gap/overlap tolerance along MD axis
         */
        tolerance?: number;
    };
}
