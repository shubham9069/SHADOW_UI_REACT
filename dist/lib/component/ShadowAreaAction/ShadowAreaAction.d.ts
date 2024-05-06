import React from 'react';
import { ShadowAreaActionItem } from '../../models';
import { ShadowClickEventOutput } from '../../models';
import './ShadowAreaAction.scss';
interface ShadowAreaActionProps {
    areaActionOption?: ShadowAreaActionItem;
    areaActionHandler?: (event: ShadowClickEventOutput) => void;
}
declare const ShadowAreaAction: ({ areaActionOption, areaActionHandler }: ShadowAreaActionProps) => React.JSX.Element;
export default ShadowAreaAction;
