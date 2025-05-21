import { Dimension } from '@int/geotoolkit/util/Dimension';
import { AbstractOverlay } from '@int/geotoolkit/widgets/overlays/AbstractOverlay';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { IAnnotation } from '@int/geotoolkit/widgets/overlays/IAnnotation';
import { Point } from '@int/geotoolkit/util/Point';
import { AnnotationEventArgs } from '@int/geotoolkit/widgets/overlays/AnnotationEventArgs';
import { Annotation } from '@int/geotoolkit/widgets/overlays/Annotation';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import type { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import type { CssStyle } from '@int/geotoolkit/css/CssStyle';
/**
 * AnnotationOverlay Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * This Event is fired when the Annotation should be created
     * @deprecated since 4.0. Use AnnotationOverlay.Events.AnnotationAdding + AnnotationAdded instead
     */
    CreateAnnotation = "CreateAnnotation",
    /**
     * This Event is fired when the Annotation going to be removed
     * @deprecated since 4.0. Use AnnotationOverlay.Events.AnnotationRemoving + AnnotationRemoved instead
     */
    RemoveAnnotation = "RemoveAnnotation",
    /**
     * This Event is fired when the Annotation should be edited
     * @deprecated since 4.0. Use AnnotationOverlay.Events.AnnotationEditing + AnnotationEdited instead
     */
    EditAnnotation = "EditAnnotation",
    /**
     * This Event is fired when active annotation has to be changed
     * @deprecated since 4.0. Use AnnotationOverlay.Events.ActiveAnnotationChanging + ActiveAnnotationChanged instead
     */
    ChangeActiveAnnotation = "ChangeActiveAnnotation",
    /**
     * This Event is fired when the Annotation going to be removed
     */
    AnnotationRemoving = "AnnotationRemoving",
    /**
     * This Event is fired when the Annotation was removed
     */
    AnnotationRemoved = "AnnotationRemoved",
    /**
     * This Event is fired when the Annotation going to be added
     */
    AnnotationAdding = "AnnotationAdding",
    /**
     * This Event is fired when the Annotation was added
     */
    AnnotationAdded = "AnnotationAdded",
    /**
     * This Event is fired when the Annotation should be edited
     */
    AnnotationEditing = "AnnotationEditing",
    /**
     * This Event is fired when the Annotation should be edited
     */
    AnnotationEdited = "AnnotationEdited",
    /**
     * This Event is fired when active annotation has to be changed
     */
    ActiveAnnotationChanging = "ActiveAnnotationChanging",
    /**
     * This Event is fired when active annotation has been changed
     */
    ActiveAnnotationChanged = "ActiveAnnotationChanged"
}
/**
 * Creates default implementation of the widget annotation overlay
 * @example
 * import {AnnotationOverlay, Events as Overlay} from '@int/geotoolkit/widgets/overlays/AnnotationOverlay';
 * import {log} from '@int/geotoolkit/base';
 * const overlay = new AnnotationOverlay(widget, {
 *     'annotationcontainer': 'geotoolkit-plot-host'
 * })
 *     .on(OverlayEvents.AnnotationAdded, (event, sender, eventArgs) => {
 *         const annotation = eventArgs.getAnnotation();
 *         log('Annotation ' + annotation.getText() + ' added');
 *         log('Total annotations is: ' + sender.getAnnotations().toArray().length);
 *     })
 *     .on(OverlayEvents.AnnotationRemoved, (event, sender, eventArgs) => {
 *         const annotation = eventArgs.getAnnotation();
 *         log('Annotation ' + annotation.getText() + ' removed');
 *         log('Total annotations is: ' + sender.getAnnotations().toArray().length);
 *     });
 */
