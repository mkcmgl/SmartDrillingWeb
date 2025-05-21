/**
 * @module geotoolkit/attributes/ILineDecoration
 */
import type { LineRenderingContext } from '@int/geotoolkit/attributes/LineRenderingContext';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Define an interface to create line decoration
 * @interface
 */
export declare abstract class ILineDecoration {
    /**
     * Return line decoration strategy name
     * @returns line decoration strategy name
     */
    abstract getName(): string;
    /**
     * Create line decoration rendering context
     * @param context rendering context
     * @returns line rendering context
     */
    abstract createLineRenderingContext(context: RenderingContext): LineRenderingContext;
    /**
     * Return line style width
     * @param lineStyle line style
     * @returns line width
     */
    abstract getLineWidth(lineStyle: LineStyle): number;
    static getClassName(): string;
    getClassName(): string;
}
