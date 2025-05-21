import { AbstractVisual } from '@int/geotoolkit/contour/visuals/AbstractVisual';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * The Border Visual. Draws the borders of contour
 * (parts of contour that are bounded by area border, holes and faults).
 */
export declare class ContourBorderVisual extends AbstractVisual {
    constructor(options?: ContourBorderVisual.Options);
    /**
     * Render the border visual.
     * @param renderingContext The rendering context.
     */
    render(renderingContext: RenderingContext): void;
}
export declare namespace ContourBorderVisual {
    type Options = AbstractVisual.Options;
}
