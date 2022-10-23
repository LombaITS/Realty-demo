import React from "react";
import styled from "styled-components";

const HeaderText = ({ TitleText, DescriptionText }) => {
  return (
    <HeaderTextContainer>
      <h1>{TitleText}</h1>
      <h2>{DescriptionText}</h2>
    </HeaderTextContainer>
  );
};

const HeaderTextContainer = styled.div`
  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 52px;
    color: #1c1c1c;
  }
  h2 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #797c86;
  }
`;

export default HeaderText;
