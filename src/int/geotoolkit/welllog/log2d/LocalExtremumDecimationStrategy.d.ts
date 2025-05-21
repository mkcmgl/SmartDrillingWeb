import { Log2DDataRow } from '@int/geotoolkit/welllog/data/Log2DDataRow';
import { AbstractDecimationStrategy } from '@int/geotoolkit/welllog/log2d/AbstractDecimationStrategy';
/**
 * This decimation strategy creates decimated row as extremum values of each internal rows
 */
export declare class LocalExtremumDecimationStrategy extends AbstractDecimationStrategy {
    /**
     * Creates decimation strategy
     * @param isMinimum if true, decimated row will be created as minimum values, else as maximum values
     */
    constructor(isMinimum?: boolean);
    reset(firstRow: Log2DDataRow): void;
    addRow(row: Log2DDataRow): void;
    getDecimatedRow(): Log2DDataRow;
}
