import { ShadowTagItem } from '../../models';
import './ShadowTag.scss';
import React from 'react';
interface ShadowTagProps {
    tag: ShadowTagItem;
    onClickTag?: (tag: any) => void;
}
declare const ShadowTag: ({ tag, onClickTag }: ShadowTagProps) => React.JSX.Element;
export default ShadowTag;
