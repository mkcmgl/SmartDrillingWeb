import type { ToolsContainer } from '@int/geotoolkit/controls/tools/ToolsContainer';
export declare class Button {
    constructor(options?: Button.Options);
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @returns clone
     */
    clone(): Button;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: Button): this;
    /**
     * Returns current html DOM element used for the button
     */
    getElement(): HTMLElement;
    /**
     * Returns current action callback (if exists)
     */
    getAction(): Button.ActionCallback | null;
    /**
     * Sets current action callback
     * @param action action callback to be called when pressing the button
     * @returns this
     */
    setAction(action: Button.ActionCallback): this;
    /**
     * Returns current initialization callback to be called on toolbar init/dispose
     * @returns initialization callback
     */
    getInit(): Button.InitCallback;
    /**
     * Sets initialization callback that is called on toolbar init/dispose
     * @param init initialization callback
     * @returns this
     */
    setInit(init: Button.InitCallback): this;
    /**
     * Returns current name(s) that describe group(s) that the radio button belongs to (checkbox case only).
     * If the button should not switch automatically or is not checkbox, returns empty array
     */
    getName(): string[];
    /**
     * Returns fixed button width in px (if was set), null otherwise
     */
    getWidth(): number | null;
    /**
     * Returns fixed button height in px (if was set), null otherwise
     */
    getHeight(): number | null;
    /**
     * Returns button icon
     */
    getIcon(): string | null;
    /**
     * Set button icon
     */
    setIcon(icon: string): this;
    /**
     * Sets button DOM element fixed size (in px)
     * @param width button element size or width
     * @param [height] button element height. Equals to width, if nothing is provided.
     * @returns this
     */
    setSize(width: number, height?: number): this;
    /**
     * Returns true if button is checked (for checkbox case), false otherwise
     */
    getChecked(): boolean;
    /**
     * Adds or removes css checked class to the DOM element
     * @param checked true to add checked class, false otherwise
     * @returns this
     */
    setChecked(checked: boolean): this;
    /**
     * Sets button element background color
     * @param color background color
     * @returns this
     */
    setColor(color: string): this;
    /**
     * Returns button element background color
     */
    getColor(): string;
    /**
     * Sets button element border
     * @param border css-styled border value
     * @returns this
     */
    setBorder(border: string): this;
    /**
     * Returns button element border
     */
    getBorder(): string;
    /**
     * Clears this button, removes all listeners and button DOM element from the document.<br>
     * Calls user callback with the ToolsContainer provided and 'false' flag to clear the data.
     * Removes itself from the registry list.
     * @param tools tools container for the user callback
     * @param registry button registry to remove itself from
     */
    clear(tools: ToolsContainer, registry: Button[]): void;
    /**
     * Initializes button, creates event listeners and adds button element to the document
     * @param tools tools container for the user callback
     * @param registry list of buttons on the Plot, is needed for correct on/off radio buttons
     * @param parent parent element to add button to
     * @param gap gap element or null if no gap is needed
     * @param insertId insert position index
     * @param listener listener callback
     * @returns this
     */
    init(tools: ToolsContainer, registry: Button[], parent: HTMLElement, gap: HTMLElement | null, insertId: number | null, listener: (b: Button) => void): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Button {
    /**
     * button options
     */
    type Options = {
        /**
         * html dom element to use as the button (instead of the new one creating by default)
         */
        element?: HTMLElement;
        /**
         * css class for the button icon span element
         */
        icon?: string;
        /**
         * button title (DOM hover text)
         */
        title?: string;
        /**
         * action callback that is called when button is pressed. See ActionCallback documentation for more info.
         */
        action?: ActionCallback;
        /**
         * initialization callback that is called when button is created or cleared. See InitCallback documentation for more info.
         */
        init?: InitCallback;
        /**
         * button checkbox options
         */
        checkbox?: {
            /**
             * true if button should act like checkbox (toggling .cg-toolbar-checked css class,
             * use it to change the default style)
             */
            enabled?: boolean;
            /**
             * true if button should be checked initially
             */
            checked?: boolean;
            /**
             * name(s) that is used as the group id among the checkbox buttons. When
             * user turns on one button from the group, all the others are automatically turned off. So the button becomes a 'radio' button.
             */
            name?: string | string[];
        };
        /**
         * fixed button width in pixels (if necessarily)
         */
        width?: number;
        /**
         * fixed button height in pixels (if necessarily)
         */
        height?: number;
        /**
         * button element background color
         */
        color?: string;
        /**
         * button element css-border
         */
        border?: string;
    };
    /**
     * Is called when button is pressed.
     */
    type ActionCallback = (tools: ToolsContainer, enabled: boolean) => void;
    /**
     * Is called when button is initialized or cleared (disposed).
     */
    type InitCallback = (tools: ToolsContainer, enabled: boolean) => void;
}
