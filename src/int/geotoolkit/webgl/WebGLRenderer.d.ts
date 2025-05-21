import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Texture } from '@int/geotoolkit/webgl/Texture';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { BufferAttribute } from '@int/geotoolkit/webgl/BufferAttribute';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * A WebGl class that initialize HTML Canvas and WebGL context for 2D rendering.<br>
 * For WebGL parameters, it follows the name convention as MDN.<br>
 */
export declare class WebGLRenderer extends EventDispatcher {
    constructor(options?: WebGLRenderer.Options);
    /**
     * Attach the provided vertexShader and fragmentShader to webGL program.<br>
     * Also output any error found in shader compilation.<br>
     *
     * A WebGL program links to corresponding shaders.
     *
     * @param vertexShader vertex shader in glsl
     * @param fragmentShader fragment shader in glsl
     * @returns this
     * @throws {Error} failed to compile shaders
     */
    setShaders(vertexShader: string, fragmentShader: string): this;
    /**
     * Set attribute by sending information to GPU.
     * @param name attribute name
     * @param buffer buffer attribute
     * @returns this
     */
    setAttribute(name: string, buffer: BufferAttribute): this;
    /**
     * Set uniform by sending information to GPU.<br>
     * The WebGLRenderingContext.uniform[1234][uif][v]() methods of the WebGL API specify values of uniform variables.<br>
     * [ui] stands for unsigned integer, [i] for integer, [f] for float, and [v] for array.<br>
     * Not all combinations are valid: [u] cannot be combined with [f].<br>
     * For example, the type of uniform2f is string '2f'.<br>
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform
     * @param name the name of uniform
     * @param type the type of uniform
     * @param v0 the first value
     * @param v1 the second value (if any)
     * @param v2 the third value (if any)
     * @param v3 the fourth value (if any)
     * @returns this
     */
    setUniform(name: string, type: string, v0: number | number[], v1?: number | number[], v2?: number | number[], v3?: number | number[]): this;
    /**
     * Set texture by sending information to GPU.<br>
     *
     * @param name the name of texture in glsl
     * @param texture the texture
     * @param [unit] the texture unit that binds to
     * @returns this
     */
    setTexture(name: string, texture: Texture, unit?: number): this;
    /**
     * A colorprovider converts a value to a color based on its configuration.
     * It's generally created by associating some colors to WebGL Texture. <br>
     * Then it will interpolate those colors on the fly to find the actual color
     * corresponding to a coordinate in the texture.<br>
     * To make it work as intended, the related glsl must define CG_USE_COLOR_MAP.
     *
     * @param colorprovider the colorprovider
     * @param accuracyRendering true, if you need to render precise colorbox, it will be slower than general colorbox rendering
     * @returns this
     */
    setColorProvider(colorprovider: ColorProvider, accuracyRendering?: boolean): this;
    /**
     * Resizes the output canvas to (width, height). <br>
     * Also sets the viewport to fit that size.
     * @param width the width of canvas
     * @param height the height of canvas
     * @returns this
     */
    setSize(width: number, height: number): this;
    /**
     * Return the canvas where the renderer draws its output.
     * @returns canvas
     */
    getDomElement(): HTMLCanvasElement;
    /**
     * Return the current WebGL context
     * @returns context
     */
    getContext(): WebGLRenderingContext;
    /**
     * Return the dimension of WebGL canvas
     * @returns size
     */
    getSize(): Dimension;
    /**
     * Return the canvas image as data URL<br>
     * Equivalent to HTMLCanvasElement.toDataURL('image/png')
     * @returns url
     */
    getImageURL(): string;
    /**
     * Immediately free memory without having to wait for garbage collection.
     */
    dispose(): void;
    /**
     * Calling render function triggers WebGLRenderer to draw on canvas. <br>
     * RequestAnimationFrame(render) will render at each animation frame.<br>
     */
    draw(): void;
}
export declare namespace WebGLRenderer {
    /**
     * The options for WebGLRenderer
     */
    export type Options = {
        /**
         * A HTML canvas. If not passed in here, a new canvas element will be created.
         */
        canvas?: null | HTMLCanvasElement;
        /**
         * Whether to perform anti-aliasing.
         */
        antialias?: boolean;
        /**
         * Whether to preserved drawing buffer.
         */
        preservedrawingbuffer?: boolean;
        /**
         * Whether to pre-multiplied alpha blending.
         */
        premultipliedalpha?: boolean;
        /**
         * RGBA values for clear color of renderer
         */
        clearcolor?: number[];
        /**
         * Draw mode
         */
        drawmode?: number | GLenum;
    };
    type GLenum = number;
    export {};
}
