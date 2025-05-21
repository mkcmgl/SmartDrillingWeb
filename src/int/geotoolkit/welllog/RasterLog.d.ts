import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { TiledShape } from '@int/geotoolkit/scene/shapes/tiledshape/TiledShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Type of raster log event
 * @enum
 */
export declare enum Events {
    /**
     * Image Options is changing
     */
    ImageOptionsChanging = "ImageOptionsChanging",
    /**
     * Image Options is changed
     */
    ImageOptionsChanged = "ImageOptionsChanged"
}
/**
 * Defines a raster log visual which loads image by tiles using tile provider and maps them
 * to different intervals
 * @example
 * // Use formatter and image loader
 * // Formatter gets tiled shape data and transforms it to URL string.
 * // data['tilerect'] contains tile rect in model coordinates
 * // data['devicearea'] contains tile rect in device coordinates
 * // data['transformedmodelrect'] contains full tiled shape in device coordinates
 * // data['i'] contains horizontal index of tile
 * // data['j'] contains vertical index of tile
 * // Image loader gets URL string and load image data to draw it later, it must return Promise.
 * import {RasterLog} from '@int/geotoolkit/welllog/RasterLog';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {HttpClient} from '@int/geotoolkit/http/HttpClient';
 * const raster = new RasterLog({
 *       'name': filename,
 *       'formatter': (data) => {
 *           const deviceArea = data['devicearea'];
 *           const deviceTotal = data['transformedmodelrect'];
 *           const cropRect = deviceArea.clone().intersect(deviceTotal);
 *           const cropWidth = Math.min(deviceTotal.getWidth(), Math.ceil(cropRect.getWidth()));
 *           const cropHeight = Math.min(deviceTotal.getHeight(), Math.ceil(cropRect.getHeight()));
 *           return 'https://demo.int.com/INTGeoServer/json/imagereader/scaledtile?filePath=images/' + filename +
 *               '&x=' + (cropRect.getX() - deviceTotal.getX()) +
 *               '&y=' + (cropRect.getY() - deviceTotal.getY()) +
 *               '&imageWidth=' + deviceTotal.getWidth() +
 *               '&imageHeight=' + deviceTotal.getHeight() +
 *               '&cropWidth=' + cropWidth +
 *               '&cropHeight=' + cropHeight;
 *       },
 *       'imageloader': (url, callback) => {
 *           return HttpClient.getInstance().getHttp().get(url, {
 *               'responsetype': 'blob'
 *           }).then((response) => {
 *               callback(null, response['data']);
 *           }, (error) => {
 *               callback(error);
 *           });
 *       },
 *       'imagesize': imageSize,
 *       'mapping': [{
 *           'src': imageSize,
 *           'dst': modelRect
 *       }]
 *   });
 * @example
 * // Custom format type
 * type FormatReturn = {
 *  refreshData: {
 *       id: string;
 *       palette: string;
 *       reverse: boolean;
 *       autoScale: boolean;
 *       interpolate: boolean;
 *   } & TiledShape.ImageData;
 * };
 * const rasterLog = new RasterLog<FormatReturn>({
 *    'name': filename,
 *    'formatter': (data: TiledShape.ImageData): FormatReturn => {
 *        return ({
 *            refreshData: {
 *                ...data,
 *                id: 'gr',
 *                palette: 'greentoblue',
 *                reverse: false,
 *                autoScale: true,
 *                interpolate: true
 *            }
 *        });
 *    },
 *    'imageloader': (data: TiledShape.ImageLoadData<FormatReturn>, callback: TiledShape.ImageLoadedCallback) => {
 *        const refreshData = data['refreshData'];
 *        const deviceArea = refreshData['devicearea'];
 *        const deviceTotal = refreshData['transformedmodelrect'];
 *        const cropRect = deviceArea.clone().intersect(deviceTotal);
 *        const cropWidth = Math.min(deviceTotal.getWidth(), Math.ceil(cropRect.getWidth()));
 *        const cropHeight = Math.min(deviceTotal.getHeight(), Math.ceil(cropRect.getHeight()));
 *        const url = 'https://demo.int.com/INTGeoServer/json/imagereader/scaledtile?filePath=images/' + filename +
 *        '&x=' + (cropRect.getX() - deviceTotal.getX()) +
 *        '&y=' + (cropRect.getY() - deviceTotal.getY()) +
 *        '&imageWidth=' + deviceTotal.getWidth() +
 *        '&imageHeight=' + deviceTotal.getHeight() +
 *        '&cropWidth=' + cropWidth +
 *        '&cropHeight=' + cropHeight;
 *        HttpClient.getInstance().getHttp().get(url, {
 *            'cancel': data['cancel'],
 *            'responsetype': 'blob'
 *        }).then((response) => {
 *            callback(null, response['data']);
 *        }, callback);
 *    },
 *    'imagesize': imageSize,
 *    'mapping': [{
 *        'src': imageSize,
 *        'dst': modelRect
 *    }]
 * });
 */
