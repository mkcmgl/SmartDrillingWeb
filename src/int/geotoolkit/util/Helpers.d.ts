import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * This class contains various helpers methods
 */
export declare class Helpers {
    /**
     * Create or get fill style from object
     *
     * @param [object] object can be in format of constructor FillStyle
     */
    static createFillStyleFromObject(object?: FillStyle.Type): FillStyle | null;
    /**
     * Merge css fillstyle object with existing instance
     * @param node node
     * @param fillStyle instance of node property
     * @param object contains fill style
     * @param [merge] merge flag
     * @param [invalidateMethod] invalidate method
     * @returns fillStyle
     * @example
     *   import {Shape} from '@int/geotoolkit/scene/shapes/Shape';
     *   import {Helpers} from '@int/geotoolkit/util/Helpers';
     *   import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
     *
     *   class CustomSymbol extends Shape {
     *     ...
     *     setFillStyle(fillStyle, merge) {
     *         fillStyle = Helpers.mergeFillStyleFromObject(this, this.getFillStyle(), fillStyle, merge);
     *         return Shape.prototype.setLFillStyle.call(this, fillStyle);
     *      }
     *     ...
     *   }
     *   const imgPattern = PatternFactory.getInstance().createPattern(imgurl);
     *
     *   const symbol = new CustomSymbol(new Rect(50, 50, 150, 150))
     *     .setFillStyle({
     *          'color': KnownColors.Orange
     *      })
     *     .setFillStyle({
     *          'pattern': imgPattern
     *   }, true);
     */
    static mergeFillStyleFromObject(node: IStyleListener | null, fillStyle: FillStyle | null, object: FillStyle.Type, merge?: boolean, invalidateMethod?: IStyleListener.AttributeCallback): FillStyle;
    static getClassName(): string;
    getClassName(): string;
}
