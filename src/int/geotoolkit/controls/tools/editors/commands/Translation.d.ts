/**
 * @module geotoolkit/controls/tools/editors/commands/Translation
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * Command for translating node
 */
export declare class Translation extends AbstractCommand {
    /**
     * @param dx x-ordinate translation value
     * @param dy y-ordinate translation value
     */
    constructor(dx: number, dy: number);
    /**
     * Returns X translation (dx)
     */
    getTranslateX(): number;
    /**
     * Returns Y translation (dy)
     */
    getTranslateY(): number;
}
