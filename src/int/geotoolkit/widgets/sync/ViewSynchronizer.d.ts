/**
 * @module geotoolkit/widgets/sync/ViewSynchronizer
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { SyncMode } from '@int/geotoolkit/widgets/sync/SyncMode';
import { SyncOperationRegistry } from '@int/geotoolkit/widgets/sync/SyncOperationRegistry';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Events as SyncEvents } from '@int/geotoolkit/widgets/sync/Events';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Axis } from '@int/geotoolkit/axis/Axis';
/**
 * Define synchronized space. This class synchronize different nodes.
 * @example
 * // How to use custom synchronization
 * import {ViewSynchronizer} from '@int/geotoolkit/widgets/sync/ViewSynchronizer';
 * import {SyncMode} from '@int/geotoolkit/widgets/sync/SyncMode';
 * import {Events as NodeEvents} from '@int/geotoolkit/scene/Node';
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * import {Transformation} from '@int/geotoolkit/util/Transformation';
 *
 * const sync = new ViewSynchronizer({'mode': [SyncMode.Custom]});
 * sync.connect(widget, {
 *    'vertical': true,
 *    'horizontal': true,
 *    'events': [NodeEvents.LocalTransformationChanged]
 *    'custom': {
 *        'getdata' : (item) => item.getLocalTransform(),
 *        'setdata': (tr, item, orientation) => {
 *           const currTransformation = item.getLocalTransform();
 *           let xxModel = currTransformation.getScaleX();
 *           let dxModel = currTransformation.getTranslateX();
 *           let yyModel = currTransformation.getScaleY();
 *           let dyModel = currTransformation.getTranslateY();
 *           if (orientation === Orientation.Vertical) {
 *              yyModel = tr.getScaleY();
 *              dyModel = tr.getTranslateY();
 *           } else if (orientation === Orientation.Horizontal) {
 *              xxModel = tr.getScaleX();
 *              dxModel = tr.getTranslateX();
 *           }
 *           const transformation = new Transformation(xxModel, 0, 0, yyModel, dxModel, dyModel);
 *           widget.setModelTransformation(transformation);
 *         }
 *     }
 *  });
 */
export declare class ViewSynchronizer extends EventDispatcher {
    /**
     * @param [options] options of synchronization
     */
    constructor(options?: ViewSynchronizer.Options);
    on<E extends keyof ViewSynchronizer.EventMap>(type: E, callback: (eventType: E, sender: this, args: ViewSynchronizer.EventMap[E]) => void): this;
    off<E extends keyof ViewSynchronizer.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ViewSynchronizer.EventMap[E]) => void): this;
    notify<E extends keyof ViewSynchronizer.EventMap>(type: E, source: ViewSynchronizer, args?: ViewSynchronizer.EventMap[E]): this;
    /**
     * Connect item to a collection of items to be synchronized
     * @param item item to be added
     * @param [options] options to connect listener / receiver
     * @returns this
     */
    connect(item: Group | Axis, options?: ViewSynchronizer.ConnectOptions): this;
    /**
     * Send data for all receivers of the current action
     * @param data data
     * @param [name] name of the action
     */
    send(data: ViewSynchronizer.SendData, name?: string): void;
    /**
     * Synchronize
     * @param source source to synchronize
     * @param name action name to applied for synchronization
     * @returns this
     */
    synchronize(source: Group | Axis, name: string): this;
    /**
     * Disconnect item from a collection of items to be synchronized
     * @param item item to be removed
     */
    disconnect(item: Group | Axis): void;
}
export declare namespace ViewSynchronizer {
    /**
     * options of synchronization
     */
    type Options = {
        /**
         * an array of enabled modes to synchronize
         */
        mode?: SyncMode[];
        /**
         * registry of operations
         * all listeners
         */
        registry?: SyncOperationRegistry;
    };
    /**
     * options to connect listener / receiver
     */
    type ConnectOptions = {
        /**
         * sender of events
         */
        sender?: boolean;
        /**
         * receiver of events
         */
        receiver?: boolean;
        /**
         * listener of events
         */
        events?: string[];
        /**
         * item own orientation
         */
        orientation?: Orientation;
        vertical?: boolean;
        horizontal?: boolean;
        ignoremodellimits?: boolean;
    } & Partial<Record<SyncMode, {
        setdata?: (data: any, item: EventDispatcher, direction: Orientation) => any | void;
        getdata?: (item: EventDispatcher, direction: Orientation) => any;
    }>>;
    /**
     * data
     */
    type SendData = {
        /**
         * data in the vertical direction
         */
        vertical?: any;
        /**
         * data in horizontal direction
         */
        horizontal?: any;
    };
    type EventMap = EventDispatcher.EventMap & {
        [SyncEvents.ItemChanged]: {
            data: any;
            action: string;
            orientation: Orientation;
        };
    };
}
