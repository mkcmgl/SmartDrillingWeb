import { Correlation } from '@int/geotoolkit/welllog/multiwell/correlation/Correlation';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * Define auto correlation to connect two nodes with the same names
 * @throws {Error} will throw an error if options.visualClass == null
 */
export declare abstract class CompositeCorrelation extends Correlation {
    protected constructor(options?: CompositeCorrelation.Options);
    /**
     * Render correlation
     * @param localContext context
     * @param leftTrack left track
     * @param rightTrack right track
     * @param correlationDesc correlation description
     */
    abstract renderContent(localContext: RenderingContext, leftTrack: Node, rightTrack: Node, correlationDesc: CompositeCorrelation.CorrelationDescriptions): void;
    /**
     * Get correlation names
     * @param visual visual
     */
    abstract getNames(visual: LogAbstractVisual): Record<string, string>;
    /**
     * Transform depth
     * @param track track
     * @param depth depth
     */
    transformDepth(track: Node, depth: number): number;
    render(context: RenderingContext): void;
}
export declare namespace CompositeCorrelation {
    /**
     * additional options
     */
    type Options = Correlation.Options & {
        /**
         * class for build correlations
         */
        visualclass?: typeof LogAbstractVisual;
        /**
         * a function to filter visuals
         */
        filter?: FilterCallback;
    };
    type CorrelationDescriptions<Visual extends LogAbstractVisual = LogAbstractVisual> = {
        name: string;
        left: Visual;
        right: Visual;
    };
    /**
     * Function to filter nodes
     */
    type FilterCallback = (node: Node) => boolean;
}
