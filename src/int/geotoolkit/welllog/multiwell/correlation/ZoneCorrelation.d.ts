import { LogLithology } from '@int/geotoolkit/welllog/LogLithology';
import { CompositeCorrelation } from '@int/geotoolkit/welllog/multiwell/correlation/CompositeCorrelation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Define auto correlation to connect lithologies with the same names
 */
export declare class ZoneCorrelation extends CompositeCorrelation {
    constructor(options?: CompositeCorrelation.Options);
    /**
     * Get correlation names
     * @param visual visual
     */
    getNames(visual: LogLithology): Record<string, string>;
    renderContent(localContext: RenderingContext, leftTrack: Node, rightTrack: Node, correlationDesc: CompositeCorrelation.CorrelationDescriptions<LogLithology>): void;
}
