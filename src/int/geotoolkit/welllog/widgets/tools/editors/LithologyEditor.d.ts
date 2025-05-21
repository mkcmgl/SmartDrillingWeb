import { LineType, LogLithology } from '@int/geotoolkit/welllog/LogLithology';
import { LogVisualEditor } from '@int/geotoolkit/welllog/widgets/tools/editors/LogVisualEditor';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Provides the tool to edit/create/delete the {@link @int/geotoolkit/welllog/LogLithology~LogLithology}.
 */
export declare class LithologyEditor extends LogVisualEditor {
    /**
     * @param [options] editor options
     */
    constructor(options?: LithologyEditor.Options);
    /**
     * Gets active range properties object or `null`
     */
    getActiveRangeInfo(): LithologyEditor.RangeInfo | null;
    /**
     * Returns properties
     * @returns editor properties
     */
    getProperties(): LithologyEditor.OptionsOut;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @returns this
     */
    setProperties(properties?: LithologyEditor.Options): this;
    /**
     * Gets minimal device height for lithology range
     */
    getMinDeviceHeight(): number;
    /**
     * Sets minimal device height for lithology range
     * @param height the minimal device height for a single range
     */
    setMinDeviceHeight(height: number): this;
    /**
     * Gets an attribute provider for new ranges
     */
    getAttributeCallback(): LithologyEditor.AttributeCallback;
    /**
     * Sets an attribute provider for new ranges
     * @param callback the attribute callback for new ranges
     */
    setAttributeCallback(callback: LithologyEditor.AttributeCallback): this;
}
export declare namespace LithologyEditor {
    /**
     * editor options
     */
    type Options = AbstractEditorBase.Options & {
        /**
         * the minimal device height for lithology range
         *
         * @defaultValue 22
         */
        mindeviceheight?: number;
        /**
         * the attribute callback for new ranges
         */
        attributecallback?: AttributeCallback;
        /**
         * the pressed button key which is used to split adjacent ranges while dragging
         *
         * @remarks See a full list of key values here {@link https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values}
         * @defaultValue 'Shift'
         */
        splitbuttonkey?: string;
    };
    /**
     * editor properties
     */
    type OptionsOut = AbstractEditorBase.OptionsOut & {
        /**
         * the minimal device height for lithology range
         */
        mindeviceheight: number;
        /**
         * the attribute provider for new ranges
         */
        attributecallback: AttributeCallback;
        /**
         * the pressed button key which is used to split adjacent ranges while dragging
         * @remarks See a full list of key values here {@link https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values}
         */
        splitbuttonkey: string;
    };
    /**
     * The callback for getting attributes for new lithology ranges
     */
    type AttributeCallback = (low: number, high: number) => Attributes;
    /**
     * the object containing attributes for lithology range
     */
    type Attributes = {
        /**
         * the name for the specified range
         */
        name?: string;
        /**
         * the header title for the specified range
         */
        title?: string;
        /**
         * the text style for the specified range
         */
        textstyle?: TextStyle.Type;
        /**
         * the fill style for the specified range
         */
        fillstyle?: FillStyle.Type;
        /**
         * the line style for the top edge of the range
         */
        toplinestyle?: LineStyle.Type;
        /**
         * the line style for the bottom edge of the range.
         * Will be applied for the last range in the sequence only
         */
        bottomlinestyle?: LineStyle.Type;
        /**
         * the line type for the top edge of the range
         */
        toplinetype?: LineType;
        /**
         * the line type for the bottom edge of the range.
         * Will be applied for the last range in the sequence only
         */
        bottomlinetype?: LineType;
        /**
         * the range identifier
         */
        id?: string | number;
    };
    /**
     * Defines lithology range properties object
     */
    type RangeInfo = Range.OptionsOut & {
        /**
         * range name
         */
        name?: string;
        /**
         * range header title
         */
        title?: string;
        /**
         * the range identifier
         */
        id?: string | number;
        /**
         * the text style for the specified range
         */
        textstyle?: TextStyle.Type;
        /**
         * the fill style for the specified range
         */
        fillstyle?: FillStyle.Type;
        /**
         * the line style for the top edge of the range
         */
        toplinestyle?: LineStyle.Type;
        /**
         * the line style for the bottom edge of the range.
         * Will be applied for the last range in the sequence only
         */
        bottomlinestyle?: LineStyle.Type;
        /**
         * line type for top edge of the range
         */
        toplinetype?: LineType;
        /**
         * line type for bottom edge of the range
         */
        bottomlinetype?: LineType;
        /**
         * the lithology that owns this range
         */
        owner: LogLithology | null;
        /**
         * the minimal device height
         */
        mindeviceheight: number;
    };
}
