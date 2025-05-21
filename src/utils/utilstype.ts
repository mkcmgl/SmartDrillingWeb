// types.ts

// 定义表格列的类型
export interface TableColumn {
  prop: string;
  label: string;
  width?: number;
  visible?: boolean;
}

// 定义选项值的类型
export interface OptionValue {
  value: string;
  label: string;
}

// 定义树节点的类型
export interface TreeNode {
  block: string;
  id: string;
  label: string;
  checked?: boolean;
  children?: TreeNode[];
  parent?: TreeNode | null; // 添加 parent 属性
}