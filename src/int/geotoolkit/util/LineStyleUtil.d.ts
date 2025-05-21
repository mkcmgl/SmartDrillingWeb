import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Defines helper methods to work with line style
 */
export declare class LineStyleUtil {
    /**
     * Returns line width in dest units
     * @param lineStyle the line style
     * @param destUnit dest unit
     */
    static getLineWidth(lineStyle: LineStyle, destUnit: AbstractUnit): number;
    static getClassName(): string;
    getClassName(): string;
}
