import React,{  useMemo } from "react";
import { ShadowAreaActionItem } from "../../models";
import { ShadowClickEventOutput } from '../../models';
import "./ShadowAreaAction.scss";
import ShadowTag from '../ShadowTag/ShadowTag';

interface ShadowAreaActionProps {
  areaActionOption?: ShadowAreaActionItem;
  areaActionHandler?: (event: ShadowClickEventOutput) => void;
}

const ShadowAreaAction = ({
  areaActionOption = {
    title: "Table Widget",
    primaryButtonText: "Preview",
    primaryButtonIcon: "pi pi-eye",
    secondaryButtonText: "Pin to Board",
    secondaryButtonIcon: "pi pi-user",
    height: "auto",
    width: "100%",
  },
  areaActionHandler,
}: ShadowAreaActionProps) => {
 
  const primaryTag = useMemo(() => {
    return {
      type: areaActionOption.primaryButtonType || "primary",
      label: areaActionOption.primaryButtonText || "",
      icon: areaActionOption.primaryButtonIcon,
      isPill: true,
    };

  }, [areaActionOption]);

  const secondaryTag = useMemo(() => {
    return {
      type: areaActionOption.secondaryButtonType || "secondary",
      label: areaActionOption.secondaryButtonText || "",
      icon: areaActionOption.secondaryButtonIcon,
      isPill: true,
    };;

  }, [areaActionOption]);


  const handleClick = (event: any) => {
    areaActionHandler &&
      areaActionHandler({ data: event, context: areaActionOption });
  };

  return (
    <div
      className="shadow-area-action-container"
      style={{
        height: areaActionOption?.height,
        width: areaActionOption?.width,
      }}
    >
      {areaActionOption.title && <p>{areaActionOption.title}</p>}
      <div className="area-action-btn-group">
        {(areaActionOption?.secondaryButtonText ||
          areaActionOption?.secondaryButtonIcon) && (
          <div className={`tag-${secondaryTag.type} tag-pill`}>
            <ShadowTag
              tag={secondaryTag}
              onClickTag={() =>
                handleClick(
                  areaActionOption?.secondaryButtonText ||
                    areaActionOption?.secondaryButtonIcon
                )
              }
            ></ShadowTag>
          </div>
        )}

        {(areaActionOption?.primaryButtonText ||
          areaActionOption?.primaryButtonIcon) && (
          <ShadowTag
            tag={primaryTag}
            onClickTag={() =>
              handleClick(
                areaActionOption?.primaryButtonText ||
                  areaActionOption?.primaryButtonIcon
              )
            }
          ></ShadowTag>
        )}
      </div>
    </div>
  );
};

export default ShadowAreaAction;
