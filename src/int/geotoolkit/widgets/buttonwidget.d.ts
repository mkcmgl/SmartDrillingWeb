import { Group } from '@int/geotoolkit/scene/Group';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
/**
 * State enum
 * @enum
 * @readonly
 */
export declare enum State {
    /**
     * Off
     */
    Off = "Off",
    /**
     * On
     */
    On = "On"
}
/**
 * Button object for button widget
 */
export declare class Button extends Group {
    /**
     * @param [options]
     * @param [widget] the button widget this button belongs to
     */
    constructor(options?: Button.Options, widget?: ButtonWidget);
    /**
     * Get state
     */
    getState(): State;
    /**
     * Get Text
     */
    getText(): string | null;
    /**
     * Set state
     * @param value state
     * @returns this
     */
    setState(value: State): this;
    /**
     * Is toggle
     */
    isToggle(): boolean;
    /**
     * Set hover
     * @param value hover
     * @returns this
     */
    setHover(value: boolean): this;
    /**
     * Is Disabled
     */
    isDisabled(): boolean;
    /**
     * Set Disabled.
     * @param value disabled
     * @returns this
     */
    setDisabled(value: boolean): this;
    click(): void;
}
export declare namespace Button {
    type Options = Group.Options & {
        onclick: (this: Button, button: Button) => void;
        width?: number;
        height?: number;
        text?: string;
        toggle?: boolean;
        textanchor?: AnchorType;
        disabled?: boolean;
        state?: State;
        styles?: Partial<Record<'normal' | 'disabled' | 'pressed' | 'hover', {
            textstyle: TextStyle;
            linestyle: LineStyle;
            fillstyle: FillStyle;
        }>>;
    };
}
/**
 * Button group widget
 */
export declare class ButtonWidget extends BaseWidget {
    constructor(options?: ButtonWidget.Options);
    /**
     * Is Toggle?
     */
    isToggle(): boolean;
    /**
     * Toggle all buttons
     * @param state state
     */
    toggleAll(state: State): void;
    /**
     * Get button by index
     * @param index index
     */
    getButtonByIndex(index: number): Button | null;
    /**
     * Get button by button text
     * @param text text
     */
    getButtonByText(text: string): Button | null;
}
export declare namespace ButtonWidget {
    type Options = BaseWidget.Options & {
        /**
         * toggle
         */
        toggle?: boolean;
        /**
         * Buttons options
         */
        buttons?: Button.Options[];
    };
}
