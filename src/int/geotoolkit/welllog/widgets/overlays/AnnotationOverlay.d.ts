import { AnnotationOverlay as BaseAnnotationOverlay } from '@int/geotoolkit/widgets/overlays/AnnotationOverlay';
import type { WellLogWidget } from '@int/geotoolkit/welllog/widgets/WellLogWidget';
/**
 * Creates default implementation of the welllog annotation overlay
 * @example
 * import {AnnotationOverlay, Events as OverlayEvents} from '@int/geotoolkit/widgets/overlays/AnnotationOverlay';
 * import {AnnotationOverlay as WellLogAnnotationOverlay} from '@int/geotoolkit/welllog/widgets/overlays/AnnotationOverlay';
 * import {LogTrack} from '@int/geotoolkit/welllog/LogTrack';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * import {Selector} from '@int/geotoolkit/selection/Selector';
 * const overlay = new WellLogAnnotationOverlay(widget, {
 *     'annotationcontainer': 'geotoolkit-plot-host'
 * })
 *     .on(OverlayEvents.CreateAnnotation, (event, sender, eventArgs) => {
 *         const data = eventArgs.getAnnotation();
 *         data['text'] = 'text';
 *         data['symbol'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xNkRpr/UAAAKqSURBVDhPbZNbSBNgFMc3CLJeIkENqQcpopceepAiKhFKIiWIAksXtbJ1UdEerAyym3azyFosA8W0FMrNNqcTvKBzWZuXzGreB8o0UtOMDO1iv84sszEf/vCdc/7n/33n/32fApgXB7QO/NVmAuLK2Z5hk9T8vHmTqkwbu++08mnyB1O/fhGf30VEWq2UfLk+CdV1K+EZDspa3pOiayI5y05p8yAx996yLbVSKN58ryA6vZawy41M/QRz83tO3m8i5X4LeXX9Up4mViciZ7xF/i3236hnT1YbA2NTZFe6KLT1U9/1kbrOEfQv3WSVdzP8+RtJ+Z3sOFcjLf8JaLR2wtObcPSNsy7BgnJ9DgujilgQUTADP1krN+YSrDJg6x0jVtvGrgzrjIgiKbeZDedfMvV9GlvHCJmmTswyf7Hdjf4vnsoJPJ7ctfRgbBz0NLLzVgv7shpQBMaZqWr7gL17lKvSXGIf5LG1j8L6/jnIOI8kZ5DazbIeTI0DOIQffLQMRZCmlA73ZzTZzSi35LFUbWRxrIFFgsWqkn/wk9j/sAnl1gI2p9aIV5OsTLSgiLndQIzuNa6hCUJTKlmwt5jlx8sIOmJi2ZHSGQTFmVhxzCxCBlbIhu2y4akiJ2uSK/44ufuKlcMP3jH29TtW5xAvuj/iGp7A6R4X8ji9It7iGqX6zRBf5I4v6LsIOGT0WDF3jVFpNWhynIiXXCx2ornrIMPYQfqzDpKym0jIfcW3n9PiUy+BB/80ewl4EHG2imjtGznFMCHRepSb8lCGPWRJZBFmMS65wEmw2iTUuR4vAQ88z/X0Exc9IxOckA+lzmygVcbQVblZHW8RijffK5hFxNlqGaedSTmyvGouGXpYm1AhK1+uT2IWkdeeE5JYyarECkJTqyU1Hw/Fb8Ss6LTDRVrLAAAAAElFTkSuQmCC';
 *         data['options']['geometrytype'] = 'print-arrow';
 *
 *         const anchor = data['anchor'];
 *         const target = data['target'];
 *         if (target instanceof LogTrack) {
 *             data['text'] = 'Track: ' + target.getName() + '<br/>' +
 *                 'Depth: ' + anchor.getY() + '<br/>';
 *             const plotPoint = target.getSceneTransform().transformPoint(anchor);
 *             const nodes = Selector.select(target.getRoot(), plotPoint.x, plotPoint.y, 2);
 *             const logCurve = nodes.filter((node) => node instanceof LogCurve)[0];
 *             if (logCurve != null) {
 *                 const rawValue = logCurve.getDataSource()
 *                     .getValueAt(anchor.getY(), 0, logCurve.getDataSource().getSize(), logCurve.getInterpolationType());
 *                 data['target'] = logCurve;
 *                 data['text'] = 'Curve: ' + logCurve.getName() + '<br/>' +
 *                     'Depth: ' + anchor.getY() + '<br/>' +
 *                     'Value: ' + rawValue.toFixed(2);
 *             }
 *         }
 *     });
 */
export declare class AnnotationOverlay extends BaseAnnotationOverlay<WellLogWidget> {
    /**
     * Creates annotation overlay
     * @param widget widget to create overlay
     * @param [options] annotation overlay options
     */
    constructor(widget: WellLogWidget, options?: AnnotationOverlay.Options);
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
}
export declare namespace AnnotationOverlay {
    /**
     * annotation overlay options
     */
    type Options = BaseAnnotationOverlay.Options & {};
}
