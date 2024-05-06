import React from 'react';
import { ShadowTreeNode } from '../../models';
import { TreeCheckboxSelectionKeys, TreeMultipleSelectionKeys } from 'primereact/tree';
import './ShadowTree.scss';
interface ShadowTreeProps {
    data?: ShadowTreeNode[];
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    virtualScroll?: boolean;
    virtualNodeHeight?: number;
    scrollHeight?: string;
    filter?: boolean;
    filterMode?: 'lenient' | 'strict' | undefined;
    selection?: string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null;
    loading?: boolean;
    onChange?: (data: any) => void;
    onNodeExpand?: (node: ShadowTreeNode) => void;
    onNodeSelect?: (node: ShadowTreeNode) => void;
    onNodeUnselect?: (node: ShadowTreeNode) => void;
}
declare const ShadowTree: ({ data, selectionMode, virtualScroll, virtualNodeHeight, scrollHeight, filter, filterMode, selection, loading, onChange, onNodeExpand, onNodeSelect, onNodeUnselect }: ShadowTreeProps) => React.JSX.Element;
export default ShadowTree;
