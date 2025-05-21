import { ConnectorShape } from '@int/geotoolkit/schematics/labeling/ConnectorShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Polyline label connector shape representation
 */
export declare class DefaultConnectorShape extends ConnectorShape {
    constructor(options?: ConnectorShape.Options);
    render(context: RenderingContext): void;
}
