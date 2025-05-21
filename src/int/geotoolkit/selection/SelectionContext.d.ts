/**
 * @module geotoolkit/selection/SelectionContext
 */
import { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { SelectedItem } from '@int/geotoolkit/selection/SelectedItem';
/**
 * Define a base selection context to be used for picking strategies
 */
export declare abstract class SelectionContext extends RenderingContext {
    /**
     * Check selection of node and call onselect if node is selected
     *
     * @param node node to pick
     * @param listener function to be called on select
     */
    abstract pick(node: Node, listener: (node: Node) => void): void;
    /**
     * Push selection
     * @param selection selected object
     * @returns this
     */
    abstract pushSelection(selection: Node | SelectedItem): this;
}
