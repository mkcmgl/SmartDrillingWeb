import { AbstractLogVisualEditingTool } from '@int/geotoolkit/welllog/widgets/tools/AbstractLogVisualEditingTool';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Layer } from '@int/geotoolkit/scene/Layer';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Defines the editing mode supported by this adapter
 * @enum
 * @readonly
 */
export declare enum Modes {
    /**
     * The mode when an existing LogFrameVisual range can be edited to change depth
     */
    Edit = "edit",
    /**
     * The mode when a new LogFrameVisual can be added
     */
    Insert = "insert"
}
/**
 * This tool provides functionality for well log LogFrameVisual creation and manipulations.
 *
 * <p>It has two modes: <code>Insert</code> and <code>Edit</code>. It <code>Insert</code> mode tool creates an visual
 * and insert it to the track, which is specified using method <code>setShape</code>. In <code>Edit</code> mode it
 * changes geometry of the shape, which was specified using <code>setShape</code> method.
 * </p>
 * <p>if <code>setShowGhost</code> is set to true then in <code>Edit</code> mode ghost box is resized first and
 * the selected shape is updated if an user unpressed mouse or stopt touching.
 * </p>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/editing/Events~Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>Insert</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs}</td>
 *              <td>This event is fired when the frame visual insertion in track occurs.</td>
 *          </tr>
 *          <tr>
 *              <td>DragStart</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs}</td>
 *              <td>This event is fired when movement of the frame visual or insertion is started.</td>
 *          </tr>
 *          <tr>
 *              <td>DragEnd</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs}</td>
 *              <td>This event is fired when movement of the frame visual or insertion is completed.</td>
 *          </tr>
 *          <tr>
 *  *              <td>BeforeDragging</td>
 *  *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs}</td>
 *  *              <td>This event is fired before the first move is executed on a handle.</td>
 *  *          </tr>
 *          <tr>
 *  *              <td>AfterDragging</td>
 *  *              <td>{@link @int/geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs}</td>
 *  *              <td>This event is fired after dragging is completed but before the handle or a ghost is released.</td>
 *  *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * @deprecated since 4.0. Use {@link @int/geotoolkit/welllog/widgets/tools/editors/LogFrameVisualEditor~LogFrameVisualEditor} with
 * {@link @int/geotoolkit/welllog/widgets/tools/WellLogVisualsEditingTool~WellLogVisualsEditingTool} instead
 * @fires @int/geotoolkit/controls/editing/Events~Events.Insert
 * @fires @int/geotoolkit/controls/editing/Events~Events.DragEnd
 * @fires @int/geotoolkit/controls/editing/Events~Events.DragStart
 * @fires @int/geotoolkit/controls/editing/Events~Events.BeforeDragging
 * @fires @int/geotoolkit/controls/editing/Events~Events.Dragging
 * @fires @int/geotoolkit/controls/editing/Events~Events.AfterDragging
 * @example
 * // How to initialize tool
 * import {LogFrameVisualEditor, Modes as LogFrameVisualEditorModes} from '@int/geotoolkit/welllog/widgets/tools/LogFrameVisualEditor';
 * import {Events as EditingEvents} from '@int/geotoolkit/controls/editing/Events';
 * const annotationTool = new LogFrameVisualEditor({
 *     'manipulatorLayer': layer,
 *     'freeresizemode': false, // true to resize in all directions
 *      'instance': () => { // provide a new create shape in Insert mode
 *           const annotation = new LogAnnotation(new Rect(0, 100, 1, 200), 'Text1')
 *                   .setFillStyle(ColorUtil.getRandomColorRgb());
 *               return annotation;
 *           }
 *       })
 *       .setHandleStyles(handleStyles) // apply styles for handles
 *       .setShowGhost(false); // move original object instead of ghost
 * @example
 * // Set track to insert annotation
 * annotationTool.setShape(track);
 * // Code shows how to listen to Insert event
 * annotationTool.addListener(EditingEvents.Insert, (sender, args) => {
 *    // track, which contains a new visual
 *    const track = args['track'];
 *    // a new annotation
 *    const annotation = args['shape'];
 *    // new rect
 *    const annotation = args['rect'];
 *    annotation.setText('Text1');
 *    // Switch tool to edit mode and select a new annotation to edit
 *    sender.setMode(LogFrameVisualEditorModes.Edit)
 *    sender.setShape(annotation);
 *  });
 * @example
 * // Code shows how to listen to DragEnd event when shape is changed
 * annotationTool.addListener(EditingEvents.DragEnd, (sender, args) => {
 *  // track, which contains a new visual
 *  const track = args['track'];
 *  // modified annotation
 *  const annotation = args['shape'];
 *  // new rect
 *  const annotation = args['rect'];
 * });
 */
