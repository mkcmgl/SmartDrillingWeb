/**
 * @module geotoolkit/seismic/data/IServerSideRenderingProvider
 */
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Cancel } from '@int/geotoolkit/util/Cancel';
import type { pickSampleCallback } from '@int/geotoolkit/seismic/data/snap/PickSampleCallback';
import type { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import type { TiledShape } from '@int/geotoolkit/scene/shapes/tiledshape/TiledShape';
/**
 * Define an interface for remote reader data provider with server side rendering.
 * @interface
 */
export declare abstract class IServerSideRenderingProvider {
    /**
     * Pick sample
     * @param x x coordinate for picking sample (in seismic model space)
     * @param y y coordinate for picking sample (in seismic model space)
     * @param target instance of callback owner
     * @param callback This function called when data is ready.
     * @param [options] additional options
     */
    abstract pickSample(x: number, y: number, target: any, callback: pickSampleCallback, options?: IServerSideRenderingProvider.PickSampleOptions): void;
    /**
     * Get tile URL formatter function
     * @returns formatter
     */
    abstract getTileURLFormatter(): IServerSideRenderingProvider.TileURLFormatterCallback;
    /**
     * Return function to load tile. If it returns null the default loader is used
     * @returns the returned function
     * @see {@link import("geotoolkit/seismic/data/IServerSideRenderingProvider").IServerSideRenderingProvider.TileLoaderCallback}
     */
    abstract getTileLoader(): IServerSideRenderingProvider.TileLoaderCallback;
}
export declare namespace IServerSideRenderingProvider {
    /**
     * additional options
     */
    type PickSampleOptions = {
        /**
         * picking strategy name
         */
        strategyname?: string;
    };
    type TileURLFormatterCallback = (data: Data) => string;
    /**
     * Get tile. If it is not implemented the default loader is used
     */
    type TileLoaderCallback = (data: {
        /**
         * url if formatter returns it
         */
        url?: string;
        options: SeismicPipeline.Options;
    }, callback: TiledShape.ImageLoadedCallback) => Cancel | Promise<any> | null;
    /**
     * data
     */
    type Data = {
        /**
         * device tile rect
         */
        devicearea: Rect;
        /**
         * model tile rect
         */
        tilerect: Rect;
        /**
         * device shape rect
         */
        transformedmodelrect: Rect;
        /**
         * options from {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline}
         */
        options: SeismicPipeline.Options;
        /**
         * condition to tell, which traces are requested. This information is optional. This information is optional. It can be bigger than
         * tileRect because it extends area by clipping factor
         */
        condition?: SeismicPipeline.SelectCondition;
    };
}
