import { Group } from '@int/geotoolkit/scene/Group';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * A group which expands bounds to fits its children. Used to mimic the behavior of SVG Groups and
 * avoid failing checkCollision when the children transform into scene
 */
export declare class SvgGroup extends Group {
    constructor(options?: SvgGroup.Options);
    addChild(node: Node | Node[]): this;
    insertChild(index: number, node: Node): this;
    removeChild(node: Node | Node[]): this;
}
export declare namespace SvgGroup {
    /**
     * options
     */
    type Options = Group.Options;
}
