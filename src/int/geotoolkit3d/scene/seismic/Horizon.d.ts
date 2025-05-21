/**
 * @module geotoolkit3d/scene/seismic/Horizon
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Color } from 'three';
import { SeismicModes } from '@int/geotoolkit3d/Constants';
import type { Volume } from '@int/geotoolkit3d/scene/seismic/Volume';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * The Geometry Mode to render the Horizon with
 * @enum
 */
export declare enum HorizonGeometryMode {
    /**
     * Draw the horizon as a mesh made of triangles.
     */
    Triangles = "triangles",
    /**
     * Draw the horizon as a series of lines.
     */
    Lines = "lines",
    /**
     * Draw the horizon as a set of points.
     */
    PointCloud = "pointcloud"
}
/**
 * A Horizon 3D object used in seismic volume.<br>
 * <br>
 * This object represents a surface with an optional attribute used for coloring.<br>
 * If there are not enough data for the surface, set average elevation coordinates and average color values.<br>
 * <br>
 */
export declare class Horizon extends Object3D {
    constructor(options: Horizon.Options);
    /**
     * Set data based on different geomotry mode
     * @throws Error if geometrymode attribute is invalid
     */
    setOptions(options?: Horizon.OptionsBase): this;
    /**
     * Get the options of this Horizon.
     */
    getOptions(): Horizon.OptionsBaseOut;
    /**
     * Get the container object holding the horizon object
     */
    getHorizonObject(): Object3D;
    /**
     * Set the display mode of horizon, like 'XY', 'IJ' and 'IJFLIPPED'
     * @param displayMode The display mode of horizon
     */
    setDisplayMode(displayMode: SeismicModes): void;
}
export declare namespace Horizon {
    type Options = OptionsBase & {
        /**
         * The mode to draw the Horizon
         */
        geometrymode: HorizonGeometryMode;
        /**
         * The volume which hosts horizons
         */
        seismicvolume: Volume;
        /**
         * The inline coordinates
         */
        inline: number[];
        /**
         * The xline coordinates
         */
        xline: number[];
        /**
         * The elevation coordinates to build the horizon.
         */
        elevation: number[];
        /**
         * The optional attribute values used to colorize the surface
         */
        values: number[];
        /**
         * Null value for elevation
         */
        nullvalue: number;
    };
    type OptionsBase = Object3D.Options & {
        /**
         * A optional color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string | Color;
        /**
         * The inline coordinates
         */
        inline?: number[];
        /**
         * The xline coordinates
         */
        xline?: number[];
        /**
         * The elevation coordinates to build the horizon.
         */
        elevation?: number[];
        /**
         * The optional attribute values used to colorize the surface
         */
        values?: number[];
    };
    type OptionsBaseOut = Required<Object3D.Options> & {
        /**
         * The mode the Horizon is drawn with
         */
        geometrymode: HorizonGeometryMode;
        /**
         * The volume which hosts horizons
         */
        seismicvolume: Volume;
        /**
         * The colorprovider as it was provided by the user.
         */
        colorprovider: ColorProvider | string | Color;
        /**
         * The container object holding the Horizon object.
         */
        horizoncontainer: Object3D;
        /**
         * Null value for elevation, default is NaN
         */
        nullvalue: number;
    };
}
