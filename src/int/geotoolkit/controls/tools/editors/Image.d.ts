import { Image as ImageShape } from '@int/geotoolkit/scene/shapes/Image';
import { SymbolEditor } from '@int/geotoolkit/controls/tools/editors/SymbolEditor';
/**
 * Image editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Image~Image} shapes
 */
export declare class Image extends SymbolEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: Image.Options);
    getNode: () => ImageShape;
}
export declare namespace Image {
    /**
     * editor options
     */
    type Options = SymbolEditor.Options & {
        /**
         * image to edit
         */
        node?: ImageShape;
    };
}
