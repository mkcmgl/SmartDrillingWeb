/**
 * @module geotoolkit/contour/strategy/IsolineStylingStrategy
 */
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Define an interface for styling isolines
 * @interface
 */
export declare abstract class IsolineStylingStrategy {
    /**
     * Returns if isoline of specified level should be drawn
     * @param level level
     */
    abstract getIsolineVisible(level: number): boolean;
    /**
     * Gets style for isoline
     * @param level level
     */
    abstract getIsolineStyle(level: number): LineStyle | null;
    getClassName(): string;
    static getClassName(): string;
}
