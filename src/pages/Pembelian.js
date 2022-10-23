import React, { useState } from "react";
import styled from "styled-components";

import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";

import PembelianStepOne from "../components/PembelianStepOne";
import PembelianStepTwo from "../components/PembelianStepTwo";
import PembelianStepThree from "../components/PembelianStepThree";

const Pembelian = () => {
  const [stepActive, setStepActive] = useState("1");

  return (
    <div className='container mb-4'>
      <Breadcrumb
        BreadcrumbText={`Home / Properti / Rumah / Beli / Pembelian`}
      />
      <HeaderText
        TitleText={`Pembelian`}
        DescriptionText={`Silahkan mengisi form dengan benar`}
      ></HeaderText>
      <BodyContainer className='bodyContainer'>
        <StepContainer className='step'>
          <ul>
            <li
              className={
                stepActive === "1" || stepActive === "2" || stepActive === "3"
                  ? "active"
                  : ""
              }
            >
              1
            </li>
            <div
              className={`divider ${
                stepActive === "2" || stepActive === "3" ? "active" : ""
              }`}
            ></div>
            <li
              className={
                stepActive === "2" || stepActive === "3" ? "active" : ""
              }
            >
              2
            </li>
            <div
              className={`divider ${stepActive === "3" ? "active" : ""}`}
            ></div>
            <li className={stepActive === "3" ? "active" : ""}>3</li>
          </ul>
        </StepContainer>
        <FormContainer>
          {stepActive === "1" && (
            <PembelianStepOne
              setStepActive={setStepActive}
              stepActive={stepActive}
            />
          )}
          {stepActive === "2" && (
            <PembelianStepTwo
              setStepActive={setStepActive}
              stepActive={stepActive}
            />
          )}
          {stepActive === "3" && (
            <PembelianStepThree
              setStepActive={setStepActive}
              stepActive={stepActive}
            />
          )}
        </FormContainer>
      </BodyContainer>
    </div>
  );
};

const BodyContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 40px;
`;

const StepContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 70px;
    li {
      width: 39px;
      height: 39px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      background: #e7effa;

      &.active {
        background: #0d3de5;
      }
    }

    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 0px;
      border: 3px dashed #b8c0c9;
      transform: rotate(90deg);

      &.active {
        border: 3px dashed #0d3de5;
      }
    }
  }
`;

const FormContainer = styled.div`
  width: 90%;
  background: #ffffff;
  box-shadow: 0px 6px 10px #ddebff;
  border-radius: 15px;
  padding: 40px 40px;
`;

export default Pembelian;
