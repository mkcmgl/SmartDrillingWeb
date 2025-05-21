/**
 * Define an interface for 3D objects who make use of a tile system to render.
 * Tile rendering might require manually updating the tiles (as opposed to single texture object), this is why this interface exists.
 */
export declare abstract class ITiledSurface {
    /**
     * Reset the tiles of this object.
     * Depending on the object options, the tiles might be filled with a fill color.
     */
    abstract resetTiles(): void;
}
