import { Style } from '@int/geotoolkit/attributes/Style';
export declare class ElementStyle extends Style {
    constructor(style?: string);
    setParent(parent: ElementStyle): this;
    setStyle(style: string | Record<string, any>, value?: any): this;
    protected parseStyle(styleName: string, styleValue: string | ElementStyle): string | ElementStyle | Record<string, any>;
    protected createStyle(styleName: string, styleValue?: string): string | ElementStyle | Record<string, any>;
    /**
     * @param styleName styleName 'border-left'|'fill-pattern-position'|'float'|.....
     * @returns style
     */
    getStyle(styleName?: string): string | number | ElementStyle | Record<string, any> | null;
    /**
     * Remove style attribute
     * @param styleName style name
     */
    removeStyle(styleName: string | string[]): this;
    /**
     * Convert Style attribute to string
     * @param [styleName] style name
     */
    toString(styleName?: string): string;
}
