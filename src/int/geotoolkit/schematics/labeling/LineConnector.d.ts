import { ConnectorShape } from '@int/geotoolkit/schematics/labeling/ConnectorShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * LineConnector Shape
 */
export declare class LineConnector extends ConnectorShape {
    constructor(options?: ConnectorShape.Options);
    render(context: RenderingContext): void;
}
