import React from 'react';
import { ShadowBannerItem, ShadowBannerTextWrap, ShadowClickEventOutput } from '../../models';
import './ShadowBanner.scss';
interface ShadowBannerProps {
    shadowBanner?: ShadowBannerItem;
    textWrap?: ShadowBannerTextWrap;
    onClickButton?: (output: ShadowClickEventOutput) => void;
    onCloseBanner?: (output: ShadowClickEventOutput) => void;
}
declare const ShadowBanner: ({ shadowBanner, textWrap, onClickButton, onCloseBanner }: ShadowBannerProps) => React.JSX.Element;
export default ShadowBanner;
