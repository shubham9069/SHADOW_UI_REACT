import { Badge } from "primereact/badge";
import { ShadowBadgeItem } from "../../models";
import "./ShadowBadge.scss";
import React from "react";

interface ShadowBadgeProps {
  badge: ShadowBadgeItem;
  onClickBadge?: (badge: ShadowBadgeItem) => void;
}

const ShadowBadge = ({
  badge = { value: ""},
  onClickBadge,
}: ShadowBadgeProps) => {
  const handleClick = (badge: ShadowBadgeItem) => {
    if (badge) {
      onClickBadge && onClickBadge(badge);
    }
  };
  return (
    <div className="badge-container" onClick={() => handleClick(badge)}>

        <i
          className={`${badge?.icon || "pi pi-bell"} p-overlay-badge`}
          style={{ fontSize: badge?.iconFontSize || "16px" }}
        >
          <Badge
            value={badge?.value}
            severity={badge?.type || "danger"}
            size={badge?.size || "large"}
          ></Badge>
        </i>
      
    </div>
  );
};

export default ShadowBadge;
