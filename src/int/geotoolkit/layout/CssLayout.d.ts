import { Iterator } from '@int/geotoolkit/util/iterator';
import { Rect } from '@int/geotoolkit/util/Rect';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { ContainerLayout } from '@int/geotoolkit/layout/ContainerLayout';
/**
 * Implements simple css layout (in absolute values)
 */
export declare class CssLayout extends ContainerLayout {
    constructor();
    /**
     * Return Default CSS Layout
     */
    static getDefault(): CssLayout;
    add(item: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    insert(index: number, item: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    remove(item: ILayoutable): this;
    clear(): this;
    getIterator(targets?: ILayoutable[] | Iterator<ILayoutable>): Iterator<ILayoutable>;
    layout(rect: Rect, targets: ILayoutable[]): this;
}
