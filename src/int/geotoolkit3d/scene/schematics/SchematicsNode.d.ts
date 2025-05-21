import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { AnnotationBase } from '@int/geotoolkit3d/scene/AnnotationBase';
import type { Trajectory3d } from '@int/geotoolkit3d/geodata/Trajectory3d';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import type { AbstractAnnotationLayout } from '@int/geotoolkit3d/schematics/layout/AbstractAnnotationLayout';
import type { SimpleFactory } from '@int/geotoolkit3d/schematics/factory/SimpleFactory';
export declare class SchematicsNode extends Object3D {
    constructor(parameters: SchematicsNode.Options | SchematicsNode.Options[]);
    /**
     * Gets annotations label
     * @returns annotation label
     */
    getAnnotations(): AnnotationBase[];
    /**
     * Sets annotation label
     * @param annotations labels
     * @param [depths] anchor depths of label (middle of trajectory by default)
     * @param [index] if this SchematicsNode is multilateral, index of internal SchematicsNode
     * @returns this
     */
    setAnnotations(annotations: AnnotationBase[], depths?: number[], index?: number): this;
    /**
     * Set options
     * @param [options] options object
     * @returns this
     */
    setOptions(options?: SchematicsNode.OptionsBase): this;
    /**
     * Get options
     * @returns options object
     */
    getOptions(): SchematicsNode.OptionsBaseOut;
    /**
     * Get trajectory data
     * @param [index] if this SchematicsNode is multilateral, index of internal SchematicsNode
     */
    getTrajectoryData(index?: number): Trajectory3d | null;
    /**
     * Sets annotation layout
     * @param annotationLayout annotation layout
     * @returns this
     */
    setAnnotationLayout(annotationLayout: AbstractAnnotationLayout): this;
}
export declare namespace SchematicsNode {
    type Options = {
        /**
         * trajectory data
         */
        data?: Trajectory3d;
        /**
         * radius scaling
         */
        radiusscaling?: number;
        /**
         * requested components to render
         */
        components?: WellBoreData;
        /**
         * annotation layout (geotoolkit3d.schematics.layout.DefaultAnnotationLayout by default)
         */
        annotationlayout?: AbstractAnnotationLayout;
        /**
         * Factory to create components objects
         */
        factory?: SimpleFactory;
    };
    /**
     * options object
     */
    type OptionsBase = Object3D.Options & {
        /**
         * radius scaling
         */
        radiusscaling?: number;
    };
    /**
     * options object
     */
    type OptionsBaseOut = Required<OptionsBase>;
}
