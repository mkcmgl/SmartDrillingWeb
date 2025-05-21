import { Group } from '@int/geotoolkit/scene/Group';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { LiteEvent } from '@int/geotoolkit/flowcharts/utils/LiteEvent';
import { ShapeAdapterRegistry } from '@int/geotoolkit/controls/editing/ShapeAdapterRegistry';
import type { Node } from '@int/geotoolkit/scene/Node';
import { Point } from '@int/geotoolkit/util/Point';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
/**
 * A mechanism providing interactivity between a user and DiagramWidget. Main tool for visuals editing in the Diagram
 */
export declare class DiagramTool extends AbstractTool {
    /**
     * @param [options] model layer
     * @param [handlesLayer] handles layer
     */
    constructor(options?: DiagramTool.Options | Group, handlesLayer?: CompositeNode);
    /**
     * Gets an associated shapes adapter registry
     * @returns a shape adapters registry associated with the tool
     */
    getShapeAdapters(): ShapeAdapterRegistry;
    /**
     * Clears current selection
     */
    clearSelection(): void;
    /**
     * Starts the adapter, using devicePoint as start point
     * @param nodes nodes collection to operate on
     * @param devicePoint start point in device coordinates
     * @param eventArgs arguments to start
     * @returns active selection
     */
    startAdapter(nodes: Node[], devicePoint: Point, eventArgs: ProxyEventArgs): Node[];
    /**
     * Returns currently selected shapes.
     * @returns a collection of shapes
     * that are currently selected with this tool
     */
    getActiveSelection(): Node[];
    /**
     * Show shape adapters for specified shapes
     * @param shapes a collection of shapes to select
     */
    selectVisuals(shapes: Node[] | Group[]): this;
    /**
     * Returns a flag indicating if the text editor should be enabled or not
     * @returns true - if enabled, false - if not
     */
    getTextEditorEnabled(): boolean;
    /**
     * Enables or disables text editor upon double click
     * @param value flag indicating if the text editor should be enabled or disabled
     * @returns this
     */
    setTextEditorEnabled(value: boolean): this;
    /**
     * Event that raises on selection change
     */
    getOnSelectionChangeEvent(): LiteEvent;
}
export declare namespace DiagramTool {
    /**
     * model layer
     */
    type Options = AbstractTool.Options & {
        /**
         * model layer
         */
        model?: Group;
    };
}
