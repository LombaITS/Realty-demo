import React from "react";

import styled from "styled-components";

const DaftarkanAssetStepOne = ({ stepProgress, setStepProgress }) => {
  const nextOne = () => {
    setStepProgress(
      ({ ...stepProgress } = {
        stepOne: false,
        stepTwo: true,
      })
    );
    // setStepProgress(...stepProgress =)
  };
  return (
    <StepOne>
      <div className='leftSection'>
        <div className='title'>Pilih Berdasarkan Peta</div>
        <div className='asal'>Provinsi : </div>

        <select name='provinsi' id='provinsi'>
          <option value='Jawa Timur'>Jawa Timur</option>
          <option value='Jawa Barat'>Jawa Barat</option>
          <option value='Jawa Tengah'>Jawa Tengah</option>
          <option value='Tanggerang'>Tanggerang</option>
          <option value='DKI Jakarta'>DKI Jakarta</option>
          <option value='D.I Yogyakarta'>D.I Yogyakarta</option>
        </select>
        <div className='alamatLengkap'>Alamat Lengkap :</div>
        <textarea id='alamat' name='alamat' defaultValue=''></textarea>
      </div>
      <div className='rightSection'>
        <iframe
          title='assetMap'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.6403667640202!2d112.73269336772266!3d-7.322330499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbcc00d2f29f%3A0x90772c67667df2e6!2sMAPS%20by%20MAPALSA!5e0!3m2!1sen!2sid!4v1664787717722!5m2!1sen!2sid'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        <ButtonContainer>
          <ButtonStyled className='secondary'>Kembali</ButtonStyled>
          <ButtonStyled className='primary' onClick={nextOne}>
            Tetapkan Titik
          </ButtonStyled>
        </ButtonContainer>
      </div>
    </StepOne>
  );
};

const StepOne = styled.div`
  display: flex;
  width: 100%;
  /* gap: 60px; */
  .rightSection {
    padding-left: 70px;
    width: 70%;
    iframe {
      width: 100%;
      height: 50vh;
    }
  }
  .leftSection {
    width: 30%;
    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 52px;
      color: #1c1c1c;
    }
    .asal,
    .alamatLengkap {
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #1c1c1c;
      margin-bottom: 11px;
    }

    select,
    textarea {
      width: 100%;
      margin-bottom: 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #000000;
      padding: 14px 18px;
    }

    textarea {
      height: 124px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const ButtonStyled = styled.div`
  padding: 14px 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  border-radius: 15px;
  cursor: pointer;
  &.secondary {
    color: #0d3de5;
    background: #ffffff;
    border: 1px solid #0d3de5;
  }
  &.primary {
    color: white;
    background: #0d3de5;
  }
`;

export default DaftarkanAssetStepOne;
