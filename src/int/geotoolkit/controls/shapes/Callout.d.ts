import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Define a callout shape
 */
export declare class Callout extends Text {
    constructor(options?: Callout.Options);
    protected copyConstructor(src: Callout, deepCopy?: boolean): this;
    clone(): Callout;
    /**
     * Moves callout text to the provided distance
     * @param x x-ordinate move distance
     * @param y y-ordinate move distance
     * @returns this
     */
    move(x: number, y: number): this;
    /**
     * Returns x-ordinate distance from anchor to the text position
     */
    getOffsetX(): number;
    /**
     * Returns y-ordinate distance from anchor to the text position
     */
    getOffsetY(): number;
    /**
     * Returns callout rectangular text area
     */
    getTextBounds(): Rect;
    /**
     * Sets callout text visibility
     * @param visible text visibility
     * @returns this
     */
    setTextVisible(visible: boolean): this;
    /**
     * Returns true if callout text is visible
     */
    getTextVisible(): boolean;
    /**
     * Sets callout size and anchor so that rectangular text area matches the bounds provided
     * @param bounds text bounding box in parent coordinates
     * @returns this
     */
    setTextBounds(bounds: Rect): this;
    getProperties(): Callout.OptionsOut;
    setProperties(properties: Callout.Options): this;
}
export declare namespace Callout {
    /**
     * callout options
     */
    type Options = Text.Options & {
        /**
         * callout arrow size in device coordinates
         */
        arrowsize?: number;
        /**
         * callout offset in device coordinates
         */
        offset?: {
            x: number;
            y: number;
        };
    };
    /**
     * callout options
     */
    type OptionsOut = Text.OptionsOut & {
        /**
         * callout arrow size in device coordinates
         */
        arrowsize?: number;
        /**
         * callout offset in device coordinates
         */
        offset?: {
            x: number;
            y: number;
        };
    };
}
