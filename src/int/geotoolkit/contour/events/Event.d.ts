import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * The base class for all contour events.
 * Constructs new event object, based on specified values
 * @deprecated since 4.0, use common event flow instead
 */
export declare class Event {
    /**
     * @param source Source of event.
     * @param param Parameter of event (reference to shape, for example).
     * @param id Integer value - ID of event
     */
    constructor(source: Shape, param: any, id: string);
    /**
     * Obtains the source object of this event.
     * @returns source The event source.
     */
    getSource(): Shape;
    /**
     * Gets the parameter object associated with this event.
     * @returns parameter The parameter.
     */
    getParameter(): any;
    /**
     * Retrieves the ID of this event.
     * @returns id The integer value - ID of event
     */
    getID(): string;
    static getClassName(): string;
    getClassName(): string;
}
