import { Orientation } from '@int/geotoolkit/util/Orientation';
import { PointerMode } from '@int/geotoolkit/controls/tools/PointerMode';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import { Point } from '@int/geotoolkit/util/Point';
import type { Range } from '@int/geotoolkit/util/Range';
import type { CreateHTMLElement } from '@int/geotoolkit/platforms/CreateHTMLElement';
/**
 * Provides HTML based tooltip tool to display content information
 *
 * To initialize it is necessary to add div element on your page and specify styles:
 * @example
 * <div id="tooltip-container" style="display:none"></div>
 */
export declare class ToolTipTool extends AbstractTool {
    /**
     * AbstractToolTipTool constructor
     * @param options - tool options
     */
    constructor(options?: ToolTipTool.Options);
    /**
     * Sets tooltip offset x
     * @param offsetX offset x
     * @returns this
     */
    setOffsetX(offsetX: number): this;
    getOffsetX(): number;
    /**
     * Sets tooltip offset y
     * @param offsetY offset y
     * @returns this
     */
    setOffsetY(offsetY: number): this;
    getOffsetY(): number;
    setAlignment(alignment: AnchorType): this;
    getAlignment(): AnchorType;
    setOrientation(orientation: Orientation): this;
    getOrientation(): Orientation;
    setPointerMode(mode: PointerMode | string): this;
    getPointerMode(): PointerMode | string;
    /**
     * Set callback to return information about the current position
     * @param callback callback
     */
    setCallback(callback: ToolTipTool.Callback): this;
    /**
     * Gets callback
     * @returns callback callback to return information about the current position
     */
    getCallback(): ToolTipTool.Callback;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): ToolTipTool.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ToolTipTool.Options): this;
    /**
     * Sets tooltip options
     * @param [options] options
     * @returns this
     */
    setOptions(options?: ToolTipTool.Options): this;
    /**
     * Updates tooltip information using previous tooltip point
     * @returns this
     */
    updateInfo(): this;
    /**
     * Gets tooltip position handler, this handler will be called every time mouse position changed
     * @returns PositionCallback
     */
    getTooltipPositionHandler(): ToolTipTool.PositionCallback;
    /**
     * Set tooltip position handler, this handler will be called every time mouse position changed
     * @param [handler] Handler to be called
     * @returns this
     */
    setTooltipPositionHandler(handler?: ToolTipTool.PositionCallback): this;
    /**
     * Gets tooltip size handler, this handler will be called every time mouse position changed
     * @returns SizeCallback
     */
    getTooltipSizeHandler(): ToolTipTool.SizeCallback;
    /**
     * Set tooltip size handler, this handler will be called every time mouse position changed
     * @param [handler] Handler to be called
     * @returns this
     */
    setTooltipSizeHandler(handler?: ToolTipTool.SizeCallback): this;
    /**
     * Sets CSS classes to be allied for tooltip
     * @param cssClasses CSS classes
     * @returns this
     */
    setCssClasses(cssClasses: string): this;
    /**
     * Return CSS classes for tooltip
     * @returns CSS classes
     */
    getCssClasses(): string | null;
    /**
     * Gets tooltip div element or callback for creates div element
     * @returns divElement HTML div container element or callback which creating div
     */
    getDivElement(): HTMLElement | CreateHTMLElement;
    /**
     * Sets tooltip div element or callback for creates div element
     * @param divElement HTML div container element or callback which creating div
     * @returns this
     */
    setDivElement(divElement: HTMLElement | any | any[] | CreateHTMLElement): this;
    /**
     * Dispose ToolTipTool
     */
    dispose(): void;
}
export declare namespace ToolTipTool {
    /**
     * tool options
     */
    export type Options = AbstractTool.Options & {
        /**
         * div element, if it is not specify element will be created
         */
        divelement?: HTMLElement | CreateHTMLElement;
        /**
         * CSS classes' names to be applied for tooltip
         */
        cssclasses?: string;
        /**
         * offset of tooltip from current position by x in pixels
         */
        offsetx?: number;
        /**
         * offset of tooltip from current position by y in pixels
         */
        offsety?: number;
        /**
         * tooltip alignment according to the point set by offsets
         */
        alignment?: AnchorType;
        /**
         * tooltip orientation
         */
        orientation?: Orientation;
        /**
         * tooltip appearance mode
         */
        mode?: PointerMode | string;
        /**
         * callback to return information about the current position
         */
        callback?: Callback;
        /**
         * callback function to initialize tool
         */
        init?: InitCallback;
        /**
         * true if tooltip info should be auto updated after layer.invalidate() was called
         */
        autoupdate?: boolean;
        /**
         * true if need to flip the tooltip near the edge of the window to avoid cropped tooltip
         */
        autoflip?: boolean;
        /**
         * delay between displaying tooltip
         */
        delay?: number;
        /**
         * Handler to resolve tooltip position, to be called every time mouse position changed
         */
        positionhandler?: PositionCallback;
        /**
         * Handler to resolve tooltip size range, to be called every time mouse position changed
         */
        sizehandler?: SizeCallback;
    };
    /**
     * Callback to return information about the current position of tooltip.
     */
    export type Callback = (point: Point, eventArgs: EventArgs | null, tool: ToolTipTool) => null | string | string[] | ToolTipInfo | ToolTipInfo[];
    /**
     * properties object
     */
    export type OptionsOut = AbstractTool.OptionsOut & {
        divelement: HTMLElement | CreateHTMLElement;
        /**
         * CSS classes
         */
        cssclasses: string;
        /**
         * offset of tooltip from current position by x in pixels
         */
        offsetx: number;
        /**
         * offset of tooltip from current position by y in pixels
         */
        offsety: number;
        /**
         * tooltip alignment according to the point set by offsets
         */
        alignment: AnchorType;
        /**
         * tooltip orientation
         */
        orientation: Orientation;
        /**
         * tooltip appearance mode
         */
        mode: PointerMode | string;
        /**
         * true if tooltip info should be auto updated after layer.invalidate() was called
         */
        autoupdate: boolean;
        /**
         * true if need to flip the tooltip near the edge of the window to avoid cropped tooltip
         */
        autoflip: boolean;
        /**
         * delay between displaying tooltip
         */
        delay: number;
    };
    /**
     * Callback for setTooltipPositionHandler
     */
    export type PositionCallback = (modelPoint: Point, devicePoint: Point, eventArgs: EventArgs | null) => Point | Point[];
    /**
     * Callback for setTooltipSizeHandler
     */
    export type SizeCallback = (modelPoint: Point, devicePoint: Point, eventArgs: EventArgs | null, info: string | string[] | ToolTipInfo | ToolTipInfo[]) => Range | Range[] | null;
    type InitCallback = (tool?: ToolTipTool) => void;
    /**
     * Defines object containing tooltip info
     */
    export type ToolTipInfo = {
        /**
         * user defined tooltip content
         */
        content?: string;
        /**
         * user defined tooltip min and max size in device coordinate
         */
        sizerange?: Range;
        /**
         * user defined tooltip position in device coordinate
         */
        clientpoint?: Point;
    };
    export {};
}
