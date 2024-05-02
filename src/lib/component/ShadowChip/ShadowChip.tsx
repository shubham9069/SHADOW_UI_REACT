import React, { useState, useEffect, useRef } from "react";
import { Chip } from "primereact/chip";

import "./ShadowChip.scss";
import { ShadowChipActionStyle, ShadowChipItem, ShadowChipThemeStyle } from '../../models';

interface ShadowChipProps {
  chipList: ShadowChipItem[];
  viewMode?: boolean;
  hideOverflow?: boolean;
  themeStyle?: ShadowChipThemeStyle;
  actionStyle?: ShadowChipActionStyle;
  onRemove?: (chip: ShadowChipItem) => void;
  chipClickHandler?: (event: any) => void;
}

const ShadowChip = ({
  chipList: propChipList,
  viewMode,
  hideOverflow = true,
  themeStyle = "primary",
  actionStyle = "subdued",
  onRemove,
  chipClickHandler,
}: ShadowChipProps) => {
  const overflowContainerRef = useRef<HTMLDivElement | null>(null);

  const [chipList, setChipList] = useState<ShadowChipItem[]>([]);
  const [overflowChips, setOverflowChips] = useState<ShadowChipItem[]>([]);
  const [visibleChips, setVisibleChips] = useState<ShadowChipItem[]>([]);
  const [overflowEnabled, setOverflowEnabled] = useState(false);

  useEffect(() => {
    if (hideOverflow) {
      checkOverflow();
    }
  }, [chipList, hideOverflow]);

  useEffect(() => {
    setChipList(propChipList);
  }, [propChipList]);

  const onRemoveChip = (shadowChip: ShadowChipItem) => {
    const filteredChips = chipList.filter((chip: ShadowChipItem) => chip.key !== shadowChip.key);
    setChipList(filteredChips);
    onRemove && onRemove(shadowChip);

    hideOverflow && checkOverflow();
  };

  const checkOverflow = () => {
    setOverflowEnabled(false);
    setTimeout(() => {
      setOverflowChips([]);
      setVisibleChips([]);
      if (overflowContainerRef.current) {
        const containerWidth = overflowContainerRef.current?.getBoundingClientRect().width - 25; // 25 is offset used for displaying numbers
        const chips:any = overflowContainerRef.current?.querySelectorAll(".shadow-chip");
        if (chips?.length) {
          let totalWidth = 0;
          let newOverflowChips: ShadowChipItem[] = [];
          let newVisibleChips: ShadowChipItem[] = [];
          for (const chip of chips) {
            totalWidth += chip.getBoundingClientRect().width;
            const chipText = chip.querySelector(".p-chip-text")?.textContent;
            const item = chipList.find((itm) => itm.label === chipText);
            if (item) {
              if (totalWidth >= containerWidth) {
                newOverflowChips.push(item);
              } else {
                newVisibleChips.push(item);
              }
            }
          }
          setOverflowChips(newOverflowChips);
          setVisibleChips(newVisibleChips);
          setOverflowEnabled(newOverflowChips.length > 0);
        }
      }
    }, 100);
  };

  const getExtraClasses = (chip: ShadowChipItem) => {
    return `${chip.type || "textOnly"} ${chip.avatarSize || "small"} ${chip.theme ? chip.theme : themeStyle} ${chip.actionStyle ? chip.actionStyle : actionStyle
      } ${chip.removable ? "removeable" : ""}`;
  };

  const onClickEvent = (data: any) => {
    chipClickHandler && chipClickHandler(data);
  };

  return (
    <div ref={overflowContainerRef} className={`shadow-chips-container ${viewMode ? "view-mode" : ""}`}>
      <div className="chips-box">
        {(overflowEnabled ? visibleChips : chipList).map((chip:any,index:any) => (
          <Chip
            key={`chip-1-${index}`}
            className={`shadow-chip ${getExtraClasses(chip)}`}
            label={chip?.label}
            removable={chip?.removable}
            onRemove={() => onRemoveChip(chip)}
            onClick={() => onClickEvent(chip)}
            image={chip?.avatarUrl}
          >
            {chip?.type === "withIcon" && chip.icon && <i className={`icon ${chip.icon}`} />}
            {/* {chip?.type === "withAvatar" && chip?.avatarUrl && (
              <ShadowAvatar size={(chip.avatarSize as ShadowAvatarSize) || "small"} type="image" imageUrl={chip.avatarUrl} />
            )} */}
          </Chip>
        ))}
      </div>

      {/* Overflow Chip Count and Custom Overlay Setup */}
      {overflowEnabled && (
        <span className={`overflow-chips-container inline-block`}>
          <span className="chip-overlay-box">
            <span className="count">+{overflowChips.length}</span>
            <div className="chip-overlay">
              <div className="chip-panel-content">
                {overflowChips.map((chip: any, index: any) => (
                  <Chip
                    key={`chip-2-${index}`}
                    className={`shadow-chip ${getExtraClasses(chip)}`}
                    label={chip?.label}
                    removable={chip?.removable}
                    onRemove={() => onRemoveChip(chip)}
                    image={chip?.avatarUrl}
                  >
                    {chip?.type === "withIcon" && chip?.icon && <i className={`icon ${chip?.icon}`} />}
                    {/* {chip?.type === "withAvatar" && chip?.avatarUrl && (
                      <ShadowAvatar size={(chip.avatarSize as ShadowAvatarSize) || "small"} type="image" imageUrl={chip.avatarUrl} />
                    )} */}
                  </Chip>
                ))}
              </div>
            </div>
          </span>
        </span>
      )}
    </div>
  );
};

export default ShadowChip;
