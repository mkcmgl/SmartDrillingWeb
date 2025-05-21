import type { EmptyRecord } from '@int/geotoolkit/base';
import { LineStyle as LineStyleDefinition } from '@int/geotoolkit/attributes/LineStyle';
import { ElementStyle } from '@int/geotoolkit/report/elements/styles/ElementStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
export declare class BorderStyle extends ElementStyle {
    /**
     * @param [style]
     */
    constructor(style?: string | {
        all?: LineStyleDefinition.Type;
        left?: LineStyleDefinition.Type;
        top?: LineStyleDefinition.Type;
        right?: LineStyleDefinition.Type;
        bottom?: LineStyleDefinition.Type;
        shorthand?: string;
        collapse?: boolean;
        radius?: string;
        spacing?: string;
    });
    /**
     * Return border collapse state
     */
    isCollapsed(): boolean;
    /**
     * Return border radiuses
     * @param unit unit to convert
     */
    getRadius(unit?: AbstractUnit | string): SpaceStyle | BorderStyle.RadiusInPixels;
    /**
     * Parse margin value
     * @param styleValue styleValue
     * @returns this
     */
    parse(styleValue: string): this;
    /**
     * @param styleName styleName
     * @param styleValue styleValue
     */
    protected parseStyle(styleName: string, styleValue: string | ElementStyle): string | ElementStyle | Record<string, any>;
    /**
     * @param styleName styleName
     * @param styleValue styleValue
     */
    protected createStyle(styleName: string, styleValue: string): string | ElementStyle | Record<string, any>;
    /**
     * Render border
     * @param context context
     * @param bounds bounds
     */
    drawBorder(context: RenderingContext, bounds: Rect): void;
    /**
     * Set border style properties
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: BorderStyle.Options): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): BorderStyle.OptionsOut | EmptyRecord;
}
export declare namespace BorderStyle {
    type RadiusInPixels = {
        'top-left': number | string | {
            x: number | string;
            y: number | string;
        };
        'bottom-right': number | string | {
            x: number | string;
            y: number | string;
        };
        'top-right': number | string | {
            x: number | string;
            y: number | string;
        };
        'bottom-left': number | string | {
            x: number | string;
            y: number | string;
        };
    };
    /**
     * The border styles properties
     */
    type Options = LineStyleDefinition.Options & {
        /**
         * The borderlines visibility
         */
        borders?: {
            left?: boolean;
            top?: boolean;
            right?: boolean;
            bottom?: boolean;
        };
    };
    type OptionsOut = LineStyleDefinition.OptionsOut & {
        /**
         * The borderlines visibility
         */
        borders?: {
            left?: boolean;
            top?: boolean;
            right?: boolean;
            bottom?: boolean;
        };
    };
}
