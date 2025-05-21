/**
 * @module geotoolkit/controls/tools/editors/commands/Resize
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Command for resizing node
 * @example
 * Resize direction:
 * {
 *     vx: 1,
 *     vy: 1,
 *     delta: 0.5 // node should be stretched +50% in the <1, 1> direction
 * }
 */
export declare class Resize extends AbstractCommand {
    /**
     * @param directions resize directions options
     */
    constructor(directions: Resize.Direction[], rectToRect?: Transformation);
    /**
     * Returns resize handle id
     */
    getBoundsTransformation(): Transformation;
    /**
     * Returns resize direction options
     */
    getResizeDirections(): Resize.Direction[];
}
export declare namespace Resize {
    /**
     * Defines resize direction (xx or yy)
     */
    type Direction = {
        /**
         * resize direction vector x-ordinate
         */
        vx: number;
        /**
         * resize direction vector y-ordinate
         */
        vy: number;
        /**
         * resize delta (in size of current bounds)
         */
        delta: number;
    };
}
