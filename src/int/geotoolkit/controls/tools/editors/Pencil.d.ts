import { Path } from '@int/geotoolkit/scene/shapes/Path';
import { AbstractEditor } from '@int/geotoolkit/controls/tools/editors/AbstractEditor';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * Pencil editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Path~Path} shapes that imitates pencil behavior
 * using lineTo tags.
 */
export declare class Pencil extends AbstractEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: AbstractEditorBase.Options);
    protected moveTo(node: Path, x: number, y: number): this;
    protected lineTo(node: Path, x: number, y: number): this;
    /**
     * Sets all properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: AbstractEditorBase.Options): this;
}
