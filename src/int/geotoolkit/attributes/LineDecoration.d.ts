import { ILineDecoration } from '@int/geotoolkit/attributes/ILineDecoration';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
/**
 * Defines a class that contains line rendering decoration strategies.
 */
export declare class LineDecoration {
    /**
     * Solid line decoration type
     * @name module:geotoolkit/attributes/LineDecoration~LineDecoration~Solid
     */
    static get Solid(): ILineDecoration;
    /**
     * Wavy line decoration type
     * @name module:geotoolkit/attributes/LineDecoration~LineDecoration~Wavy
     */
    static get Wavy(): ILineDecoration;
    /**
     * Double line decoration type
     * @name module:geotoolkit/attributes/LineDecoration~LineDecoration~Double
     */
    static get Double(): ILineDecoration;
    /**
     * Double-Wavy line decoration type
     * @name module:geotoolkit/attributes/LineDecoration~LineDecoration~DoubleWavy
     */
    static get DoubleWavy(): ILineDecoration;
    /**
     * Return line decoration as painter
     * @param painter painter of line decoration
     * @param size size of parinter
     */
    static getPainter(painter: SymbolShape.Painter, size: Dimension): ILineDecoration;
    /**
     * Return line decoration by type name
     * @param lineDecorationType line decoration type
     * @returns instance of line decoration
     */
    static getLineDecoration(lineDecorationType: string): ILineDecoration | null;
    /**
     * Register line decoration type by name
     * @param shortTypeName type name of the line decoration
     * @param lineDecoration line decoration instance
     */
    static registerLineDecoration(shortTypeName: string, lineDecoration: ILineDecoration): void;
    /**
     * Create or get line decoration strategy from object
     * @param [decoration] decoration can be a name of LineDecoration instance if it is registered
     * @returns line decoration strategy
     */
    static fromObject(decoration?: string | ILineDecoration): ILineDecoration | null;
    static getClassName(): string;
    getClassName(): string;
}
