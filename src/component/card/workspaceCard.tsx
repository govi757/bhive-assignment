import React, { useMemo } from 'react';
import "./card.css"
import Tooltip from '../general/Tooltip';
import Helper from '../../helper';
import assistant_direction from "@/assets/images/icons/assistant_direction.svg"
interface WorkspaceCardProps {
  title: string;
  distance: string;
  imageUrl: string;
  dayPassPrice: number;
  bulkPassPrice: number;
  bulkPassDays: number;
  bulkPassDiscount: number;
  currentLocation?: {lattitude: number, longitude: number};
  workspaceLocation?: {lattitude: number, longitude: number};
  navigateButtonClicked: () => void;
  titleClicked?:  () => void;
  googleMapUrl: string;
  bulkPassDescription?: string;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
  title,
  imageUrl,
  dayPassPrice,
  bulkPassPrice,
  bulkPassDiscount,
  // currentLocation,
  // workspaceLocation,
  navigateButtonClicked,
  bulkPassDescription,
  titleClicked


}) => {
  // const distance = useMemo(() => {
  //   return  !!currentLocation?Helper.haversineDistance(currentLocation?.lattitude,currentLocation?.longitude,workspaceLocation.lattitude,workspaceLocation.longitude):null
  // },[currentLocation?.lattitude,workspaceLocation?.lattitude])
  
  return (
    <div className='workspace-card card p-3 my-3 mx-3'>
      <div className="d-flex align-items-center mb-3">
        <div onClick={titleClicked} className="heading4 flex-fill cursor-pointer">
          {title}
        </div>
        <div className='distance-button p-2 d-flex flex-column justify-content-center align-items-center' onClick={navigateButtonClicked}>
          <img src={assistant_direction} height={14} width={14}/>
          {/* {distance&&<span className='light-grey-text small-text'>{distance} Kms</span>} */}
        </div>
      </div>
      <img src={imageUrl} />
      <div className="d-flex align-items-center mt-4">
        <div className="pass-button d-flex align-items-center justify-content-between flex-fill me-1 px-3 py-2">
          <div>
            <div className="text-14">
              Day Pass
            </div>
            <div className="heading4">
              <strong>₹ {dayPassPrice} </strong>/ Day
            </div>
          </div>
          <div className="pass-icon-cont d-flex">
            <i className="bi bi-chevron-right"></i>
            <i className="bi bi-chevron-right"></i>
            <i className="bi bi-chevron-right"></i>
          </div>


        </div>
        <Tooltip text={bulkPassDescription||""}>
        <div className=" flex-fill main-light-yellow pass-button d-flex align-items-center justify-content-center ms-1  px-3 py-2" style={{ position: "relative" }}
        >
          <div className="discount-card px-2 py-1">{bulkPassDiscount}% discount</div>
          <div className="flex-fill d-flex align-items-center justify-content-between">
            <div>
              <div className="text-14">
                Bulk Pass
              </div>
              <div className="heading4">
                <strong>₹ {bulkPassPrice}</strong>/ 10 Days
              </div>
            </div>
            <div className="pass-icon-cont d-flex">
              <i className="bi bi-chevron-right"></i>
              <i className="bi bi-chevron-right"></i>
              <i className="bi bi-chevron-right"></i>
            </div>


          </div>
        </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default WorkspaceCard;
