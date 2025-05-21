import { ICommand } from '@int/geotoolkit/flowcharts/commands/ICommand';
import { DiagramWidget } from '@int/geotoolkit/flowcharts/shapes/DiagramWidget';
import type { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
import { Point } from '@int/geotoolkit/util/Point';
/**
 * Adds a new visual to the DiagramWidget.
 */
export declare class AddVisual implements ICommand {
    /**
     * @param options command options
     */
    constructor(options: AddVisual.Options);
    /**
     * Executes the command
     * @returns true on success, false if not executed
     */
    execute(): boolean;
    /**
     * Rewinds the command
     * @returns true on success, false if couldn't be undone
     */
    undo(): boolean;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AddVisual {
    /**
     * command options
     */
    type Options = {
        /**
         * a host widget
         */
        widget?: DiagramWidget;
        /**
         * visuals to add
         */
        visuals?: IComponent | IComponent[];
        /**
         * flag indicating if the location denotes visual's center
         */
        center?: boolean;
        /**
         * model location
         */
        location?: Point;
    };
}
