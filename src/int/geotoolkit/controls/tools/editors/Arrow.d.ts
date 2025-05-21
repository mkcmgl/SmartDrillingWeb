import { Arrow as ArrowShape } from '@int/geotoolkit/scene/shapes/Arrow';
import { Line } from '@int/geotoolkit/controls/tools/editors/Line';
/**
 * Arrow editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Arrow~Arrow} shapes
 */
export declare class Arrow extends Line {
    /**
     * @param [options] editor options
     */
    constructor(options?: Arrow.Options);
}
export declare namespace Arrow {
    /**
     * editor options
     */
    type Options = Line.Options & {
        /**
         * arrow node to edit
         */
        node?: ArrowShape;
    };
}
