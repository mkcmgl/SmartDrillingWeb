import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { AbstractEditor } from '@int/geotoolkit/controls/tools/editors/AbstractEditor';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * Symbol editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape} shapes
 */
export declare class SymbolEditor extends AbstractEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: SymbolEditor.Options);
    protected initialize(options: SymbolEditor.Options): void;
    getAspectRatio(): number;
}
export declare namespace SymbolEditor {
    /**
     * editor options
     */
    type Options = AbstractEditorBase.Options & {
        /**
         * symbol to edit
         */
        node?: SymbolShape;
    };
}
