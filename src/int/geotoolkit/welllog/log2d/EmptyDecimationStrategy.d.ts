import type { Log2DDataRow } from '@int/geotoolkit/welllog/data/Log2DDataRow';
import { AbstractDecimationStrategy } from '@int/geotoolkit/welllog/log2d/AbstractDecimationStrategy';
/**
 * This decimation strategy implements default behavior of Log2DVisual
 */
export declare class EmptyDecimationStrategy extends AbstractDecimationStrategy {
    /**
     * Creates decimation strategy
     */
    constructor();
    reset(firstRow: Log2DDataRow): void;
    addRow(row: Log2DDataRow): void;
    getDecimatedRow(): Log2DDataRow;
}
