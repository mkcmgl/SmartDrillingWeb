/**
 * @module geotoolkit3d/scene/pointset/PointSet
 */
import type { Texture as ThreeTexture } from 'three';
import { Box3, BufferGeometry, Color } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
/**
 * Enum of symbols.<br>
 * <br>
 * The functions provided by this enum are responsible for loading/creating a Three.BufferGeometry that will be used to display a symbol in 3D.
 */
export declare class SymbolGeometry {
    /**
     * A sphere symbol using an UV sphere geometry.
     */
    static get Sphere(): (precision: number) => BufferGeometry<import("three").NormalBufferAttributes>;
    /**
     * An icosahedron/sphere symbol using an icosahedron geometry.
     * Can be used as an icosahedron with precision = 0,
     * or as a high quality sphere at precision >= 12.
     */
    static get Icosahedron(): (precision: number) => BufferGeometry<import("three").NormalBufferAttributes>;
    /**
     * A cube symbol
     */
    static get Cube(): () => BufferGeometry<import("three").NormalBufferAttributes>;
    /**
     * A pyramid symbol
     */
    static get Pyramid(): () => BufferGeometry<import("three").NormalBufferAttributes>;
}
/**
 * PointSet is a set of 3D coordinates rendered as 3D symbols.<br>
 * <br>
 * It's similar to a PointCloud and share most of the same API (even if there is no inheritance between them).<br>
 * The main difference between PointSet and PointCloud is that a PointSet uses real 3D mesh for each symbol.<br>
 * As a consequence, the rendered symbols are cleaner and sharper, and there is no longer depth fighting (symbols blinking by rendering on top of each other).<br>
 * <br>
 * It is quite fast for rendering points as Cubes and Pyramids, however using Sphere geometry for really large sets of points (100 000+ points)
 * can be slower, you might have better performances using a PointCloud with a sphere texture instead.<br>
 * <br>
 * To save valuable memory on large pointset at creation time, it is advised to use typed Float32Array for points xyz, sizes and values as constructor parameters, in stead of regular Array.
 * <br>
 */
export declare class PointSet extends Object3D {
    constructor(options: PointSet.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @see the constructor options for common options
     * @returns this
     */
    setOptions(options: PointSet.Options): this;
    /**
     * Get the pointset general options (legacy)
     */
    getOptions(): PointSet.OptionsBaseOut;
    /**
     * Set per point options, note that it's more efficient to use setOptions() to modify large ensemble of points.
     * @param index The index of the point to edit
     * @param options The options
     * @returns this
     */
    setPointOptions(index: number, options: PointSet.PerPointOptions): this;
    /**
     * Get the attributes of a point at the given index.
     * Returns null if the given point index is not valid.
     * @param index index of point
     */
    getPointOptions(index: number): PointSet.PerPointOptionsOut | null;
    /**
     * Generate a highlight geometry for the given point index.
     * Highlight is a geometry that is rendered with a special effect in highlightPass
     * @param pointIndex the index of the point to highlight.
     */
    hightlightShape(pointIndex: number): void;
    /**
     * Returns the world space bounding box of this pointset. Because instanced rendering do not use a classic geometry, this custom method is necessary.
     * See geotoolkit3d.util.Helper.computeWorldBoundingBox() for more information on the usage of this method.
     * @returns bounding box
     */
    getWorldBoundingBox(): Box3;
    /**
     * Return if this point index is valid (belong to a point in this point set).
     * @param index the point index.
     */
    isValidIndex(index: number): boolean;
}
export declare namespace PointSet {
    /**
     * The options
     */
    type Options = Object3D.Options & {
        /**
         * The data options
         */
        data?: {
            /**
             * The x values
             */
            x?: Float32Array | number[];
            /**
             * The y values
             */
            y?: Float32Array | number[];
            /**
             * The elevation values
             */
            z?: Float32Array | number[];
            /**
             * Sizes of the symbols, can be an array or a single value
             */
            sizes?: Float32Array | number[] | number;
            /**
             * An optional minimum to use for 'sizes' normalization
             */
            sizemin?: number;
            /**
             * An optional maximum to use for 'sizes' normalization
             */
            sizemax?: number;
            /**
             * A value attribute used for coloring the symbols
             */
            values?: Float32Array | number[] | number;
            /**
             * Set the visibility of the points (true by default)
             */
            visible?: boolean[];
        };
        /**
         * the symbol of this pointset. geotoolkit3d.util.Texture are also valid but
         */
        symbol?: SymbolFunction | ThreeTexture;
        /**
         * The size of the symbol in pixels/model for the smallest value
         */
        symbolminsize?: number;
        /**
         * The size of the symbol in pixels/model for the biggest value
         */
        symbolmaxsize?: number;
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string | Color;
        /**
         * True if the symbol size should only depend on their value, ignores the projection and any scale.
         */
        symbolsizeisindevice?: boolean;
        /**
         * True if the symbols should not scale based on the plot scale.
         */
        inverseplot?: boolean;
        /**
         * The symbols opacity. For individual symbol transparency, use the colorProvider.
         */
        opacity?: number;
        /**
         * This factor is used to determine how many triangles will be used for the Sphere and IcoSphere symbol.
         */
        precision?: number;
    };
    type OptionsBaseOut = Required<Object3D.Options> & {
        opacity: number;
        colorprovider: string | ColorProvider | RgbaColor | Color;
        symbolminsize: number;
        symbolmaxsize: number;
    };
    /**
     * Per point options
     */
    type PerPointOptions = {
        /**
         * The visibility of the point
         */
        visible?: boolean;
        /**
         * The size of the point
         */
        size?: number;
        /**
         * The value of the point (used for color)
         */
        value?: number;
    };
    type PerPointOptionsOut = Required<PerPointOptions> & {
        /**
         * the xyz coordinates
         */
        position: number[];
    };
    type SymbolFunction = (precision: number) => BufferGeometry;
}
