import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LandingImage from "../img/landing.png";
const HomeSection1 = () => {
  const navigate = useNavigate();

  const allProperty = () => {
    navigate("/properti");
  };
  return (
    <LandingPage>
      <LandingPageContainer className='container'>
        <LandingDescription>
          <h1>Temukan tempat tinggal terbaik untuk keluarga</h1>
          <p>
            Tempat terbaik untuk Anda dalam mencari properti yang Anda inginkan.
            Dilengkapi dengan teknologi blockchain yang dapat menjamin kemanan
            Anda dalam membeli dan menjual properti.
          </p>
        </LandingDescription>
        <SearchBar>
          <div className='button-list'>
            <StyledButton className='rumah'>Rumah</StyledButton>
            <StyledButton className='tanah disabled'>Tanah</StyledButton>
          </div>
          <SearchInputContainer>
            <SearchCategory>
              <div className='category'>
                <Keterangan>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='24' height='24' fill='white' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9ZM9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C12.8932 6.5 13.7185 6.9765 14.1651 7.75C14.6116 8.5235 14.6116 9.4765 14.1651 10.25C13.7185 11.0235 12.8932 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9Z'
                      fill='#F89047'
                      fillOpacity='0.68'
                    />
                  </svg>
                  Lokasi
                </Keterangan>
                <StyledInput
                  type='text'
                  name='lokasi'
                  id='lokasi'
                  placeholder='Masukkan Lokasi'
                />
              </div>
              <div className='category'>
                <Keterangan>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.3902 10.9C10.1202 10.31 9.39016 9.7 9.39016 8.75C9.39016 7.66 10.4002 6.9 12.0902 6.9C13.8702 6.9 14.5302 7.75 14.5902 9H16.8002C16.7302 7.28 15.6802 5.7 13.5902 5.19V3H10.5902V5.16C8.65016 5.58 7.09016 6.84 7.09016 8.77C7.09016 11.08 9.00016 12.23 11.7902 12.9C14.2902 13.5 14.7902 14.38 14.7902 15.31C14.7902 16 14.3002 17.1 12.0902 17.1C10.0302 17.1 9.22016 16.18 9.11016 15H6.91016C7.03016 17.19 8.67016 18.42 10.5902 18.83V21H13.5902V18.85C15.5402 18.48 17.0902 17.35 17.0902 15.3C17.0902 12.46 14.6602 11.49 12.3902 10.9Z'
                      fill='#F89047'
                      fillOpacity='0.68'
                    />
                  </svg>
                  Range Harga
                </Keterangan>
                <StyledInput
                  type='text'
                  name='lokasi'
                  id='lokasi'
                  placeholder='Harga Min-Max'
                />
              </div>
            </SearchCategory>
            <SearchButton onClick={allProperty}>
              FIND{" "}
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.9998 16.9399V12.9399H5.0798L5.0498 10.9299H13.9998V6.93994L18.9998 11.9399L13.9998 16.9399Z'
                  fill='white'
                />
              </svg>
            </SearchButton>
          </SearchInputContainer>
        </SearchBar>
        <TryAdvanceSearch>
          Cari Properti Baru
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.95 17V13H5.03L5 10.99H13.95V7L18.95 12L13.95 17Z'
              fill='#0D3DE5'
            />
          </svg>
        </TryAdvanceSearch>
        <TypePop>
          <div className='typePop-desc'>Tipe Popular</div>
          <a href='/'>TYPE32</a>
          <a href='/'>TYPE48</a>
          <a href='/'>TYPE64</a>
          <a href='/'>TYPE72</a>
        </TypePop>
      </LandingPageContainer>
    </LandingPage>
  );
};

const LandingPage = styled.div`
  margin-top: 49px;
  margin-bottom: 62px;
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    color: #1c1c1c;
    margin-bottom: 28px;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
  }
`;

const LandingPageContainer = styled.div`
  background: url(${LandingImage});
  /* background-color: aqua; */
  padding-top: 41px;
  background-size: 42%;
  background-repeat: no-repeat;
  background-position: right center;
`;

const LandingDescription = styled.div`
  width: 50%;
  /* padding-top: 41px; */
  /* background-color: aquamarine; */
`;

const SearchInputContainer = styled.div`
  padding: 19px 21px 30px 28px;
  width: 845px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(227, 230, 237, 0.58);
  border-radius: 0px 15px 15px 15px;
  display: flex;
  align-items: center;
  /* gap: 21px; */
  justify-content: space-between;
`;

const SearchBar = styled.div`
  margin-top: 38px;

  .button-list {
    display: flex;
  }

  .rumah {
    border-radius: 20px 0px 0px 0px;
  }

  .tanah {
    border-radius: 0px 20px 0px 0px;
  }

  .disabled {
    background: #eff0f4;

    color: #7b7b7b !important;
  }
`;

const SearchCategory = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  /* background-color: antiquewhite; */
  /* justify-content: space-between; */
`;

const StyledButton = styled.div`
  padding: 13px 18px;
  background: #ffffff;
  /* background: blue; */
  box-shadow: 0px -1px 4px rgba(227, 230, 237, 0.34);
  font-weight: 700;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height, or 200% */
  color: #0d3de5;
`;

const Keterangan = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c1c1c;
  gap: 10px;
  margin-bottom: 9px;
`;

const StyledInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #797c86;
  /* width: 100%; */
  padding: 7px 100px 7px 11px;
  border: 1px solid #ececec;
  border-radius: 5px;

  &:focus {
    outline-color: #ececec;
  }
`;

const SearchButton = styled.div`
  background: #0d3de5;
  border-radius: 5px;
  padding: 23px 20px 24px 21px;
  display: flex;
  align-items: center;
  gap: 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;

const TryAdvanceSearch = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #0d3de5;
  margin-top: 37px;
`;

const TypePop = styled.div`
  margin-top: 11px;
  padding-bottom: 31px;
  .typePop-desc {
    font-weight: 600;
    font-size: 12px;
    line-height: 30px;
    color: #7b7b7b;
  }
  a {
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
    margin-right: 54px;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default HomeSection1;
