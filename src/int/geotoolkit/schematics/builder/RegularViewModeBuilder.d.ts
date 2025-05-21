/**
 * @module geotoolkit/schematics/builder/RegularViewModeBuilder
 */
import { AbstractViewModeBuilder } from '@int/geotoolkit/schematics/builder/AbstractViewModeBuilder';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
/**
 * Builder for schematics "Regular" view mode
 */
export declare class RegularViewModeBuilder extends AbstractViewModeBuilder {
    constructor();
    build(it: Iterator<ComponentNode>, modelLimits?: Rect): IViewModeBuilder.BuildOptions;
    getOptions(): Record<string, any>;
    setOptions(options: Record<string, any>): this;
}
