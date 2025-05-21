/**
 * @module geotoolkit/flowcharts/commands/TransformVisuals
 */
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { ICommand } from '@int/geotoolkit/flowcharts/commands/ICommand';
import type { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
/**
 * Transforms visuals
 */
export declare class TransformVisuals implements ICommand {
    /**
     * @param options command options
     */
    constructor(options: TransformVisuals.Options);
    /**
     * Gets the visual collection
     */
    protected getVisuals(): IComponent[];
    /**
     * Sets the visual collection
     */
    protected setVisuals(value: IComponent[]): void;
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
export declare namespace TransformVisuals {
    /**
     * command options
     */
    type Options = {
        /**
         * a visual to move
         * @deprecated deprecated since 4.0. Use {@link import("geotoolkit/flowcharts/commands/TransformVisuals").TransformVisuals.Options.visuals} instead
         */
        visual?: IComponent;
        /**
         * the target visual collection
         */
        visuals?: IComponent[];
        /**
         * model location
         */
        transformation?: Transformation;
    };
}
