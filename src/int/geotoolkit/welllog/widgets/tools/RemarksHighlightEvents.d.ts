/**
 * @module geotoolkit/welllog/widgets/tools/RemarksHighlightEvents
 */
/**
 * Events fired by {@link @int/geotoolkit/welllog/widgets/tools/RemarksHighlight~RemarksHighlight} tool
 * @enum
 * @events
 * @readonly
 */
export declare enum RemarksHighlightEvents {
    /**
     * Comment section was highlighted
     * @event module:geotoolkit/welllog/widgets/tools/RemarksHighlightEvents~RemarksHighlightEvents~onHighlight
     * @param {import("geotoolkit/welllog/widgets/tools/RemarksHighlightEventArgs").RemarksHighlightEventArgs} eventArgs
     */
    onHighlight = "onHighlight",
    /**
     * Comment section was expanded
     * @event module:geotoolkit/welllog/widgets/tools/RemarksHighlightEvents~RemarksHighlightEvents~onExpand
     * @param {import("geotoolkit/welllog/widgets/tools/RemarksHighlightEventArgs").RemarksHighlightEventArgs} eventArgs
     */
    onExpand = "onExpand"
}
