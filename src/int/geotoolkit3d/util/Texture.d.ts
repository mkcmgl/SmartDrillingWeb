import type { SymbolTexture } from '@int/geotoolkit3d/widgets/scatter/Symbols';
import { Symbol2DNames } from '@int/geotoolkit3d/widgets/scatter/Symbols';
/**
 * Utility class providing texture examples for 3D objects.<br>
 * Texture source images are represented in data URI.
 */
export declare class Texture {
    /**
     * Helper method to get the appropriate symbol loader based on the given symbol name.
     * The returned texture is an empty texture at first, but will be updated once loaded asynchronously.
     * "onLoad" callback will be fired once the texture has been loaded.
     */
    static loadTexture(symbol: Symbol2DNames, onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A ball symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static ballLoader(onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A ball symbol, imitating a 3D effect.
     */
    static get ball(): SymbolTexture;
    /**
     * A soliddot symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static soliddotLoader(onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A circle symbol, with solid fill color and no 3D effect.
     */
    static get soliddot(): SymbolTexture;
    /**
     * A circle symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static circleLoader(onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A circle symbol, with bright light and imitating a 3D effect.
     */
    static get circle(): SymbolTexture;
    /**
     * A square symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static squareLoader(onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A square symbol.
     */
    static get square(): SymbolTexture;
    /**
     * A cube symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static cubeLoader(onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A cube symbol, imitating a 3D effect.
     */
    static get cube(): SymbolTexture;
    /**
     * A sphere symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static sphereLoader(onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A sphere symbol, with dark color, imitating a 3D effect.
     */
    static get sphere(): SymbolTexture;
    /**
     * A triangle symbol loader
     * @param onLoad onLoad callback
     * @param onProgress onProgress callback
     * @param onError onError callback
     */
    static triangleLoader(onLoad?: Texture.LoadCallback, onProgress?: Texture.ProgressCallback, onError?: Texture.ErrorCallback): SymbolTexture;
    /**
     * A triangle symbol.
     */
    static get triangle(): SymbolTexture;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Texture {
    /**
     * The callback fired upon Texture loading success/completion.
     */
    type LoadCallback = (texture: SymbolTexture) => void;
    /**
     * The callback fired upon Texture loading progress. Might not trigger based on implementation.
     */
    type ProgressCallback = (event: ProgressEvent) => void;
    /**
     * The callback fired upon Texture loading error.
     */
    type ErrorCallback = (event: ErrorEvent) => void;
}
