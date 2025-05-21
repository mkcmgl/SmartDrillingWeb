import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Group } from '@int/geotoolkit/scene/Group';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AbstractPaperFormat } from '@int/geotoolkit/scene/exports/AbstractPaperFormat';
import type { AnyRecord } from '@int/geotoolkit/base';
import type { Document as ReportDocument } from '@int/geotoolkit/report/Document';
import type { Document as DomDocument } from '@int/geotoolkit/report/dom/Document';
import type { Registry } from '@int/geotoolkit/report/dom/elements/Registry';
import type { PaperFormat } from '@int/geotoolkit/scene/exports/PaperFormat';
import type { PaperOrientation } from '@int/geotoolkit/scene/exports/PaperOrientation';
/**
 * DocumentViewWidget events
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * This Event is fired when the view is scaled
     * @event module:geotoolkit/report/widgets/DocumentViewWidget~Events~onScaleView
     */
    onScaleView = "onScaleView",
    /**
     * This Event is fired when the view is translated
     * @event module:geotoolkit/report/widgets/DocumentViewWidget~Events~onTranslateView
     */
    onTranslateView = "onTranslateView",
    /**
     * Event type fired when a active page has been changed.
     */
    onActivePageChanged = "onActivePageChanged"
}
/**
 * DocumentViewWidget is essentially a base widget specialized for display report document.
 */
export declare class DocumentViewWidget extends BaseWidget {
    /**
     * @param [options]
     */
    constructor(options?: DocumentViewWidget.Options);
    on<E extends keyof DocumentViewWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: DocumentViewWidget.EventMap[E]) => void): this;
    off<E extends keyof DocumentViewWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DocumentViewWidget.EventMap[E]) => void): this;
    notify<E extends keyof DocumentViewWidget.EventMap>(type: E, source: DocumentViewWidget, args?: DocumentViewWidget.EventMap[E]): this;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect | object): this;
    /**
     * @param [options] tools options
     * @returns this
     */
    protected initializeTools(options?: AnyRecord): this;
    /**
     * update Scroll Positions using visible limits and model limits.
     *
     * @param [enableAnimation] show animation
     * @returns this
     */
    updateScrollPositions(enableAnimation?: boolean): this;
    /**
     * Returns active page index
     * @returns active page index
     */
    getActivePageIndex(): number;
    /**
     * Zoom out
     */
    zoomIn(): this;
    /**
     * Zoom in
     */
    zoomOut(): this;
    /**
     * Return current document view scale factor
     * @returns current scale factor
     */
    getViewScale(): number;
    /**
     * Set document view scale factor
     * @param scaleFactor new scale factor
     * @returns this
     */
    setViewScale(scaleFactor: number): this;
    /**
     * Scale document view
     * @param factor scale factor
     * @returns this
     */
    scaleView(factor: number): this;
    /**
     * Translate view
     * @param dx offset x
     * @param dy offset y
     * @returns this
     */
    translateView(dx: number, dy: number): this;
    /**
     * @returns this
     */
    adjustPages(): this;
    /**
     * Return pages count
     * @returns pages count
     */
    getPagesCount(): number;
    /**
     * Scroll to page
     * @param pageIndex page index
     */
    scrollToPage(pageIndex: number): this;
    protected onDocumentRebuild(): void;
    /**
     * Load document
     * @param document document to load
     * @param [dispose] dispose active template
     */
    loadDocument(document: ReportDocument, dispose?: boolean): this;
    /**
     * Parse and Load document
     * @param document document to parse and load
     * @param [registry] DOM elements registry
     */
    parseDocument(document: string, registry?: Registry): Promise<ReportDocument>;
    /**
     * Return current document
     * @returns this
     */
    getDocument(): ReportDocument;
    /**
     * Returns DOM document
     */
    getDomDocument(): DomDocument;
    /**
     * Set paper size
     * @param paperFormat paper format
     * @param [orientation] paper orientation
     * @param [margins] paper margins
     */
    setPaperSize(paperFormat: PaperFormat | string, orientation?: PaperOrientation, margins?: DocumentViewWidget.PaperMargins): this;
    /**
     * Set paper format
     * @param paperFormat paper format
     */
    setPaperFormat(paperFormat: AbstractPaperFormat): this;
    /**
     * Return current paper format
     */
    getPaperFormat(): AbstractPaperFormat;
    /**
     * Returns Document information
     * @returns default document information
     */
    getDocumentInfo(): DocumentViewWidget.DocumentInfo;
    /**
     * Set Document information
     * @param documentInfo document info
     */
    setDocumentInfo(documentInfo: DocumentViewWidget.DocumentInfo): this;
    /**
     * Returns if page content clipping is enabled or not for this node.
     */
    isContentClippingEnabled(): boolean;
    /**
     * Enables or disables page content clipping of this widget. If enabled,
     * document content will not be rendered outside of margin bounds.
     *
     * @param doClip enable content clipping on this widget
     */
    enableContentClipping(doClip: boolean): this;
    /**
     * Returns visibility of the rulers
     */
    getRulersVisible(): boolean;
    /**
     * Sets visibility of the rulers.
     *
     * @param visible flag specifying visibility of the rulers
     */
    setRulersVisible(visible: boolean): this;
    /**
     * Returns visibility of the pages grid
     */
    getGridsVisible(): boolean;
    /**
     * Sets visibility of the pages grid
     *
     * @param visible flag specifying visibility of the pages grid
     */
    setGridsVisible(visible: boolean): this;
    /**
     * Returns widget options
     */
    getOptions(): DocumentViewWidget.OptionsBaseOut;
    /**
     * Sets widget options
     * @param [options] widget options
     * @example
     * //call  setOptions on widget after construction and change the default behavior.
     * widgets.setOptions({
     *    'rulersvisible': false,
     *    'gridsvisible': false
     * });
     */
    setOptions(options?: DocumentViewWidget.OptionsBase): this;
}
export declare namespace DocumentViewWidget {
    type Options = BaseWidget.Options & Omit<OptionsBase, 'paperformat'> & {
        /**
         * preview mode
         */
        previewmode?: boolean;
        /**
         * defines tools options
         */
        tools?: AnyRecord;
        /**
         * bounds of the current widget
         */
        bounds?: Rect;
    };
    /**
     * paper margins
     */
    type PaperMargins = {
        /**
         * left margin
         */
        left?: string | number;
        /**
         * top margin
         */
        top?: string | number;
        /**
         * right margin
         */
        right?: string | number;
        /**
         * bottom margin
         */
        bottom?: string | number;
    };
    /**
     * document info
     */
    type DocumentInfo = {
        /**
         * document title
         */
        title?: string;
        /**
         * document Date
         */
        date?: Date;
    };
    type OptionsBaseOut = Required<OptionsBase>;
    /**
     * widget options
     */
    type OptionsBase = {
        /**
         * minimum scale factor
         */
        minscale?: number;
        /**
         * maximum scale factor
         */
        maxscale?: number;
        /**
         * visibility of the rulers
         */
        rulersvisible?: boolean;
        /**
         * visibility of the pages grid
         */
        gridsvisible?: boolean;
        /**
         * visibility of the headers
         */
        contentclipping?: boolean;
        /**
         * pages paper format
         */
        paperformat?: AbstractPaperFormat;
    };
    type EventMap = Group.EventMap & {
        [Events.onActivePageChanged]: void;
        [Events.onScaleView]: {
            factor: number;
        };
        [Events.onTranslateView]: {
            dx: number;
            dy: number;
        };
    };
}
