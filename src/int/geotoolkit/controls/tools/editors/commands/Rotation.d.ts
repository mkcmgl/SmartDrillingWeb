/**
 * @module geotoolkit/controls/tools/editors/commands/Rotation
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * Command for rotating node around its center
 */
export declare class Rotation extends AbstractCommand {
    /**
     * @param angle rotation angle (in radians)
     */
    constructor(angle: number);
    /**
     * Returns rotation angle
     */
    getAngle(): number;
}
