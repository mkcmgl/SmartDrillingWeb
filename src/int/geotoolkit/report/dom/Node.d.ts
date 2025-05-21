/**
 * @module geotoolkit/report/dom/Node
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { NamedItemMap } from '@int/geotoolkit/report/dom/NamedItemMap';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { NodeList } from '@int/geotoolkit/report/dom/NodeList';
import type { IElementsRegistry } from '@int/geotoolkit/report/dom/IElementsRegistry';
import type { Document } from '@int/geotoolkit/report/dom/Document';
import type { Attribute } from '@int/geotoolkit/report/dom/Attribute';
import { NodeEventArgs } from '@int/geotoolkit/report/dom/NodeEventArgs';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
/**
 * Enum of Node types
 * @enum
 * @readonly
 */
export declare enum NodeType {
    ELEMENT_NODE = 1,
    ATTRIBUTE_NODE = 2,
    TEXT_NODE = 3,
    CDATA_SECTION_NODE = 4,
    ENTITY_REFERENCE_NODE = 5,
    ENTITY_NODE = 6,
    PROCESSING_INSTRUCTION_NODE = 7,
    COMMENT_NODE = 8,
    DOCUMENT_NODE = 9,
    DOCUMENT_TYPE_NODE = 10,
    DOCUMENT_FRAGMENT_NODE = 11,
    NOTATION_NODE = 12
}
/**
 * Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 */
