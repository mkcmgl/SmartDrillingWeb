/**
 * Contains name of all functions that are registered in default gauge registry.
 * All easing functions are taken from https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ============================================================
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ========================================================
 * @enum
 * @readonly
 */
export declare enum Functions {
    /**
     * No easing function
     */
    NoEasing = "NoEasing",
    /**
     * Linear function
     */
    Linear = "Linear",
    /**
     * Easing InQuad function
     */
    EaseInQuad = "EaseInQuad",
    /**
     * Easing OutQuad function
     */
    EaseOutQuad = "EaseOutQuad",
    /**
     * Easing InOutQuad function
     */
    EaseInOutQuad = "EaseInOutQuad",
    /**
     * Easing InCubic function
     */
    EaseInCubic = "EaseInCubic",
    /**
     * Easing OutCubic function
     */
    EaseOutCubic = "EaseOutCubic",
    /**
     * Easing InOutCubic function
     */
    EaseInOutCubic = "EaseInOutCubic",
    /**
     * Easing InQuart function
     */
    EaseInQuart = "EaseInQuart",
    /**
     * Easing OutQuart function
     */
    EaseOutQuart = "EaseOutQuart",
    /**
     * easing InOutQuart function
     */
    easeInOutQuart = "easeInOutQuart",
    /**
     * Easing InQuint function
     */
    EaseInQuint = "EaseInQuint",
    /**
     * Easing OutQuint function
     */
    EaseOutQuint = "EaseOutQuint",
    /**
     * Easing InOutQuint function
     */
    EaseInOutQuint = "EaseInOutQuint",
    /**
     * Easing InSine function
     */
    EaseInSine = "EaseInSine",
    /**
     * Easing OutSine function
     */
    EaseOutSine = "EaseOutSine",
    /**
     * Easing InOutSine function
     */
    EaseInOutSine = "EaseInOutSine",
    /**
     * Easing InExpo function
     */
    EaseInExpo = "EaseInExpo",
    /**
     * Easing OutExpo function
     */
    EaseOutExpo = "EaseOutExpo",
    /**
     * Easing InOutExpo function
     */
    EaseInOutExpo = "EaseInOutExpo",
    /**
     * Easing InCirc function
     */
    EaseInCirc = "EaseInCirc",
    /**
     * Easing OutCirc function
     */
    EaseOutCirc = "EaseOutCirc",
    /**
     * Easing InOutCirc function
     */
    EaseInOutCirc = "EaseInOutCirc",
    /**
     * Easing InElastic function
     */
    EaseInElastic = "EaseInElastic",
    /**
     * Easing OutElastic function
     */
    EaseOutElastic = "EaseOutElastic",
    /**
     * Easing InOutElastic function
     */
    EaseInOutElastic = "EaseInOutElastic",
    /**
     * Easing InBack function
     */
    EaseInBack = "EaseInBack",
    /**
     * Easing OutBack function
     */
    EaseOutBack = "EaseOutBack",
    /**
     * Easing InOutBack function
     */
    EaseInOutBack = "EaseInOutBack",
    /**
     * Easing OutBounce function
     */
    EaseOutBounce = "EaseOutBounce"
}
/**
 * Defines a class which contains default easing functions to apply to animation
 */
export declare class Easing {
    /**
     * Returns an object with easing functions indexed by function name
     */
    static getFunctions(): Record<string, Easing.Function>;
    /**
     * Register custom easing function
     * @param name function name
     * @param func function
     */
    static register(name: string, func: Easing.Function): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Easing {
    /**
     * @param x Group which will be calling the animation
     * @param t current time
     * @param b start value
     * @param c change in value
     * @param d total iterations
     */
    type Function = (x: any, t: number, b: number, c: number, d: number, s?: number) => number;
}
