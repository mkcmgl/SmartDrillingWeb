import { WidgetElement } from '@int/geotoolkit/report/elements/WidgetElement';
import { CompositeSchematicsWidget } from '@int/geotoolkit/schematics/widgets/CompositeSchematicsWidget';
export declare class SchematicsWidgetElement extends WidgetElement {
    constructor(options?: CompositeSchematicsWidget.Options);
    getWidgetElement(): CompositeSchematicsWidget;
}
