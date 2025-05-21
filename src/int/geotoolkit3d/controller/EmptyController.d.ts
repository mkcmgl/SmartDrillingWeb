import { AbstractController } from '@int/geotoolkit3d/controller/AbstractController';
/**
 * Empty controller that does nothing.
 */
export declare class EmptyController extends AbstractController {
    constructor(options?: AbstractController.Options);
    /**
     * Set this controller options
     */
    setOptions(): this;
    /**
     * Dispose this controller
     */
    dispose(): void;
    /**
     * Get this controller's name
     */
    getName(): string;
    onMouseWheel(): void;
    static getClassName(): string;
    getClassName(): string;
}
