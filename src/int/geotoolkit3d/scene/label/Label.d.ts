/**
 * @module geotoolkit3d/scene/label/Label
 */
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { OrthographicCamera, Scene, WebGLRenderer } from 'three';
import { Box3, PerspectiveCamera, Sphere, Vector2, Vector3 } from 'three';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { VerticalAnchorPosition } from '@int/geotoolkit3d/scene/label/VerticalAnchorPosition';
import { OrientedBoundingBox } from '@int/geotoolkit3d/util/OrientedBoundingBox';
import type { Plot } from '@int/geotoolkit3d/Plot';
/**
 * Label class
 */
export declare class Label extends Object3D {
    constructor(options: Label.Options);
    /**
     * Set text properties and options
     * @param options The options
     * @returns this
     */
    setOptions(options: Label.OptionsBase): this;
    /**
     * Compute or update this label's bounding box.
     */
    computeBoundingBox(): void;
    /**
     * Compute or update this label's bounding sphere.
     */
    computeBoundingSphere(): void;
    /**
     * Compute or update this label's oriented bounding box.
     */
    computeOrientedBoundingBox(): void;
    /**
     * Return the bounding box of this label<br>
     * @returns box
     */
    getBoundingBox(): Box3;
    /**
     * Return the bounding sphere of this label.<br>
     * Calculated based on bounding box
     * @returns sphere
     */
    getBoundingSphere(): Sphere;
    /**
     * Return the oriented bounding box of this label.<br>
     * OBB is considered more accurate than standard bounding box or sphere.
     * @returns obb
     */
    getOrientedBoundingBox(): OrientedBoundingBox;
    /**
     * Update the text of this label.
     * @param text the text to set the label.
     */
    setText(text: string): void;
    /**
     * Return the text of this label
     * @returns text
     */
    getText(): string;
    beforeRender(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, plot: Plot, renderer: WebGLRenderer): this;
    /**
     * Get the texture dimension of this label
     * @returns dimension
     */
    getTextureDimension(): Vector2;
    /**
     * Dispose this Label object
     */
    dispose(): void;
}
export declare namespace Label {
    /**
     * The options
     */
    type Options = {
        /**
         * The canvas to use for the label texture rendering.
         * Multiple identical Label can reuse the same canvas to reduce memory usage.
         */
        canvas?: HTMLCanvasElement;
        /**
         * the coordinate of label position
         */
        origin: Vector3 | number[];
        /**
         * the normal that determines the orientation of label. Default is facing X axis direction.
         */
        normal?: Vector3 | number[];
        /**
         * if false, label is always vertical, rotate on Z axis to loosely match normal direction.
         * If true, label will be able to rotate on every axis to closely match normal direction.
         */
        freeorientation?: boolean;
        /**
         * if enforcetextupright is true, label text will try to never display upside-down by rotating the text 180° if necessary.
         */
        enforcetextupright?: boolean;
        /**
         * the offset on the label z axis (label facing direction).
         * Value is relative to apparent text height, so a value of 1 will offset the label by a distance equal to visible text height.
         */
        facingoffset?: number;
        /**
         * text to display.
         */
        text?: number | string;
        /**
         * set true to enable this label
         */
        enabled?: boolean;
        /**
         * the style of label
         */
        style?: TextStyle;
        /**
         * outline options
         */
        outline?: OutlineOptions;
        /**
         * set true if label size stayed same regardless of camera position
         */
        issizeindevice?: boolean;
        /**
         * the scale of the label
         */
        scale?: Vector3;
        /**
         * the opacity of label
         */
        opacity?: number;
        /**
         * the label side visibility, can be DoubleSide, FrontSide, BackSide
         */
        renderside?: number;
        /**
         * The vertical anchor position for the label (default is Center)
         */
        verticalanchor?: VerticalAnchorPosition;
    };
    /**
     * The options
     */
    type OptionsBase = Object3D.Options & {
        /**
         * text style
         */
        style?: TextStyle;
        /**
         * if the label is visible on both sides. If false, it'll only be visible if the normal is pointing toward camera.
         */
        doublesided?: boolean;
        /**
         * the coordinate of label position
         */
        origin?: Vector3 | number[];
        /**
         * the normal that determines the orientation of label. Default is facing X axis direction.
         */
        normal?: Vector3 | number[];
        /**
         * if false, label is always vertical, rotate on Z axis to loosely match normal direction.
         */
        freeorientation?: boolean;
        /**
         * if enforcetextupright is true, label text will try to never display upside-down by rotating the text 180° if necessary.
         */
        enforcetextupright?: boolean;
        /**
         * the offset on the label z axis (label facing direction).
         * Value is relative to apparent text height, so a value of 1 will offset the label by a distance equal to visible text height.
         */
        facingoffset?: number;
    };
    type OutlineOptions = {
        /**
         * set true to enable outline for the text
         */
        enabled?: boolean;
        /**
         * inner color for text with outline
         */
        innercolor?: string | CanvasGradient | CanvasPattern;
        /**
         * outline color for text with outline
         */
        outlinecolor?: string | CanvasGradient | CanvasPattern;
        /**
         * outline thickness
         */
        thickness?: number;
    };
}
