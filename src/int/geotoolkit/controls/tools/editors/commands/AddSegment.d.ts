/**
 * @module geotoolkit/controls/tools/editors/commands/AddSegment
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import { Point } from '@int/geotoolkit/util/Point';
/**
 * Command to create node a segment
 */
export declare class AddSegment extends AbstractCommand {
    /**
     * @param from segment start point
     * @param to segment end point
     * @param [isContinue]
     */
    constructor(from: Point, to: Point, isContinue?: boolean);
    /**
     * Returns segment start point
     */
    getFrom(): Point;
    /**
     * Returns segment end point
     */
    getTo(): Point;
}
