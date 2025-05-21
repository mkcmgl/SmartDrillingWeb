export declare function createElement(tag: 'canvas', className?: string): HTMLCanvasElement;
export declare function createElement(tag: 'div', className?: string): HTMLDivElement;
export declare function createElement(tag: 'textarea', className?: string): HTMLTextAreaElement;
export declare function createElement(tag: 'style', className?: string): HTMLStyleElement;
export declare function createElement(tag: 'a', className?: string): HTMLAnchorElement;
export declare function createElement(tag: string, className?: string): HTMLElement;
/**
 * create a canvas element,
 * supports for HTMLCanvasElement and node-canvas.
 *
 * @param [width] the canvas width in pixels
 * @param [height] the canvas height in pixels
 * @param [inDevicePixel] if set to true width and height will be converted to canvas pixels.
 * @returns will return an HTMLCanvasElement inside a browser or a Canvas instance inside a nodeJS environment.
 */
export declare const createCanvasElement: (width?: number, height?: number, inDevicePixel?: boolean) => HTMLCanvasElement;
/**
 * return position relative to the parent
 * @param element HTML element
 * @param [parentElement] the parent HTML element
 */
export declare const getAbsolutePosition: (element: HTMLElement, parentElement?: HTMLElement) => {
    x: number;
    y: number;
};
/**
 * Mouse buttons enum for using in native browser events as 'buttons' parameter
 * @readonly
 * @enum
 */
export declare enum MouseButtons {
    /**
     * No button or un-initialized
     */
    None = 0,
    /**
     * Primary button (usually the left button)
     */
    Left = 1,
    /**
     * Secondary button (usually the right button)
     */
    Right = 2
}
/**
 * Mouse buttons enum for using in native browser events as 'button' parameter
 * @readonly
 * @enum
 */
export declare enum MouseButton {
    /**
     * Left mouse button
     */
    Left = 0,
    /**
     * Middle mouse button
     */
    Middle = 1,
    /**
     * Right mouse button
     */
    Right = 2
}
/**
 * DOM Events fired by {@link @int/geotoolkit/scene/Node~Node} with DOMSupport tool
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * This Event is fired by node when cursor is initially moved into it
     * @event module:geotoolkit/dom~Events~Enter
     */
    Enter = "enter",
    /**
     * This Event is fired by node when cursor is moved out of it
     * @event module:geotoolkit/dom~Events~Leave
     */
    Leave = "leave",
    /**
     * This Event is fired by node when cursor is moved over it
     * @event module:geotoolkit/dom~Events~Hover
     * @param {import("geotoolkit/controls/tools/BaseEventArgs").BaseEventArgs} eventArgs
     */
    Hover = "hover",
    /**
     * This Event is fired by node when it was selected by mouse down
     * @event module:geotoolkit/dom~Events~MouseDown
     * @param {import("geotoolkit/controls/tools/BaseEventArgs").BaseEventArgs} eventArgs
     */
    MouseDown = "mousedown",
    /**
     * This Event is fired by node when it was selected by mouse up
     * @event module:geotoolkit/dom~Events~MouseUp
     * @param {import("geotoolkit/controls/tools/BaseEventArgs").BaseEventArgs} eventArgs
     */
    MouseUp = "mouseup",
    /**
     * This Event is fired by node when it was clicked
     * @event module:geotoolkit/dom~Events~Click
     * @param {import("geotoolkit/controls/tools/BaseEventArgs").BaseEventArgs} eventArgs
     */
    Click = "click",
    /**
     * This Event is fired by node when it was double clicked
     * @event module:geotoolkit/dom~Events~DoubleClick
     * @param {import("geotoolkit/controls/tools/BaseEventArgs").BaseEventArgs} eventArgs
     */
    DoubleClick = "doubleclick"
}
