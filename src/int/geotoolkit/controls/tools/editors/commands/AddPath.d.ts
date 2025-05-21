/**
 * @module geotoolkit/controls/tools/editors/commands/AddPath
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * Command to create node from continuous sequence of points
 */
export declare class AddPath extends AbstractCommand {
    /**
     * @param x point x-ordinate
     * @param y point y-ordinate
     */
    constructor(x: number, y: number);
    /**
     * @param x points x-ordinate array
     * @param y points y-ordinate array
     */
    constructor(x: number[], y: number[]);
    /**
     * Returns points x-ordinate array
     */
    getX(): number[];
    /**
     * Returns points y-ordinate array
     */
    getY(): number[];
}
