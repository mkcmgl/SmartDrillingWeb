/**
 * Assign the corresponding obfuscated names to the public ones inherited from the super.
 *
 * <p>
 * Each extended GeoToolkit class that overrides any method must call this function to map
 * obfuscated names to the public API, otherwise the overridden methods in the subclass
 * cannot be called properly.
 * </p>
 *
 * @param klass class instance
 * @example
 * // How to use obfuscate function
 * import {obfuscate} from '@int/geotoolkit/lib';
 * export class MyShape extends Shape {
 *  public override render (context: RenderingContext) {
 *  }
 * }
 * obfuscate(MyShape);
 */
export declare function obfuscate<T extends object>(klass: T): T;
