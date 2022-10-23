import React from "react";

import styled from "styled-components";

const PembelianStepOne = ({ setStepActive }) => {
  const nextHandler = () => {
    setStepActive("2");
  };
  return (
    <PembelianStepOneStyled>
      <div className='head'>
        <div className='title'>Data Diri</div>
        <div className='desc'>
          Mohon mengisi data diri Anda dengan lengkap dan benar
        </div>
      </div>
      <div className='bodyForm'>
        <div className='formContainer'>
          <div className='label'>Nama lengkap</div>
          <input type='text' name='nama' id='nama' placeholder='Zelda Sibuea' />
        </div>
        <div className='formContainer flex'>
          <div>
            <div className='label'>Email</div>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='zelda@gmail.com'
            />
          </div>
          <div>
            <div className='label'>No Handphone</div>
            <input
              type='number'
              name='nomor'
              id='nomor'
              placeholder='082389424609'
            />
          </div>
        </div>
        <div className='formContainer'>
          <div className='label'>
            Notes <span>(Tidak Wajib)</span>
          </div>
          <textarea name='notes' id='notes' rows='5'></textarea>
        </div>
        <ButtonContainer>
          {/* <ButtonStyled className='secondary'>Kembali</ButtonStyled> */}
          <ButtonStyled className='primary' onClick={nextHandler}>
            Selanjutnya
          </ButtonStyled>
        </ButtonContainer>
      </div>
    </PembelianStepOneStyled>
  );
};

const PembelianStepOneStyled = styled.div`
  .head {
    margin-bottom: 20px;
    .title {
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      color: #1c1c1c;
      margin-bottom: 10px;
    }
    .desc {
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #797c86;
    }
  }

  .bodyForm {
    .formContainer {
      margin-bottom: 20px;
      .label {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #000000;
        margin-bottom: 10px;
        span {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: #797c86;
        }
      }

      input,
      textarea {
        width: 100%;
        padding: 15px 40px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #797c86;
        background: #f5f8ff;
        border: 1px solid #dae1f4;
        border-radius: 15px;
      }

      &.flex {
        display: flex;
        gap: 20px;
        div {
          width: 50%;
        }
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

export default PembelianStepOne;
