import { Button } from '@int/geotoolkit/controls/toolbar/Button';
/**
 * Label elements use .cg-toolbar-label css class
 */
export declare class Label extends Button {
    constructor(options?: Label.Options);
    protected copyConstructor(src: Label): this;
    /**
     * Set label text
     * @param text label text
     */
    setText(text: string): this;
}
export declare namespace Label {
    /**
     * label options
     */
    type Options = Button.Options & {
        /**
         * label text info
         */
        text?: string;
        /**
         * label left/right padding (in px)
         */
        padding?: number;
    };
}
