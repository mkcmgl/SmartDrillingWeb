import type { Log2DDataRow } from '@int/geotoolkit/welllog/data/Log2DDataRow';
/**
 * Abstract decimation strategy for dense areas of Log2DVisual
 */
export declare abstract class AbstractDecimationStrategy {
    /**
     * Creates decimation strategy
     */
    protected constructor();
    /**
     * This method need to be called in the beginning of dense area
     * @param firstRow first row of area
     */
    abstract reset(firstRow: Log2DDataRow): void;
    /**
     * This method need to be called for each row of dense area
     * @param row row of area
     */
    abstract addRow(row: Log2DDataRow): void;
    /**
     * Get decimated row from previous added rows from beginning
     */
    abstract getDecimatedRow(): Log2DDataRow;
    static getClassName(): string;
    getClassName(): string;
}
