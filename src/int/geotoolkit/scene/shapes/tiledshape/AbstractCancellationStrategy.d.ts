import type { TiledShape } from '@int/geotoolkit/scene/shapes/tiledshape/TiledShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Class for abstract cancellation strategy. It can be extended to stop request, that will be unnecessary
 */
export declare abstract class AbstractCancellationStrategy {
    /**
     * Function for filtering unnecessary requests. It returns true, if this request is valid.
     * @param requestData request data
     * @param tileShapeData tile shape data
     * @returns true, if this request is valid
     */
    abstract isRequestValid(requestData: TiledShape.ImageData, tileShapeData: AbstractCancellationStrategy.TileShapeData): boolean;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractCancellationStrategy {
    /**
     * tile shape data
     */
    type TileShapeData = {
        /**
         * visible model area of tile shape
         */
        visiblemodelarea: Rect;
    };
}
