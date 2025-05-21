/**
 * @module geotoolkit/scene/AbstractNode
 */
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { BlendMode } from '@int/geotoolkit/util/BlendMode';
import { AnimatedNode } from '@int/geotoolkit/scene/AnimatedNode';
import { Events } from '@int/geotoolkit/scene/Node';
import { ClipStyle } from '@int/geotoolkit/attributes/ClipStyle';
import { CssStyle } from '@int/geotoolkit/css/CssStyle';
import { ResponsiveStyle } from '@int/geotoolkit/responsive/ResponsiveStyle';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import type { IFilter } from '@int/geotoolkit/renderer/IFilter';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * Defines an abstract implementation of a graphics node. Abstract node supports rotation, clipping and local transform.
 * It has several helper methods like scale, rotate, translate, shear.
 */
export declare abstract class AbstractNode extends AnimatedNode {
    /**
     * Create abstract node
     * @param [options] options
     */
    protected constructor(options?: AbstractNode.Options);
    protected copyConstructor(src: AbstractNode, deepCopy?: boolean): this;
    on<E extends keyof AbstractNode.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractNode.EventMap[E]) => void): this;
    off<E extends keyof AbstractNode.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractNode.EventMap[E]) => void): this;
    /**
     * Sets a new clipping style
     * @param style a new clipping style
     * @returns this
     */
    setClipStyle(style: ClipStyle | ClipStyle.Options | GraphicsPath): this;
    /**
     * Gets the current clipping style
     * @returns clipping style
     */
    getClipStyle(): ClipStyle | null;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): AbstractNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AbstractNode.Options): this;
    /**
     * Sets local transformation to be used to transform from local to parent
     * coordinate
     *
     * @param localTransform local transformation for this node
     * @returns this
     */
    setLocalTransform(localTransform: Transformation | null): this;
    /**
     * Scale node
     *
     * @param xx x scale factor
     * @param yy y scale factor
     * @returns this
     */
    scale(xx: number, yy: number): this;
    /**
     * Translate bounds
     *
     * @param tx x translation
     * @param ty y translation
     * @returns this
     */
    translate(tx: number, ty: number): this;
    /**
     * Shear this node's bounds
     *
     * @param shx x-axis shear
     * @param shy y-axis shear
     * @returns this
     */
    shear(shx: number, shy: number): this;
    /**
     * Rotate bounds around a given coordinate
     *
     * @param theta angle to rotate node, in radians
     * @param x x coordinate to rotate around
     * @param y y coordinate to rotate around
     * @returns this
     */
    rotate(theta: number, x: number, y: number): this;
    /**
     * Retrieves the transformation of bounds to parent
     *
     * @returns transform the local transform.
     */
    getLocalTransform(): Transformation | null;
    /**
     * Retrieves the local transformation
     * of the node which represents multiplication of parent to bounds and
     * contents transformations.
     *
     * @returns transform the world transform.
     */
    getWorldTransform(): Transformation | null;
    /**
     * Occurs before rendering this method sets clipping by default. Call this method
     * if you override method render
     * @param context Rendering Context
     */
    protected preRendering(context: RenderingContext): void;
    /**
     * This method is called to apply opacity if it is specified on the rendering context. The default
     * implementation sets global alpha on the rendering context
     * @param context Rendering Context
     * @returns this
     */
    protected applyOpacity(context: RenderingContext): this;
    /**
     * To be called after rendering. Call this method if you override method render
     * @param context Rendering Context
     */
    protected postRendering(context: RenderingContext): void;
    /**
     * Sets CSS style. This style will be applied for all inserted elements
     * @param style CSS style to be applied to inserted elements
     * @param [merge] merge flag
     * @returns this
     */
    setCss(style: CssStyle.Type, merge?: boolean): this;
    /**
     * Return CSS style
     */
    getCss(): CssStyle | null;
    /**
     * Sets responsive style.
     * @param style responsive style
     * @returns this
     */
    setResponsiveStyle(style: ResponsiveStyle.Options | ResponsiveStyle): this;
    /**
     * Return responsive style
     */
    getResponsiveStyle(): ResponsiveStyle | null;
    /**
     * Sets margins style
     * @param margins margins style
     * @param [merge] true if you want to merge marginsStyle with existing attribute, false by default
     * @returns this
     */
    setMarginsStyle(margins: SpaceStyle.Type, merge?: boolean): this;
    /**
     * Return margins style
     */
    getMarginsStyle(): SpaceStyle | null;
    notify<E extends keyof AbstractNode.EventMap>(event: E, source: AbstractNode, args?: AbstractNode.EventMap[E]): this;
    /**
     * Apply a responsive style rules it is exists
     */
    protected applyResponsiveStyle(): void;
    /**
     * Sets filter to be applied before rendering and picking
     * @param filter filter to set
     * @returns this
     */
    setRenderingFilter(filter: IFilter | null): this;
    /**
     * Return filter to be used for rendering and picking
     * @returns current filter
     */
    getRenderingFilter(): IFilter | null;
    /**
     * Gets invalidate method
     * @returns method to invalidate this object
     */
    protected getInvalidateMethod(): IStyleListener.AttributeCallback;
    /**
     * Sets scale scroll strategy
     * @param [strategy] scale scroll strategy
     * @returns this
     */
    setScaleScrollStrategy(strategy: ScaleScrollStrategy.Delegate): this;
    /**
     * Gets scale scroll strategy
     * @returns scale scroll strategy
     */
    getScaleScrollStrategy(): ScaleScrollStrategy.Delegate | null;
    /**
     * Filter node
     * @param context Rendering Context
     * @returns flag filter flag ("true" to render node; "false" otherwise)
     */
    protected filter(context: RenderingContext): boolean;
    /**
     * Check if this node is within the area being rendered by the context
     *
     * @param context Rendering Context
     * @returns true if object is inside of renderable area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets node opacity
     * @param opacity node opacity from 0 to 1
     * @param [blendMode] opacity blend mode. If it is normal,
     * opacity will be replaced.
     * @returns this
     */
    setOpacity(opacity: null | number, blendMode?: BlendMode): this;
    /**
     * Returns current node opacity
     * @returns opacity
     */
    getOpacity(): null | number;
    /**
     * Returns current node opacity
     * @returns opacity blend mode
     */
    getOpacityBlendMode(): BlendMode;
}
export declare namespace AbstractNode {
    /**
     * options
     */
    type Options = AnimatedNode.Options & {
        /**
         * local transformation
         */
        localtransform?: Transformation;
        /**
         * clipping style
         */
        clipstyle?: ClipStyle | ClipStyle.Options | GraphicsPath;
        /**
         * responsive style
         */
        responsivestyle?: ResponsiveStyle | ResponsiveStyle.Options;
        /**
         * CSS style to be applied to inserted elements
         */
        cssstyle?: string | CssStyle.Options | CssStyle;
        /**
         * It has properties for specifying the margins for each side
         */
        margins?: SpaceStyle.Options | SpaceStyle;
        /**
         * rendering filter
         */
        renderingfilter?: IFilter;
        /**
         * scale scroll strategy
         */
        scalescrollstrategy?: ScaleScrollStrategy.Delegate;
        /**
         * transformation applied to node or 'none'
         */
        transform?: Transformation | {
            name: string;
            parameters: string[];
        }[] | string;
        /**
         * node opacity (from 0 to 1). If it is undefined or null it inherits property from the parent.
         * It changes globalAlpha on the rendering context
         */
        opacity?: null | number;
        /**
         * node opacity mode to blend it.
         */
        opacityblendmode?: BlendMode;
        /**
         * CSS cursor associated with node
         */
        csscursor?: null | string;
    };
    /**
     * properties
     */
    type OptionsOut = AnimatedNode.OptionsOut & {
        /**
         * local transform
         */
        localtransform?: Transformation;
        /**
         * clipping style
         */
        clipstyle?: ClipStyle | null;
        /**
         * responsive style
         */
        responsivestyle?: ResponsiveStyle | null;
        /**
         * CSS style to be applied to inserted elements
         */
        cssstyle?: CssStyle;
        /**
         * CSS cursor associated with node
         */
        csscursor?: null | string;
        /**
         * margins
         */
        margins?: SpaceStyle;
        /**
         * rendering filter
         */
        renderingfilter?: IFilter;
        /**
         * scale scroll strategy
         */
        scalescrollstrategy?: ScaleScrollStrategy.Delegate;
        /**
         * css local transform
         */
        transform?: Transformation;
        /**
         * opacity
         */
        opacity?: number;
        /**
         * node opacity mode to blend it.
         */
        opacityblendmode?: BlendMode;
    };
    type EventMap = AnimatedNode.EventMap & {
        [Events.LocalTransformationChanged]: void;
    };
}
