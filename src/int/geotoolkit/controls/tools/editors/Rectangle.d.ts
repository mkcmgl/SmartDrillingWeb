import { Rectangle as RectangleShape } from '@int/geotoolkit/scene/shapes/Rectangle';
import { SymbolEditor } from '@int/geotoolkit/controls/tools/editors/SymbolEditor';
/**
 * Rectangle editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Rectangle~Rectangle} shapes
 */
export declare class Rectangle extends SymbolEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: Rectangle.Options);
}
export declare namespace Rectangle {
    /**
     * editor options
     */
    type Options = SymbolEditor.Options & {
        /**
         * rectangle node to edit
         */
        node?: RectangleShape;
    };
}
