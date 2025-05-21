import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Constructable } from '@int/geotoolkit/base';
interface HitTest {
    hitTest: (area: Rect | Point, radius?: number) => any;
}
/**
 * Base class for selected item, that could be returned via Selector
 * @throws Error if sender is not set
 */
export declare class SelectedItem<T extends HitTest = any> {
    /**
     * @param sender node that create the item
     * @param [data] some data
     */
    constructor(sender: T, data?: ReturnType<T['hitTest']>);
    /**
     * Gets sender
     */
    getSender(): T;
    /**
     * Gets data
     * @param [A] if provided vetify that this SelectedItem came from provided type
     * @example
     * import {isSelectedItem} from '@int/geotoolkit/selection/SelectedItem';
     * const items = Selector.select(root, devicePoint, 3).filter(isSelectedItem);
     * items.forEach((item) => {
     *     const data = item.getData(LogSinusoid);
     *     if (data) { // it means this SelectedItem came from LogSinusoid
     *         // now inside 'if' typescript knows type of data
     *         data[0].getDepth();
     *     }
     * });
     */
    getData<U extends T = T>(A?: Constructable<U>): ReturnType<U['hitTest']> | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare function isSelectedItem(source: any): source is SelectedItem;
export {};
