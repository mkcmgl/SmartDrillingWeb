/**
 * @module geotoolkit/widgets/tools/LegendToolEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
export declare class LegendToolEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param fromAnnotation move from Annotation
     * @param toAnnotation move to Annotation
     */
    constructor(eventArgs: EventArgs, fromAnnotation?: AnnotationLocation, toAnnotation?: AnnotationLocation);
    /**
     * Get annotation location from
     * @returns annotation location from
     */
    getFromAnnotation(): AnnotationLocation;
    /**
     * Get annotation location to
     * @returns annotation location to
     */
    getToAnnotation(): AnnotationLocation;
}
