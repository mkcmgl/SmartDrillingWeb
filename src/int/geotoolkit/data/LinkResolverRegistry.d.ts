/**
 * @module geotoolkit/data/LinkResolverRegistry
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { ILinkResolver } from '@int/geotoolkit/data/ILinkResolver';
/**
 * Link resolver registry events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * ResolverRegistered
     */
    ResolverRegistered = "ResolverRegistered"
}
/**
 * Define link resolver registry
 */
export declare class LinkResolverRegistry extends EventDispatcher {
    constructor();
    on<E extends keyof LinkResolverRegistry.EventMap>(type: E, callback: (eventType: E, sender: this, args: LinkResolverRegistry.EventMap[E]) => void): this;
    off<E extends keyof LinkResolverRegistry.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LinkResolverRegistry.EventMap[E]) => void): this;
    notify<E extends keyof LinkResolverRegistry.EventMap>(type: E, source: LinkResolverRegistry, args?: LinkResolverRegistry.EventMap[E]): this;
    /**
     * Registers a link resolver
     * @param provider provider to register
     */
    register(provider: ILinkResolver): void;
    /**
     * Returns resolver, which accepts data
     * @param data data to accept
     * @returns a provider which accepts
     */
    getResolver(data: string): ILinkResolver;
    /**
     * Returns instance of the registry
     * @returns registry
     */
    static getInstance(): LinkResolverRegistry;
    /**
     * Registers resolver
     * @param provider provider to register
     */
    static registerResolver(provider: ILinkResolver): void;
}
export declare namespace LinkResolverRegistry {
    type EventMap = EventDispatcher.EventMap & {
        [Events.ResolverRegistered]: void;
    };
}
