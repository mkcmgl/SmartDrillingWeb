import { Button } from '@int/geotoolkit/controls/toolbar/Button';
/**
 * Dropdown contains multiple buttons list that is visible when mouse hovers the button or dropdown main button is clicked.
 * Its element applies extra .cg-toolbar-dropdown css class, use it to change the default style
 */
export declare class Dropdown extends Button {
    constructor(options?: Dropdown.Options);
    protected copyConstructor(src: Dropdown): this;
    /**
     * Returns the contained buttons list
     */
    getButtons(): Button[];
}
export declare namespace Dropdown {
    /**
     * dropdown options
     */
    type Options = Button.Options & {
        /**
         * buttons that are hidden in dropdown list
         */
        buttons?: (Button | string)[];
        /**
         * button checkbox options
         */
        checkbox?: {
            /**
             * true if button should act like checkbox. By default checked dropdown
             * shows its content permanently, click again to hide it.
             */
            enabled?: boolean;
        };
    };
}
