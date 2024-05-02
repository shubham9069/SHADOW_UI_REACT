import { ShadowButtonGroupItem, ShadowButtonGroupDirection, ShadowButtonSize } from '../../models';
import ShadowButton from "../ShadowButton/ShadowButton";
import "./ShadowButtonGroup.scss";
import React from "react";

interface ShadowButtonGroupProps {
  buttonGroupData: ShadowButtonGroupItem[];
  buttonsSize?: ShadowButtonSize;
  direction?: ShadowButtonGroupDirection;
  onButtonClick?: (label: string) => void;
  styleClass?: string;
}

const ShadowButtonGroup = ({
  buttonGroupData = [],
  buttonsSize = "md",
  direction = "horizontal",
  onButtonClick,
  styleClass = "",
}: ShadowButtonGroupProps) => {
  const getSizeClassname = (): string => {
    let className = "";

    if (buttonsSize === "sm") {
      className = "size-sm";
    } else if (buttonsSize === "lg") {
      className = "size-lg";
    } else {
      className = "size-md";
    }
    return className;
  };

  const handleClick = (label: string) => {
    onButtonClick && onButtonClick(label);
  };

  return (
    <div className={`shadow-button-group-container ${direction} ${getSizeClassname()} ${styleClass}`}>
      {buttonGroupData.map((config, index) => (
        <ShadowButton
          key={`button-${index}`}
          disabled={config?.disabled || false}
          loading={config?.loading || false}
          icon={config?.icon || ""}
          label={config?.label || ""}
          buttonType={config?.buttonType || "primary"}
          size={buttonsSize || config?.size || "md"}
          buttonActionStyle={config?.buttonActionStyle || "brand"}
          onButtonClick={() => handleClick(config?.label || config?.icon || "")}
        />
      ))}
    </div>
  );
};

export default ShadowButtonGroup;
