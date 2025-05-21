/**
 * @module geotoolkit/welllog/widgets/tools/GhostTool
 */
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import { GhostToolEventArgs } from '@int/geotoolkit/welllog/widgets/tools/GhostToolEventArgs';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * GhostTool Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Visual Selected
     */
    Selected = "selected"
}
/**
 * Creates tool to compare curves and tops between tracks
 * <br>
 * <h5>Events {@link @int/geotoolkit/welllog/widgets/tools/GhostTool~Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>Selected</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/GhostToolEventArgs~GhostToolEventArgs}</td>
 *              <td>This Event is fired when the Ghost Tool selection in track occurs.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * @example
 * // To provide visuals for this selection
 * import {Events as GhostToolEvents} from '@int/geotoolkit/welllog/widgets/tools/GhostTool';
 * this.ghost.on(GhostToolEvents.Selected, (evt, sender, args) => args.setSelection([curve]));
 */
export declare class GhostTool extends AbstractTool {
    /**
     * @param manipulatorLayer layer for holding temporary shapes
     * @param [options] options for box
     */
    constructor(manipulatorLayer: CompositeNode, options?: GhostTool.Options);
    on<E extends keyof GhostTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: GhostTool.EventMap[E]) => void): this;
    off<E extends keyof GhostTool.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: GhostTool.EventMap[E]) => void): this;
    notify<E extends keyof GhostTool.EventMap>(type: E, source: GhostTool, args?: GhostTool.EventMap[E]): this;
    /**
     * Return true if the representation is flipped vertically
     * @returns flip
     */
    isVerticalFlip(): boolean;
    /**
     * Set vertical flip of the representation
     * @param flip flag to set the vertical flip of the representation
     * @returns this
     */
    setVerticalFlip(flip: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     * @returns flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Set visuals filter callback
     * @param callback visuals filter callback
     * @returns this
     */
    setVisualsFilter(callback: GhostTool.VisualsFilterCallback | boolean | null): this;
    /**
     * Shift ghost track if it is created
     * @param deltaX delta in pixels in horizontal direction
     * @param deltaY delta in pixels in vertical direction
     */
    shiftGhost(deltaX: number, deltaY: number): void;
    /**
     * Returns active track to apply selection
     */
    getActiveTrack(): LogTrack | null;
}
export declare namespace GhostTool {
    /**
     * options for box
     */
    type Options = AbstractTool.Options & {
        /**
         * options for ghost
         */
        ghost?: {
            /**
             * options for active ghost fill style
             */
            fillstyle?: FillStyle.Options | FillStyle;
            /**
             * options for ghost line style
             */
            linestyle?: LineStyle.Options | LineStyle;
        };
        /**
         * options for rubber band
         */
        rubberband?: {
            /**
             * options for active rubber band fill style
             */
            fillstyle?: FillStyle.Options | FillStyle;
            /**
             * options for rubber band line style
             */
            linestyle?: LineStyle.Options | LineStyle;
        };
        /**
         * options for highlighting the track where the tool will snap
         */
        highlight?: {
            /**
             * enable highlighting of the snap track (note: the "snaptotrack" option must also be enabled)
             */
            enable?: boolean;
            /**
             * options for track highlighting fill style
             */
            fillstyle?: FillStyle.Type;
            /**
             * options for track highlighting line style
             */
            linestyle?: LineStyle.Type;
        };
        /**
         * snap to track
         */
        snaptotrack?: boolean;
        /**
         * shadow to show original selection location
         */
        shadow?: boolean;
    };
    /**
     * filterVisualsCallback definition
     */
    type VisualsFilterCallback = (visuals: LogAbstractVisual[], track: LogTrack) => LogAbstractVisual[] | null;
    type EventMap = AbstractTool.EventMap & {
        [Events.Selected]: GhostToolEventArgs;
    };
}
