/**
 * @module geotoolkit/scene/filters/Composite
 */
import { IFilter } from '@int/geotoolkit/renderer/IFilter';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define a composite filter to apply a several filters
 */
export declare class Composite implements IFilter {
    /**
     * @param [filters] an array of filters
     */
    constructor(filters?: IFilter[]);
    /**
     * Add filter to be applied
     * @param filter filter to add
     */
    addFilter(filter: IFilter): this;
    /**
     * Remove an instance of the filter
     * @param filter filter to remove
     */
    removeFilter(filter: IFilter): this;
    filter(node: Node, context?: RenderingContext): boolean;
    begin(context?: RenderingContext): this;
    end(context?: RenderingContext): this;
    static getClassName(): string;
    getClassName(): string;
}