export declare class LogFrameVisualEditor extends AbstractLogVisualEditingTool {
    /**
     * @param [options] options
     */
    constructor(options?: LogFrameVisualEditor.Options | CompositeNode);
    /**
     * Returns the mode in which this tool is currently working. See setMode
     */
    getMode(): string | Modes;
    /**
     * Sets the type of manipulations which this tool should do.
     * @param mode The mode to set on the tool
     */
    setMode(mode: string | Modes): this;
    /**
     * Return if visual is resizing. This option can give correct
     * information during dragging only
     */
    isResizing(): boolean;
    onMouseDown(eventArgs: EventArgs): this;
    onMouseUp(eventArgs: EventArgs): this;
    onMouseMove(eventArgs: EventArgs): this;
    /**
     * Sets styles for active, inactive box
     * @param styles object containing stylings for different types of box states
     */
    setBoxStyles(styles: LogFrameVisualEditor.BoxStyles): this;
    /**
     * Returns registered styles for active, inactive for box
     * @returns object containing stylings for different types of handle states
     */
    getBoxStyles(): LogFrameVisualEditor.BoxStylesOut;
    update(forceUpdateShape?: boolean): this;
}
/**
 * @deprecated since 4.0
 */
export declare namespace LogFrameVisualEditor {
    /**
     * options
     */
    type Options = AbstractTool.Options & {
        /**
         * layer to which handles will be added. Cache disabled
         */
        manipulatorLayer?: Group | Layer;
        /**
         * function to be used to create an instance of the shape
         */
        instance?: () => Node;
        /**
         * allows resizing in vertical and horizontal direction
         */
        freeResizeMode?: boolean;
        /**
         * handle styles
         */
        handleStyles?: {
            /**
             * Fill Style of the box when it is selected and active
             */
            activefillstyle?: FillStyle.Type;
            /**
             * Fill Style of the box when it is selected and active
             */
            inactivefillstyle?: FillStyle.Type;
            /**
             * Line Style of the box when it is active
             */
            activelinestyle?: LineStyle.Type;
            /**
             * Line Style of the box when it is inactive
             */
            inactivelinestyle?: LineStyle.Type;
            /**
             * handle painter
             */
            handlePainter?: SymbolShape.Painter;
            /**
             * handle size
             */
            handleSize?: number;
        };
        /**
         * box styles
         */
        boxStyles?: BoxStylesOut;
    };
    /**
     * object containing stylings for different types of box states
     */
    type BoxStyles = {
        /**
         * Fill Style of the box when it is selected and active
         */
        activefillstyle?: FillStyle.Type;
        /**
         * Fill Style of the box when it is inactive
         */
        inactivefillstyle?: FillStyle.Type;
        /**
         * Line Style of the box when it is selected and active
         */
        activelinestyle?: LineStyle.Type;
        /**
         * Line Style of the box when it is inactive
         */
        inactivelinestyle?: LineStyle.Type;
    };
    /**
     * object containing stylings for different types of handle states
     */
    type BoxStylesOut = {
        /**
         * Fill Style of the box when it is selected and active
         */
        activefillstyle?: FillStyle;
        /**
         * Fill Style of the box when it is inactive
         */
        inactivefillstyle?: FillStyle;
        /**
         * Line Style of the box when it is selected and active
         */
        activelinestyle?: LineStyle;
        /**
         * Line Style of the box when it is inactive
         */
        inactivelinestyle?: LineStyle;
    };
}
