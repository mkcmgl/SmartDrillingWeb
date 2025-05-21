import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { DeepMerge } from '@int/geotoolkit/base';
import type { LineSegments } from '@int/geotoolkit3d/scene/LineSegments';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * A LogCurve object representing a well curve along a path as a 2D shape.<br>
 * <br>
 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
 * Which means that when the user moves the camera the log will try to adapt its representation to be as mush visible as possible.<br>
 * However that also means that some camera angles will not be ideal to look at the log.<br>
 * Typically when the camera and the trajectory path are aligned.<br>
 * This algorithm is implemented at the shader level to ensure best performances.<br>
 * <br>
 */
export declare class LogCurve2D extends Object3D {
    constructor(options: LogCurve2D.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: LogCurve2D.OptionsBase): this;
    /**
     * Get options
     * (see {@link import("geotoolkit3d/scene/well/LogCurve2D").LogCurve2D.setOptions} for more info)
     * @returns options
     */
    getOptions(): LogCurve2D.OptionsBaseOut;
}
export declare namespace LogCurve2D {
    /**
     * The options
     */
    type Options = DeepMerge<LineSegments.Options, {
        data?: {
            nullvalue?: number;
        };
    }> & {
        colorprovider?: ColorProvider;
        radius?: number;
        offset?: number;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & Options & {
        curvemin?: number;
        curvemax?: number;
        offsetmode?: number;
    };
    type OptionsBaseOut = LogCurve2D.Options & Required<Object3D.Options>;
}
