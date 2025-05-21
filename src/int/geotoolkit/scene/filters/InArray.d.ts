/**
 * @module geotoolkit/scene/filters/InArray
 */
import { IFilter } from '@int/geotoolkit/renderer/IFilter';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Define a simple filter based on array
 */
export declare class InArray implements IFilter {
    constructor(array?: Node[]);
    /**
     * Set array to be used
     * @param array array
     */
    setArray(array: Node[]): this;
    /**
     * Get array to be used
     * @returns array
     */
    getArray(): Node[];
    filter(node: Node): boolean;
    begin(): this;
    end(): this;
    static getClassName(): string;
    getClassName(): string;
}
