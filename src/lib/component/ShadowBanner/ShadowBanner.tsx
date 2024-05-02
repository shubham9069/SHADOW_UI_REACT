import React, { Fragment, useRef } from "react";
import { Messages } from "primereact/messages";
import { ShadowBannerItem, ShadowBannerTextWrap, ShadowClickEventOutput } from '../../models';
import "./ShadowBanner.scss";
import { useMountEffect } from "primereact/hooks";
import ShadowButtonGroup from "../ShadowButtonGroup/ShadowButtonGroup";

interface ShadowBannerProps {
  shadowBanner?: ShadowBannerItem;
  textWrap?: ShadowBannerTextWrap;
  onClickButton?: (output: ShadowClickEventOutput) => void;
  onCloseBanner?: (output: ShadowClickEventOutput) => void;
}

const ShadowBanner = ({ shadowBanner = { severity: "info",summary: "this is summary this is summary this is summary this is summary", }, textWrap = "wrap", onClickButton, onCloseBanner }: ShadowBannerProps) => {
  const banners = useRef<Messages>(null);

  const iconsMap = {
    success: "pi pi-check-circle",
    info: "pi pi-info-circle",
    warn: "pi pi-exclamation-triangle",
    error: "pi pi-times-circle",
  };

  const closeMessage = (shadowBannerItem: ShadowBannerItem) => {
    onCloseBanner &&
      onCloseBanner({
        data: shadowBannerItem?.summary,
        context: shadowBannerItem,
      });
    banners.current?.clear();
  };

  const onClick = (label: any) => {
    onClickButton && onClickButton({ data: label, context: shadowBanner });
  };

  const isButtonGroup = () => {
    return shadowBanner && shadowBanner.buttonGroup?.length ? true : false;
  };

  const getIconName = () => {
    return iconsMap[shadowBanner?.severity || "info"];
  };

  const getTextWrap = () => {
    return textWrap === "wrap" ? "normal" : "nowrap";
  };

  useMountEffect(() => {
    banners.current?.show({
      severity: shadowBanner?.severity || "info",
      sticky: true,
      closable: false,
      content: (
        <Fragment>
          <div className="message-wrapper">
            <div className="icon-container">
              <i className={getIconName()}></i>
            </div>
            <div className="content-container">
              <div className="title ml-2" style={{ whiteSpace: getTextWrap() }}>
                {shadowBanner?.summary}
              </div>
            </div>
          </div>
          <div className="group-btns">
            {isButtonGroup() && (
              <ShadowButtonGroup
                direction={shadowBanner?.buttonGroupDirection || "horizontal"}
                buttonsSize={shadowBanner?.buttonSize || "sm"}
                buttonGroupData={shadowBanner?.buttonGroup || []}
                onButtonClick={onClick}
                styleClass="shadow-button-group"
              />
            )}
            {shadowBanner?.closable !== false && <i onClick={() => closeMessage(shadowBanner)} className="closableIcon pi pi-times"></i>}
          </div>
        </Fragment>
      ),
    });
  });

  return (
    <div className="shadow-banner-container">
      <Messages ref={banners} className={isButtonGroup() ? "" : "close-icon-only"} />
    </div>
  );
};

export default ShadowBanner;
