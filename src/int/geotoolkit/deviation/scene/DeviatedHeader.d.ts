import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { DeviatedCompositeNode } from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Iterator } from '@int/geotoolkit/util/iterator';
export declare class DeviatedHeader extends CompositeNode {
    constructor(options: DeviatedHeader.Options);
}
export declare namespace DeviatedHeader {
    /**
     * options
     */
    type Options = CompositeNode.Options & {
        /**
         * deviated node
         */
        deviatednode: DeviatedCompositeNode;
        /**
         * anchor type (default meaning: "header")
         */
        alignment?: AnchorType;
        /**
         * may be used to explicitly set header's depth position
         */
        depth?: number;
        /**
         * height pixels (along trajectory)
         */
        height?: number;
        /**
         * offset pixels (along trajectory)
         */
        offset?: number;
        /**
         * the child nodes to be added
         */
        children?: Node | Node[] | Iterator;
    };
}
