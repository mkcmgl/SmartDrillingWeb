import type { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Define abstract strategy to calculate curve limits based on data
 */
export declare abstract class LogCurveLimitsStrategy {
    /**
     * Calculate data limits based on data
     * @param data data
     * @param [unit] display unit
     * @returns array of limits (min and max)
     */
    abstract getLimits(data: LogAbstractData, unit?: AbstractUnit): number[];
    static getClassName(): string;
    getClassName(): string;
}
