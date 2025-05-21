/**
 * @module geotoolkit/selection/from
 */
import { Node } from '@int/geotoolkit/scene/Node';
import { Direction } from '@int/geotoolkit/selection/Direction';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
/**
 * Query all nodes from the specified node and do the specified action
 * @param node node or enumerable item to start search
 * @param [direction] traverse direction, for Node type
 * @returns a new node query builder
 * @example
 * import {from} from '@int/geotoolkit/selection/from';
 * from(node)
 *  .where((node) => return node.getId() === 'line')
 *  .select((node) => node.setLineStyle(mystyle));
 */
export declare const from: (node: Node | INodeEnumerable, direction?: Direction) => QueryBuilder;
