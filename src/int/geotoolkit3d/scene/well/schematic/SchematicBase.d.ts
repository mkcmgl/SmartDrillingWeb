/**
 * @module geotoolkit3d/scene/well/schematic/SchematicBase
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { AnnotationBase } from '@int/geotoolkit3d/scene/AnnotationBase';
import type { Box3, BufferGeometry, Material } from 'three';
/**
 * Parent class of schematic objects
 */
export declare class SchematicBase extends Object3D {
    constructor();
    /**
     * Get the current annotation holding title, icon, text...
     *
     * @returns annotation
     */
    getAnnotation(): AnnotationBase;
    /**
     * Set the current annotation holding title, icon, text...
     *
     * @param annotation annotation
     * @returns this
     */
    setAnnotation(annotation: AnnotationBase): this;
    /**
     * Get options, font, color, etc...
     */
    getOptions(): SchematicBase.OptionsBaseOut;
    /**
     * Set options, font, color, etc...
     *
     * @param [newOptions] options
     * @returns this
     */
    setOptions(newOptions?: SchematicBase.OptionsBase): this;
    /**
     * Returns the bounding box of the schematic.
     */
    getBoundingBox(): Box3 | null;
    /**
     * Returns the geometry of the schematic.
     */
    getGeometry(): BufferGeometry | null;
    /**
     * Return the material of the schematic being a material provided by the user ar creation or a created material
     * depending on the "fillstyle" option parameter at creation.
     */
    getMaterial(): Material;
}
export declare namespace SchematicBase {
    type OptionsBaseOut = Required<Object3D.Options> & {
        /**
         * The linestyle for the cursor
         */
        fillstyle?: FillStyle;
        material?: Material;
    };
    type OptionsBase = Object3D.Options & {
        fillstyle?: FillStyle;
        material?: Material;
    };
}
