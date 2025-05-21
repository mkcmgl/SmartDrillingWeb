/**
 * @module geotoolkit/attributes/AnimationStyle
 */
import { Style } from '@int/geotoolkit/attributes/Style';
import type { AbstractEffect } from '@int/geotoolkit/animation/effects/AbstractEffect';
/**
 * Type of state changes
 * @enum
 */
export declare enum Events {
    /**
     * Animation starts
     */
    AnimationBegin = "AnimationBegin",
    /**
     * Animation ends
     */
    AnimationEnd = "AnimationEnd"
}
/**
 * Defines properties of transition animation. Its transition duration, easing function and array of animated properties
 */
export declare class AnimationStyle extends Style {
    /**
     * Creates animation style
     * @param [effects] options
     */
    constructor(effects?: AbstractEffect.Options | AbstractEffect.Options[]);
    protected copyConstructor(src: AnimationStyle): this;
    on<E extends keyof AnimationStyle.EventMap>(type: E, callback: (eventType: E, sender: this, args: AnimationStyle.EventMap[E]) => void): this;
    off<E extends keyof AnimationStyle.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AnimationStyle.EventMap[E]) => void): this;
    notify<E extends keyof AnimationStyle.EventMap>(type: E, source: AnimationStyle, args?: AnimationStyle.EventMap[E]): this;
    /**
     * Returns true if animation is active
     */
    isActive(): boolean;
    /**
     * Makes effect active when an event occurs
     * @param id event id. See {@link https://www.w3.org/TR/SVG/animate.html#BeginValueSyntax} for details.
     */
    activateEffects(id: string): void;
    /**
     * Create or get style from object
     * @param object effect
     * @returns effect
     */
    static fromObject(object: AnimationStyle.Type): AnimationStyle | null;
    /**
     * Enable / disable all animations
     * @param enabled flag to enable/disable animation
     */
    static enableAnimation(enabled: boolean): void;
    /**
     * Return status of the global animation
     */
    static isAnimationEnabled(): boolean;
}
export declare namespace AnimationStyle {
    type Type = AbstractEffect.Options | AbstractEffect.Options[] | AnimationStyle | null;
    type EventMap = Style.EventMap & {
        [Events.AnimationBegin]: void;
        [Events.AnimationEnd]: void;
    };
}
