import { Rect } from '@int/geotoolkit/util/Rect';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import type { SeismicReader } from '@int/geotoolkit/seismic/data/SeismicReader';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { MeshColorMapBasicMaterial } from '@int/geotoolkit3d/scene/MeshColorMapBasicMaterial';
/**
 * A seismic slice material.<br>
 * <br>
 * The seismic slice material is supposed to be used in conjunction with {@link @int/geotoolkit3d/scene/seismic/Slice~Slice}.<br>
 * It is responsible for creating and managing the textures required to render a seismic crossection.<br>
 * <br>
 * To do so, it will create a {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} using the given
 * {@link @int/geotoolkit/seismic/data/SeismicReader~SeismicReader}.<br>
 * <br>
 * As rasterization process is delegated to the SeismicPipeline, it supports any pipeline configuration (Colormap, interpolation, etc).<br>
 * At initialization time using 'options.pipeline.options'.<br>
 * And at runtime using getPipeline().setOptions().<br>
 * <br>
 * This material also supports an 'overlay' feature that lets you provide a {@link import("geotoolkit/scene/Group").Group group} containing 2D shapes.<br>
 * The content of this group will be rendered on top of the seismic.<br>
 * This group modellimits and bounds will be automatically set to the correct values.<br>
 * The group's content should use coordinates in trace/sample domain.<br>
 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
 * @example
 * // Default pipeline configuration is:
 * {
 *  'normalization': {
 *      'type': NormalizationType.RMS,
 *      'scale': 1
 *  },
 *  'plot': {
 *      'type': {
 *          'wiggle': false,
 *          'interpolateddensity': true
 *      },
 *      'decimationspacing': 5
 *  },
 *  'colors': {
 *      'colormap': SeismicColors.getDefault().createNamedColorMap("WhiteBlack", 320)
 *  }
 * }
 */
