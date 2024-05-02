import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { DialogPosition, ShadowDialogEvent, ShadowDialogModes, ShadowFooter, WindowPosition } from "../../models";
import ShadowButton from "../ShadowButton/ShadowButton";
import "./ShadowDialog.scss";

interface ShadowDialogProps {
  title?: string;
  subtitle?: string;
  closable?: boolean;
  style?: any;
  breakpoints?: any;
  className?: string;
  display?: boolean;
  headerIcon?: string;
  mode?: ShadowDialogModes; // You'll need to define the type ShadowDialogModes
  header?: boolean;
  footer?: ShadowFooter; // You'll need to define the type ShadowFooter
  modal?: boolean;
  closeOnBlur?: boolean;
  height?: string;
  width?: string;
  resizable?: boolean;
  draggable?: boolean;
  allowContentPadding?: boolean;
  position?: string; // You'll need to define the type DialogPosition
  customPosition?: WindowPosition;
  displayChange?: (event: ShadowDialogEvent) => void;
  handleCancel?: (event: ShadowDialogEvent) => void;
  handleOk?: (event: ShadowDialogEvent) => void;
  children?: React.ReactNode;
}

const ShadowDialog = ({
  title = "",
  subtitle = "",
  closable = true,
  style = {},
  breakpoints = {},
  className = "",
  display = false,
  headerIcon = "",
  mode = "default",
  header = true,
  footer = { type: "none" },
  modal = true,
  closeOnBlur = false,
  height = "auto",
  width = "auto",
  resizable = true,
  draggable = false,
  allowContentPadding = true,
  position = "center",
  customPosition = {},
  displayChange,
  handleCancel,
  handleOk,
  children,
}: ShadowDialogProps) => {
  const [dialogPosition, setDialogPositon] = useState<DialogPosition>("center");
  const [dialogStyle, setDialogStyle] = useState<any>({});
  const [maskStyle, setMaskStyle] = useState<string>("");

  const updateDialogStyle = () => {
    let updatedDialogStyle = {
      ...dialogStyle,
      ...style,
      maxHeight: "100vh",
      height: height,
      width: width,
    };

    if ((position === "custom" || position === "custom") && customPosition) {
      updatedDialogStyle = {
        ...updatedDialogStyle,
        ...customPosition,
      };
      setDialogStyle(updatedDialogStyle);
      setMaskStyle("shadow-dialog-mask shadow-dialog-custom-position");
    } else if (position !== "custom") {
      setDialogPositon(position as DialogPosition);
      updatedDialogStyle = {
        ...updatedDialogStyle,
        position: dialogPosition,
      };
      setDialogStyle(updatedDialogStyle);
      setMaskStyle("shadow-dialog-mask");
    }
  };

  const onClose = (_result?: any) => {
    displayChange && displayChange(ShadowDialogEvent.close);
  };

  const onCancel = (_result: any) => {
    handleCancel && handleCancel(ShadowDialogEvent.cancel);
  };

  const onSubmit = (_result: any) => {
    handleOk && handleOk(ShadowDialogEvent.submit);
  };

  const HeaderContent = header && (
    <div className="shadow-dialog-header-container">
      {headerIcon && (
        <div className="header-icon">
          <img src={headerIcon} alt="" />
        </div>
      )}
      <div className="shadow-dialog-title-container">
        <span className="dialog-title">{title}</span>
        {subtitle && <span className="dialog-subtitle">{subtitle}</span>}
      </div>
    </div>
  );

  const footerContent = footer.type !== "none" && (
    <div className="footer">
      {footer.icon && (
        <div className="footer-icon">
          <img src={footer.icon} alt="" />
        </div>
      )}
      {footer.text && (
        <div className="footer-text">
          <span>{footer.text}</span>
        </div>
      )}
      {footer.type === "confirm" && (
        <div className="footer-buttons">
          <ShadowButton
            label={footer.cancelButtonText || "Cancel"}
            icon={footer.cancelButtonIcon || "pi pi-times"}
            buttonType="secondary"
            onButtonClick={onCancel}
            buttonActionStyle={mode === "default" ? "brand" : "contrast"}
          />
          <ShadowButton
            label={footer.okButtonText || "OK"}
            icon={footer.okButtonIcon || "pi pi-check"}
            onButtonClick={onSubmit}
            buttonType="primary"
            buttonActionStyle={mode === "default" ? "brand" : "contrast"}
          />
        </div>
      )}
      {footer.type === "alert" && (
        <div className="footer-buttons">
          <ShadowButton
            label={footer.okButtonText || "OK"}
            icon={footer.okButtonIcon || "pi pi-check"}
            onButtonClick={onClose}
            buttonType="primary"
            buttonActionStyle={mode === "default" ? "brand" : "contrast"}
          />
        </div>
      )}
      {footer.type === "custom" && <div className="footer-buttons">{children}</div>}
    </div>
  );

  useEffect(() => {
    updateDialogStyle();
  }, []);

  return (
    <Dialog
      visible={display}
      onHide={onClose}
      modal={modal}
      dismissableMask={closeOnBlur}
      style={dialogStyle}
      breakpoints={breakpoints}
      draggable={draggable}
      resizable={resizable}
      closable={closable}
      closeOnEscape={closable}
      position={position !== "custom" ? dialogPosition : undefined}
      appendTo={document.body}
      maskClassName={maskStyle}
      showHeader={header}
      header={HeaderContent}
      footer={footerContent}
      className={`shadow-dialog-modal ${className} ${footer.type === "none" ? "shadow-dialog-no-footer" : ""} ${
        !header ? "shadow-dialog-no-header" : ""
      } ${mode === "default" ? "dialog-mode-primary" : "dialog-mode-notification"} ${allowContentPadding ? "" : "shadow-dialog-no-padding"}`}
    >
      {children}
    </Dialog>
  );
};

export default ShadowDialog;
