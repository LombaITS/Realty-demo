import React from "react";
import styled from "styled-components";

const NotificationItem = ({ UserImage, Nama, Decs, time, PropertyImage }) => {
  //   console.log(PropertyImage);
  return (
    <StyledItem>
      <div className='boxLeft'>
        <img src={UserImage} alt='User Preview' />
        <div className='desc'>
          <div className='nama'>{Nama}</div>
          <div className='keterangan'>{Decs}</div>
          <div className='waktu'>{time}</div>
        </div>
      </div>
      <div className='boxRight'>
        <img src={PropertyImage} alt='Property Preview' />
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  .boxLeft {
    display: flex;
    gap: 15px;
    align-items: flex-start;
    .nama {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #000000;
    }
    .keterangan,
    .waktu {
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      color: #797c86;
    }
  }
  .boxRight {
    img {
      width: 80px;
      height: 80px;
      border-radius: 5px;
    }
  }
`;

export default NotificationItem;
