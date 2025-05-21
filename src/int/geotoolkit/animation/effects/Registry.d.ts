import { AbstractEffect } from '@int/geotoolkit/animation/effects/AbstractEffect';
import type { AnimatedNode } from '@int/geotoolkit/scene/AnimatedNode';
/**
 * Registry which stores animation effect.
 * If you want to add your own effect you should call geotoolkit/animation/effects/Registry.getInstance().registerEffect(class_name)
 * If you want to instantiate class from object you should call geotoolkit/animation/effects/Registry.getInstance().createEffect(effect_object)
 */
export declare class Registry {
    constructor();
    /**
     * Finds class appropriate passed object and instantiates it
     * @param effect effect properties
     * @param node node to which effect would be applied
     * @throws Error if effect does not found
     * @returns effect
     */
    createEffect(effect: AbstractEffect.Options, node?: AnimatedNode): AbstractEffect;
    /**
     * Register effect in registry
     * @param Effect effect
     * @returns this
     */
    registerEffect(Effect: typeof AbstractEffect): this;
    /**
     * Sets default effect class, that will be used in createEffect
     * @param Effect effect
     * @returns this
     */
    setDefaultEffect(Effect: typeof AbstractEffect): this;
    /**
     * Returns instance of the Effects registry
     * @returns Effects registry
     */
    static getInstance(): Registry;
    static getClassName(): string;
    getClassName(): string;
}
