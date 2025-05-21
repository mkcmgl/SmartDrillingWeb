/**
 * @module geotoolkit3d/scene/seismic/Fence
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { FencePanel } from '@int/geotoolkit3d/scene/seismic/FencePanel';
import type { IndexCoordinates } from '@int/geotoolkit3d/transformation/IndexCoordinates';
import type { Group } from '@int/geotoolkit/scene/Group';
import { ITiledSurface } from '@int/geotoolkit3d/scene/seismic/ITiledSurface';
import type { SliceMaterial } from '@int/geotoolkit3d/scene/seismic/SliceMaterial';
/**
 * A seismic fence object that represent the cross section of a seismic volume with an arbitrary line.<br>
 * <br>
 * A seismic fence can be used to display seismic along a user crafted path or a well trajectory for example.<br>
 * The resulting shape will be composed of contiguous seismic panels that form a fence.<br>
 * <br>
 * The given coordinates describes the inflexion points of the path.<br>
 * It's expected to be in IJ coordinates and to match actual existing IJ indices.<br>
 * <br>
 * This shape uses a {@link @int/geotoolkit/seismic/data/SeismicReader~SeismicReader} to fetch the traces and metadata.<br>
 * The reader's metadata should contain the proper 'sections' in order for the fence to display correctly.<br>
 * This Shape is compatible with {@link import("geotoolkit/seismic/data/RemoteSeismicReader").RemoteSeismicReader RemoteSeismicReader} using INTGeoServer. (version >= 2.18)<br>
 * <br>
 * As the rasterization process is delegated to the SeismicPipeline, all the capabilities of the pipeline are available (colormap, interpolation, etc).<br>
 * It can be configured at initialization time using 'options.pipeline.options'.<br>
 * And/Or at runtime using <br>
 * <pre>
 * `setOptions({ pipeline:{ options:{...} } })`
 * </pre>
 * <br>
 * This fence also supports an 'overlay' feature that lets you provide a {@link import("geotoolkit/scene/Group").Group group} containing 2D shapes.<br>
 * The content of this group will be rendered on top of the seismic.<br>
 * This group modellimits and bounds will be automatically set to the correct values.<br>
 * The group's content should use coordinates in trace/sample domain.<br>
 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
 * <br>
 */
export declare class Fence extends Object3D implements ITiledSurface {
    constructor(options: Fence.Options);
    /**
     * Set the Fence options
     */
    setOptions(options?: Fence.OptionsBase): this;
    /**
     * Get the Fence options
     */
    getOptions(): Fence.OptionsBaseOut;
    /**
     * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
     * The coordinate system of the group is in trace/samples.
     * @deprecated since 4.0, Because a Fence is made of several panels,
     * each panel have its own overlay Group, so this method does not make sense anymore.
     * Please use Fence.getFencePanel().forEach((panel) => panel.getOverlay()) instead')
     * @returns The overlay group, if present.
     */
    getOverlay(): Group | null;
    /**
     * Returns an array that contains all the fence panels
     * @returns panels
     */
    getFencePanel(): FencePanel[];
    /**
     * Get the index coordinates
     * @returns The index coordinates
     */
    getIndexCoordinates(): IndexCoordinates;
    resetTiles(): void;
}
export declare namespace Fence {
    type Options = SliceMaterial.Options & {
        /**
         * The options related to the seismic data
         */
        data: {
            /**
             * index coordinates
             */
            index: IndexCoordinates;
            /**
             * The fence coordinates
             */
            path: {
                /**
                 * The inline indices of the fence
                 */
                i: number[];
                /**
                 * The xline indices of the fence
                 */
                j: number[];
            };
        };
    };
    type OptionsBase = Object3D.Options & FencePanel.OptionsBase;
    type OptionsBaseOut = Required<Object3D.Options> & Partial<FencePanel.OptionsBase>;
}
