import React from "react";
import styled from "styled-components";

const ChatItem = ({ UserImage, Nama, Pesan }) => {
  return (
    <StyledItem>
      <img src={UserImage} alt='User Preview' />
      <div className='keterangan'>
        <div className='nama'>{Nama}</div>
        <div className='pesan'>{Pesan}</div>
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  padding: 15px 5px 15px 21px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    background: #e9eeff;
  }
  .keterangan {
    .nama {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #000000;
    }

    .pesan {
      height: 18px;
      overflow: hidden;
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      color: #797c86;
    }
  }
`;

export default ChatItem;
