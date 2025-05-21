import type { TableElement } from '@int/geotoolkit/report/dom/elements/TableElement';
import type { TdElement } from '@int/geotoolkit/report/dom/elements/TdElement';
/**
 * @module geotoolkit/report/dom/elements/TableColumn
 */
/**
 * TableColumn is a helper class to work with TD elements attributes
 */
export declare class TableColumn {
    constructor();
    /**
     * Return Table element
     * @returns owner table
     */
    getTable(): TableElement;
    /**
     * Return index in Table element
     */
    getIndex(): number;
    /**
     * Return visibility state of the column
     */
    getVisible(): boolean | null;
    /**
     * Return cells count
     */
    getCellsCount(): number;
    /**
     * Return Cell by index
     */
    getCell(index: number): TdElement;
    /**
     * Set visibility state of the column
     * @param visible visible flag
     * @returns this
     */
    setVisible(visible: boolean | null): this;
}
