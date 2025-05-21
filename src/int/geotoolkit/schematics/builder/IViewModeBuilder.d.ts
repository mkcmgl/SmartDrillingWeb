/**
 * @module geotoolkit/schematics/builder/IViewModeBuilder
 */
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Schematics view mode builder interface
 *
 * @interface
 */
export declare abstract class IViewModeBuilder {
    /**
     * Builds view mode
     * @param it component nodes iterator
     * @param limits limits to layout components within
     */
    abstract build(it: Iterator<ComponentNode>, limits?: Rect): IViewModeBuilder.BuildOptions;
    abstract getOptions(): Record<string, any>;
    abstract setOptions(options: Record<string, any>): this;
}
export declare namespace IViewModeBuilder {
    type BuildOptions = null | {
        /**
         * model limits depths
         */
        modellimitsdepths: number[];
        /**
         * bounds depths
         */
        boundsdepths: number[];
    };
}