export declare class Node extends EventDispatcher implements INodeEnumerable {
    constructor(options: Node.Options | null);
    /**
     * Invalidate root document
     * @param eventArgs event args
     * @returns this
     */
    protected invalidateDocument(eventArgs: NodeEventArgs): this;
    /**
     * Set shadow element registry
     * @param registry elements registry
     */
    protected setElementRegistry(registry: IElementsRegistry): this;
    /**
     * Returns elements Registry
     */
    getElementRegistry(): IElementsRegistry | null;
    /**
     * Gets time stamp
     *
     * @returns timeStamp
     */
    getTimeStamp(): number;
    /**
     * Update time stamp to indicate that style has been changed.
     * @returns this
     */
    updateTimeStamp(): this;
    enumerateNodes(callback: INodeEnumerable.Callback, target?: QueryBuilder): void;
    /**
     * Return node index
     */
    getNodeIndex(): number;
    /**
     * Returns index of node.
     * @param node item to get index of
     */
    indexOfNode(node: Node): number;
    /**
     * @returns this
     */
    protected invalidate(): this;
    /**
     * Set attribute value
     * @param name attribute name
     * @param value attribute value
     */
    setAttribute(name: string, value: string | null | undefined): this;
    /**
     * Returns element id
     */
    getId(): string;
    /**
     * Returns css class name to be used to apply CSS style
     *
     * @returns the css class name
     */
    getCssClass(): string | null;
    /**
     * Set css class
     * @param cssClass css class
     */
    setCssClass(cssClass: string): this;
    /**
     * Returns element GUID
     */
    getGuid(): string;
    /**
     * Set node GUID
     * @param guid node GUID
     */
    setGuid(guid: string | null): this;
    /**
     * Node local name
     * @name module:geotoolkit/report/dom/Node~Node#localName
     */
    get localName(): string;
    /**
     * Node tag name
     * @name module:geotoolkit/report/dom/Node~Node#tagName
     */
    get tagName(): string;
    /**
     * Returns node tag name
     */
    getTagName(): string;
    /**
     * Node name
     * @name module:geotoolkit/report/dom/Node~Node#nodeName
     */
    get nodeName(): string;
    /**
     * Node value
     * @name module:geotoolkit/report/dom/Node~Node#nodeValue
     */
    get nodeValue(): string;
    /**
     * Node value
     * @name module:geotoolkit/report/dom/Node~Node#nodeValue
     */
    set nodeValue(value: string);
    /**
     * Returns node value
     */
    getNodeValue(): string;
    /**
     * Set node value
     * @param nodeValue node value
     */
    setNodeValue(nodeValue: string): this;
    /**
     * Node data
     * @name module:geotoolkit/report/dom/Node~Node#data
     */
    get data(): string;
    /**
     * Node data
     * @name module:geotoolkit/report/dom/Node~Node#data
     */
    set data(data: string);
    /**
     * Node type
     * @name module:geotoolkit/report/dom/Node~Node#nodeType
     */
    get nodeType(): NodeType;
    /**
     * Return root node
     * @returns node
     */
    getRootNode(): Node;
    /**
     * Lock node
     */
    lock(): this;
    /**
     * Unlock node
     */
    unlock(): this;
    /**
     * Return root node
     * @deprecated since 2022 (3.4) use {@link @int/geotoolkit/report/dom/Node~Node#getRootNode} instead
     * @name module:geotoolkit/report/dom/Node~Node#rootNode
     */
    get rootNode(): Node;
    /**
     * Parent node
     * @name module:geotoolkit/report/dom/Node~Node#parentNode
     */
    get parentNode(): Node;
    /**
     * Returns parent node
     * @returns parent
     */
    getParent(): Node;
    /**
     * @returns this
     */
    protected onParentChanged(): this;
    /**
     * The element holding the item.
     * @name module:geotoolkit/report/dom/Node~Node#childNodes
     */
    get childNodes(): NodeList<Node>;
    /**
     * First child node
     * @name module:geotoolkit/report/dom/Node~Node#firstChild
     */
    get firstChild(): Node;
    /**
     * Last child node
     * @name module:geotoolkit/report/dom/Node~Node#lastChild
     */
    get lastChild(): Node;
    /**
     * Previous sibling node
     * @name module:geotoolkit/report/dom/Node~Node#previousSibling
     */
    get previousSibling(): Node;
    /**
     * Next sibling node
     * @name module:geotoolkit/report/dom/Node~Node#nextSibling
     */
    get nextSibling(): Node;
    /**
     * Clear attributes
     */
    clearAttributes(): this;
    /**
     * Node attributes
     * @name module:geotoolkit/report/dom/Node~Node#attributes
     */
    get attributes(): NamedItemMap;
    /**
     * Node owner document
     * @name module:geotoolkit/report/dom/Node~Node#ownerDocument
     */
    get ownerDocument(): Document;
    /**
     * Insert child
     * @param newChild child to insert
     * @param refChild ref child
     */
    insertBefore(newChild: Node, refChild: Node): Node;
    /**
     * Insert child
     * @param newChild child to insert
     * @param refChild ref child
     */
    insertAfter(newChild: Node, refChild: Node): Node;
    /**
     * Replace child
     * @param newChild child to replace with
     * @param oldChild child to replace
     */
    replaceChild(newChild: Node, oldChild: Node): this;
    /**
     * Remove child from node
     * @param child to remove
     */
    removeChild(child: Node): Node;
    /**
     * Remove all child nodes from this node
     * @returns this
     */
    clearNodes(): this;
    /**
     * Add child to the node
     * @param newChild child to add
     */
    appendChild(newChild: Node): Node;
    /**
     * Return true if node has children
     */
    hasChildNodes(): boolean;
    /**
     * Puts the specified node and all of its subtree into a "normalized" form. In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.<br>
     * @returns this
     */
    normalize(): this;
    /**
     * Check if attribute exists
     * @param name attribute name
     */
    hasAttribute(name: string): boolean;
    /**
     * Return attribute value
     * @param name attribute name
     */
    getAttribute(name: string): string | null | undefined;
    /**
     * Adds a new {@link @int/geotoolkit/report/dom/Attribute~Attribute}  node to the specified element.
     * @param newAttr attribute
     * @returns this
     */
    setAttributeNode(newAttr: Attribute): this;
    /**
     * Flush all changes before saving
     * @param [serializationContext] serialization Context
     */
    protected flush(serializationContext?: Node.SerializationContext): this;
    /**
     * Serialize element to xml
     * @param [recursive] save whole dom element structure
     * @param [serializationContext] serialization Context
     */
    save(recursive?: boolean, serializationContext?: Node.SerializationContext): string;
    /**
     * Find root of the node with specified type
     * @param node node to start search
     * @param classType type of the class to search for or short interface name
     */
    static findParentNode<T extends abstract new (...args: any) => any>(node: Node, classType: T): InstanceType<T> | null;
    /**
     * Find root of the node with specified type
     * @param node node to start search
     * @param classType interface name to search for
     */
    static findParentNode(node: Node, classType: string): Node | null;
}
export declare namespace Node {
    /**
     * The options
     */
    type Options = {
        name?: string;
        /**
         * node name
         */
        nodeName?: string;
        /**
         * node local name
         */
        localName?: string;
        /**
         * node tag name
         */
        tagName?: string;
        /**
         * node type
         */
        nodeType?: NodeType;
        /**
         * node value
         */
        nodeValue?: null | string;
        /**
         * node data
         */
        data?: null | string;
        /**
         * tag name of the node.
         */
        ownerDocument?: Node | null;
        /**
         * tag name of the node.
         */
        parentNode?: Node | null;
        /**
         * tag name of the node.
         */
        attributes?: NamedItemMap | null;
        /**
         * tag name of the node.
         */
        registry?: IElementsRegistry | null;
    };
    /**
     * serialization Context
     */
    type SerializationContext = {
        /**
         * save internal guid
         */
        guid?: boolean;
    };
}
