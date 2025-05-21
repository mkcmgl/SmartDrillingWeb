import { Button } from '@int/geotoolkit/controls/toolbar/Button';
/**
 * Checkbox button that adds extra text information to the button icons. Checkbox elements use .cg-toolbar-checkbox css class,
 * inner text applies .cg-toolbar-checkbox-text css class. Use it to change the default checkbox style
 */
export declare class Checkbox extends Button {
    constructor(options?: Checkbox.Options);
    protected copyConstructor(src: Checkbox): this;
}
export declare namespace Checkbox {
    /**
     * checkbox options
     */
    type Options = Button.Options & {
        /**
         * checkbox inner text info
         */
        text?: string;
        /**
         * checkbox left/right padding (in px)
         */
        padding?: number;
    };
}
