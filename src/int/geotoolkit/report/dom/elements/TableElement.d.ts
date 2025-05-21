/**
 * @module geotoolkit/report/dom/elements/TableElement
 */
import { AbstractTextElement } from '@int/geotoolkit/report/dom/elements/AbstractTextElement';
import { ITrContainer } from '@int/geotoolkit/report/dom/elements/ITrContainer';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { THead } from '@int/geotoolkit/report/dom/elements/THead';
import { TrElement } from '@int/geotoolkit/report/dom/elements/TrElement';
import { TdElement } from '@int/geotoolkit/report/dom/elements/TdElement';
import { TableColumn } from '@int/geotoolkit/report/dom/elements/TableColumn';
import { Node } from '@int/geotoolkit/report/dom/Node';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { NodeList } from '@int/geotoolkit/report/dom/NodeList';
/**
 * Table element
 */
export declare class TableElement extends AbstractTextElement implements ITrContainer {
    constructor(options: Node.Options);
    /**
     * Return border spacing
     * @returns vertical alignment type
     */
    getBorderSpacing(): Dimension | null;
    /**
     * Set border spacing
     * @param borderSpacing border spacing
     * @returns this
     */
    setBorderSpacing(borderSpacing: Dimension | null): this;
    /**
     * Return template data row
     * @returns template data row
     */
    getTemplateRow(): TrElement | null;
    /**
     * Set data table, in case if data table is not null, table will expand itself after parsing and fill with values
     * @param dataTable data table
     * @param [propagate] generate data rows
     */
    setDataTable(dataTable: AbstractDataTable, propagate?: boolean): this;
    /**
     * Return associated data table
     */
    getDataTable(): AbstractDataTable;
    /**
     * The tHead property returns a reference to the <thead> element of a table.
     * @name module:geotoolkit/report/dom/elements/TableElement~TableElement#tHead
     */
    get tHead(): THead;
    /**
     * The rows returns an iterable collection of all <tr> elements in a table.
     * @name module:geotoolkit/report/dom/elements/TableElement~TableElement#rows
     */
    get rows(): NodeList<TrElement>;
    removeChild(child: Node): this;
    /**
     * Add Row
     * @param location row location
     * @param [element] tr element
     */
    addRow(location: string, element?: TrElement | TdElement): TrElement;
    /**
     * Remove row
     * @param element element
     */
    removeRow(element: TrElement | TdElement): this;
    /**
     * Return column by index
     * @param index column index
     */
    getColumn(index: number): TableColumn;
    /**
     * Add column
     * @param location column location. location can be 'before' or 'after'
     * @param [element] element element
     */
    addColumn(location: string, element?: TdElement): TableColumn;
    /**
     * Remove column
     * @param td td element
     */
    removeColumn(td: TdElement): this;
}
