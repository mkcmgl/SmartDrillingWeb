/**
 * @module geotoolkit/schematics/utils/StyleUtils
 */
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Defines helper methods for component nodes to work with colored styles
 */
export declare class StyleUtils {
    /**
     * Gets average gray color
     * @param srcColor input RGBA-color
     */
    static getAverageGrayColor(srcColor: RgbaColor): RgbaColor;
    /**
     * Gets average gray fill style
     * @param srcFillStyle input fill style
     */
    static getGrayScaleFillStyle(srcFillStyle: FillStyle): FillStyle | null;
    /**
     * Gets average gray line style
     * @param srcLineStyle input line style
     */
    static getGrayScaleLineStyle(srcLineStyle: LineStyle): LineStyle | null;
    static getClassName(): string;
    getClassName(): string;
}
