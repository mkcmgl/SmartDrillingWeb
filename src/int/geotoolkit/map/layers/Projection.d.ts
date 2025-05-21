import { Projection as ProjectionSource } from '@int/geotoolkit/map/sources/Projection';
import { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { TileResourceManager } from '@int/geotoolkit/scene/TileResourceManager';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Projection layer is used to transform and display rectangular nodes on the map projection.
 */
export declare class Projection extends AbstractLayer {
    /**
     * @param [options] options
     */
    constructor(options?: Projection.Options);
    /**
     * Sets content node to be projected
     * @param node node to be projected
     * @returns this
     */
    setContentNode(node: Node & {
        getBounds(): Rect;
    }): this;
    /**
     * Returns current projected content node
     */
    getContentNode(): Node;
    /**
     * Returns resource manager used to create projection intermediate results
     */
    getResourceManager(): TileResourceManager;
    renderContent(context: RenderingContext): void;
}
export declare namespace Projection {
    /**
     * options
     */
    type Options = AbstractLayer.Options & {
        /**
         * content node to transform
         */
        node?: Node & {
            getBounds(): Rect;
        };
        /**
         * content transformation from node model limits to map coordinates
         */
        projection?: Transformation;
        source?: ProjectionSource;
    };
}
