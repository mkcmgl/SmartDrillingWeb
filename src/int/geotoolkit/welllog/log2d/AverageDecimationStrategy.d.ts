import { Log2DDataRow } from '@int/geotoolkit/welllog/data/Log2DDataRow';
import { AbstractDecimationStrategy } from '@int/geotoolkit/welllog/log2d/AbstractDecimationStrategy';
/**
 * This decimation strategy creates decimated row as average values of each internal rows
 */
export declare class AverageDecimationStrategy extends AbstractDecimationStrategy {
    /**
     * Creates decimation strategy
     * @param isRound if true, decimated row values will be rounded
     */
    constructor(isRound?: boolean);
    reset(firstRow: Log2DDataRow): void;
    addRow(row: Log2DDataRow): void;
    getDecimatedRow(): Log2DDataRow;
}
