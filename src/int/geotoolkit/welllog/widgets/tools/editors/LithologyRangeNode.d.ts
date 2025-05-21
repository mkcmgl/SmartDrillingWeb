import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * Auxiliary node to create new lithology ranges
 */
export declare class LithologyRangeNode extends LogAbstractVisual {
    /**
     * @param [options] the node options
     */
    constructor(options?: LogAbstractVisual.Options);
    render(context: RenderingContext): void;
}
