/**
 * @module geotoolkit/welllog/widgets/visuals/LogHeaderContainer
 */
import { HeaderContainer } from '@int/geotoolkit/welllog/HeaderContainer';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
export declare class LogHeaderContainer extends HeaderContainer {
    /**
     * @param [options]
     */
    constructor(options?: HeaderContainer.Options | LogVisualHeaderProvider);
    /**
     * Add layer or layer collection to container
     * @param layer layer to be added
     * @returns this
     */
    addLayer(layer: CompositeNode | CompositeNode[]): this;
    /**
     * Remove layer from container
     * @param layer layer to be removed
     * @returns this
     */
    removeLayer(layer: CompositeNode): this;
    /**
     * Returns amount of layers
     */
    getLayersCount(): number;
    /**
     * Return layer at specified index
     * @param index index at which to get the layer for
     * @returns track
     */
    getLayerAt(index: number): CompositeNode;
}
