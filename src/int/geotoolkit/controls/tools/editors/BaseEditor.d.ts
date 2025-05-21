/**
 * @module geotoolkit/controls/tools/editors/BaseEditor
 */
import { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * The base tool to edit/create {@link @int/geotoolkit/scene/Node~Node}.
 */
export declare class BaseEditor extends AbstractEditorBase {
    constructor(options?: AbstractEditorBase.Options);
    protected resetNodeToGhost(): this;
}
