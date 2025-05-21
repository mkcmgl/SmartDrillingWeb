/**
 * @module geotoolkit/controls/tools/editors/commands/group
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import { Group as OriginGroup } from '@int/geotoolkit/scene/Group';
/**
 * Command to group nodes into a single parent node
 */
export declare class Group extends AbstractCommand {
    constructor();
    /**
     * Sets group to use as a common parent node
     * @param group group to contain all the children
     * @returns this
     */
    setGroup(group: OriginGroup): this;
    /**
     * Returns common parent node
     */
    getGroup(): OriginGroup;
}
/**
 * Command to ungroup composite node into its children
 */
export declare class Ungroup extends AbstractCommand {
    constructor();
}
