import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { LinearGradientStyle } from '@int/geotoolkit/attributes/LinearGradientStyle';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Helper class
 */
export declare class ComponentUtils {
    /**
     * Gets depth from value
     * @param entity geometry data
     */
    static getDepthFrom(entity: WellBoreData.Entity): null | number;
    /**
     * Gets depth to value
     * @param entity geometry data
     */
    static getDepthTo(entity: WellBoreData.Entity): null | number;
    /**
     * Gets biggest outer diameter
     * @param geometryData geometry data
     */
    static getOuterDiameter(entity: WellBoreData.Entity): null | number;
    /**
     * Gets smallest inner diameter
     * @param geometryData geometry data
     */
    static getInnerDiameter(entity: WellBoreData.Entity): null | number;
    /**
     * Validates array of diameters
     * @param diameters array of diameters
     */
    static validDiameters(diameters: number[]): boolean;
    /**
     * Create reflected linear gradient style
     * @param [outerColor] outer color
     * @param [innerColor] inner color
     * @param [outerX] outer X or vertical flag (in this case all next arguments ignored)
     * @param [innerX] inner X
     * @param [outerY] outer Y
     * @param [innerY] inner Y
     * @param [vertical] vertical
     */
    static createReflectedLinearGradientStyle(outerColor?: string, innerColor?: string, outerX?: number | boolean, innerX?: number, outerY?: number, innerY?: number, vertical?: boolean): LinearGradientStyle;
    /**
     * Gets description string
     * @param description description data
     */
    static getDescriptionString(description: WellBoreData.Description): null | string;
    /**
     * Converts data element to component node options
     * @param element data element
     */
    static dataElementToComponentOptions(element?: WellBoreData.Element): ComponentNode.Options | null;
    static getClassName(): string;
    getClassName(): string;
}
