import { ContainerElement } from '@int/geotoolkit/report/dom/elements/ContainerElement';
import { IPhrasingContainer } from '@int/geotoolkit/report/dom/elements/IPhrasingContainer';
import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Paragraph is a phrasing content container
 */
export declare class Paragraph extends ContainerElement implements IPhrasingContainer {
    constructor(options: Node.Options);
}
