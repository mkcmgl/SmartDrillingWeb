/**
 * @module geotoolkit3d/scene/well/TrajectoryLine
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Color } from 'three';
import { MultiLateralWellData } from '@int/geotoolkit3d/data/well/MultiLateralWellData';
import { LineSegments } from '@int/geotoolkit3d/scene/LineSegments';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { AnnotationBase } from '@int/geotoolkit3d/scene/AnnotationBase';
/**
 * A well trajectory as a 3D line.<br>
 * <br>
 * This shape displays a well trajectory as a line that can be colored with an optional attribute.<br>
 * Note that the shape of the line will be preserved even when changing the global scale of the plot.<br>
 */
export declare class TrajectoryLine extends Object3D {
    /**
     * Constructor
     * @param options The options
     */
    constructor(options: TrajectoryLine.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: TrajectoryLine.OptionsBase): this;
    /**
     * Sets annotation label
     * @param annotation label
     * @param [anchorDepth] depth to anchor label (central depth by default)
     * @returns this
     */
    setAnnotation(annotation: AnnotationBase, anchorDepth?: number): this;
}
export declare namespace TrajectoryLine {
    /**
     * The options
     */
    type Options = Omit<LineSegments.Options, 'data'> & {
        /**
         * If the data options is an array of data objects or geotoolkit3d.data.well.MultiLateralWellData, it will generate multilateral well. If the data options is a data object, it will generate a single well.
         */
        data: MultiLateralWellData.Data | MultiLateralWellData.Data[] | MultiLateralWellData;
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & LineSegments.Options & {
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string | Color;
    };
}
