import React from "react";
import styled from "styled-components";

import facebook from "../img/facebook.png";
import google from "../img/google.png";

const Register = ({ userRequest, setUserRequest }) => {
  const backHandler = () => {
    setUserRequest("masuk");
  };
  return (
    <StyledRegister>
      <div className='title'>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={backHandler}
        >
          <path
            d='M26.6666 14.6663H10.4399L17.8933 7.21301L15.9999 5.33301L5.33325 15.9997L15.9999 26.6663L17.8799 24.7863L10.4399 17.333H26.6666V14.6663Z'
            fill='black'
          />
        </svg>

        <div>Buat Akun Baru</div>
      </div>
      <div className='desc'>Silahkan isi data berikut ini untuk mendaftar</div>
      <div className='formContainer'>
        <StyledInput className='labelInput'>
          <div className='label'>Nama Lengkap</div>
          <input
            className='one'
            type='text'
            name='nama'
            id='nama'
            placeholder='Masukkan Nama Lengkap Anda'
          />
        </StyledInput>
        <StyledInput className='labelInput'>
          <div className='label'>Email</div>
          <input
            className='two'
            type='email'
            name='mail'
            id='mail'
            placeholder='Masukkan Alamat Email Anda'
          />
        </StyledInput>
        <div className='passwordContainer'>
          <StyledInput className='labelInput'>
            <div className='label'>Password</div>
            <input
              className='three'
              type='password'
              name='pass'
              id='pass'
              placeholder='Masukkan Password Anda'
            />
          </StyledInput>
          <StyledInput className='labelInput'>
            <div className='label'>Konfirmasi Password</div>
            <input
              className='four'
              type='password'
              name='pass'
              id='pass'
              placeholder='Masukkan Password Anda'
            />
          </StyledInput>
        </div>
        <StyledInput className='labelInput'>
          <div className='label'>Alamat Wallet</div>
          <input
            className='one'
            type='text'
            name='wallet'
            id='wallet'
            placeholder='Masukkan Alamat Wallet Anda'
          />
        </StyledInput>
        <div className='term'>
          <input type='checkbox' name='setuju' id='setuju' />
          <div>Saya setuju dengan persyaratan yang berlaku</div>
        </div>
      </div>
      <div className='createButton'>Buat Akun</div>
      <div className='login'>
        Sudah punya akun? <span>Masuk</span>
      </div>
      <div className='registerWithOther'>
        <div className='other'>
          <div className='logo'>
            <img src={google} alt='Google Brand' />
          </div>
          <div>Daftar Dengan Google</div>
        </div>
        <div className='other'>
          <div className='logo'>
            <img src={facebook} alt='Facebook Brand' />
          </div>
          <div>Daftar Dengan Facebook</div>
        </div>
      </div>
    </StyledRegister>
  );
};

const StyledRegister = styled.div`
  width: 100%;
  background: #f4f8ff;
  border-radius: 10px;
  padding: 22px 32px;
  .title {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 600;
    font-size: 26px;
    line-height: 60px;
    color: #000000;
    svg {
      cursor: pointer;
    }
  }

  .desc {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #353535;
    margin-bottom: 20px;
  }

  .passwordContainer {
    display: flex;
    width: 100%;
    gap: 20px;
    .labelInput {
      width: 50%;
    }
  }

  .term {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #797c86;
    input {
      width: 20px;
      height: 20px;
      border: 2px solid #e4e7ee;
      border-radius: 5px;
    }
  }

  .createButton {
    margin-top: 25px;
    width: 100%;
    text-align: center;
    background: #0d3de5;
    border-radius: 5px;
    padding: 8px 0px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    cursor: pointer;
  }

  .login {
    margin-top: 17px;
    margin-bottom: 17px;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #353535;
    span {
      color: #0d3de5;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .registerWithOther {
    display: flex;
    gap: 20px;
    .other {
      width: 50%;
      padding: 11px 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #1c1c1c;
      gap: 5px;
      background: #ffffff;
      border: 2px solid #e4e7ee;
      border-radius: 15px;
      cursor: pointer;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

const StyledInput = styled.div`
  margin-top: 5px;
  .label {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }

  input {
    width: 100%;
    padding: 15px 10px 15px 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #979797;
    border: none;
    margin-top: 10px;
    border-radius: 5px;
    /* border: 2px solid #e4e7ee; */
    background-color: white;

    &.one {
      border-left: 8px solid #45d3d3;
    }

    &.two {
      border-left: 8px solid #219ebc;
    }

    &.three {
      border-left: 8px solid #ea5353;
    }

    &.four {
      border-left: 8px solid #ffb703;
    }
  }
`;
export default Register;
