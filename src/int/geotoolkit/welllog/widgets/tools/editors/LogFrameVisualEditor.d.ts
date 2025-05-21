import { LogVisualEditor } from '@int/geotoolkit/welllog/widgets/tools/editors/LogVisualEditor';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
/**
 * Provides the tool to edit/create/delete the {@link @int/geotoolkit/welllog/LogFrameVisual~LogFrameVisual}'s.
 */
export declare class LogFrameVisualEditor extends LogVisualEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: LogFrameVisualEditor.Options);
    /**
     * Enables/disables the mode that allows resizing in vertical and horizontal direction
     * @param enabled the enabled flag
     */
    setFreeResizeModeEnabled(enabled: boolean): this;
    /**
     * Gets the flag indicating if resizing in vertical and horizontal direction allowed or not
     */
    isFreeResizeModeEnabled(): boolean;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @returns this
     */
    setProperties(properties?: LogFrameVisualEditor.Options): this;
    /**
     * Returns properties
     * @returns editor properties
     */
    getProperties(): LogFrameVisualEditor.OptionsOut;
}
export declare namespace LogFrameVisualEditor {
    /**
     * editor options
     */
    type Options = AbstractEditorBase.Options & {
        /**
         * the mode that allows resizing in vertical and horizontal direction
         */
        freeresizemode?: boolean;
    };
    /**
     * editor properties
     */
    type OptionsOut = AbstractEditorBase.OptionsOut & {
        /**
         * the flag indicating if resizing in vertical and horizontal direction allowed or not
         */
        freeresizemode: boolean;
    };
}
