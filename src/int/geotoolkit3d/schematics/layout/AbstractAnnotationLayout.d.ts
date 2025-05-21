/**
 * @module geotoolkit3d/schematics/layout/AbstractAnnotationLayout
 */
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { AnnotationBase } from '@int/geotoolkit3d/scene/AnnotationBase';
/**
 * Base class for schematics annotations layout
 */
export declare abstract class AbstractAnnotationLayout {
    protected constructor();
    /**
     * Dispose
     */
    dispose(): void;
    /**
     * Layout annotations
     */
    abstract layout(): void;
    /**
     * Return iterator of annotations
     * @returns iterator
     */
    getAnnotations(): Iterator<AnnotationBase>;
    /**
     * Return number of annotations
     * @returns number of annotations
     */
    getAnnotationsCount(): number;
    /**
     * Return annotation by index
     * @param index index of annotation
     * @returns annotation
     */
    getAnnotation(index: number): AnnotationBase;
    static getClassName(): string;
    getClassName(): string;
}
