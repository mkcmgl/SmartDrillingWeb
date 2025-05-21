/**
 * @module geotoolkit/schematics/labeling/IComponentsFilter
 */
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Components filter interface
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/labeling/LabelsFilter~LabelsFilter} instead.
 * @interface
 */
export declare abstract class IComponentsFilter {
    /**
     * Gets iterator over filtered components
     * @param iterator input components iterator
     * @param context rendering context
     * @returns iterator iterator over components to label
     */
    abstract filterComponents(iterator: Iterator, context: RenderingContext): Iterator;
    /**
     * Resets itself
     * @param options options
     * @returns this
     */
    abstract reset(options: any): this;
    getClassName(): string;
    static getClassName(): string;
}
