import { RubberBandRenderMode } from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { MouseButtons } from '@int/geotoolkit/dom';
/**
 * AbstractRubberTool
 */
export declare class AbstractRubberTool extends AbstractTool {
    /**
     * @param [options] type of system events like mousedown etc. The slot object allows to attach browser events (HTML Dom Events) to your callback function or properties object
     * @param [name] name of the tool
     * @param [mode] Rubber mode
     */
    constructor(options?: AbstractRubberTool.Options, name?: string, mode?: RubberBandRenderMode);
    /**
     * Set the way the rectangle has to be displayed
     * @param mode the way the rectangle has to be displayed
     */
    setRubberBandRenderMode(mode: RubberBandRenderMode): this;
    /**
     * Return the way the rectangle is displayed
     */
    getRubberBandRenderMode(): RubberBandRenderMode;
    /**
     * Gets mouse buttons set for selection
     * @returns this
     */
    getMouseButtons(): MouseButtons;
    /**
     * Sets mouse buttons for selection
     * @param button mouse button
     * @returns this
     */
    setMouseButtons(button: MouseButtons): this;
}
export declare namespace AbstractRubberTool {
    /**
     * type of system events like mousedown etc. The slot object allows to attach browser events (HTML Dom Events) to your callback function or properties object
     */
    type Options = AbstractTool.Options & {
        /**
         * Rubber mode
         */
        mode?: RubberBandRenderMode;
    };
}
