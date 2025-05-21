/**
 * This class create a texture for WebGL.
 */
export declare class Texture {
    constructor(options: Texture.Options);
    /**
     * Set name for this texture
     * @param name the attribute name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Set image for this texture
     * @param image the pixel source
     * @returns this
     */
    setImage(image: HTMLImageElement | HTMLCanvasElement | ArrayBufferView): this;
    /**
     * Set how this texture is wrapped in UV mapping.
     *
     * @param [U] the U in UV mapping
     * @param [V] the V in UV mapping
     * @returns this
     */
    setWrap(U?: number | Texture.GLenum, V?: number | Texture.GLenum): this;
    /**
     * Set how this texture is sampled when a texel covers more or less than a pixel
     *
     * @param [magFilter] texel covers more than a pixel
     * @param [minFilter] texel covers less than a pixel
     * @returns this
     */
    setFilter(magFilter?: number | Texture.GLenum, minFilter?: number | Texture.GLenum): this;
    /**
     * Set the format of texel data
     * @param format the format
     * @returns this
     */
    setFormat(format: number | Texture.GLenum): this;
    /**
     * Set the data type oof texel data
     * @param type the data type
     * @returns this
     */
    setType(type: number | Texture.GLenum): this;
    /**
     * Set whether to flip texture along vertical axis
     * @param flag the flag
     * @returns this
     */
    setFlipY(flag: boolean): this;
    /**
     * Return the pixel source of this texture
     * @returns the pixel source
     */
    getImage(): HTMLImageElement | HTMLCanvasElement | ArrayBufferView;
    /**
     * Return the name of the texture
     * @returns the name of the texture
     */
    getName(): string;
    /**
     * Return the attributes of the texture
     *
     * @returns The attributes
     */
    getAttributes(): Texture.Attributes;
}
export declare namespace Texture {
    /**
     * The options for texture
     */
    type Options = {
        /**
         * texture name
         */
        name?: string;
        /**
         * pixel source for texture
         */
        image?: HTMLImageElement | HTMLCanvasElement | ArrayBufferView;
        /**
         * define how the texture is wrapped horizontally in UV mapping
         */
        wraps?: number | GLenum;
        /**
         * define how the texture is wrapped vertically in UV mapping
         */
        wrapt?: number | GLenum;
        /**
         * define how the texture is sampled when a texel covers more than a pixel
         */
        magfilter?: number | GLenum;
        /**
         * define how the texture is sampled when a texel covers less than a pixel
         */
        minfilter?: number | GLenum;
        /**
         * define the format of texel data
         */
        format?: number | GLenum;
        /**
         * define the data type of texel data
         */
        type?: number | GLenum;
        /**
         * whether to flip the texture along the vertical axis
         */
        flipy?: boolean;
    };
    /**
     * The attributes
     */
    type Attributes = {
        /**
         * texture name
         */
        name: string;
        /**
         * texture id
         */
        id: number;
        /**
         * pixel source for texture
         */
        image: HTMLImageElement | HTMLCanvasElement | ArrayBufferView;
        /**
         * define how the texture is wrapped horizontally in UV mapping
         */
        wraps: number | GLenum;
        /**
         * define how the texture is wrapped vertically in UV mapping
         */
        wrapt: number | GLenum;
        /**
         * define how the texture is sampled when a texel covers more than a pixel
         */
        magfilter: number | GLenum;
        /**
         * define how the texture is sampled when a texel covers less than a pixel
         */
        minfilter: number | GLenum;
        /**
         * define the format of texel data
         */
        format: number | GLenum;
        /**
         * define the data type of texel data
         */
        type: number | GLenum;
        /**
         * whether to flip the texture along the vertical axis
         */
        flipy: boolean;
    };
    type GLenum = number;
}
