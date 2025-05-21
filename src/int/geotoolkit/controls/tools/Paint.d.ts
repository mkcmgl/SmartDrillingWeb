import { PaintMode } from '@int/geotoolkit/controls/tools/PaintMode';
import { AbstractEditingTool } from '@int/geotoolkit/controls/tools/AbstractEditingTool';
/**
 * Paint tool is used to create/modify nodes, using {@link @int/geotoolkit/controls/tools/editors/AbstractEditor~AbstractEditor}'s
 */
export declare class Paint extends AbstractEditingTool {
    /**
     * Creates paint tool
     * @param [options] tool options
     */
    constructor(options?: Paint.Options);
    /**
     * Sets painting mode
     * @param mode painting mode
     */
    setMode(mode: PaintMode): this;
    /**
     * Returns current painting mode
     */
    getMode(): PaintMode;
    /**
     * Sets paint tool properties (mode, styles, etc.)
     * @param [props] tool props
     * @returns this
     */
    setProperties(props?: Paint.Options): this;
    /**
     * Returns all properties
     * @returns tool options
     */
    getProperties(): Paint.OptionsOut;
    /**
     * Clears scene from all the painting elements
     * @returns this
     */
    clear(): this;
}
export declare namespace Paint {
    /**
     * tool options
     */
    type Options = AbstractEditingTool.Options & {
        /**
         * paint mode to determine which shape is currently creating
         */
        mode?: PaintMode;
    };
    /**
     * tool options
     */
    type OptionsOut = AbstractEditingTool.OptionsOut & {
        /**
         * paint mode to determine which shape is currently creating
         */
        mode?: PaintMode;
    };
}