export declare class RasterLog<TFormatResult extends object = TiledShape.ImageData> extends LogAbstractVisual {
    /**
     * Constructor
     * @param [options] options
     */
    constructor(options?: RasterLog.Options<TFormatResult>);
    on<E extends keyof RasterLog.EventMap>(type: E, callback: (eventType: E, sender: this, args: RasterLog.EventMap[E]) => void): this;
    off<E extends keyof RasterLog.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: RasterLog.EventMap[E]) => void): this;
    notify<E extends keyof RasterLog.EventMap>(type: E, source: RasterLog<TFormatResult>, args?: RasterLog.EventMap[E]): this;
    /**
     * Sets mapping
     * @param [mapping] array of mapping
     */
    setMapping(mapping?: Record<string, Rect>[]): this;
    /**
     * Gets mapping
     * @returns array of mapping, which provides source and destination rectangle
     */
    getMapping(): Record<string, Rect>[];
    /**
     * Sets image options
     * @param options image options
     */
    setImageOptions(options: RasterLog.ImageOptions<TFormatResult>): this;
    /**
     * Returns image options
     */
    getImageOptions(): RasterLog.ImageOptions<TFormatResult>;
    /**
     * Recalculate limits if mapping is changed
     */
    updateLimits(): void;
    render(context: RenderingContext): void;
    /**
     * Return image position and depth position by device position
     * @param pt position in device
     * @returns information about image and visual coordinates
     */
    getImagePosition(pt: Point): RasterLog.ImagePosition | null;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Returns minimum depth
     */
    getMinDepth(): number;
    /**
     * Returns maximum depth
     */
    getMaxDepth(): number;
    /**
     * Sets collect performance information mode enabled
     * @param collectPerformanceInfoEnabled true for collection performance information mode enabled
     * @returns this
     */
    setCollectPerformanceInformation(collectPerformanceInfoEnabled: boolean): this;
    /**
     * Gets collect performance information mode enabled
     * @returns true if collection performance information mode enabled
     */
    getCollectPerformanceInformation(): boolean;
}
export declare namespace RasterLog {
    type Options<TFormatResult extends object = TiledShape.ImageData> = LogAbstractVisual.Options & ImageOptions<TFormatResult>;
    /**
     * options
     */
    type ImageOptions<TFormatResult extends object = TiledShape.ImageData> = {
        /**
         * array of mapping. NOTE: actual type is like `{src: Rect, dst: Rect}[]`
         */
        mapping?: Record<string, Rect>[];
        /**
         * image size
         */
        imagesize?: Rect;
        /**
         * tile formatter
         */
        formatter?: TiledShape.Formatter<TFormatResult>;
        /**
         * tile provider
         */
        provider?: TiledShape.Formatter<TFormatResult>;
        /**
         * function to load image
         */
        imageloader?: TiledShape.ImageCallback<TFormatResult>;
        /**
         * options for tile shape
         */
        shapeoptions?: TiledShape.Options<TFormatResult>;
    };
    /**
     * information about image and visual coordinates
     */
    type ImagePosition = {
        /**
         * depth
         */
        depth?: number;
        /**
         * value
         */
        value?: number;
        /**
         * image horizontal position
         */
        imagex?: number;
        /**
         * image vertical position
         */
        imagey?: number;
    };
    type EventMap = LogAbstractVisual.EventMap & {
        [Events.ImageOptionsChanging]: null;
        [Events.ImageOptionsChanged]: null;
    };
}
