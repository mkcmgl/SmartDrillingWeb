/**
 * @module geotoolkit/widgets/sync/SyncMode
 */
/**
 * Enum defining synchronization modes
 * @enum
 * @readonly
 */
export declare enum SyncMode {
    /**
     * Synchronize the visible model range
     */
    VisibleRange = "visiblerange",
    /**
     * Synchronize the scale factors and position
     */
    Scale = "scale",
    /**
     * Synchronize the local transformation and model limits in the specified direction
     */
    Model = "model",
    /**
     * Custom synchronization
     */
    Custom = "custom"
}
