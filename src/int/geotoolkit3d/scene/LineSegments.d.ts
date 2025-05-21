import { Color, Mesh } from 'three';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * More flexible implementation of THREE.Line.
 * Based on {@link https://threejs.org/examples/webgl_lines_fat.html}
 */
export declare class LineSegments extends Mesh {
    constructor(options?: LineSegments.Options);
    /**
     * Set options
     * @param [options] options object (see constructor for all options)
     * @returns this
     */
    setOptions(options?: LineSegments.Options): this;
    /**
     * Get options
     */
    getOptions(): LineSegments.ShaderOptionsOut & {
        selectable: boolean;
    };
    /**
     * Return false to forbid picking (works only for RendererPicking).<br>
     */
    isSelectable(): boolean;
    /**
     * Enable or disable selection by picking
     */
    setSelectable(selectable: boolean): this;
    /**
     * Computes an array of distance values
     */
    computeLineDistances(): this;
}
export declare namespace LineSegments {
    /**
     * options object
     */
    export type Options = {
        /**
         * data object
         *
         * This object allow to load points in two different ways: data.positions, and data.x/y/z
         * Please use the one the most adapted to your needs.
         */
        data?: DataOptions;
        /**
         * line width
         */
        linewidth?: number;
        /**
         * dash scale
         */
        dashscale?: number;
        /**
         * dash size
         */
        dashsize?: number;
        /**
         * dash offset
         */
        dashoffset?: number;
        /**
         * gap size
         */
        gapsize?: number;
        /**
         * opacity
         */
        opacity?: number;
        /**
         * color
         */
        color?: Color | string;
        /**
         * dashed
         */
        dashed?: boolean;
        /**
         * true to use polygon offset (ex: to avoid Z-fight)
         */
        polygonoffset?: boolean;
        /**
         * factor for polygon offset, > 0 will make line closer to camera, < 0 will make it farther
         */
        polygonoffsetfactor?: number;
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * Enable or disable selection by picking
         */
        selectable?: boolean;
    };
    type DataOptions = {
        /**
         * line vertices pairs in x,y,z format
         * data.positions store the points xyz interleaved, by pairs
         * ex: [x1,y1,z1, x2,y2,z2, x3,y3,z3, x4,y4,z4], where
         * 1 and 2 form the first line segment, 3 and 4 form the second segment.
         * In this case, segments are separate, and a continuous line require duplicate points between segments for continuity.
         */
        positions?: number[];
        /**
         * line x positions
         */
        x?: number[];
        /**
         * line y positions
         */
        y?: number[];
        /**
         * line z positions
         */
        z?: number[];
        /**
         * true if need to use geometry as line geometry, not line segments
         * data.x/y/z allow to store  x,y,z coordinates in separate array for clarity, and does not need duplicate points for continuous line.
         * Set data.line to "true" for this format to produce a continuous line with the given points. Leave to false if they are expected to be separate segments.
         */
        line?: boolean;
        /**
         * line colors in r,g,b format. One color for each point.
         */
        colors?: number[];
        /**
         * values the value for each point in the data. Used along the colorprovider.
         */
        values?: number[];
        /**
         * color provider used along values.
         */
        colorprovider?: ColorProvider;
        /**
         * If the segments should have end caps, used to avoid seams when neightbor segments make a sharp angle, or to make thick segments smoother on the ends.
         */
        endcaps?: boolean;
    };
    export type ShaderOptionsOut = {
        /**
         * line width
         */
        linewidth: number;
        /**
         * true to use offset (like avoid Z-fight/occlusion when used for contour)
         */
        polygonoffset: boolean;
        /**
         * factor for polygon offset, > 0 will make line closer to camera, < 0 will make it farther
         */
        polygonoffsetfactor: number;
        /**
         * dash scale
         */
        dashscale: number;
        /**
         * dash size
         */
        dashsize: number;
        /**
         * dash offset
         */
        dashoffset: number;
        /**
         * gap size
         */
        gapsize: number;
        /**
         * opacity
         */
        opacity: number;
        /**
         * color
         */
        color: Color;
        /**
         * dashed
         */
        dashed: boolean;
    };
    export {};
}
