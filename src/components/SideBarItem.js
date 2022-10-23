import React from "react";
import styled from "styled-components";

const SideBarItem = ({ icon, desc }) => {
  return (
    <StyledItem>
      <img src={icon} alt='Icon Preview' />
      <div className='desc'>{desc}</div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  .desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #797c86;
  }

  &:hover {
    .desc {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.01em;
      color: #1c1c1c;
    }
  }
`;

export default SideBarItem;
