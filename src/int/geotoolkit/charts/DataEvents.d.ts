/**
 * @module geotoolkit/charts/DataEvents
 */
/**
 * Events fired by charts DataSource
 * @enum
 * @readonly
 */
export declare enum DataEvents {
    /**
     * Data serie(s) added
     */
    SeriesAdded = "SeriesAdded",
    /**
     * Data serie(s) removed
     */
    SeriesRemoved = "SeriesRemoved",
    /**
     * Updated
     */
    Updated = "Updated",
    /**
     * Values Adding
     */
    ValuesAdding = "ValuesAdding",
    /**
     * Values Added
     */
    ValuesAdded = "ValuesAdded",
    /**
     * Values Removing
     */
    ValuesRemoving = "ValuesRemoving",
    /**
     * Values Removed
     */
    ValuesRemoved = "ValuesRemoved",
    /**
     * Series states changed
     */
    SeriesStatesChanged = "SeriesStatesChanged"
}
