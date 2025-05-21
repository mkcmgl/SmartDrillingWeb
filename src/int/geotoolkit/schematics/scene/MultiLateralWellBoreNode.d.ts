import { Group } from '@int/geotoolkit/scene/Group';
import type { WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { Events } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * ScalesRatioMode
 * @enum
 * @readonly
 */
export declare enum ScalesRatioMode {
    /**
     * Free
     */
    Free = "Free",
    /**
     * Keep
     */
    Keep = "Keep"
}
/**
 * Multi-lateral WellBoreNode representation.
 *
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoading
 * @fires @int/geotoolkit/schematics/scene/WellBoreNode~Events.ComponentsLoaded
 */
export declare class MultiLateralWellBoreNode extends Group {
    constructor(options?: MultiLateralWellBoreNode.Options);
    on<E extends keyof MultiLateralWellBoreNode.EventMap>(type: E, callback: (eventType: E, sender: this, args: MultiLateralWellBoreNode.EventMap[E]) => void): this;
    off<E extends keyof MultiLateralWellBoreNode.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: MultiLateralWellBoreNode.EventMap[E]) => void): this;
    notify<E extends keyof MultiLateralWellBoreNode.EventMap>(type: E, source: MultiLateralWellBoreNode, args?: MultiLateralWellBoreNode.EventMap[E]): this;
    setData(data: MultiLateralWellBoreNode.DataItem[]): this;
    /**
     * Returns options
     * @returns properties properties see {@link import("geotoolkit/schematics/scene/MultiLateralWellBoreNode").MultiLateralWellBoreNode.getProperties}
     */
    getOptions(): MultiLateralWellBoreNode.Options;
    /**
     * Sets the node options
     * @param options node options see {@link import("geotoolkit/schematics/scene/MultiLateralWellBoreNode").MultiLateralWellBoreNode.setProperties}
     * @returns this
     */
    setOptions(options: MultiLateralWellBoreNode.Options): this;
    /**
     * Returns node properties
     * @returns properties
     */
    getProperties(): MultiLateralWellBoreNode.OptionsOut;
    /**
     * Sets the node properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: MultiLateralWellBoreNode.Options): this;
}
export declare namespace MultiLateralWellBoreNode {
    /**
     * options
     */
    type Options = Group.Options & {
        /**
         * clip options
         */
        clip?: {
            /**
             * clip on flag
             */
            on?: boolean;
            /**
             * clip components
             */
            components?: string[];
        };
        /**
         * trajectory options
         */
        trajectory?: {
            /**
             * trajectory lines options
             */
            lines?: {
                /**
                 * trajectory lines visible options
                 */
                visible?: boolean;
            };
            /**
             * stations options
             */
            stations?: {
                /**
                 * stations visible
                 */
                visible?: boolean;
                /**
                 * stations symbol properties
                 */
                symbol?: SymbolShape.Options;
            };
            branching?: {
                visible?: boolean;
                symbol?: SymbolShape.Options;
            };
        };
        /**
         * track width
         */
        trackwidth?: number;
        /**
         * data array
         */
        data?: DataItem[];
        sparse?: SparseOptions;
        /**
         * wellbore node options
         */
        wellborenode: WellBoreNode.Options;
    };
    type DataItem = {
        primary?: boolean;
        trajectory: Trajectory2d;
        elements: WellBoreData.Elements[] | WellBoreData;
    };
    /**
     * properties
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * clip properties
         */
        clip?: {
            /**
             * clip on flag
             */
            on?: boolean;
            /**
             * clip components
             */
            components?: string[];
        };
        /**
         * trajectory properties
         */
        trajectory?: {
            /**
             * trajectory lines properties
             */
            lines?: {
                /**
                 * trajectory lines visible properties
                 */
                visible?: boolean;
            };
            /**
             * stations properties
             */
            stations?: {
                /**
                 * stations visible
                 */
                visible?: boolean;
            };
        };
        /**
         * track width
         */
        trackwidth?: number;
        /**
         * wellbore node options
         */
        wellborenode?: WellBoreNode.Options;
    };
    type EventMap = Group.EventMap & {
        [Events.ComponentsLoading]: void;
        [Events.ComponentsLoaded]: void;
    };
}
/**
 * sparse mode options
 */
declare type SparseOptions = {
    on?: boolean;
    components?: string[];
    /**
     * sparse visible flag
     */
    visible?: boolean;
    /**
     * sparse offset
     */
    offset?: number;
    /**
     * sparse offset
     */
    widthscale?: number;
};
export {};
