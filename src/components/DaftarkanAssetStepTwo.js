import React from "react";

import HeaderText from "../components/HeaderText";

import pdfUpload from "../img/pdfUpload.svg";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DaftarkanAssetStepTwo = ({ stepProgress, setStepProgress }) => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/propertisaya");
  };

  const beforeTwo = () => {
    setStepProgress(
      ({ ...stepProgress } = {
        stepOne: true,
        stepTwo: false,
        stepThree: false,
      })
    );
  };
  return (
    <StepTwo>
      <HeaderText
        TitleText={`Daftarkan Properti`}
        DescriptionText={`Daftarkan properti anda dengan mengisi form dibawah ini`}
      ></HeaderText>
      <div className='formContainer'>
        <div className='title'>Data Properti</div>
        <div className='desc'>
          Mohon mengisi data properti dengan lengkap dan benar
        </div>
        <div className='label'>Alamat</div>
        <div className='alamatContainer'>
          <div className='provinsi'>
            <div className='labelForm'>Provinsi</div>
            <input
              type='text'
              name='provinsi'
              id='provinsi'
              placeholder='Masukkan Provinsi'
            />
          </div>
          <div className='kabupaten'>
            <div className='labelForm'>Kabupaten</div>
            <input
              type='text'
              name='kabupaten'
              id='kabupaten'
              placeholder='Masukkan Kabupaten'
            />
          </div>
          <div className='kecamatan'>
            <div className='labelForm'>Kecamatan</div>
            <input
              type='text'
              name='kecamatan'
              id='kecamatan'
              placeholder='Masukkan Kecamatan'
            />
          </div>
        </div>
        <textarea
          name='alamatLengkap'
          id='alamatLengkap'
          defaultValue={`Masukkan Alamat Lengkap`}
        ></textarea>

        <div className='label'>Dokumen</div>
        <div className='labelForm'>Sertifikat Properti</div>
        <div className='labelFormDecs'>*Surat Hak Milik/Hak Guna Bangunan</div>
        <label for='inputTag'>
          <img src={pdfUpload} alt='File Upload' />
          <br />
          Unggah Dokumen
          <input className='hidden' id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <div className='labelForm'>Surat PBB</div>
        <label for='inputTag'>
          <img src={pdfUpload} alt='File Upload' />
          <br />
          Unggah Dokumen
          <input className='hidden' id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <div className='labelForm'>Pembayaran Tagihan</div>
        <label for='inputTag'>
          <img src={pdfUpload} alt='File Upload' />
          <br />
          Unggah Dokumen
          <input className='hidden' id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <ButtonContainer>
          <ButtonStyled className='secondary' onClick={beforeTwo}>
            Kembali
          </ButtonStyled>
          <ButtonStyled className='primary' onClick={submit}>
            Selanjutnya
          </ButtonStyled>
        </ButtonContainer>
      </div>
    </StepTwo>
  );
};

const StepTwo = styled.div`
  .hidden {
    display: none;
  }

  .formContainer {
    padding: 30px 60px;
    background: #ffffff;
    box-shadow: 0px 16px 30px rgba(128, 161, 193, 0.2);
    border-radius: 15px;
    margin-top: 30px;
    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #1c1c1c;
      margin-bottom: 8px;
    }
    .desc {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #797c86;
    }

    .label {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    .labelForm {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #797c86;
      margin-bottom: 10px;
    }

    .labelFormDecs {
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
      color: #aeaeae;
      margin-top: -5px;
    }

    input {
      width: 100%;
      background: #f5f7fa;
      border-radius: 15px;
      padding: 16px 16px;
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #797c86;
    }

    textarea {
      width: 100%;
      height: 102px;
      background: #f5f7fa;
      border-radius: 15px;
      padding: 16px 16px;
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #797c86;
      margin-top: 15px;
    }

    label {
      width: 100%;
      text-align: center;
      background: #f5f7fa;
      border-radius: 15px;
      padding: 20px 40px;
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #797c86;
      margin-bottom: 20px;
    }

    .alamatContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      div {
        width: 100%;
      }
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

export default DaftarkanAssetStepTwo;
