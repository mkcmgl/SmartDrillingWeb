import { Node } from '@int/geotoolkit/scene/Node';
import { AnimationStyle, Events as AnimationEvents } from '@int/geotoolkit/attributes/AnimationStyle';
/**
 * Defines an abstract implementation of an animated node.
 */
export declare abstract class AnimatedNode extends Node {
    /**
     * Creates animated node
     * @param [options] options
     */
    protected constructor(options?: AnimatedNode.Options);
    on<E extends keyof AnimatedNode.EventMap>(type: E, callback: (eventType: E, sender: this, args: AnimatedNode.EventMap[E]) => void): this;
    off<E extends keyof AnimatedNode.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AnimatedNode.EventMap[E]) => void): this;
    notify<E extends keyof AnimatedNode.EventMap>(type: E, source: AnimatedNode, args?: AnimatedNode.EventMap[E]): this;
    protected copyConstructor(src: AnimatedNode, deepCopy?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): AnimatedNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: AnimatedNode.Options): this;
    /**
     * Register animation style.
     * @param root root node for node
     */
    registerAnimationStyle(root: Node): void;
    /**
     * Unregister animation style.
     * @param root root node for node
     */
    unregisterAnimationStyle(root: Node): void;
    /**
     * Return animation style
     * @returns animationStyle current animation style
     */
    getAnimationStyle(): AnimationStyle | null;
    /**
     * Sets animation style
     * @param animationStyle animation style
     */
    setAnimationStyle(animationStyle: AnimationStyle.Type): this;
}
export declare namespace AnimatedNode {
    /**
     * options
     */
    type Options = Node.Options & {
        /**
         * animation style
         */
        animationstyle?: AnimationStyle.Type;
    };
    /**
     * properties
     */
    type OptionsOut = Node.OptionsOut & {
        /**
         * animation style
         */
        animationstyle?: AnimationStyle;
    };
    type EventMap = Node.EventMap & {
        [AnimationEvents.AnimationBegin]: void;
        [AnimationEvents.AnimationEnd]: void;
    };
}
