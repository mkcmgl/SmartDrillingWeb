import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Plot } from '@int/geotoolkit/plot/Plot';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * Editor Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onType
     */
    onType = "onType",
    /**
     * onSubmit
     */
    onSubmit = "onSubmit",
    /**
     * onRollback
     */
    onRollback = "onRollback"
}
/**
 * Creates default implementation of the inline-text editor
 * Tool name: 'inline-editor'
 * @example
 * import {CompositeShape} from './ts/shapes/CompositeShape';
 * import {Events as SelectionEvents, Selection} from '@int/geotoolkit/controls/tools/Selection';
 * import {Editor, Events as EditorEvents} from '@int/geotoolkit/controls/tools/html/Editor';
 * import type {EditorEventArgs} from '@int/geotoolkit/controls/tools/html/EditorEventArgs';
 *
 * private initializeDoubleClickSelection (manipulatorLayer: Layer) {
 *     const selectionTool = new Selection(manipulatorLayer)
 *         .setRootNode(manipulatorLayer.getRoot())
 *         .on(SelectionEvents.onDoubleClick, (evt, sender, eventArgs) => {
 *             const visual: CompositeShape = sender.getSelection()
 *                 .filter((node) => node instanceof CompositeShape)[0] as CompositeShape;
 *             if (visual != null) {
 *                 const textGeometry: Editor.EditOptions = {
 *                     node: visual,
 *                     bounds: visual.getFrame(),
 *                     text: visual.getText(),
 *                     textstyle: visual.getTextStyle(),
 *                     fillstyle: visual.getFillStyle(),
 *                     linestyle: visual.getLineStyle(),
 *                     padding: null
 *                 };
 *                 eventArgs.stopPropagation();
 *                 this._inlineEditor.edit(textGeometry);
 *             }
 *         });
 *     return selectionTool;
 * }
 * ...
 * this._plot.getTool()
 *     .add([
 *         this.initializeDoubleClickSelection(selectionLayer),
 *         this._inlineEditor = new Editor({
 *             plot: this._plot
 *         })
 *             .on(EditorEvents.onSubmit, (event: EditorEvents.onSubmit, sender: Editor, eventArgs: EditorEventArgs) => {
 *                 const visual = sender.getNode();
 *                 if (visual instanceof CompositeShape) {
 *                     visual.setText(eventArgs.getText());
 *                 }
 *             })
 *     ]);
 */
export declare class Editor extends AbstractTool {
    /**
     * Creates instance of inline-text editor tool
     * @param [options] HTML Inline-Editor tool options
     */
    constructor(options?: Editor.Options);
    /**
     * Dispose tool.
     */
    dispose(): void;
    /**
     * Set plot
     * @param plot plot container
     */
    setPlot(plot: Plot): this;
    /**
     * Returns plot
     * @returns plot
     */
    getPlot(): Plot;
    /**
     * Returns current node
     */
    getNode(): Node;
    /**
     * Returns current node local transformation
     */
    protected getLocalTransform(node: Node): Transformation;
    /**
     * Start inline-text editor tool, with specific geometry and styles options
     * @param options text geometry options
     * @param [eventArgs] optional event args, in case if you start it manually from tools container
     */
    edit(options: Editor.EditOptions, eventArgs?: EventArgs): this;
}
export declare namespace Editor {
    /**
     * Geometry and style options for text editor element
     */
    type EditOptions = {
        /**
         * Node to edit
         */
        node: Node;
        /**
         * Text label in node model space
         */
        bounds: Rect;
        /**
         * Text to edit
         */
        text: string;
        /**
         * Text style
         */
        textstyle?: TextStyle | TextStyle.Type;
        /**
         * Background fill style
         */
        fillstyle?: FillStyle | FillStyle.Type;
        /**
         * Borderline style
         */
        linestyle?: LineStyle | LineStyle.Type;
        /**
         * Inner text padding in device space
         */
        padding?: SpaceStyle | SpaceStyle.Options;
    };
    /**
     * HTML Inline-Editor tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * Containing Plot
         */
        plot?: Plot;
        /**
         * Containing Node
         */
        containingnode?: CompositeNode;
    };
}
