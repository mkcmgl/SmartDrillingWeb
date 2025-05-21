import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Point } from '@int/geotoolkit/util/Point';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Layer } from '@int/geotoolkit/scene/Layer';
import type { GhostBearingHandle } from '@int/geotoolkit/controls/editing/GhostBearingHandle';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Implements an abstract class for tools which manipulate Log Visuals
 */
export declare abstract class AbstractLogVisualEditingTool extends AbstractTool {
    /**
     * Creates a new instance of {@link @int/geotoolkit/welllog/widgets/tools/AbstractLogVisualEditingTool~AbstractLogVisualEditingTool} class
     * @param [options] manipulator layer or tool options
     * @param [name] name of the tool used like cross-hair etc
     */
    protected constructor(options?: AbstractLogVisualEditingTool.Options | CompositeNode, name?: string);
    setProperties(properties?: AbstractLogVisualEditingTool.Options): this;
    getProperties(): AbstractLogVisualEditingTool.OptionsOut;
    /**
     * Updates tool
     * @param forceUpdateShape the flag indicating if the associated node must be updated or not
     */
    abstract update(forceUpdateShape?: boolean): void;
    /**
     * Handles the event caused by user pressing the mouse button
     * @param eventArgs Native event arguments received from EventDispatcher
     */
    abstract onMouseDown(eventArgs: EventArgs): void;
    /**
     * Handles the event caused by user moving the mouse
     * @param eventArgs Native event arguments received from EventDispatcher
     */
    abstract onMouseMove(eventArgs: EventArgs): void;
    /**
     * Handles the event caused by user releasing the mouse button
     * @param eventArgs Native event arguments received from EventDispatcher
     */
    abstract onMouseUp(eventArgs: EventArgs): void;
    /**
     * Returns a point in model coordinates, edits one of the util points
     * @param args Event arguments
     */
    protected getDeviceXY(args: EventArgs): Point;
    /**
     * Makes a selection according to current position of the pointer
     * @param x X coordinate of the pointer
     * @param y Y coordinate of the pointer
     */
    protected makeSelection(x: number, y: number): Node[];
    /**
     * Iterates through handles and sets the provided visibility.
     * If the visibility is to hide, hides the ghosts as well
     * @param visible Visibility flag for handles
     */
    protected setHandlesVisible(visible: boolean): this;
    /**
     * Returns the last registered position of the mouse in device space
     */
    getPosition(): Point;
    /**
     * Gets the manipulator layer with contains handles
     * @deprecated since 4.0. Use {@link @int/geotoolkit/welllog/widgets/tools/AbstractLogVisualEditingTool~AbstractLogVisualEditingTool#getManipulatorLayer} instead
     */
    getCachedManipulatorLayer(): CompositeNode;
    /**
     * Returns the shape which this tool is manipulating
     */
    getShape(): Node | null;
    /**
     * Returns currently active handle,if exists, otherwise null
     */
    getActiveHandle(): null | GhostBearingHandle;
    /**
     * Returns the flag defining if a ghost should be moved instead of the actual object
     * @returns showGhost Show ghost flag
     */
    getShowGhost(): boolean;
    /**
     * Gets a flag defining if the ghost should be reset after it has been dropped
     */
    getHideGhostOnDrop(): boolean;
    /**
     * Returns registered styles for active, inactive, and ghost states of all handles
     * @returns object containing stylings for different types of handle states
     */
    getHandleStyles(): AbstractLogVisualEditingTool.HandleStylesOut;
    /**
     * Gets the shape painter with which is used to render handles. Format is the same as in {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape}
     * Redraws all handles
     * @returns painter
     */
    getHandlePainter(): SymbolShape.Painter;
    /**
     * Sets the last registered position of the mouse in device space
     * @param x The new X position
     * @param y The new Y position
     */
    setPosition(x: number, y: number): this;
    /**
     * Sets the handle currently active
     * @param handle The handle to be active
     */
    setActiveHandle(handle: GhostBearingHandle | null): this;
    /**
     * Sets the shape which this tool has to manipulate and calculate its handles from.
     * @param shape The new shape to set for manipulation
     */
    setShape(shape: Node | null): this;
    /**
     * Sets the flag defining if a ghost should be moved instead of the actual handle
     * @param showGhost Show ghost flag
     */
    setShowGhost(showGhost: boolean): this;
    /**
     * Gets a flag defining if the ghost should be reset after it has been dropped
     * @param hide True to hide ghosts when dropped
     */
    setHideGhostOnDrop(hide: boolean): this;
    /**
     * Sets styles for active, inactive, and ghost states of all handles, and redraws each handle (this will lose edited handles position)
     * @param styles object containing stylings for different types of handle states
     */
    setHandleStyles(styles: AbstractLogVisualEditingTool.HandleStyles): this;
    /**
     * Sets the shape painter with which the handles will be drawn. Format is the same as in
     * geotoolkit.scene.shapes.SymbolShape
     * Redraws all handles
     * @param painter The painter which will be used to draw the handles for linearly interpolated curves
     */
    setHandlePainter(painter: SymbolShape.Painter): this;
    /**
     * Sets the pixel side of the handles to which a size is applicable (anchored handles)
     * @param size The size of the handles in device coordinates (pixels)
     */
    setHandleSize(size: number): this;
    /**
     * Get the size of the handles
     */
    getHandleSize(): number;
    /**
     * Called when the tool is enabled or disabled
     */
    protected onEnabledStateChanged(): void;
}
export declare namespace AbstractLogVisualEditingTool {
    /**
     * tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * object containing stylings for different types of handle states
         */
        handlestyles?: HandleStyles;
        /**
         * handle size
         */
        handlesize?: number;
        /**
         * layer to which handles will be added. Cache enabled
         * @deprecated since 4.0. Use `Options.layer` instead
         */
        cachedlayer?: Group | Layer;
    };
    type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * object containing stylings for different types of handle states
         */
        handlestyles: HandleStylesOut;
        /**
         * handle size
         */
        handlesize: number;
    };
    /**
     * object containing stylings for different types of handle states
     */
    type HandleStylesOut = {
        /**
         * Line Style of the handle when it is in ghost state
         */
        ghostlinestyle?: LineStyle;
        /**
         * Fill Style of the handle when it is in ghost state
         */
        ghostfillstyle?: FillStyle;
        /**
         * Fill Style of the handle when it is selected and active
         */
        activefillstyle?: FillStyle;
        /**
         * Fill Style of the handle when it is selected and inactive
         */
        inactivefillstyle?: FillStyle;
        /**
         * Line Style of the handle when it is active
         */
        activelinestyle?: LineStyle;
        /**
         * Line Style of the handle when it is inactive
         */
        inactivelinestyle?: LineStyle;
    };
    /**
     * object containing stylings for different types of handle states
     */
    type HandleStyles = {
        /**
         * Line Style of the handle when it is in ghost state
         */
        ghostlinestyle?: LineStyle.Type;
        /**
         * Fill Style of the handle when it is in ghost state
         */
        ghostfillstyle?: FillStyle.Type;
        /**
         * Fill Style of the handle when it is selected and active
         */
        activefillstyle?: FillStyle.Type;
        /**
         * Fill Style of the handle when it is selected and inactive
         */
        inactivefillstyle?: FillStyle.Type;
        /**
         * Line Style of the handle when it is active
         */
        activelinestyle?: LineStyle.Type;
        /**
         * Line Style of the handle when it is inactive
         */
        inactivelinestyle?: LineStyle.Type;
    };
}
