import { IFilter } from '@int/geotoolkit/renderer/IFilter';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Filter nodes based on range of scale factor
 */
export declare class ScaleRange implements IFilter {
    constructor(options?: ScaleRange.Options);
    filter(node: Node, context?: RenderingContext): boolean;
    /**
     * Gets options
     * @returns options options
     */
    getOptions(): ScaleRange.Options;
    /**
     * Sets options
     * @param [options] options
     * @returns this
     */
    setOptions(options?: ScaleRange.Options): this;
    begin(): this;
    end(): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ScaleRange {
    /**
     * options
     */
    type Options = {
        /**
         * minimal scale
         */
        minscale?: number;
        /**
         * maximal scale
         */
        maxscale?: number;
        /**
         * minimal scale is inclusive
         */
        minscaleinclusive?: boolean;
        /**
         * maximal scale is inclusive
         */
        maxscaleinclusive?: boolean;
    };
}
