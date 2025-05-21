import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
/**
 * Query all nodes from the specified node and do the specified action
 *
 * @param node node to start search
 * @returns a new node query builder
 * @example
 * import {from} from '@int/geotoolkit3d/selection/from';
 * from(node)
 *      .where((node) => node.getId() === 'line')
 *      .selectFirst();
 */
export declare const from: (node: Object3D) => QueryBuilder;
