/**
 * @module geotoolkit/controls/tools/editors/commands/DragPoint
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * Command for dragging node's geometry point
 */
export declare class DragPoint extends AbstractCommand {
    /**
     * @param dx point x-ordinate translation
     * @param dy point y-ordinate translation
     * @param index index of the dragging point
     */
    constructor(dx: number, dy: number, index: number);
    /**
     * Returns point x-ordinate translation
     */
    getTranslateX(): number;
    /**
     * Returns point y-ordinate translation
     */
    getTranslateY(): number;
    /**
     * Returns index of the dragging point
     */
    getIndex(): number;
}
