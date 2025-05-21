import { Group } from '@int/geotoolkit/scene/Group';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
/**
 * Group with associated scrollbars.
 */
export declare class ScrollablePanel extends Group {
    constructor(options?: ScrollablePanel.Options);
    /**
     * Returns content group
     * @returns content
     */
    getContent(): Group;
    /**
     * Recalculates content bounds and updates scrolls
     * @param {boolean} isInternal when calling the method inside the class, pass the value true
     * @returns this
     */
    updateLimits(isInternal?: boolean): this;
    setBounds(bounds: Rect): this;
    /**
     * Fit size to content
     * @returns this
     */
    fitContent(): this;
    /**
     * Gets associated tools
     */
    getTools(): AbstractTool[];
    /**
     * Gets autosize
     */
    getAutoSize(): boolean;
    /**
     * Sets autosize
     */
    setAutoSize(autosize: boolean): this;
}
export declare namespace ScrollablePanel {
    /**
     * options
     */
    type Options = Group.Options & {
        /**
         * content to add
         */
        content?: Node | Node[] | Iterator<Node>;
        /**
         * auto size to calculate device size of the panel
         */
        autosize?: boolean;
        /**
         * scrolls options
         */
        scroll?: {
            /**
             * vertical scroll options
             */
            vertical?: {
                /**
                 * vertical scroll type
                 */
                type?: string;
                /**
                 * vertical scroll name
                 */
                name?: string;
                /**
                 * vertical scroll size
                 */
                size?: number;
                /**
                 * vertical scroll visibility
                 */
                visible?: boolean;
                /**
                 * vertical scroll mode
                 */
                floating?: boolean;
                /**
                 * vertical scroll options, see setOptions of corresponding scroll for details
                 */
                options?: any;
            };
            /**
             * horizontal scroll options
             */
            horizontal?: {
                /**
                 * horizontal scroll type
                 */
                type?: string;
                /**
                 * horizontal scroll name
                 */
                name?: string;
                /**
                 * horizontal scroll size
                 */
                size?: number;
                /**
                 * horizontal scroll visibility
                 */
                visible?: boolean;
                /**
                 * horizontal scroll mode
                 */
                floating?: boolean;
                /**
                 * horizontal scroll options, see setOptions of corresponding scroll for details
                 */
                options?: any;
            };
        };
    };
}
