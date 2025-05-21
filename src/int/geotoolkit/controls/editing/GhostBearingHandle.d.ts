import { AbstractHandle } from '@int/geotoolkit/controls/editing/AbstractHandle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
/**
 * Implements a handle which has an option to create a ghost of itself and has the api to manage the ghost.
 */
export declare abstract class GhostBearingHandle extends AbstractHandle {
    protected constructor(options?: GhostBearingHandle.Options);
    /**
     * Returns true if a ghost has been initialized for this handle
     */
    hasGhost(): boolean;
    /**
     * If a ghost exists, this method disposes the ghost
     */
    removeGhost(): this;
    /**
     * Disposes this handle, Clear all listeners and remove the ghost
     */
    dispose(): void;
    /**
     * Creates a copy of this handle, sets ghost styles, registers it as a ghosts
     * and returns the ghost
     */
    createGhost(): GhostBearingHandle;
    /**
     * Returns true if this handle is a ghost
     */
    isGhost(): boolean;
    /**
     * Returns the ghost registered with this handle. If ghost does not exist, returns null
     */
    getGhost(): null | GhostBearingHandle;
    /**
     * Resets ghost anchors and transformation to match the real handle
     * @returns this
     */
    resetGhost(): this;
    /**
     * Sets a flag to this handle which specifies if it is currently a ghost, used internally
     * @param ghost Is Ghost flag
     */
    protected setGhostMode(ghost: boolean): this;
    /**
     * Gets the handle to which this ghost is associated
     */
    getParentHandle(): null | GhostBearingHandle;
    /**
     * Sets the handle to which this ghost is associated, used internally
     * @param parent The parent to associate this handle with
     */
    protected setParentHandle(parent: GhostBearingHandle): this;
    /**
     * Sets current adapter of the real handle if this is a ghost, otherwise sets the adapter to this handle
     * @param [adapter] adapter for current shape
     * @returns this
     */
    setAdapter(adapter?: ShapeAdapter): this;
    /**
     * Return fill style for ghost mode state
     *
     * @returns fillStyle current ghost fill style
     */
    getGhostFillStyle(): FillStyle | null;
    /**
     * Sets fill style for ghost mode state
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setGhostFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return line style for ghost mode stat
     *
     * @returns gets current ghost line style
     */
    getGhostLineStyle(): LineStyle | null;
    /**
     * Set line style for ghost mode state
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setGhostLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Returns current adapter of the real handle if this is a ghost, otherwise returns the adapter to this handle
     */
    getAdapter(): ShapeAdapter | null;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): GhostBearingHandle.OptionsOut;
    /**
     * Sets properties pertaining to this object
     * @param props properties
     * @returns this
     */
    setProperties(props?: GhostBearingHandle.Options): this;
    /**
     * Sets visibility of the handle and its ghost
     * @param visible Visibility flag
     */
    setVisible(visible: boolean): this;
}
export declare namespace GhostBearingHandle {
    /**
     * object containing handle properties
     */
    type Options = AbstractHandle.Options & {
        /**
         * The line style to apply to the ghost
         */
        ghostlinestyle?: LineStyle.Type;
        /**
         * The fill style to apply to the ghost
         */
        ghostfillstyle?: FillStyle.Type;
        /**
         * Is Ghost flag
         * width and height will be set to that number
         */
        isghost?: boolean;
    };
    type OptionsOut = AbstractHandle.OptionsOut & {
        /**
         * The line style to apply to the ghost
         */
        ghostlinestyle?: LineStyle;
        /**
         * The fill style to apply to the ghost
         */
        ghostfillstyle?: FillStyle;
        /**
         * Is Ghost flag
         */
        isghost?: boolean;
    };
}
