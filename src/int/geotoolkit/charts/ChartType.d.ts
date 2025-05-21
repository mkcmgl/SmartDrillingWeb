/**
 * @module geotoolkit/charts/ChartType
 */
/**
 * Chart types
 * @enum
 * @readonly
 */
export declare enum ChartType {
    /**
     * Line Chart
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.LineChart,
     *     'series': {
     *         'x': 'seriesId-1', // x-series identifier
     *         'y': 'seriesId-2' // y-series identifier (or array of ids)
     *     }
     * });
     * @example
     * import {CirclePainter} from '@int/geotoolkit/scene/shapes/painters/CirclePainter';
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.LineChart, // display data as a LineChart
     *     'name': 'Data comparison', // chart name, can be used in legend formatter or for widget.getChart() method
     *     'series': {
     *         'x': 'seriesId-1', // x-series identifier
     *         // options for each chart line:
     *         'y': [{
     *             'data': 'seriesId-2', // y-series identifier
     *             'linestyle': '#000000', // linestyle to use
     *             'symbol': { // vertex symbol styles, see SymbolShape for more info
     *                 'linestyle': 'black',
     *                 'fillstyle': 'blue',
     *                 'painter': CirclePainter
     *             },
     *             'selectionsymbol': {…}, // specific selection symbol options, see SymbolShape for more info
     *         }, …],
     *     },
     *     'symbol': { // common vertex symbols options, see SymbolShape for more info
     *          'width': 7,
     *          'height': 7,
     *          'painter': CirclePainter, // default painter if no specific value has been set
     *          'sizeisindevicespace': true,
     *          'visible': true
     *     },
     *     'selectionsymbol': {…}, // common selection symbol options (specific overrides common), see SymbolShape for more info
     *     'axis': {
     *          'x': 'axis-1', // x-axis identifier
     *          'y': 'axis-2' // y-axis identifier
     *     },
     *     'spline': false, // true to use splines instead of polylines
     *     // chart animation parameter (boolean to enable/disable default animation, Effects
     *     // for pre-installed variant, object/AnimationStyle for a custom style):
     *     'animation': true,
     *     // format template for chart legend items, supports the following variables:
     *     // 1) '${name}' = chart name
     *     // 2) '${type}' = chart type (LineChart)
     *     // 3) '${x-series}' = x-series identifier
     *     // 4) '${y-series}' = y-series identifier
     *     'legend': {
     *         'format': '${name}: ${y-series}'
     *     }
     * });
     * @example
     * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
     *
     * widget.setCss(new CssStyle({
     *     'css': '*[cssclass="linechart-series"]:hover { linestyle-width: 3;}' // adjust styles via css
     * }));
     */
    LineChart = "LineChart",
    /**
     * Area Chart
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.AreaChart,
     *     'series': {
     *         'x': 'seriesId-1', // x-series identifier
     *         'y': 'seriesId-2' // y-series identifier (or array of ids)
     *     }
     * });
     * @example
     * import {CirclePainter} from '@int/geotoolkit/scene/shapes/painters/CirclePainter';
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.AreaChart, // display data as a AreaChart
     *     'name': 'Data comparison', // chart name, can be used in legend formatter or for widget.getChart() method
     *     'series': {
     *         'x': 'seriesId-1', // x-series identifier
     *         // options for each chart line:
     *         'y': [{
     *             'data': 'seriesId-2', // y-series identifier
     *             'linestyle': '#000000', // linestyle to use
     *             'fillstyle': '#000000', // fillstyle to use (for the area between series)
     *             'symbol': { // vertex symbol styles, see SymbolShape for more info
     *                 'linestyle': 'black',
     *                 'fillstyle': 'blue',
     *                 'painter': CirclePainter
     *             },
     *             'selectionsymbol': {…}, // specific selection symbol options, see SymbolShape for more info
     *         }, …],
     *     },
     *     'symbol': { // common vertex symbols options, see SymbolShape for more info
     *          'width': 7,
     *          'height': 7,
     *          'painter': CirclePainter, // default painter if no specific value has been set
     *          'sizeisindevicespace': true,
     *          'visible': true
     *     },
     *     'selectionsymbol': {…}, // common selection symbol options (specific overrides common), see SymbolShape for more info
     *     'axis': {
     *          'x': 'axis-1', // x-axis identifier
     *          'y': 'axis-2' // y-axis identifier
     *     },
     *     'spline': false, // true to use splines instead of polylines
     *     // chart animation parameter (boolean to enable/disable default animation, Effects
     *     // for pre-installed variant, object/AnimationStyle for a custom style):
     *     'animation': true,
     *     // format template for chart legend items, supports the following variables:
     *     // 1) '${name}' = chart name
     *     // 2) '${type}' = chart type (LineChart)
     *     // 3) '${x-series}' = x-series identifier
     *     // 4) '${y-series}' = y-series identifier
     *     'legend': {
     *         'format': '${name}: ${y-series}'
     *     }
     * });
     * @example
     * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
     *
     * widget.setCss(new CssStyle({
     *     'css': '*[cssclass="areachart-series"]:hover { fillstyle-color: "red";}' // adjust styles via css
     * }));
     */
    AreaChart = "AreaChart",
    /**
     * AreaRange Chart
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.AreaRangeChart,
     *     'series': {
     *         'x': 'seriesId-1', // x-series identifier
     *         'y': ['seriesBottom', 'seriesTop'] // array of two range y-series identifiers
     *     }
     * });
     * @example
     * import {CirclePainter} from '@int/geotoolkit/scene/shapes/painters/CirclePainter';
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.AreaRangeChart, // display data as a AreaChart
     *     'name': 'Data comparison', // chart name, can be used in legend formatter or for widget.getChart() method
     *     'series': {
     *         'x': 'seriesId-1', // x-series identifier
     *         // options for each chart line:
     *         'y': [{
     *             'data': 'seriesBottom', // bottom y-series identifier
     *             'linestyle': '#000000', // linestyle to use
     *             'symbol': { // vertex symbol styles, see SymbolShape for more info
     *                 'linestyle': 'black',
     *                 'fillstyle': 'blue',
     *                 'painter': CirclePainter
     *             },
     *             'selectionsymbol': {…}, // specific selection symbol options, see SymbolShape for more info
     *         }, …],
     *     },
     *     'fillstyle': '#000000', // fillstyle to fill the range between two series
     *     'symbol': { // common vertex symbols options, see SymbolShape for more info
     *          'width': 7,
     *          'height': 7,
     *          'painter': CirclePainter, // default painter if no specific value has been set
     *          'sizeisindevicespace': true,
     *          'visible': true
     *     },
     *     'selectionsymbol': {…}, // common selection symbol options (specific overrides common), see SymbolShape for more info
     *     'axis': {
     *          'x': 'axis-1', // x-axis identifier
     *          'y': 'axis-2' // y-axis identifier
     *     },
     *     'spline': false, // true to use splines instead of polylines
     *     // chart animation parameter (boolean to enable/disable default animation, Effects
     *     // for pre-installed variant, object/AnimationStyle for a custom style):
     *     'animation': true,
     *     // format template for chart legend items, supports the following variables:
     *     // 1) '${name}' = chart name
     *     // 2) '${type}' = chart type (LineChart)
     *     // 3) '${x-series}' = x-series identifier
     *     // 4) '${y-series}' = y-series identifier
     *     'legend': {
     *         'format': '${name}: ${y-series}'
     *     }
     * });
     * @example
     * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
     *
     * widget.setCss(new CssStyle({
     *     'css': '*[cssclass="arearangechart-series"]:hover { fillstyle-mixin: rgba(0,0,0,.1);}' // adjust styles via css
     * }));
     */
    AreaRangeChart = "AreaRangeChart",
    /**
     * Bar Chart
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.BarChart,
     *     'series': {
     *         'x': 'seriesName-1', // x-series identifier
     *         'y': ['seriesName-2', …] // array of y-series identifiers
     *     }
     * });
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.BarChart, // display data as a BarChart
     *     'name': 'City population', // chart name, can be used in legend formatter or for widget.getChart() method
     *     'series': {
     *         'x': 'Cities', // x-series identifier
     *         // options for each chart bar:
     *         'y': [{
     *             'data': 'Population-2000', // y-series identifier
     *             'linestyle': '#000000', // bars linestyle
     *             'fillstyle': '#2196f3' // bars fillstyle
     *         }, …],
     *     },
     *     'axis': {
     *          'x': 'axis-1', // x-axis identifier
     *          'y': 'axis-2' // y-axis identifier
     *     },
     *     // chart animation parameter (boolean to enable/disable default animation, Effects
     *     // for pre-installed variant, object/AnimationStyle for a custom style):
     *     'animation': true,
     *     // format template for chart legend items, supports the following variables:
     *     // 1) '${name}' = chart name
     *     // 2) '${type}' = chart type (BarChart)
     *     // 3) '${x-series}' = x-series identifier
     *     // 4) '${y-series}' = y-series identifier
     *     'legend': {
     *         'format': '${name}: ${y-series}'
     *     }
     * });
     * @example
     * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
     *
     * widget.setCss(new CssStyle({
     *     'css': '*[cssclass="barchart-series"]:hover { linestyle-width: 3;}' // adjust styles via css
     * }));
     */
    BarChart = "BarChart",
    /**
     * Floating Bar Chart
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.FloatingBarChart,
     *     'series': {
     *         'x': 'seriesName-1', // x-series identifier
     *         'y': ['seriesName-2', seriesName-3 …] // array even length of y-series identifiers. odd elements have beginnig of floating bar, even next to it - ending.
     *     }
     * });
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.FloatingBarChart, // display data as a FloatingBarChart
     *     'name': 'City population', // chart name, can be used in legend formatter or for widget.getChart() method
     *     'series': {
     *         'x': 'Cities', // x-series identifier
     *         // options for each chart bar:
     *         'y': [{
     *             'data': 'Population-2000', // y-series identifier for floating bar beginning, and its styles
     *             'linestyle': '#000000', // bars linestyle
     *             'fillstyle': '#2196f3' // bars fillstyle
     *         },
     *             'data': 'Population-2000-end', // y-series identifier for floating bar ending
     *         } …],
     *     },
     *     'axis': {
     *          'x': 'axis-1', // x-axis identifier
     *          'y': 'axis-2' // y-axis identifier
     *     },
     *     // chart animation parameter (boolean to enable/disable default animation, Effects
     *     // for pre-installed variant, object/AnimationStyle for a custom style):
     *     'animation': true,
     *     // format template for chart legend items, supports the following variables:
     *     // 1) '${name}' = chart name
     *     // 2) '${type}' = chart type (BarChart)
     *     // 3) '${x-series}' = x-series identifier
     *     // 4) '${y-series}' = y-series identifier
     *     'legend': {
     *         'format': '${name}: ${y-series}'
     *     }
     * });
     * @example
     * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
     *
     * widget.setCss(new CssStyle({
     *     'css': '*[cssclass="barchart-series"]:hover { linestyle-width: 3;}' // adjust styles via css
     * }));
     */
    FloatingBarChart = "FloatingBarChart",
    /**
     * Bubble Chart
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     * import {DefaultColorProvider} from '@int/geotoolkit/util/DefaultColorProvider';
     *
     * widget.addChart({
     *     'type': ChartType.BubbleChart, // display data as a BubbleChart
     *     'series': {
     *         'x': 'seriesName-1', // x-series identifier
     *         'y': 'seriesName-2', // y-series identifier
     *         'z': 'seriesName-3', // z-series (color) identifier
     *         's': 'seriesName-4' // s-series (size) identifier
     *     },
     *     'axis': {
     *         'x': 'axis-1', // x-axis identifier
     *         'y': 'axis-2', // y-axis identifier
     *         'z': 'axis-3' // z-axis (color provider) identifier
     *     }
     *     'linestyle': '#000000', // bubbles linestyle
     *     'colorprovider': new DefaultColorProvider({…}), // color provider for bubbles fillstyle (if z-axis is not connected)
     *     'fillstyle': '#80c0ff' // bubbles default fillstyle (if neither colorprovider or z-axis are provided)
     * });
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     * import {DefaultColorProvider} from '@int/geotoolkit/util/DefaultColorProvider';
     *
     * widget.addChart({
     *     'type': ChartType.BubbleChart, // display data as a BubbleChart
     *     'series': {
     *         'x': 'seriesName-1', // x-series identifier
     *         'y': 'seriesName-2', // y-series identifier
     *         'z': 'seriesName-3', // z-series (color) identifier
     *         's': {
     *             'data': 'seriesId-4', // s-series (size) identifier
     *             'mins': 0, // minimum s data value for size distribution
     *             'maxs': 100, // maximum s data value for size distribution
     *             'minsize': 16, // minimum symbol size (side length of square) for s data value
     *             'maxsize': 48 // maximum symbol size (side length of square) for s data value
     *         }
     *     },
     *     'axis': {
     *          'x': 'axis-1', // x-axis identifier
     *          'y': 'axis-2', // y-axis identifier
     *          'z': 'axis-3' // z-axis (color provider) identifier
     *     },
     *     'linestyle': '#000000', // bubbles linestyle
     *     'colorprovider': new DefaultColorProvider({…}), // color provider for bubbles fillstyle (if z-axis is not connected)
     *     'fillstyle': '#80c0ff', // bubbles default fillstyle (if neither colorprovider or z-axis are provided)
     *     // format template for chart legend items, supports the following variables:
     *     // 1) '${name}' = chart name
     *     // 2) '${type}' = chart type (LineChart)
     *     // 3) '${x-series}' = x-series identifier
     *     // 4) '${y-series}' = y-series identifier
     *     // 5) '${z-series}' = z-series identifier
     *     // 6) '${s-series}' = s-series identifier
     *     'legend': {
     *         'format': '${name}: ${y-series}'
     *     }
     * });
     * @example
     * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
     *
     * widget.setCss(new CssStyle({
     *     'css': '*[cssclass="bubblechart-series"]:hover { linestyle-width: 3;}' // adjust styles via css
     * }));
     */
    BubbleChart = "BubbleChart",
    /**
     * CrossPlot Chart
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     * import {DefaultColorProvider} from '@int/geotoolkit/util/DefaultColorProvider';
     *
     * widget.addChart({
     *     'type': ChartType.CrossPlot, // display data as a CrossPlot
     *     'series': {
     *         'x': 'seriesName-1', // x-series identifier
     *         'y': 'seriesName-2', // y-series identifier
     *         'z': 'seriesName-3', // z-series (color) identifier
     *     },
     *     'axis': {
     *         'x': 'axis-1', // x-axis identifier
     *         'y': 'axis-2', // y-axis identifier
     *         'z': 'axis-3' // z-axis (color provider) identifier
     *     }
     *     'colorprovider': new DefaultColorProvider({…}), // color provider for cross plot symbols (if z-axis is not connected)
     *     'fillstyle': '#80c0ff' // cross plot symbols default fillstyle (if neither colorprovider or z-axis are provided)
     * });
     */
    CrossPlotChart = "CrossPlotChart",
    /**
     * Donut Chart
     * @type {string}
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * const labels = ['June', 'July', 'August'];
     * const styles = ['#ef6c00', '#2196f3', '#7cb342'];
     *
     * widget.addChart({
     *     'type': ChartType.DonutChart,
     *     'series': {
     *         'x': 'seriesName-1' // series of numeric data values
     *     },
     *     'x': '50px', // center x-value, use 'px' for device or '%' for model value
     *     'y': '50px', // center y-value, use 'px' for device or '%' for model value
     *     'innerradius': '25px', // inner radius value, use 'px' for device or '%' for model value
     *     'outerradius': '150px' // outer radius value, use 'px' for device or '%' for model value
     * });
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     * import {DataOrder, Direction, PieMode} from '@int/geotoolkit/controls/shapes/DonutChart';
     *
     * const labels = ['June', 'July', 'August'];
     * const styles = ['#ef6c00', '#2196f3', '#7cb342'];
     *
     * widget.addChart({
     *     'type': ChartType.DonutChart,
     *     'series': {
     *         'x': 'seriesName-1' // series of numeric data values
     *     },
     *     'x': '50px', // center x-value, use 'px' for device or '%' for model value
     *     'y': '50px', // center y-value, use 'px' for device or '%' for model value
     *     'innerradius': '25px', // inner radius value, use 'px' for device or '%' for model value
     *     'outerradius': '150px', // outer radius value, use 'px' for device or '%' for model value
     *     'labels': (id) => labels[id], // callback for values labels,
     *     'colors': (id) => styles[id], // callback for slice color styles
     *     'order': DataOrder.Natural, // data order
     *     'direction': Direction.Clockwise, // data direction
     *     'label': {…}, // label options
     *     'outsideline': {…}, // outside line options
     *     'mode': PieMode.Pie2D, // chart visual mode
     *     'depth3d': 30, // height of the pseudo-3d chart (3d mode only)
     *     'inclination3d': 60, // angle of the pseudo-3d chart (between 0 and 90, 3d mode only)
     *     'createselectedstyle': (style) => style.clone().setProperties({…}), // selected style creation based on "regular" one
     *     'startangle': 0, // starting angle of the first slice, in degrees
     *     'totalangle': 360, // total angle of all slices, in degrees
     *     'sliceshift': {…} // slice shift options object
     * });
     */
    DonutChart = "DonutChart",
    /**
     * Pie Chart
     * @type {string}
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * const labels = ['June', 'July', 'August'];
     * const styles = ['#ef6c00', '#2196f3', '#7cb342'];
     *
     * widget.addChart({
     *     'type': ChartType.PieChart,
     *     'series': {
     *         'x': 'seriesName-1' // series of numeric data values
     *     },
     *     'x': '50px', // center x-value, use 'px' for device or '%' for model value
     *     'y': '50px', // center y-value, use 'px' for device or '%' for model value
     *     'outerradius': '150px' // outer radius value, use 'px' for device or '%' for model value
     * });
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     * import {DataOrder, Direction, PieMode} from '@int/geotoolkit/controls/shapes/DonutChart';
     *
     * const labels = ['June', 'July', 'August'];
     * const styles = ['#ef6c00', '#2196f3', '#7cb342'];
     *
     * widget.addChart({
     *     'type': ChartType.PieChart,
     *     'series': {
     *         'x': 'seriesName-1' // series of numeric data values
     *     },
     *     'x': '50px', // center x-value, use 'px' for device or '%' for model value
     *     'y': '50px', // center y-value, use 'px' for device or '%' for model value
     *     'outerradius': '150px', // outer radius value, use 'px' for device or '%' for model value
     *     'labels': (id) => labels[id], // callback for values labels,
     *     'colors': (id) => styles[id], // callback for slice color styles
     *     'order': DataOrder.Natural, // data order
     *     'direction': Direction.Clockwise, // data direction
     *     'label': {…}, // label options
     *     'outsideline': {…}, // outside line options
     *     'mode': PieMode.Pie2D, // chart visual mode
     *     'depth3d': 30, // height of the pseudo-3d chart (3d mode only)
     *     'inclination3d': 60, // angle of the pseudo-3d chart (between 0 and 90, 3d mode only)
     *     'createselectedstyle': (style) => style.clone().setProperties({…}), // selected style creation based on "regular" one
     *     'startangle': 0, // starting angle of the first slice, in degrees
     *     'totalangle': 360, // total angle of all slices, in degrees
     *     'sliceshift': {…} // slice shift options object
     * });
     */
    PieChart = "PieChart",
    /**
     * Histogram Chart
     * @type {string}
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.HistogramChart,
     *     'series': {
     *         'x': 'seriesName-1' // series of numeric data values
     *     },
     *     'fillstyle': '#ef6c00', // bars fill style
     *     'bins': 15 // total amount of bins
     * });
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     * import {FrequencyType} from '@int/geotoolkit/controls/shapes/Histogram';
     *
     * widget.addChart({
     *     'type': ChartType.HistogramChart,
     *     'series': {
     *         'x': 'seriesName-1' // series of numeric data values
     *     },
     *     'linestyle': 'transparent', // bars line style
     *     'fillstyle': '#ef6c00', // bars fill style
     *     'bins': 15, // total amount of bins
     *     'accumulation': false, // enables accumulation mode for bins
     *     'frequencytype': FrequencyType.Absolute // frequency type changes vertical scaling for bars
     * });
     */
    HistogramChart = "HistogramChart",
    /**
     * BoxPlot Chart
     * @type {string}
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.BoxPlotChart,
     *     'series': {
     *         'x': 'Date',
     *         'y': [{
     *             'data': 'a',
     *             'fillstyle': colorstyle1
     *         }, {
     *             'data': 'b',
     *             'fillstyle': colorstyle1
     *         }, {
     *             'data': 'c',
     *             'fillstyle': colorstyle1
     *         }, {
     *             'data': 'd',
     *             'fillstyle': colorstyle2
     *         }],
     *         'group': [['a', 'b'], ['c', 'd']]
     *     },
     *     'linestyle': {
     *         'color': KnownColors.Gray,
     *         'pixelsnapmode': true
     *     },
     *     'datamode': DataMode.Raw,
     *     'axis': {
     *         'x': 'x-axis',
     *         'y': 'y-axis'
     *     }
     * });
     */
    BoxPlotChart = "BoxPlotChart",
    /**
     * HeatMap Chart
     * @type {string}
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.HeatMapChart,
     *     'series': {
     *         'x': 'months',
     *         'y': 'years',
     *         'z': 'temperature'
     *     },
     *     'axis': {
     *         'x': 'x-axis',
     *         'y': 'y-axis',
     *         'z': 'z-axis'
     *     },
     *     'labels': {
     *         'visible': true
     *     }
     * });
     */
    HeatMapChart = "HeatMapChart",
    /**
     * Density Contour Chart
     * @type {string}
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.DensityContourChart,
     *     'series': {
     *         'x': 'xData',
     *         'y': 'yData'
     *     },
     *     'axis': {
     *         'x': 'x-axis',
     *         'y': 'y-axis'
     *     },
     *     'grid': {
     *         'thresholds': 8,
     *         'bandwidth': 20
     *     }
     * });
     */
    DensityContourChart = "DensityContourChart",
    /**
     * Regression Line Chart
     * @type {string}
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * widget.addChart({
     *     'type': ChartType.RegressionLine,
     *     'series': {
     *         'x': 'length',
     *         'y': 'height'
     *     },
     *     'axis': {
     *         'x': 'x-axis',
     *         'y': 'y-axis'
     *     },
     *     'regressionmodel': {
     *         'type': Linear
     *     }
     * });
     */
    RegressionLine = "RegressionLine",
    /**
     * Tornado Chart
     * @example
     * widget.addChart({
     *  'type': ChartType.TornadoChart,
     *  'series': {
     *      'left': 'Serie 1',
     *      'right': 'Serie 2'
     *  }
     * });
     */
    TornadoChart = "TornadoChart"
}
