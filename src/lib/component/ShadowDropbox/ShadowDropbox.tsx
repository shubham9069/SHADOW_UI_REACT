import React, { DragEvent, useState } from "react";
import "./ShadowDropbox.scss";
import { ShadowCardOption, ShadowClickEventOutput, ShadowDropBoxCardOption, ShadowTieredMenuItems } from '../../models';
import ShadowCard from "../ShadowCard/ShadowCard";

interface ShadowDropboxProps {
  cards?: ShadowDropBoxCardOption[];
  containerClass?: string;
  dragHandler?: (event: ShadowClickEventOutput) => void;
  dragStartHandler?: (event: ShadowClickEventOutput) => void;
  dragOverHandler?: (event: DragEvent) => void;
  menuItem?: ShadowTieredMenuItems[];
  onSelect?: (event: ShadowClickEventOutput) => void;
  children?: React.ReactNode;
  template:(title: any) => void;
}

const ShadowDropbox = ({
  cards: propCards = [],
  containerClass = "",
  dragHandler,
  dragStartHandler,
  dragOverHandler,
  menuItem = [],
  onSelect,
  children,
  template
}: ShadowDropboxProps) => {

  const [cards, setCards] = useState<ShadowDropBoxCardOption[]>(propCards);
  const onDragStart = (event: DragEvent, index: number) => {
    if (event) event.dataTransfer?.setData("text/plain", index.toString());
    dragStartHandler && dragStartHandler({ data: index, context: cards[index] });
  };

  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    dragOverHandler && dragOverHandler(event);
  };

  const onDrop = (event: DragEvent, index: number) => {
    if (event && event.dataTransfer) {
      const draggedIndex = +event.dataTransfer.getData("text/plain");
      if (draggedIndex !== index) {
        let newCards = [...cards];
        const draggedCard = newCards[draggedIndex];
        newCards.splice(draggedIndex, 1);
        newCards.splice(index, 0, draggedCard);
        setCards(newCards);
        dragHandler && dragHandler({ data: index, context: newCards[index] });
      }
    }
  };

  const handleClick = (event: any, card: ShadowCardOption) => {
    onSelect && onSelect({ data: event, context: card });
  };

  return (
    <div className="shadow-dropbox-container">
      {cards &&
        cards?.length > 0 &&
        cards.map((card, index) => (
          <div
            key={`dropbox-${index}`}
            draggable={card?.isDragable}
            onDragStart={(event) => onDragStart(event, index)}
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, index)}
            style={{
              width: card.dragboxCardWidth ? `calc(${card.dragboxCardWidth} - 10px)` : "100%",
            }}
          >
            <ShadowCard cardOption={card} menuItem={card.menuItems || []} onSelect={(event) => handleClick(event, card)}>
              {template(card) }
            </ShadowCard>
          </div>
        ))}
    </div>
  );
};

export default ShadowDropbox;
