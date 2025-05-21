import { SliceMaterial } from '@int/geotoolkit3d/scene/seismic/SliceMaterial';
/**
 * A seismic fence material.<br>
 * <br>
 * The seismic fence material is supposed ot be used in conjunction with {@link @int/geotoolkit3d/scene/seismic/FencePanel~FencePanel}.<br>
 * It is responsible for creating and managing the textures required to render a seismic crossection.<br>
 * <br>
 * To do so, it will create a {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} using the given {@link @int/geotoolkit/seismic/data/SeismicReader~SeismicReader}.<br>
 * <br>
 * The specificity of the FenceMaterial compared to the SliceMaterial is to take into account that the given Reader is made of sections.<br>
 * This material will render only the section it's supposed to render. (see fenceindex).<br>
 */
export declare class FenceMaterial extends SliceMaterial {
    constructor(options: FenceMaterial.Options);
    /**
     * Set the FenceMaterial options.
     * The main difference with SliceMaterial, is that once the Fence pipeline is generated, it cannot change its data source.
     */
    setOptions(options: SliceMaterial.OptionsBase): this;
}
export declare namespace FenceMaterial {
    type Options = SliceMaterial.Options & {
        /**
         * The index of the fence panel covered by this material
         */
        fenceindex: number;
    };
}
