import { Style } from '@int/geotoolkit/attributes/Style';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Defines properties to specify margins or
 * padding
 */
export declare class SpaceStyle<T extends number | string = number | string> extends Style {
    constructor(space?: SpaceStyle.Type<T>);
    /**
     * Compile style
     * @param [convertToUnit] target unit
     * @param [bounds] target bounds
     */
    compile(convertToUnit?: AbstractUnit, bounds?: Rect): SpaceStyle<number>;
    clone(): SpaceStyle<T>;
    protected copyConstructor(src: SpaceStyle<T>, deepCopy?: boolean): this;
    /**
     * return JSON representation of the space object
     *
     * @returns offsets
     */
    getStyle(): SpaceStyle.Options;
    /**
     * Set style
     * @param spaceStyle space style
     * @param [silent] silent mode
     */
    setStyle(spaceStyle: SpaceStyle.Type<T>, silent?: boolean): this;
    /**
     * Return left position
     */
    getLeft(): T;
    /**
     * Set left position
     *
     * @param left position
     * @returns this
     */
    setLeft(left: T): this;
    /**
     * Return top position
     */
    getTop(): T;
    /**
     * Set top position
     *
     * @param top position
     * @returns this
     */
    setTop(top: T): this;
    /**
     * Return right position
     */
    getRight(): T;
    /**
     * Set right position
     *
     * @param right position
     * @returns this
     */
    setRight(right: T): this;
    /**
     * Return bottom position
     */
    getBottom(): T;
    /**
     * Set bottom position
     *
     * @param bottom position
     * @returns this
     */
    setBottom(bottom: T): this;
    /**
     * Return true if styles are equals
     * @param style style to compare
     */
    equalsTo(style: SpaceStyle<number | string>): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns object which contains the following fields
     */
    getProperties(): SpaceStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object which contains the following fields
     */
    setProperties(properties?: SpaceStyle.Options<T>): this;
    /**
     * Create or get space style from object
     *
     * @param [object] object can be in format of constructor
     * geotoolkit.attributes.SpaceStyle
     * @returns space style
     */
    static fromObject(object?: SpaceStyle.Type<number | string>): SpaceStyle<number | string> | null;
    /**
     * Merge spaceStyle object with existing instance
     * @param node node
     * @param spaceStyle instance of node property
     * @param object contains space style
     * @param [merge] merge flag
     * @param [invalidateMethod] invalidate method
     * @returns spaceStyle
     */
    static mergeFromObject(node: IStyleListener | null, spaceStyle: SpaceStyle<number | string> | null, object: SpaceStyle.Type<number | string>, merge?: boolean, invalidateMethod?: IStyleListener.AttributeCallback): SpaceStyle<number | string> | null;
    /**
     * Return area excluding space
     * @param style style to exclude space
     * @param rect original area
     * @param [transformation] screen transformation
     * @returns area with excluding space
     */
    static excludeSpace(style: SpaceStyle<number | string> | number, rect: Rect | null, transformation?: Transformation): Rect | null;
    /**
     * Return area including space
     * @param style style to add space
     * @param rect original area
     * @param [transformation] screen transformation
     * @returns area with including space
     */
    static addSpace(style: SpaceStyle, rect: Rect | null, transformation?: Transformation): Rect | null;
}
export declare namespace SpaceStyle {
    /**
     * type can be used for SpaceStyle properties setter, in case of string it is CSS shorthand value like "25px 50px 75px 100px"
     */
    type Type<T extends number | string = number | string> = SpaceStyle<T> | Options<T> | number | string | null;
    /**
     * object which contains the following fields
     */
    type Options<T = number | string> = {
        /**
         * left position
         */
        left?: T;
        /**
         * right position
         */
        right?: T;
        /**
         * top position
         */
        top?: T;
        /**
         * bottom position
         */
        bottom?: T;
    };
    /**
     * offsets
     */
    type OptionsOut = {
        /**
         * left
         */
        left: number | string;
        /**
         * right
         */
        right: number | string;
        /**
         * bottom
         */
        bottom: number | string;
        /**
         * top
         */
        top: number | string;
    };
}
