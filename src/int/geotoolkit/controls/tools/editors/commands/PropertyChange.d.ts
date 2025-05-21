/**
 * @module geotoolkit/controls/tools/editors/commands/PropertyChange
 */
import { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * Command for changing node's property
 */
export declare class PropertyChange extends AbstractCommand {
    /**
     * @param name property name to change
     * @param value new property value
     */
    constructor(name: string, value: any);
    /**
     * Returns changing property name
     */
    getName(): string;
    /**
     * Returns new changing property value
     */
    getValue(): any;
}
