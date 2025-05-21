import { Text as TextShape } from '@int/geotoolkit/scene/shapes/Text';
import { Path } from '@int/geotoolkit/scene/shapes/Path';
import { AbstractEditor } from '@int/geotoolkit/controls/tools/editors/AbstractEditor';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * Text editor can be used to create and modify {@link @int/geotoolkit/scene/shapes/Text~Text} shapes. Textarea dom element is used to
 * modify node text
 */
export declare class Text extends AbstractEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: Text.Options);
    protected initialize(options: Text.Options): void;
    getTextBounds(): Rect | null;
    protected updateBounds(bounds: Rect, node: TextShape): Rect;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @returns this
     */
    setProperties(properties?: Text.Options): this;
    /**
     * Gets properties
     * @returns editor properties
     */
    getProperties(): Text.OptionsOut;
    /**
     * Shows/hides textarea dom element (and hides/shows scene text shape respectively
     * @param visible true to show textarea and hide scene text, false otherwise
     * @returns this
     */
    protected setTextAreaVisible(visible: boolean): this;
    /**
     * Updates text shape bounds (anchor + size)
     */
    protected updateTextShape(): void;
    protected setAnchor(node: Node, ax: Point | number, ay?: number): this;
    /**
     * Creates shape basing on user click event and default text sizes
     * @param eventArgs event args
     */
    protected createTextOnClick(eventArgs: EventArgs): void;
}
export declare namespace Text {
    /**
     * editor options
     */
    type Options = AbstractEditorBase.Options & {
        /**
         * preview text path (for bounding box creation)
         */
        preview?: Path | Path.Options;
    };
    /**
     * editor properties
     */
    type OptionsOut = AbstractEditorBase.OptionsOut & {
        /**
         * preview path properties (@see {@link @int/geotoolkit/scene/shapes/Path~Path#getProperties})
         */
        preview?: Path.OptionsOut;
    };
}
