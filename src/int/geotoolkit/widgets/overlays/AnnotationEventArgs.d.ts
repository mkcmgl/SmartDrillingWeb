/**
 * @module geotoolkit/widgets/overlays/AnnotationEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { IAnnotation } from '@int/geotoolkit/widgets/overlays/IAnnotation';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { AnnotationOverlay } from '@int/geotoolkit/widgets/overlays/AnnotationOverlay';
/**
 * Creates default implementation of the annotation overlay event args
 */
export declare class AnnotationEventArgs extends ProxyEventArgs {
    /**
     * @param annotation annotation
     * @param eventArgs contains info about the event
     */
    constructor(annotation: IAnnotation | AnnotationOverlay.Annotation, eventArgs: EventArgs);
    /**
     * Cancel event
     * @returns this
     */
    cancel(): this;
    /**
     * Return annotation
     */
    getAnnotation(): AnnotationOverlay.Annotation | IAnnotation;
    /**
     * Set object
     * @param annotation annotation object
     * @returns this
     */
    setAnnotation(annotation: IAnnotation | AnnotationOverlay.Annotation): this;
}
