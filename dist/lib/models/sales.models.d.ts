import { TreeNode } from 'primereact/treenode';
interface ShadowSalesTreeInnerNodeDetail {
    label?: string;
    format?: {
        type?: string;
        outputFormat?: string;
    };
    direction?: string;
    type?: string;
    yoyDirection?: string;
    leftPanel?: ShadowSalesTreeInnerNodeDetail;
    rightPanel?: ShadowSalesTreeInnerNodeDetail;
}
export interface ShadowSalesTreeMetaData extends TreeNode {
    nodeDetail?: ShadowSalesTreeInnerNodeDetail;
    children?: ShadowSalesTreeMetaData[];
    branchLabel?: string;
    id?: string;
    parentId?: string;
}
export {};
