import type { ClassType } from '@int/geotoolkit/base';
/**
 * Decorator to implements interface
 * @param superClass super class
 */
export declare function Implements(superClass: ClassType): (klass: ClassType) => void;
/**
 * Decorator to set class name.
 * @param className class name
 */
export declare function SetClassName(className: string): (klass: ClassType) => void;
/**
 * Decorator to obfuscate class.
 */
export declare function Obfuscate(): (klass: ClassType) => void;
