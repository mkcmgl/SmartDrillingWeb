/**
 * @module geotoolkit/scene/shapes/painters/AbstractPainter
 */
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Abstract Painter
 * @param symbol the parent symbol, used to set properties
 * @param bbox bounding box this symbolPainter should paint within
 * @param context Rendering Context
 */
export declare type AbstractPainter = (symbol: SymbolShape, bbox: Rect, context: RenderingContext) => void;
