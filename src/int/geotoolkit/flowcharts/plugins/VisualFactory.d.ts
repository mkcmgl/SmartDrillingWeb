/**
 * @module geotoolkit/flowcharts/plugins/VisualFactory
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Node } from '@int/geotoolkit/scene/Node';
import type { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
/**
 * Factory that is used for creating Diagram Visual prototypes.
 * getInstance returns a singleton instance, otherwise, new visual prototypes can be registered with
 * registerPlugin method.
 * @example
 * import {VisualFactory} from '@int/geotoolkit/flowcharts/plugins/VisualFactory';
 * import {DiagramVisual} from '@int/geotoolkit/flowcharts/shapes/DiagramVisual';
 * VisualFactory.getInstance().registerPlugin(new DiagramVisual({...}))
 */
export declare class VisualFactory {
    constructor();
    /**
     * Gets a singleton instance
     * @returns factory
     */
    static getInstance(): VisualFactory;
    /**
     * Gets all available plugins
     */
    getPlugins(): IComponent[];
    /**
     * Gets a default fill style that should be applied to all newly created visuals
     * @returns a fill style instance
     */
    getDefaultFillStyle(): FillStyle;
    /**
     * Sets a default fill style that should be applied to all newly created visuals
     * @param value a fill style instance
     * @returns this
     */
    setDefaultFillStyle(value: FillStyle): this;
    /**
     * Gets a default line style that should be applied to all newly created visuals
     * @returns a line style instance
     */
    getDefaultLineStyle(): LineStyle;
    /**
     * Sets a default line style that should be applied to all newly created visuals
     * @param value a line style instance
     * @returns this
     */
    setDefaultLineStyle(value: LineStyle): this;
    /**
     * Registers the given component in the factory
     * @param component a visual plugin instance
     */
    registerPlugin(component: IComponent): void;
    /**
     * Creates a new visual plugin instance using the given prototypeId name
     * @param prototypeId class name for a component to create
     * @param [width] the desired width of the newly created component. If not set, a default
     * value from prototype will be used
     * @param [height] the desired height of the newly created component. If not set, a default
     * value from prototype will be used
     * @returns a new visual plugin instance or null if an
     * error has occured
     */
    getVisual(prototypeId: string, width?: number, height?: number): IComponent & Node | null;
}
