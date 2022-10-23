import React, { useState } from "react";

import DaftarkanAssetStepOne from "../components/DaftarkanAssetStepOne";
import DaftarkanAssetStepTwo from "../components/DaftarkanAssetStepTwo";

import styled from "styled-components";

const DaftarkanAsset = () => {
  const [stepProgress, setStepProgress] = useState({
    stepOne: true,
    stepTwo: false,
  });
  return (
    <DaftarkanContainer className='container'>
      {stepProgress.stepOne && (
        <DaftarkanAssetStepOne
          stepProgress={stepProgress}
          setStepProgress={setStepProgress}
        />
      )}

      {stepProgress.stepTwo && (
        <DaftarkanAssetStepTwo
          stepProgress={stepProgress}
          setStepProgress={setStepProgress}
        />
      )}
    </DaftarkanContainer>
  );
};

const DaftarkanContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default DaftarkanAsset;
