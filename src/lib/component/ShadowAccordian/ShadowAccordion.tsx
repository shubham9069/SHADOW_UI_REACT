import { Accordion, AccordionTab } from "primereact/accordion";

import "./ShadowAccordion.scss";
import React from "react";
import { ShadowAccordionToggleIconPosition } from "../../models";
import ShadowButton from "../ShadowButton/ShadowButton";

interface ShadowAccordionProps {
  toggleIconPosition?: ShadowAccordionToggleIconPosition;
  headerStartIcon?: string;
  headerEndIcon?: string;
  headerTitle?: string;
  headerSubtitle?: string;
  onRightSideIconClick?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
  children?: React.ReactNode;
}

const ShadowAccordion = ({
  toggleIconPosition = "start",
  headerStartIcon = "pi pi-chart-line",
  headerEndIcon = "pi-share-alt",
  headerTitle = "default header title  ",
  headerSubtitle = " default header sub title  ",
  onRightSideIconClick,
  onClose,
  onOpen,
  children = (
    <>
      <h1>default template </h1>
      <ShadowButton
        icon="pi pi-users"
        label="small"
        buttonType="primary"
        size="md"
        buttonActionStyle="brand"
      />
    </>
  ),
}: ShadowAccordionProps) => {
  const onRightIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRightSideIconClick && onRightSideIconClick();
  };

  const onAccordionClose = () => {
    onClose && onClose();
  };

  const onAccordionOpen = () => {
    onOpen && onOpen();
  };

  const templateHeader: React.ReactNode = (
    <div className={`accordion-header ${toggleIconPosition}`}>
      <i className={`pi header-start-icon ${headerStartIcon}`}></i>
      <div className="headerContent">
        <div className="header-title">{headerTitle}</div>
        <div className="header-subtitle">{headerSubtitle}</div>
      </div>
      <i
        className={`pi right-side-icon ${headerEndIcon}`}
        onClick={onRightIconClick}
      ></i>
    </div>
  );

  return (
    <div className="shadow-accordion-container">
      <Accordion
        expandIcon={"pi pi-angle-down"}
        onTabOpen={onAccordionOpen}
        onTabClose={onAccordionClose}
        collapseIcon={"pi pi-angle-up"}
      >
        <AccordionTab
          className={`shadow-accordion-tab ${
            toggleIconPosition === "end" && "header-icon-right"
          }`}
          header={templateHeader}
        >
          {children}
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default ShadowAccordion;
