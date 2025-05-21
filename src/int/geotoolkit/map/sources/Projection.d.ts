import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Image } from '@int/geotoolkit/map/sources/Image';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { TileResourceManager } from '@int/geotoolkit/scene/TileResourceManager';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Projection source for transforming rectangular nodes to the map projection.
 */
export declare class Projection extends Image {
    /**
     * @param [options] options
     */
    constructor(options?: Projection.Options);
    /**
     * Sets content node to be projected
     * @param node node to be projected
     * @returns this
     */
    setContentNode(node: Projection.BoundedNode): this;
    /**
     * Returns current projected content node
     */
    getContentNode(): Node;
    /**
     * Returns resource manager used to create projection intermediate results
     */
    getResourceManager(): TileResourceManager;
}
export declare namespace Projection {
    /**
     * options
     */
    type Options = Image.Options & {
        /**
         * content node to transform
         */
        node?: BoundedNode;
        /**
         * content transformation from node model limits to map coordinates
         */
        projection?: Transformation;
    };
    type BoundedNode = Node & {
        getBounds(): Rect;
    };
}
