/**
 * @module geotoolkit/scene/shapes/tiledshape/Events
 */
/**
 * Tile shape events
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * This event is fired when tile begins loading
     * @event module:geotoolkit/scene/shapes/tiledshape/Events~Events~TileLoading
     * @param {object} object with model area of tile
     * @param {import("geotoolkit/util/Rect").Rect} object.modelArea model area of tile
     */
    TileLoading = "TileLoading",
    /**
     * This event is fired when tile is loaded
     * @event module:geotoolkit/scene/shapes/tiledshape/Events~Events~TileLoaded
     * @param {object} object with model area of tile
     * @param {import("geotoolkit/util/Rect").Rect} object.modelArea model area of tile
     * @param {number} object.time time for loading tile
     */
    TileLoaded = "TileLoaded",
    /**
     * This event is fired when tile is cancelled
     * @event module:geotoolkit/scene/shapes/tiledshape/Events~Events~TileCancelled
     * @param {object} object with model area of tile
     * @param {import("geotoolkit/util/Rect").Rect} object.modelArea model area of tile
     * @param {number} object.time time for cancelling tile
     */
    TileCancelled = "TileCancelled",
    /**
     * This event is fired when tile begins rendering
     * @event module:geotoolkit/scene/shapes/tiledshape/Events~Events~TileRendering
     * @param {object} object with model area of tile
     * @param {import("geotoolkit/util/Rect").Rect} object.modelArea model area of tile
     */
    TileRendering = "TileRendering",
    /**
     * This event is fired when tile is rendered
     * @event module:geotoolkit/scene/shapes/tiledshape/Events~Events~TileRendered
     * @param {object} object with model area of tile
     * @param {import("geotoolkit/util/Rect").Rect} object.modelArea model area of tile
     * @param {number} object.time time for rendering tile
     */
    TileRendered = "TileRendered",
    /**
     * This event is fired when first tile begins loading
     * @event module:geotoolkit/scene/shapes/tiledshape/Events~Events~FirstTileLoading
     */
    FirstTileLoading = "FirstTileLoading",
    /**
     * This event is fired when last tile is rendered
     * @event module:geotoolkit/scene/shapes/tiledshape/Events~Events~LastTileRendered
     * @param {object} object with information about performance
     * @param {object} object.tilesLoading object where keys are model area of tile and values are loading time
     * @param {object} object.tilesCancelling object where keys are model area of tile and values are cancelling time
     * @param {object} object.tilesRendering object where keys are model area of tile and values are rendering time
     * @param {number} object.time full loading and rendering time
     */
    LastTileRendered = "LastTileRendered"
}
