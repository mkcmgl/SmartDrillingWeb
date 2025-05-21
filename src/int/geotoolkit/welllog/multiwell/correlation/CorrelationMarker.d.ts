import { Correlation } from '@int/geotoolkit/welllog/multiwell/correlation/Correlation';
import type { ILineDecoration } from '@int/geotoolkit/attributes/ILineDecoration';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define line correlation to connect two depth on different wells
 * @example
 * import {CorrelationMarker} from '@int/geotoolkit/welllog/multiwell/correlation/CorrelationMarker';
 * // Following example shows how to add a correlation marker
 * track.addChild(new CorrelationMarker({
 *       'linestyle': {
 *           'color': color,
 *           'width': 2,
 *           'pixelsnapmode': {'x': true, 'y': true}
 *       },
 *       'linedecoration': 'wavy',
 *       'leftdepth': leftDepth,
 *       'rightdepth': rightDepth
 *   }));
 */
export declare class CorrelationMarker extends Correlation {
    constructor(options?: CorrelationMarker.Options);
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
    /**
     * Set depth for correlation
     * @param leftDepth depth of the left well
     * @param rightDepth depth of the right well
     */
    setDepth(leftDepth: number, rightDepth: number): this;
    /**
     * Returns depth of the left well
     */
    getLeftDepth(): number;
    /**
     * Returns depth of the right well
     */
    getRightDepth(): number;
    render(context: RenderingContext): void;
}
export declare namespace CorrelationMarker {
    /**
     * additional options
     */
    type Options = Correlation.Options & {
        /**
         * depth on left well
         */
        leftdepth?: number;
        /**
         * depth on right well
         */
        rightdepth?: number;
        /**
         * line decoration style
         */
        linedecoration?: ILineDecoration | string;
    };
}
