import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Rectangle } from '@int/geotoolkit/scene/shapes/Rectangle';
import { RemarksHighlightEvents } from '@int/geotoolkit/welllog/widgets/tools/RemarksHighlightEvents';
import { RemarksHighlightEventArgs } from '@int/geotoolkit/welllog/widgets/tools/RemarksHighlightEventArgs';
/**
 * Tool to highlight {@link @int/geotoolkit/welllog/LogMudLogSection~LogMudLogSection} ellipsis text and detect it's expand event.
 * Works for LogMudLogSection in 'default' mode only.
 */
export declare class RemarksHighlight extends AbstractTool {
    /**
     * @param [options] tool manipulator layer or a tool properties object
     * @param [name] tool name
     */
    constructor(options?: AbstractTool.Options | CompositeNode, name?: string);
    on<E extends keyof RemarksHighlight.EventMap>(type: E, callback: (eventType: E, sender: this, args: RemarksHighlight.EventMap[E]) => void): this;
    off<E extends keyof RemarksHighlight.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: RemarksHighlight.EventMap[E]) => void): this;
    notify<E extends keyof RemarksHighlight.EventMap>(type: E, source: RemarksHighlight, args?: RemarksHighlight.EventMap[E]): this;
    /**
     * Returns rectangle shape that is used to highlight ellipsis text
     */
    getHighlightRectangle(): Rectangle;
}
export declare namespace RemarksHighlight {
    type EventMap = AbstractTool.EventMap & {
        [RemarksHighlightEvents.onHighlight]: RemarksHighlightEventArgs;
        [RemarksHighlightEvents.onExpand]: RemarksHighlightEventArgs;
    };
}