export declare class SliceMaterial extends EventDispatcher {
    constructor(options: SliceMaterial.Options);
    /**
     * Set the SliceMaterial options
     */
    setOptions(options: SliceMaterial.OptionsBase): this;
    /**
     * Get the SliceMaterial options
     */
    getOptions(): SliceMaterial.OptionsBaseOut;
    /**
     * Set opacity property of the slice.<br>
     * @param value the opacity value from 0 (transparent) to 1 (opaque).
     */
    setOpacity(value: number): void;
    /**
     * Get the opacity
     * @returns The opacity
     */
    getOpacity(): number;
    /**
     * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
     * The coordinate system of the group is in trace/samples.
     * @returns The overlay group
     */
    getOverlay(): Group;
    /**
     * Get the internal pipeline
     * @returns The internal pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * Resets the slice tiles, filling them by the loadingcolor defined by the user.
     * Usually used when updating the slice, such as moving the slice along its axis, thus requiring some time to fetch the new samples and redraw the seismic slice.
     */
    resetTiles(): void;
    /**
     * Dispose Materials
     */
    disposeMaterials(): void;
    /**
     * Dispose Overlay Datas
     */
    disposeOverlayDatas(): void;
    /**
     * Dispose method for SliceMaterial. Specifically for disposing of pipeline memory reference
     */
    dispose(): void;
    /**
     * Sets level of details if it is enabled
     * @param lod level of details. if level is less then
     * current level the current is used
     * @param [minLod] minimum level of details
     * @param [maxLod] maximum level of details
     * @returns a new generic promise
     */
    setLOD(lod: number, minLod?: number, maxLod?: number): Promise<any>;
}
export declare namespace SliceMaterial {
    export type Options = OptionsBase & {
        /**
         * The options related to the data
         */
        data: {
            /**
             * The seismic reader that will be used to retrieve the traces.
             * Mandatory parameter.
             */
            reader: SeismicReader;
            /**
             * The subpart of the seismic to read
             */
            limits?: Rect;
        };
    };
    export type OptionsBase = Partial<CommonOptions> & {
        /**
         * The options related to the slice shader material.
         */
        materialoptions?: Tile.OptionsBase;
    };
    export type OptionsBaseOut = CommonOptions & {
        /**
         * The options related to the slice shader material.
         */
        materialoptions: Tile.OptionsBaseOut;
        /**
         * The options for the pipeline.
         */
        pipeline: {
            /**
             * pipeline options
             */
            options: SeismicPipeline.Options;
        };
    } & {
        /**
         * The options for the pipeline.
         * @deprecated since 4.0, please use pipeline.options instead.
         */
        pipeline: SeismicPipeline.Options;
    };
    /**
     * User-defined callback which is expected to invalidate the parent object.
     * Is called in the SliceMaterial when the parent slice/fence needs to be redrawn.
     * Usual implementation is `() => {parentObject.invalidateObject();}`
     * @deprecated since 4.0, invalidation is now automatically handled.
     */
    export type InvalidationCallback = () => void;
    type CommonOptions = {
        /**
         * The options related to the data
         */
        data: {
            /**
             * The seismic reader that will be used to retrieve the
             * traces, null to empty the slice
             */
            reader?: SeismicReader | null;
            /**
             * The subpart of the seismic to read
             */
            limits?: Rect;
        };
        /**
         * The options for the pipeline.
         */
        pipeline?: {
            /**
             * pipeline options
             */
            options?: SeismicPipeline.Options;
        };
        /**
         * @deprecated since 4.0, please use options.maxtilesize instead.
         */
        tilesize: number;
        /**
         * Maximum tile size in pixels. Will be adjusted down using hardware capabilities if required.
         * this defines the maximum size (both width and height) of a tile-texture. By default, the default tile size will be 4096 or lower depending on device capabilities.
         */
        maxtilesize: number;
        /**
         * Max number of pixels to create in the X Direction. Number of tiles (X direction) *
         * tilesize (X direction) will be reduced to fit this maximum value
         */
        maxpixelsx: number;
        /**
         * Max number of pixels to create in the Y Direction. Number of tiles (Y direction) *
         * tilesize (Y direction) will be reduced to fit this maximum value
         */
        maxpixelsy: number;
        /**
         * The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
         */
        horizontalresolution: number;
        /**
         * The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
         */
        verticalresolution: number;
        /**
         * The parent object invalidation function to call whenever this material has been invalidated.
         * @deprecated since 4.0, now the Slice is invalidated automatically, it is no longer necessary to provide an invalidation callback.
         */
        oninvalidate?: InvalidationCallback;
        /**
         * Material color while loading seismic (css format)
         */
        loadingcolor: string;
        /**
         * A group that will be used to render 2D shapes on top of the slice as 'overlay'.
         * The coordinates of those shapes should be in traces/samples.
         * Set to null to disable the overlay.
         */
        overlay?: Group | null;
        /**
         * If true, automatically decimate the pipeline to the amount of pixels of the texture limits.
         * Default is true.
         */
        autodecimate: boolean;
        /**
         * If true, will clear the pipeline after the slice is rendered. Default is true.
         */
        clearpipeline: boolean;
        /**
         * If true, will remove the surface from heap after its been moved to the GPU. Default is false.
         */
        disposesurface: boolean;
        /**
         * Number of tiles to be processed in parallel
         */
        numberofparalleltasks: number;
        /**
         * True for using LOD (level of details). It works only if autodecimate is true
         */
        lod: boolean;
        /**
         * Initial texture size if lod isn't used (use tilesize if not defined by user).
         */
        initialtexturesize: number;
        /**
         * Use trace decimation by reader if it is supported.
         */
        readertracedecimation: boolean;
    };
    export namespace Tile {
        type OptionsBase = MeshColorMapBasicMaterial.OptionsBase & OverlayOptions;
        type OptionsBaseOut = MeshColorMapBasicMaterial.OptionsBaseOut & OverlayOptions;
        type OverlayOptions = {};
    }
    export {};
}
