import { SliderMoveTool } from '@int/geotoolkit3d/tool/SliderMoveTool';
import { Slice } from '@int/geotoolkit3d/scene/seismic/Slice';
import type { Volume } from '@int/geotoolkit3d/scene/seismic/Volume';
/**
 * A tool specialized in moving a seismicslice.<br>
 * <br>
 * This tool uses the given Volume object to limit the slice displacement.<br>
 * Note that this tool simply moves the slice, calling code is responsible of updating the seismic data displayed.<br>
 */
export declare class SeismicSliderTool extends SliderMoveTool {
    constructor(options: SeismicSliderTool.Options);
    /**
     * Sets volume
     * @param volume volume
     */
    setVolume(volume: Volume): void;
}
export declare namespace SeismicSliderTool {
    /**
     * See geotoolkit3d.tool.SliderMoveTool for inherited options
     */
    export type Options = SliderMoveTool.Options & {
        /**
         * The seismic volume that this slider should operate on
         */
        volume?: Volume;
        /**
         * The callback function triggered when a slice is being moved
         */
        callback?: Callback;
        /**
         * The function used to adjust the computed ijz value to an existing seismic inline/xline/slice.
         */
        snap?: Snap;
    };
    type Callback = (slice: Slice, previous: Slice.Location, location: Slice.Location) => void;
    type Snap = (location: Slice.Location, slice: Slice) => void;
    export {};
}
