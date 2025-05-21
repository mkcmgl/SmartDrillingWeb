import { Ellipse as EllipseShape } from '@int/geotoolkit/scene/shapes/Ellipse';
import { Rectangle } from '@int/geotoolkit/controls/tools/editors/Rectangle';
/**
 * Ellipse editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Ellipse~Ellipse} shapes
 */
export declare class Ellipse extends Rectangle {
    /**
     * @param [options] editor options
     */
    constructor(options?: Ellipse.Options);
}
export declare namespace Ellipse {
    /**
     * editor options
     */
    type Options = Rectangle.Options & {
        /**
         * ellipse node to edit
         */
        node?: EllipseShape;
    };
}
