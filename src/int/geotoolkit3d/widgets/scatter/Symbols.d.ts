/**
 * @module geotoolkit3d/widgets/scatter/Symbols
 */
import type { BufferGeometry, Texture as BaseTexture } from 'three';
/**
 * An enumeration of the available 2D symbol names.
 * @enum
 * @readonly
 */
export declare enum Symbol2DNames {
    /**
     * Name of the 2D circle symbol, with solid fill color and no 3D effect.
     */
    soliddot = "soliddot",
    /**
     * Name of the 2D circle symbol, with bright light and imitating a 3D effect.
     */
    circle = "circle",
    /**
     * Name of the 2D square symbol.
     */
    square = "square",
    /**
     * Name of the 2D cube symbol, imitating a 3D effect.
     */
    cube = "cube",
    /**
     * Name of the 2D triangle symbol.
     */
    triangle = "triangle",
    /**
     * Name of the 2D sphere symbol, with dark color, imitating a 3D effect.
     */
    sphere = "sphere",
    /**
     * Name of the 2D ball symbol, imitating a 3D effect.
     */
    ball = "ball"
}
/**
 * An enumeration of the available 3D symbol names.
 * @enum
 * @readonly
 */
export declare enum Symbol3DNames {
    /**
     * Name of the 3D sphere symbol.
     */
    sphere = "sphere",
    /**
     * Name of the 3D cube symbol.
     */
    cube = "cube",
    /**
     * Name of the 3D pyramid symbol.
     */
    pyramid = "pyramid"
}
/**
 * Enum of symbols.<br>
 * The geometries provided by this enum are used to display a symbol in 3D.
 * @enum
 * @readonly
 */
export declare const Symbol3D: {
    /**
     * A sphere symbol
     */
    readonly sphere: SymbolGeometry;
    /**
     * A cube symbol
     */
    readonly cube: SymbolGeometry;
    /**
     * A pyramid symbol
     */
    readonly pyramid: SymbolGeometry;
};
/**
 * The Geometry for 3D symbols used in the ScatterPlot.
 * Those symbols can be obtained through {@link @int/geotoolkit3d/widgets/scatter/Symbols~Symbol3D};
 */
export declare type SymbolGeometry = BufferGeometry & {
    name: Symbol3DNames;
};
/**
 * The texture for 2D symbols used in the ScatterPlot.
 * Those symbols can be obtained through {@link @int/geotoolkit3d/util/Texture~Texture};
 */
export declare type SymbolTexture = BaseTexture & {
    /**
     * The identifier of the symbol.
     */
    name: Symbol2DNames;
};
