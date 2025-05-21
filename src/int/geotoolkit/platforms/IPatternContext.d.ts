import type { IBaseImage } from '@int/geotoolkit/platforms/IBaseImage';
/**
 * Define an interface for context which can create IPattern
 * @interface
 */
export declare abstract class IPatternContext {
    /**
     * Creates a pattern using the specified image and repetition.
     * @param image An image to be used as the pattern's image.
     * @param repetition A string indicating how to repeat the pattern's image.
     * @param foregroundColor foreground color of pattern
     * @returns IPattern
     */
    abstract createPattern(image: IBaseImage | CanvasImageSource, // for native context2d
    repetition: string, foregroundColor?: string): any;
}
