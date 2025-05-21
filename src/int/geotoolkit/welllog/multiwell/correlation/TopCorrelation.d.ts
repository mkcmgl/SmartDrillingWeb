import { LogMarker } from '@int/geotoolkit/welllog/LogMarker';
import { CompositeCorrelation } from '@int/geotoolkit/welllog/multiwell/correlation/CompositeCorrelation';
import type { ILineDecoration } from '@int/geotoolkit/attributes/ILineDecoration';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Define auto correlation to connect two markers with the same names
 */
export declare class TopCorrelation extends CompositeCorrelation {
    constructor(options?: TopCorrelation.Options);
    /**
     * Get correlation names
     * @param visual visual
     */
    getNames(visual: LogMarker): Record<string, string>;
    /**
     * Return Correlation Marker Line Decoration Style
     */
    getLineDecoration(): ILineDecoration;
    /**
     * Specify Correlation Marker Line Decoration style
     *
     * @param lineDecoration line decoration style
     * @returns this
     */
    setLineDecoration(lineDecoration: ILineDecoration | string): this;
    renderContent(localContext: RenderingContext, leftTrack: Node, rightTrack: Node, correlationDesc: CompositeCorrelation.CorrelationDescriptions<LogMarker>): void;
}
export declare namespace TopCorrelation {
    /**
     * additional options
     */
    type Options = CompositeCorrelation.Options & {
        /**
         * line decoration style
         */
        linedecoration?: ILineDecoration | string;
    };
}
