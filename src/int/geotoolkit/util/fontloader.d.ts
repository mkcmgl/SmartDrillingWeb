/**
 * load font into browser
 * @param location font location
 * @param family font family, must match to file name
 * @example
 * // Usage of URL with base64
 * import {loadFont} from '@int/geotoolkit/util/fontloader';
 * loadFont('url(data:application/x-font-woff;base64,d09GRg...BQAAAAB)', 'fontawesome-webfont').then(() => {...});
 */
export declare const loadFont: (location: string | ArrayBuffer, family: string) => Promise<void>;
