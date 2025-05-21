import type { OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
/**
 * @module geotoolkit3d/scene/AnnotationBase
 */
import { Euler, Vector2, Vector3 } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Text2d } from '@int/geotoolkit3d/scene/Text2d';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Plot } from '@int/geotoolkit3d/Plot';
/**
 * Enum of display strategy.<br>
 * <br>
 * The functions provided through this enum defines how the line linking the annotation text to the annotated object will be positioned.<br>
 * @enum
 * @readonly
 */
export declare enum Mode {
    /**
     * Use the center of the bounding box of the parent (basically a geotoolkit3d.scene.well.schematic.SchematicBase).<br>
     * Default behavior, the line goes from the center of the annotated shape to text.
     */
    Center = "center",
    /**
     * Always use the direct intersection from camera direction.<br>
     * This computes the anchor of the line on the fly to be the closest vertex of the annotated shape from the text location.<br>
     * Note that this implementation is more CPU demanding than the default one.
     */
    Closest = "closest"
}
/**
 * Parent class of schematic objects
 */
export declare class AnnotationBase extends Object3D {
    /**
     * @param [options] The options
     */
    constructor(options?: AnnotationBase.Options);
    beforeRender(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, plot: Plot, renderer: WebGLRenderer): this;
    /**
     * Sets the text to display
     * @param title title
     * @returns this
     */
    setTitle(title: string): this;
    /**
     * Gets the text to display
     * @returns title
     */
    getTitle(): string;
    /**
     * Sets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
     * @param titleDistanceFactor title distance factor
     * @returns this
     */
    setTitleDistanceFactor(titleDistanceFactor: number): this;
    /**
     * Gets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
     * @returns title distance factor
     */
    getTitleDistanceFactor(): number;
    /**
     * Sets text attributes
     * @param titleStyle title style
     * @returns this
     */
    setTitleStyle(titleStyle: TextStyle): this;
    /**
     * Gets text attributes
     * @returns title style
     */
    getTitleStyle(): TextStyle;
    /**
     * Sets the segment connector attributes
     * @param lineStyle line style
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle): this;
    /**
     * Gets the segment connector attributes
     * @returns line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets the display strategy for the segment origin
     * @param mode mode
     * @returns this
     */
    setMode(mode: Mode): this;
    /**
     * Gets the display strategy for the segment origin
     * @returns mode
     */
    getMode(): Mode;
    /**
     * Sets the anchor-point of the annotation, this is needed in case of a single annotation not contained by a
     * schematic for example.
     *
     * @param anchorPoint the point to anchor the annotation to
     * @returns this
     */
    setAnchorPoint(anchorPoint: Vector3): this;
    /**
     * Gets the point to anchor the annotation to
     * @returns anchor point
     */
    getAnchorPoint(): Vector3;
    /**
     * Set outline for title
     * @param outline the options for outline
     * @returns this
     */
    setOutline(outline: Text2d.OutlineOptions): this;
    /**
     * Sets options
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: AnnotationBase.Options): this;
    /**
     * Gets options
     * @returns The options
     */
    getOptions(): AnnotationBase.OptionsOut;
    /**
     * Sets circle on depth of the annotation.
     * @param diameter diameter of circle
     * @param angle angle of circle
     * @returns this
     */
    setCircle(diameter: Vector2 | number | Vector3, angle: Euler): this;
}
export declare namespace AnnotationBase {
    /**
     * The options
     */
    type Options = Object3D.Options & {
        /**
         * The text to display
         */
        title?: string;
        /**
         * A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
         */
        titledistancefactor?: number;
        /**
         * The text attributes
         */
        titlestyle?: TextStyle;
        /**
         * The segment connector attributes
         */
        linestyle?: LineStyle;
        /**
         * The display strategy for the segment origin
         */
        mode?: Mode;
        /**
         * the point to anchor the annotation to
         */
        anchorpoint?: Vector3;
        /**
         * if provided, text will have outline
         */
        outline?: Text2d.OutlineOptions;
        /**
         * circle options
         */
        circle?: {
            /**
             * circle diameter
             */
            diameter?: Vector2 | number | Vector3;
            /**
             * circle angle
             */
            angle?: Euler;
        };
    };
    /**
     * The options
     */
    type OptionsOut = Required<Object3D.Options> & {
        /**
         * The text to display
         */
        title: string;
        /**
         * A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
         */
        titledistancefactor: number;
        /**
         * The text attributes
         */
        titlestyle: TextStyle;
        /**
         * The segment connector attributes
         */
        linestyle: LineStyle;
        /**
         * The display strategy for the segment origin
         */
        mode: Mode;
        /**
         * the point to anchor the annotation to
         */
        anchorpoint: Vector3;
        /**
         * circle options
         */
        circle: {
            /**
             * circle diameter
             */
            diameter: Vector2;
            /**
             * circle angle
             */
            angle: Euler;
        };
    };
}
