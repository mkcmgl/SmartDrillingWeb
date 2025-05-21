import { Node } from '@int/geotoolkit/scene/Node';
import { HTMLOverlay } from '@int/geotoolkit/scene/HTMLOverlay';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * HTMLOverlayLayer allows user adds other HTMLElements at a given position in Node's model space
 * NOTE: This layer will not be exported to pdf.
 * @example
 * import {HTMLOverlayLayer} from '@int/geotoolkit/scene/HTMLOverlayLayer';
 * import {AnnotatedWidget} from '@int/geotoolkit/widgets/AnnotatedWidget';
 * import {HTMLOverlay} from '@int/geotoolkit/scene/shapes/HTMLOverlay';
 * import {Axis} from '@int/geotoolkit/axis/Axis';
 * import {TickPosition, LabelPosition} from '@int/geotoolkit/axis/TickInfo';
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {AdaptiveTickGenerator} from '@int/geotoolkit/axis/AdaptiveTickGenerator';
 *
 * const annotatedWidget = new AnnotatedWidget({
 *     'model': model, // instance of @int/geotoolkit/scene/Group
 *     'annotationssizes': {
 *         'north': 5, 'south': 60, 'east': 12, 'west': 80
 *     },
 *     'north': [],
 *     'south': [new Axis({
 *         'tickposition': TickPosition.Top,
 *         'orientation': Orientation.Horizontal,
 *         'labelposition': LabelPosition.Top,
 *         'title': {
 *             'text': 'Day',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'west': [new Axis({
 *         'tickposition': TickPosition.Right,
 *         'labelposition': LabelPosition.Right,
 *         'orientation': Orientation.Vertical,
 *         'title': {
 *             'text': 'Volume (gal)',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'east': [],
 *     'tools': {
 *         'horizontalscroll': {
 *             'visible': false
 *         },
 *         'verticalscroll': {
 *             'visible': false
 *         }
 *     }
 * });
 *
 * const htmlOverlayLayer = new HTMLOverlayLayer();
 * htmlOverlayLayer.addOverlays(new HTMLOverlay());
 * annotatedWidget.getModel().addChild(htmlOverlayLayer);
 */
export declare class HTMLOverlayLayer extends Node {
    constructor(options?: Node.Options);
    render(context: RenderingContext): void;
    /**
     * Return index of overlay
     * (index of the specified overlay or -1 if overlay is not found)
     * @param overlay overlay to check index
     * @returns index Index of overlay
     */
    indexOfOverlay(overlay: HTMLOverlay): number;
    /**
     * Insert overlay(s) to HTMLOverlayLayer
     * @param index Index to insert at
     * @param overlays An overlay or array of overlays to be inserted
     * @returns this
     */
    insertOverlays(index: number, overlays: HTMLOverlay | HTMLOverlay[]): this;
    /**
     * Add overlay(s) to HTMLOverlayLayer
     * @param overlays An overlay or array of overlays to be added
     * @returns this
     */
    addOverlays(overlays: HTMLOverlay | HTMLOverlay[]): this;
    /**
     * Remove overlay(s) in HTMLOverlayLayer
     * @param [overlays] Array of overlays or array of index of the overlays to be removed, or pass nothing to clear all HTMLOverlays
     * @returns this
     */
    removeOverlays(overlays?: HTMLOverlay | HTMLOverlay[] | number[]): this;
    /**
     * Get an HtmlOverlay by index
     * @param index Index of HTMLOverlay
     * @returns HTMLOverlay
     */
    getOverlay(index: number): HTMLOverlay | null;
    /**
     * Find a first HtmlOverlay satisfied the provided testing function
     * @param method Testing method to find HtmlOverLay
     * @returns HTMLOverlay
     */
    findOverlay(method: (value: HTMLOverlay, index: number, obj: HTMLOverlay[]) => unknown): HTMLOverlay | null;
    /**
     * Get number of overlays
     * @returns Number of overlays
     */
    getOverlaysCount(): number;
}
