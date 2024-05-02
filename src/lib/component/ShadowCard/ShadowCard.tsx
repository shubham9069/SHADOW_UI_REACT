import React, { useState } from 'react'
import { Card } from 'primereact/card';
import './ShadowCard.scss'
import { ShadowCardOption, ShadowTieredMenuItems } from '../../models'
import ShadowTag from '../ShadowTag/ShadowTag';
import ShadowTieredMenu from '../ShadowTiered-menu/ShadowTieredMenu';

interface ShadowCardProps {
    cardOption?: ShadowCardOption;
    menuItem?: ShadowTieredMenuItems[];
    onSelect?: (arg: any) => void;
    onDragStart?: (arg: any) => void;
    onDragEnd?: (arg: any) => void;
    onClickTag?: (arg: any) => void;
    children?: any
};

const ShadowCard = ({
    cardOption = {},
    menuItem = [],
    onSelect,
    onDragStart,
    onDragEnd,
    onClickTag,
    children
}: ShadowCardProps) => {

    const [showDragComponent, setShowDragComponent] = useState(false);

    const handleDragStart = (event: any) => {
        if(onDragStart) {
            setShowDragComponent(true);
            onDragStart(event);
        }
    };

    const handleDragEnd = (event: any) => {
        if(onDragEnd) {
            setShowDragComponent(false);
            onDragEnd(event);
        }
    };
    
    const handleTagClick = (event: any) => {
        if(onClickTag) {
            onClickTag({ data: event, context: cardOption });
        }
    };

    const handleClick = (event: any) => {
        onSelect && onSelect(event);
    }

    const headerClassName = cardOption.showAction && cardOption.dropDownPosition === 'left'
    ? 'card-head left-position'
    : 'card-head';

    const dragHeader = (
        <>
                    {((showDragComponent && cardOption.isDragable) || cardOption.isDisplayDragHandle) && (
                    <div className="drag-component">
                        <i className="pi pi-ellipsis-h"></i>
                        <i className="pi pi-ellipsis-h" style={{ marginTop: '-10px' }}></i>
                    </div>)}
                <div className={headerClassName}>
                    <div className="header-container">
                    {cardOption.title && <span>{cardOption.title}</span>}
                    {cardOption.shadowTag && (
                        <span>
                            <ShadowTag tag={cardOption.shadowTag} onClickTag={handleTagClick}></ShadowTag>
                        </span>
                    )}
                    </div>

                    {cardOption.showAction && (
                    <div className="action-dropdown">
                        <ShadowTieredMenu menuItem={menuItem} menuOption={cardOption.dropDownOption || {}} onSelect={handleClick}></ShadowTieredMenu>
                    </div>
                    )}
                </div></>
    )
    
    return (
        <>

      {cardOption.isDragable && (
        <div
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="shadow-card-container"
        >
            <Card header={dragHeader} className={'prime-card'}>
                {/* <div className="drag-component">
                    {(showDragComponent && cardOption.isDragable) || cardOption.isDisplayDragHandle ? (
                    <>
                        <i className="pi pi-ellipsis-h"></i>
                        <i className="pi pi-ellipsis-h" style={{ marginTop: '-10px' }}></i>
                    </>
                    ) : null}
                </div> */}

                {/* <div className={headerClassName}>
                    <div className="header-container">
                    {cardOption.title && <span>{cardOption.title}</span>}
                    {cardOption.shadowTag && (
                        <span>

                        <Tag
                            shadowTag={cardOption.shadowTag}
                            onClickTag={handleTagClick}
                        />
                        </span>
                    )}
                    </div>

                    {cardOption.showAction && (
                    <div className="action-dropdown">

                        <TieredMenu
                        model={menuItem}
                        menuOption={cardOption.dropDownOption || {}}
                        onSelect={onSelect}
                        />
                    </div>
                    )}
                </div> */}
                <div className="card-content-body">
                    {children}
                </div>
            </Card>
        </div>
      )}

      {!cardOption.isDragable && (
        <div className="shadow-card-container">
            <Card header={dragHeader}>
                {/* <div className={headerClassName}>
                    <div className="header-container">
                    {cardOption.title && <span>{cardOption.title}</span>}
                    {cardOption.shadowTag && (
                        <span> */}
                        {/* <Tag
                            shadowTag={cardOption.shadowTag}
                            onClickTag={handleTagClick}
                        /> */}
                        {/* </span>
                    )}
                    </div>
                    {cardOption.showAction && (
                    <div className="action-dropdown"> */}
                        {/* <TieredMenu
                        model={menuItem}
                        menuOption={cardOption.dropDownOption || {}}
                        onSelect={onSelect}
                        /> */}
                    {/* </div>
                    )}
                </div> */}
                <div className="card-content-body">
                    {children}
                </div>
            </Card>
        </div>
      )}
    </>
    );
  }


export default ShadowCard