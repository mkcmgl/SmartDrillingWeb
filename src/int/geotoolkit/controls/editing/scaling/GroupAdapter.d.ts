/**
 * @module geotoolkit/controls/editing/scaling/GroupAdapter
 */
import { RectangularShapeAdapter } from '@int/geotoolkit/controls/editing/scaling/RectangularShapeAdapter';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Group adapter tool inherits from rectangle adapter.
 * Sets the bounds to the 'group', instead of setting the transformation
 */
export declare class GroupAdapter<T extends AbstractNode & {
    getBounds: () => Rect | null;
    setBounds: (rect: Rect) => T;
} = Group> extends RectangularShapeAdapter<T> {
    /**
     * OnMove
     *
     * @param x x coordinate
     * @param y y coordinate
     * @returns this
     */
    onMove(x: number, y: number): this;
}
