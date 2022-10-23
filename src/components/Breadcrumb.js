import React from "react";
import styled from "styled-components";

const Breadcrumb = ({ BreadcrumbText }) => {
  return (
    <BreadcrumbContainer>
      <div>{BreadcrumbText}</div>
    </BreadcrumbContainer>
  );
};

const BreadcrumbContainer = styled.div`
  padding: 15px 20px;
  background: #e7effa;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default Breadcrumb;
