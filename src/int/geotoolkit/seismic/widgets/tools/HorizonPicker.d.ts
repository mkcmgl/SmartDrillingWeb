import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { SeismicViewWidget } from '@int/geotoolkit/seismic/widgets/SeismicViewWidget';
import type { SnapPickingStrategy } from '@int/geotoolkit/seismic/data/snap/SnapPickingStrategy';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
/**
 * Enum of horizon picker modes
 * @enum
 * @readonly
 */
export declare enum Mode {
    /**
     * Editor mode
     * In this mode tool will drag the nearest point with left mouse button and delete the nearest point with right mouse button.
     */
    Editor = "Editor",
    /**
     * Eraser mode
     * In this mode tool will erase points that will be in eraser area with left mouse button.
     */
    Eraser = "Eraser",
    /**
     * Insert mode
     * In this mode tool will create new points with left mouse button.
     */
    Insert = "Insert",
    /**
     * Horizon move mode
     * In this mode tool highlights trajectory and moves it vertically with left mouse button.
     */
    HorizonMove = "HorizonMove"
}
/**
 * Horizon picker events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Event type fired when auto creating of horizon is started
     */
    PropagationStarted = "PropagationStarted",
    /**
     * Event type fired when auto creating of horizon is finished
     */
    PropagationFinished = "PropagationFinished"
}
/**
 * Horizon picker tool - generates horizon, depended on seismic data.
 */
export declare class HorizonPicker extends AbstractTool {
    constructor(widget: SeismicViewWidget, options?: HorizonPicker.Options);
    on<E extends keyof HorizonPicker.EventMap>(type: E, callback: (eventType: E, sender: this, args: HorizonPicker.EventMap[E]) => void): this;
    off<E extends keyof HorizonPicker.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: HorizonPicker.EventMap[E]) => void): this;
    notify<E extends keyof HorizonPicker.EventMap>(type: E, source: HorizonPicker, args?: HorizonPicker.EventMap[E]): this;
    /**
     * Sets properties
     * @param [properties] properties object
     * @returns this
     */
    setProperties(properties?: HorizonPicker.Options): this;
    /**
     * Get properties
     * @returns properties object
     */
    getProperties(): HorizonPicker.OptionsOut;
    /**
     * Get trajectory data
     * @returns points data
     */
    getTrajectoryData(): HorizonPicker.TrajectoryData;
    /**
     * Sets trajectory. Can be used in any time to overwrite current trajectory
     */
    setTrajectoryData(data?: HorizonPicker.TrajectoryData): this;
    /**
     * Set horizon visible
     * @param visible true if visible
     * @returns this
     */
    setVisible(visible: boolean): this;
    /**
     * Get horizon visible
     * @returns true if visible
     */
    getVisible(): boolean;
    /**
     * Clear horizon picker trajectories
     */
    clear(): void;
}
export declare namespace HorizonPicker {
    /**
     * options object
     */
    type Options = AbstractTool.Options & {
        /**
         * snap picking strategy (geotoolkit.seismic.data.snap.LocalAbsolutePicking by default)
         */
        snappickingstrategy?: SnapPickingStrategy;
        /**
         * linestyle of horizon (default is red)
         */
        linestyle?: LineStyle;
        /**
         * linestyle of highlighted horizon (default is red)
         */
        highlightlinestyle?: LineStyle;
        /**
         * mode of horizon picker
         */
        mode?: Mode;
        /**
         * symbol for point focus (default is red square)
         */
        focussymbol?: SymbolShape;
        /**
         * eraser size
         */
        erasersize?: number;
        /**
         * focus threshold (in devices)
         */
        focusthreshold?: number;
        /**
         * propagator threshold error (in percents, must be > 0)
         */
        propagatorthresholderror?: number;
        /**
         * eraser shape (default is red square)
         */
        erasershape?: AnchoredShape;
        /**
         * true for extended focus
         */
        extendedfocus?: boolean;
    };
    /**
     * properties object
     */
    type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * snap picking strategy
         */
        snappickingstrategy: SnapPickingStrategy;
        /**
         * linestyle of horizon
         */
        linestyle: LineStyle;
        /**
         * linestyle of highlighted horizon
         */
        highlightlinestyle: LineStyle;
        /**
         * mode of horizon picker
         */
        mode: Mode;
        /**
         * symbol for point focus
         */
        focussymbol: SymbolShape;
        /**
         * eraser size
         */
        erasersize: number;
        /**
         * focus threshold
         */
        focusthreshold: number;
        /**
         * propagator threshold error
         */
        propagatorthresholderror: number;
        /**
         * symbol for eraser mode
         */
        erasershape: AnchoredShape;
        /**
         * true for extended focus
         */
        extendedfocus: boolean;
    };
    /**
     * points data
     */
    type TrajectoryData = {
        /**
         * x coordinates
         */
        x: number[];
        /**
         * y coordinates
         */
        y: number[];
        /**
         * z coordinates
         */
        z: number[];
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.PropagationStarted]: void;
        [Events.PropagationFinished]: void;
    };
}
