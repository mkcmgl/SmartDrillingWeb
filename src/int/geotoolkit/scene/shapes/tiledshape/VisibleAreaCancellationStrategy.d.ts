/**
 * @module geotoolkit/scene/shapes/tiledshape/VisibleAreaCancellationStrategy
 */
import { AbstractCancellationStrategy } from '@int/geotoolkit/scene/shapes/tiledshape/AbstractCancellationStrategy';
import type { TiledShape } from '@int/geotoolkit/scene/shapes/tiledshape/TiledShape';
/**
 * Cancellation strategy, that cancels requests, if they are not in visible model area
 */
export declare class VisibleAreaCancellationStrategy extends AbstractCancellationStrategy {
    isRequestValid(requestData: TiledShape.ImageData, tileShapeData: AbstractCancellationStrategy.TileShapeData): boolean;
}
