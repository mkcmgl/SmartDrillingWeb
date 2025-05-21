import { Accumulate } from '@int/geotoolkit/animation/Accumulate';
import { Additive } from '@int/geotoolkit/animation/Additive';
import { CalcMode } from '@int/geotoolkit/animation/CalcMode';
import { AnimationFill } from '@int/geotoolkit/animation/AnimationFill';
import { Easing, Functions } from '@int/geotoolkit/animation/Easing';
import type { AbstractProcessor } from '@int/geotoolkit/animation/processors/AbstractProcessor';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { AnimatedNode } from '@int/geotoolkit/scene/AnimatedNode';
/**
 * Defines abstract animation effect, API is subset of SMIL animation with two extensions: <br>
 * 1. Can accept param 'function' - like transition-timing-function in CSS <br>
 * 2. Can accept value 'auto' as 'begin' parameter - animation will run automatically when animated attribute is changed.
 */
export declare class AbstractEffect {
    /**
     * Defines abstract animation effect
     * @param options object that contains effect options
     */
    constructor(options?: AbstractEffect.Options);
    /**
     * Returns true if this class can accept passed effect as a parameter
     * @param effect effect parameters
     * @param node target node
     */
    isApplicable(effect: AbstractEffect.Options, node: Node): boolean;
    /**
     * Called immediately after the effect begins.
     */
    protected started(): void;
    /**
     * Called immediately after the effect ends.
     */
    protected ended(): void;
    /**
     * Extracts value which can animated from node
     * @param node animated node
     */
    getAnimatedValue(node: Node): any;
    /**
     * Returns current value, which should be applied
     */
    getCurrentValue(): any;
    /**
     * Set processor, which will be used for calculate intermediate values
     * @param processor processor for calculate intermediate values
     */
    protected setProcessor(processor: AbstractProcessor): this;
    /**
     * Gets the number of the time segment.
     * @param time time from effect's start
     * @returns result time segment
     */
    getTimeSegmentIndex(time: number): number;
    /**
     * Returns transformation, that will be applied to the node
     * @param node target node
     * @returns transformation
     */
    protected getTransformation(node: AnimatedNode): Transformation | null;
    /**
     * Applies effect to node and invalidate it
     * To add animation support to target class create new Animation Effect by inherit from this class,
     * and override method 'apply' to apply intermediate value to target class (for example with setters)
     * @param node target node
     */
    apply(node: AnimatedNode): void;
    /**
     * Stop effect
     * @param node target node
     */
    stop(node: AnimatedNode): void;
    /**
     * Create or get effect from object
     * @param [object] effect
     * @returns effect
     */
    static fromObject(object?: AbstractEffect.Options | AbstractEffect): AbstractEffect | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractEffect {
    /**
     * object that contains effect options
     */
    type Options = {
        /**
         * Controls whether or not the animation is cumulative. For more information
         */
        accumulate?: Accumulate;
        /**
         * Controls whether or not the animation is additive. For more information .
         */
        additive?: Additive;
        /**
         * The begin time of an animation in ms or 'auto' for transition animation
         */
        begin?: string;
        /**
         * Defines effect's interpolation mode.
         */
        calcmode?: CalcMode;
        /**
         * effect duration
         */
        duration?: number;
        /**
         * Defines animation behavior after it ends.
         */
        fill?: AnimationFill;
        /**
         * unit, by default effects work in model coordinates
         */
        unit?: string;
        keypoints?: number[];
        /**
         * repeat count
         */
        repeatcount?: number;
        /**
         * effect id
         */
        id?: string;
        /**
         * name of animated attribute
         */
        attributename: string;
        /**
         * easing function, if provide keypoints param will be ignored
         */
        function?: Functions | Easing.Function;
        /**
         * start value of animated attribute, ignored when 'begin'='auto'
         */
        from?: any;
        /**
         * end value of animated attribute, ignored when 'begin'='auto'
         */
        to?: any;
        values?: any[];
        /**
         * processor for the animation data
         */
        processor?: AbstractProcessor;
        /**
         * type animated attribute for  'attributename'='transform', valid value: 'translate', 'scale', 'rotate'
         */
        type?: string;
    };
}
