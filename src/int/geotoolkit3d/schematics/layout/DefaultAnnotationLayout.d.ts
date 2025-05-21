/**
 * @module geotoolkit3d/schematics/layout/DefaultAnnotationLayout
 */
import { AbstractAnnotationLayout } from '@int/geotoolkit3d/schematics/layout/AbstractAnnotationLayout';
/**
 * Default annotation layout - doesn't affect on annotations position
 */
export declare class DefaultAnnotationLayout extends AbstractAnnotationLayout {
    constructor();
    layout(): void;
}
