import { Color } from 'three';
import { AbstractSurface } from '@int/geotoolkit3d/scene/surface/AbstractSurface';
import type { Merge } from '@int/geotoolkit/base';
import { MajorMinorStrategy } from '@int/geotoolkit3d/scene/surface/contour/MajorMinorStrategy';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Label } from '@int/geotoolkit3d/scene/label/Label';
import type { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
/**
 * A Contour 3D object.<br>
 * <br>
 * This object represents a 3D contour with an optional attribute used for coloring.<br>
 * The contour's geometry is defined by the given SurfaceData.<br>
 * <br>
 * The contour will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
 * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
 * <br>
 * User can specify a MajorMinorStrategy to determine the precise number and placement of isolines.
 * See {@link @int/geotoolkit3d/scene/surface/contour/MajorMinorStrategy~MajorMinorStrategy} for more info <br>
 * Alternatively the user can define a fixed number of isolines using the 'count' option and by setting majorminorstrategy to null.
 * In this case, note that all isolines will be major isolines.
 * <br>
 *
 * @throws {Error} if no valid AbstractSurfaceData is provided to the constructor.
 */
export declare class Contour extends AbstractSurface {
    constructor(options: Contour.Options);
    /**
     * Set the Contour options
     */
    setOptions(options?: Contour.OptionsBase): this;
    /**
     * Get the Contour options
     */
    getOptions(): Contour.OptionsBaseOut;
    /**
     * Return this object's data (geometry, values) when available.
     * Because data can be large, they are returned by reference (no copies).
     */
    getData(): AbstractSurface.Geometry.DataOut;
    /**
     * Set this Surface datas.
     */
    setData(datas: AbstractSurface.Geometry.Data): this;
    /**
     * Set the Contour options
     */
    setProperties(options: Contour.OptionsBase): this;
    /**
     * Get the Contour options
     */
    getProperties(): Contour.OptionsBaseOut;
    /**
     * Dispose contour and its children
     */
    dispose(): void;
    /**
     * Return major/minor strategy
     * @returns strategy
     */
    getMajorMinorStrategy(): MajorMinorStrategy;
    /**
     * Return the elevations where isolines are drawn
     * @deprecated since 4.0, use getMinElevations/getMajElevations instead
     * @returns elevations
     */
    getElevations(): Record<string, number>[];
    /**
     * Return the major elevations where isolines are drawn
     */
    getMajElevations(): number[];
    /**
     * Return the mior elevations where isolines are drawn
     */
    getMinElevations(): number[];
    /**
     * Return the number of isolines on surface
     * @returns linecount
     */
    getLineCount(): number;
}
export declare namespace Contour {
    type Options = OptionsBase & DataOptions & Object3D.Options;
    type OptionsBase = Merge<AbstractSurface.Geometry.OptionsBase & AbstractSurface.Material.OptionsBase & Object3D.Options, CommonOptions>;
    type OptionsBaseOut = Merge<AbstractSurface.Material.OptionsBaseOut & Required<Object3D.Options>, Required<CommonOptions>>;
    type DataOptions = {
        /**
         * The data to use to create the contour
         */
        data: {
            /**
             * The surface data object to generate contours from.
             */
            surface: AbstractSurfaceData;
            /**
             * The attribute values used to colorize the contour surface
             */
            values?: Float32Array | number[];
        };
    };
    type CommonOptions = {
        /**
         * The opacity for the surface contour, default is 1.
         */
        opacity?: number;
        /**
         * The options related to the surface
         */
        surface?: {
            /**
             * Whether to show surface or not. Does not affect isoline or label.
             */
            enabled?: boolean;
        };
        /**
         * The options to create isolines
         */
        isoline?: {
            /**
             * Whether to use gl_line or not.
             * If false (default) isolines will be rendered using 3D line segments, hich supports anti-aliasing and customizable line width.
             * If true, isolines will be rendered using GL lines, the OpenGL line primitive.
             * GL lines are much faster to render but are of lower quality (no anti-aliasing),
             * and line width behaviour is up to browsers, it might not be supported and all lines will default to a width of 1.
             */
            useglline?: boolean;
            /**
             * The min elevation level for isolines
             */
            zmin?: number;
            /**
             * The max elevation level for isolines
             */
            zmax?: number;
            /**
             * The total number of isolines to generate between zmin and zmax.
             * Important note: This option is ignored unless option.isoline.majorminorstrategy is set to null.
             * Default value is 10.
             */
            count?: number;
            /**
             * The stepping strategy to determine the number and positions of major / minor isolines between zmin/zmax.
             * If this option is set to null, the option.isoline.count will be used instead.
             */
            majorminorstrategy?: MajorMinorStrategy | null;
            /**
             * The options to configure major isolines
             */
            major?: IsolineOptions;
            /**
             * The options to configure minor isolines
             */
            minor?: IsolineOptions;
        };
        /**
         * The options to create labels
         */
        label?: {
            /**
             * The options to configure major label
             */
            major?: LabelOptions;
            /**
             * The options to configure minor label
             */
            minor?: LabelOptions;
            /**
             * the max angle (radian) between the label facing direction (normal) and the camera direction, above which the label stop being visible.
             */
            labelmaxglobalvisibleangle?: number;
            /**
             * the max angle (radian) between the label vertical direction and the projected vertical camera direction, above which the label stop being visible.
             */
            labelmaxverticalvisibleangle?: number;
            /**
             * the max angle (radian) the label is allowed to rotate vertically both ways.
             */
            labelmaxverticalrotationangle?: number;
            /**
             * The function that takes value and scale to format the label text
             * @deprecated since 4.0, please use labelformatter instead.
             */
            formatter?: Formatter;
            /**
             * The function that takes the elevation value and format it into the label text.
             */
            labelformatter?: LabelFormatter;
            /**
             * the opacity of label
             */
            opacity?: number;
            /**
             * the density of labels scattered on surface. Clamp to range [1, 5].
             */
            density?: number;
        };
        /**
         * @deprecated since 4.0, please use isoline.zmin instead
         */
        zmin?: number;
        /**
         * @deprecated since 4.0, please use isoline.zmax instead
         */
        zmax?: number;
    };
    type IsolineOptions = {
        /**
         * The visibility of major isolines
         */
        visible?: boolean;
        /**
         * The color of major isolines.
         * When returned from Contour.getOptions(), color is converted to THREE.Color for consistency.
         */
        color?: string | Color;
        /**
         * The width of major isolines
         */
        width?: number;
    };
    type LabelOptions = {
        /**
         * The visibility of major label
         */
        visible?: boolean;
        /**
         * the style of label
         */
        style?: TextStyle;
        /**
         * outline options
         */
        outline?: Label.OutlineOptions;
    };
    /**
     * Formatter function, where value is the label elevation value.
     * @deprecated since 4.0, the scale value is now fixed to 1, the value is the final elevation value.
     */
    type Formatter = (value: number, scale?: number) => string;
    /**
     * Label Formatter function, where value is the label elevation value.
     */
    type LabelFormatter = (value: number) => string;
}
