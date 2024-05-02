import React, { useMemo, useState } from "react";
import { Button } from "primereact/button";
import "./ShadowButton.scss";
import { ShadowTooltipCaretAlignment, ShadowTooltipEvent, ShadowTooltipPosition, ShadowTooltipTheme, ShadowTooltipType } from "../../models";


interface ShadowButtonProps {
  loading?: boolean;
  label?: string;
  disabled?: boolean;
  iconPosition?: "top" | "bottom" | "left" | "right"; // Adjust type here
  icon?: string;
  buttonType?: string;
  size?: string;
  buttonActionStyle?: string;

  tooltip?: string;
  delay?: number;
  tooltipPosition?: ShadowTooltipPosition;
  tooltipTheme?: ShadowTooltipTheme;
  tooltipEvent?: ShadowTooltipEvent;
  tooltipWidth?: string;
  tooltipType?: ShadowTooltipType;
  tooltipCaretAlignment?: ShadowTooltipCaretAlignment;

  onClick?: (arg: any) => void;
  onButtonClick?: (arg: string) => void;
}

const ShadowButton = ({
  loading = false,
  label = "",
  disabled = false,
  iconPosition = "left",
  icon = "",
  buttonType = "primary",
  size = "md",
  buttonActionStyle = "brand",

  tooltip: propTooltip = "",
  delay = 150,
  tooltipPosition = "top",
  tooltipTheme = "dark",
  tooltipEvent: propTooltipEvent = "hover",
  tooltipType = "single",
  tooltipCaretAlignment = "center",
  tooltipWidth = "",

  onButtonClick,
  onClick,
}: ShadowButtonProps) => {
  const [tooltip, setTooltip] = useState(propTooltip);

  const onClickEvent = (e: any) => {
    onClick && onClick(e);
    onButtonClick && onButtonClick(label || icon);
  };

  const extraClass = useMemo(() => {
    if (icon && !label) {
      return "icon-but-not-lable";
    }
    return "";
  }, [icon, label]);

  const getExtraClasses = () => {
    return `${tooltipType === "multiple" ? "tooltip--multiple" : ""}`;
  };

  const getButtonClassName = () => {
    return `${tooltip && "custom-tooltip-btn"}`;
  };

  return (
    <div className="shadow-button-container">
      <div
        className={`${buttonType} ${buttonActionStyle} ${size} ${extraClass}`}
      >
        <Button
          label={label}
          className={getButtonClassName()}
          icon={icon || undefined}
          iconPos={iconPosition}
          tooltip={tooltip}
          tooltipOptions={{
            style: { width: tooltipWidth },
            //caretAlignment does not exist: tooltip--${tooltipPosition}--${tooltipCaretAlignment}
            className: `tooltip  tooltip--${tooltipTheme} ${getExtraClasses()}`,
            position: tooltipPosition,
            event: propTooltipEvent === "click" ? "focus" : "hover",
            showDelay: delay,
            hideDelay: 0,
          }}
          disabled={disabled}
          loading={loading}
          onClick={onClickEvent}
        />
      </div>
    </div>
  );
};

export default ShadowButton;

