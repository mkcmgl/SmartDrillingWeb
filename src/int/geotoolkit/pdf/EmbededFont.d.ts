import type { FontSubType } from '@int/geotoolkit/pdf/FontSubType';
/**
 * @module geotoolkit/pdf/EmbededFont
 */
/**
 * Defines embedded font
 */
export declare type EmbededFont = {
    subtype?: FontSubType;
    fontname?: string;
    fontweight?: string;
    fontstyle?: string;
    fontbase64encodedfile?: string;
    encoding?: string;
};
