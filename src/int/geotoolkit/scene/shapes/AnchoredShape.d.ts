/**
 * @module geotoolkit/scene/shapes/AnchoredShape
 */
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Point } from '@int/geotoolkit/util/Point';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Define abstract shape with defined anchor point and scalable or restricted size.
 */
export declare abstract class AnchoredShape extends Shape implements ILayoutable {
    /**
     * @param [options] shape options
     */
    protected constructor(options?: AnchoredShape.Options);
    /**
     * @param [ax] anchor x position
     * @param [ay] anchor y position
     * @param [width] symbol width
     * @param [height] symbol height
     * @param [alignment] alignment according to the anchor point
     * @param [sizeIsInDeviceSpace] flag to indicate if size of the symbol in device,
     * @param [linestyle] the line style
     * @param [fillstyle] the fill style
     */
    protected constructor(ax?: number, ay?: number, width?: number, height?: number, alignment?: AnchorType, sizeIsInDeviceSpace?: boolean, linestyle?: LineStyle | string | LineStyle.Options, fillstyle?: FillStyle | string | FillStyle.Options);
    protected copyConstructor(src: AnchoredShape, deepCopy?: boolean): this;
    /**
     * Return anchor position
     * @param rect rectangle to get anchor position
     * @param anchorType anchor type
     * @returns anchor
     */
    static getAnchorPosition(rect: Rect, anchorType: AnchorType): Point;
    /**
     * Sets whether the shape size is set in device space.
     *
     * @param sizeIsInDeviceSpace true if the shape size is fixed in device space; otherwise, false.
     * @returns this
     */
    setSizeIsInDeviceSpace(sizeIsInDeviceSpace: boolean): this;
    /**
     * Returns true if the shape size is set in device space
     * @returns true if size is defined in device space
     */
    getSizeIsInDeviceSpace(): boolean;
    /**
     * Sets whether to use the min max device space sizes
     *
     * @param useMinMaxSize true if using the min max device space sizes otherwise, false.
     * @returns this
     */
    setUseMinMaxSize(useMinMaxSize: boolean): this;
    /**
     * true if using the min max device space sizes
     * @returns true if using the min max device space sizes
     */
    getUseMinMaxSize(): boolean;
    /**
     * returns the maximum device space rendering dimension
     * only works when setUseMinMaxSize is enabled.
     * @returns max size
     */
    getMaxSize(): Dimension;
    /**
     * returns the minimum device space rendering dimension
     * only works when setUseMinMaxSize is enabled.
     * @returns min size
     */
    getMinSize(): Dimension;
    /**
     * sets the maximum device space rendering dimension
     * @param maxSize maximum device space rendering dimension
     */
    setMaxSize(maxSize: Dimension): this;
    /**
     * sets the minimum device space rendering dimension
     * only works when setUseMinMaxSize is enabled.
     * @param minSize minimum device space rendering dimension
     * @returns this
     */
    setMinSize(minSize: Dimension): this;
    /**
     * Sets whether the shape is always pointing up. Particularly useful for text.
     *
     * @param isPointingUp flag setting whether the shape is always pointing up
     * @returns this
     */
    setIsPointingUp(isPointingUp: boolean): this;
    /**
     * Returns true if the shape is always pointing up
     * @returns true if the shape is always pointing up
     */
    getIsPointingUp(): boolean;
    /**
     * Sets whether the shape is always in a readable orientation. Particularly useful for text. Prevents mirror effects
     * @param preserveReadingOrientation sets flag whether the shape is always in a readable orientation
     * @returns this
     */
    setPreserveReadingOrientation(preserveReadingOrientation: boolean): this;
    /**
     * Returns true if the shape is always in a readable orientation
     * @returns true if the shape is always in a readable orientation
     */
    getPreserveReadingOrientation(): boolean;
    /**
     * Sets whether right angles are preserved
     * @param preserveRightAngle flag setting if right angles are preserved
     * @returns this
     */
    setPreserveRightAngle(preserveRightAngle: boolean): this;
    /**
     * Returns true if right angles are preserved
     * @returns true if right angles are preserved
     */
    getPreserveRightAngle(): boolean;
    /**
     * Sets whether aspect ratio is preserved
     * @param preserveAspectRatio flag Sets whether aspect ratio is preserved
     * @returns this
     */
    setPreserveAspectRatio(preserveAspectRatio: boolean): this;
    /**
     * Returns true if aspect ratio is preserved
     * @returns true if aspect ratio is preserved
     */
    getPreserveAspectRatio(): boolean;
    /**
     * Returns aspect ratio of the content of the shape
     * Returns 1
     */
    getAspectRatio(): number;
    /**
     * Returns the current anchor type.
     * @returns current anchor type
     */
    getAnchorType(): AnchorType;
    /**
     * Sets the anchor type.
     * @param alignment anchor alignment
     * @returns this
     */
    setAnchorType(alignment: AnchorType): this;
    /**
     * Returns rotation angle (in radians)
     * @returns rotationAngle rotation angle at anchor
     */
    getRotationAngle(): number;
    /**
     * Set rotation angle
     * @param rotationAngle rotation angle (in radians) at anchor
     * @returns this
     */
    setRotationAngle(rotationAngle: number): this;
    /**
     * Gets the anchor
     * @param [tr] transformation to transform anchor
     */
    getAnchor(tr?: Transformation): Point;
    /**
     * Return anchored x position
     */
    getAnchorX(): number;
    /**
     * Sets x anchor position
     * @param ax anchor x position
     * @returns this
     */
    setAnchorX(ax: number): this;
    /**
     * Return anchored y position
     */
    getAnchorY(): number;
    /**
     * Sets y anchor position
     * @param ay anchor x position
     * @returns this
     */
    setAnchorY(ay: number): this;
    /**
     * Sets anchor point to given position
     * @param p point
     * @returns this
     */
    setAnchor(p: Point): this;
    /**
     * Sets anchor point to given position
     * @param x x coordinate
     * @param y y coordinate
     * @returns this
     */
    setAnchor(x: number, y: number): this;
    /**
     * Sets size of the shape, will accept a width and height number or a Dimension object.
     *
     * @param width width of the shape
     * @param [height] height of the shape
     * @returns this
     */
    setSize(width: number | Dimension | Dimension.Options, height?: number): this;
    /**
     * Returns the size as a dimension object.
     * @returns size
     */
    getSize(): Dimension;
    /**
     * Return width of the shape
     */
    getWidth(): number;
    /**
     * Sets width of the shape
     * @param width width of the shape
     * @returns this
     */
    setWidth(width: number): this;
    /**
     * Return height of the shape
     */
    getHeight(): number;
    /**
     * Sets height of the shape
     * @param height height of the shape
     * @returns this
     */
    setHeight(height: number): this;
    /**
     * Return bound in the parent coordinates
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): AnchoredShape.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: AnchoredShape.Options): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param [merge] true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, merge?: boolean): this;
    getLayoutStyle(): LayoutStyle;
    /**
     * Sets bounds of the node in the parent coordinates. This method
     * takes anchor position and width and height if size is not in device space.
     * This method was added to support layout.
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
}
export declare namespace AnchoredShape {
    /**
     * anchor x position
     */
    type Options = Shape.Options & {
        /**
         * anchor x position
         */
        ax?: number;
        /**
         * anchor y position
         */
        ay?: number;
        /**
         * shape width
         */
        width?: number;
        /**
         * shape height
         */
        height?: number;
        /**
         * rotation angle at anchor
         */
        rotationangle?: number;
        /**
         * alignment according to the anchor point
         */
        alignment?: AnchorType;
        /**
         * is coordinate in device space
         */
        sizeisindevicespace?: boolean;
        /**
         * preserve aspect ratio of the anchored shape
         */
        preserveaspectratio?: boolean;
        /**
         * pointing up
         */
        ispointingup?: boolean;
        /**
         * preserve reading orientation for local transform
         */
        preservereadingorientation?: boolean;
        /**
         * preserve right angle for local transformation
         */
        preserverightangle?: boolean;
        /**
         * use the min max dimensions to limit visual size
         */
        useminmaxdimensions?: boolean;
        /**
         * minimum size for rendering
         */
        mindimension?: Dimension;
        /**
         * maximum size for rendering
         */
        maxdimension?: Dimension;
        /**
         * layout style to specify how to lay out shape
         */
        layoutstyle?: LayoutStyle | LayoutStyle.Options;
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * x coordinate of the anchor
         */
        ax: number;
        /**
         * y coordinate of the anchor
         */
        ay: number;
        /**
         * width
         */
        width: number;
        /**
         * height
         */
        height: number;
        /**
         * rotation angle
         */
        rotationangle: number;
        /**
         * anchor type
         */
        alignment: AnchorType;
        /**
         * size is in device space
         */
        sizeisindevicespace: boolean;
        /**
         * is preserve ratio activated
         */
        preserveaspectratio: boolean;
        /**
         * is pointing up
         */
        ispointingup: boolean;
        /**
         * is preserve reading orientation activated
         */
        preservereadingorientation: boolean;
        /**
         * is preserve right angle activated
         */
        preserverightangle: boolean;
        /**
         * use device space size capping
         */
        useminmaxdimensions: boolean;
        /**
         * minimum device space size
         */
        mindimension: Dimension | null;
        /**
         * maximum device space size
         */
        maxdimension: Dimension | null;
        /**
         * layout style to specify how to lay out shape
         */
        layoutstyle: LayoutStyle | null;
    };
}
