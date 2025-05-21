// do not modify this row, we change it during obfuscation
import {HttpRequest} from './http/NodeHttpRequest.js';
import {kB as HttpService} from '../impl/geotoolkit.http.js';
HttpService.setRequest(HttpRequest.send);
import {$o as TextMetrics, Yo as TextMetricsMeasureStrategy} from '../impl/geotoolkit.base.js';
TextMetrics.setMeasureTextStrategy(TextMetricsMeasureStrategy.NodeCanvas);
