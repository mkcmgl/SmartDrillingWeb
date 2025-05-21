import { Button } from '@int/geotoolkit/controls/toolbar/Button';
/**
 * This class provides registry of toolbar buttons
 */
export declare class ButtonRegistry {
    constructor();
    /**
     * Registers button with the provided id. When registered, it can be used in toolbar by a single string identifier.
     * @param id string button identifier for later use in toolbar
     * @param button button to register or its options object
     */
    register(id: string, button: Button | Button.Options): this;
    /**
     * Returns button clone by its string identifier or null, if no such button registered
     * @param id button string identifier
     */
    getButton(id: string): Button | null;
    /**
     * Returns registered button identifiers list
     */
    getIds(): string[];
    /**
     * Returns singleton instance of the button registry
     */
    static getInstance(): ButtonRegistry;
    static getClassName(): string;
    getClassName(): string;
}
