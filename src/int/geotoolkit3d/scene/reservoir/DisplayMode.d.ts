/**
 * @module geotoolkit3d/scene/reservoir/DisplayMode
 */
/**
 * Enum of Reservoir Skeleton Modes.<br>
 * <br>
 * The values of this enums can be used to determine the rendering mode of a reservoir.
 * @enum
 * @readonly
 */
export declare class DisplayMode extends Array<boolean> {
    /**
     * Show everything: the mesh, the property (skeleton) and the horizons
     */
    static get Full(): DisplayMode;
    /**
     * Show everything but the horizons
     */
    static get IgnoreHorizons(): DisplayMode;
    /**
     * Show everything but the mesh
     */
    static get IgnoreMesh(): DisplayMode;
    /**
     * Show everything but the grid property (skeleton)
     */
    static get IgnoreProperty(): DisplayMode;
    /**
     * Show only the property (skeleton)
     */
    static get Property(): DisplayMode;
    /**
     * Show only the mesh
     */
    static get Mesh(): DisplayMode;
    /**
     * Show only the horizons
     */
    static get Horizons(): DisplayMode;
    /**
     * Hide all
     */
    static get Nothing(): DisplayMode;
}
