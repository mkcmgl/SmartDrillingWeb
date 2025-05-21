/**
 * @module geotoolkit/controls/tools/editors/commands/Flip
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * Command for flipping node vertically and/or horizontally
 */
export declare class Flip extends AbstractCommand {
    /**
     * @param flipX true if node should be flipped horizontally, false otherwise
     * @param flipY true if node should be flipped vertically, false otherwise
     */
    constructor(flipX: boolean, flipY: boolean);
    /**
     * Returns true if node should be flipped horizontally
     */
    getFlipX(): boolean;
    /**
     * Returns true if node should be flipped vertically
     */
    getFlipY(): boolean;
}
