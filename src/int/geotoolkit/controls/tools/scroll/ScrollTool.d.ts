import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { ScrollEventArgs } from '@int/geotoolkit/controls/tools/scroll/ScrollEventArgs';
import type { Events } from '@int/geotoolkit/controls/tools/scroll/AbstractScroll';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
export declare class ScrollTool extends AbstractTool {
    on<E extends keyof ScrollTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: ScrollTool.EventMap[E]) => void): this;
    off<E extends keyof ScrollTool.EventMap>(type: E, callback?: (eventType: E, sender: this, args: ScrollTool.EventMap[E]) => void): this;
    notify<E extends keyof ScrollTool.EventMap>(type: E, source: AbstractTool, args?: ScrollTool.EventMap[E]): this;
}
export declare namespace ScrollTool {
    type EventMap = AbstractTool.EventMap & {
        [Events.onActivate]: EventArgs;
        [Events.onScroll]: ScrollEventArgs;
        [Events.onScale]: ScrollEventArgs;
        [Events.onScrollEnd]: ScrollEventArgs;
        [Events.onScaleEnd]: ScrollEventArgs;
        [Events.onRangeChanged]: ScrollEventArgs;
    };
}