export declare class AnnotationOverlay<W extends BaseWidget = AnnotatedWidget> extends AbstractOverlay<W> {
    constructor(widget: W, options?: AnnotationOverlay.Options);
    /**
     * Returns HTML container with inline editors
     * @returns HTMLElement
     */
    getEditorContainer(): HTMLElement;
    on<E extends keyof AnnotationOverlay.EventMap>(type: E, callback: (eventType: E, sender: this, args: AnnotationOverlay.EventMap[E]) => void): this;
    off<E extends keyof AnnotationOverlay.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AnnotationOverlay.EventMap[E]) => void): this;
    notify<E extends keyof AnnotationOverlay.EventMap>(type: E, source: AnnotationOverlay<W>, args?: AnnotationOverlay.EventMap[E]): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    protected getModel(): Group;
    /**
     * Sets CSS style. This style will be applied for all inserted elements
     * @param style CSS style to be applied to inserted elements
     * @param [merge] merge flag
     * @returns this
     */
    setCss(style: CssStyle.Type, merge?: boolean): this;
    /**
     * Return CSS style
     */
    getCss(): CssStyle | null;
    protected onUpdateGeometry(): void;
    /**
     * @param state overlay state
     * @returns this
     */
    protected onStateChanged(state: 'Visible' | 'Enabled'): this;
    /**
     * Set options
     * @param options options
     */
    setOptions(options: AnnotationOverlay.OptionsType): this;
    /**
     * Return options
     * @returns object
     */
    getOptions(): AnnotationOverlay.OptionsType;
    /**
     * Add annotation
     * @throws Error if annotation is null
     * @param annotation annotation object
     */
    addAnnotation(annotation: AnnotationOverlay.Annotation | IAnnotation): IAnnotation;
    /**
     * Clear annotations
     * @param silent silent mode, default is true
     */
    clearAnnotations(silent?: boolean): this;
    /**
     * Remove annotation
     * @param annotation annotation to be removed
     * @returns this
     */
    removeAnnotation(annotation: IAnnotation): this;
    /**
     * Edit annotation, by default it starts embedded TextArea editor
     * @param annotation annotation to edit
     * @returns this
     */
    editAnnotation(annotation: IAnnotation): this;
    /**
     * Scroll to annotation
     * @param annotation annotation
     */
    scrollToAnnotation(annotation: IAnnotation): this;
    /**
     * Return iterator by child nodes
     *
     * @param [filter] a filter function. Returns all nodes if null
     */
    getAnnotations(filter?: (item: IAnnotation) => boolean): Iterator;
    /**
     * Return active annotation
     * @returns annotation
     */
    getActiveAnnotation(): IAnnotation | null;
    /**
     * Set active annotation
     * @param annotation annotation
     */
    setActiveAnnotation(annotation: IAnnotation): this;
    /**
     * Set orientation
     * @param orientation overlay orientation
     * @returns this
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Register geometry extension
     * @param geometryName geometry name
     * @param extension geometry extension
     */
    static registerGeometry(geometryName: string, extension: Function): void;
    /**
     * Return known geometry
     * @param geometryName geometry name
     * @returns extension geometry extension
     */
    static getGeometry(geometryName: string): Function;
}
export declare namespace AnnotationOverlay {
    /**
     * extra options
     */
    type Options = {
        /**
         * Overlay layer can be specified instead of default layer
         */
        overlay?: Layer;
        /**
         * can create annotation
         */
        cancreate?: boolean;
        /**
         * can delete annotation
         */
        candelete?: boolean;
        /**
         * can edit annotation
         */
        canedit?: boolean;
        /**
         * can move annotation
         */
        canmove?: boolean;
        /**
         * annotation container id
         */
        annotationcontainer?: string | HTMLDivElement | HTMLCanvasElement;
        /**
         * handles properties
         */
        handles?: {
            /**
             * handles anchor properties
             */
            anchor?: RectangularShape.Options;
            /**
             * handles topleft properties
             */
            topleft?: RectangularShape.Options;
            /**
             * handles topright properties
             */
            topright?: RectangularShape.Options;
            /**
             * handles bottomleft properties
             */
            bottomleft?: RectangularShape.Options;
            /**
             * handles bottomright properties
             */
            bottomright?: RectangularShape.Options;
        };
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define highlight class name
             */
            cssclass?: string;
        };
    };
    /**
     * options
     */
    type OptionsType = {
        /**
         * can create annotation
         */
        cancreate?: boolean;
        /**
         * can delete annotation
         */
        candelete?: boolean;
        /**
         * can edit annotation
         */
        canedit?: boolean;
        /**
         * can move annotation
         */
        canmove?: boolean;
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define highlight class name
             */
            cssclass?: string;
        };
    };
    /**
     * annotation object
     */
    type Annotation = Annotation.Options & {
        /**
         * extra options
         */
        options?: {
            /**
             * connector size
             */
            connectorsize?: number;
            /**
             * offset of text frame from anchor in device coordinates
             */
            offset?: Point;
            /**
             * annotation text dimension
             */
            frame?: Dimension;
            /**
             * geometryType
             */
            geometrytype?: string;
        };
    };
    type EventMap = AbstractOverlay.EventMap & {
        [Events.AnnotationAdding]: AnnotationEventArgs;
        [Events.AnnotationAdded]: AnnotationEventArgs;
        [Events.AnnotationRemoving]: AnnotationEventArgs;
        [Events.AnnotationRemoved]: AnnotationEventArgs;
        [Events.ActiveAnnotationChanging]: AnnotationEventArgs;
        [Events.ActiveAnnotationChanged]: AnnotationEventArgs;
    };
}
