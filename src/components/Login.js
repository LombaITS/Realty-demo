import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Login = ({ userRequest, setUserRequest, isLogin, setIsLogin }) => {
  const navigate = useNavigate();

  const setLintener = () => {
    setUserRequest("register");
  };

  const loginHandler = () => {
    // ! Nanti disini ditambahkan fungsi ngecheck ke database apakah datanya ada atau tidak
    // * yang sekarang dianggap datanya ada dulu. ini masih hardcoded. Nanti kalau user dah login bakal dapat jwt token gitu.
    const userToken = "inimasihhardcoded";
    localStorage.setItem("token", userToken);
    setIsLogin(userToken);
    navigate("/");
  };
  return (
    <LoginStyled>
      <div className='title'>Selamat Datang</div>
      <div className='desc'>
        Selangkah lebih baik dalam mewujudkan properti idaman
      </div>
      <div className='formContainer'>
        <StyledInput className='labelInput'>
          <div className='label'>Email</div>
          <input
            className='one'
            type='text'
            name='email'
            id='email'
            placeholder='Masukkan email anda'
          />
        </StyledInput>
        <StyledInput className='labelInput'>
          <div className='label'>Password</div>
          <input
            className='two'
            type='password'
            name='password'
            id='password'
            placeholder='Masukkan password anda'
          />
        </StyledInput>
      </div>
      <div className='forgetpassword'>Lupa Password</div>
      <div className='loginButton' onClick={loginHandler}>
        LOGIN
      </div>
      <div className='register'>
        Belum punya akun? <span onClick={setLintener}>Daftar</span>
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  width: 100%;
  background: #f4f8ff;
  border-radius: 10px;
  padding: 22px 32px;

  .title {
    font-weight: 600;
    font-size: 30px;
    line-height: 60px;
    color: #000000;
  }

  .desc {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #353535;
    margin-bottom: 20px;
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .forgetpassword {
    text-align: right;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: #ea5353;
    margin-top: 13px;
    cursor: pointer;
  }

  .loginButton {
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

  .register {
    margin-top: 17px;
    margin-bottom: 90px;
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
`;

const StyledInput = styled.div`
  margin-top: 5px;
  .label {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }

  input {
    width: 100%;
    padding: 15px 10px 15px 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #979797;
    border: none;
    margin-top: 10px;
    border-radius: 5px;

    &.one {
      border-left: 8px solid #45d3d3;
    }

    &.two {
      border-left: 8px solid #219ebc;
    }
  }
`;

export default Login;
