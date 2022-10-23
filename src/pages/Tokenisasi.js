import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import landingImage2 from "../img/landing2.png";

// Import Image
import feature1 from "../img/tokenFeature1.png";
import feature2 from "../img/tokenFeature2.png";
import feature3 from "../img/tokenFeature2.png";

const TokenisasiSection = () => {
  const navigate = useNavigate();
  const searchHanlder = () => {
    navigate("/daftarasset");
  };
  return (
    <Tokenisasi className='container'>
      <RegistrasiContainer>
        <div className='left-section'>
          <h1>Ayo temukan penjualan yang tepat untuk Anda</h1>
          <h2>
            Anda akan lebih mudah untuk menjual properti Anda dan kemanan yang
            terjamin.
          </h2>
        </div>
        <SearchBar>
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
            </SearchCategory>
            <SearchButton onClick={searchHanlder}>
              CARI{" "}
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
      </RegistrasiContainer>
      <FeaturesBar>
        <StyledFeature>
          <img src={feature1} alt='Feature1' />
          <h3>MUDAH</h3>
          <p>Anda akan lebih mudah untuk menjual properti Anda</p>
        </StyledFeature>
        <StyledFeature>
          <img src={feature2} alt='Feature2' />
          <h3>CEPAT</h3>
          <p>Anda akan lebih mudah untuk menjual properti Anda</p>
        </StyledFeature>
        <StyledFeature>
          <img src={feature3} alt='Feature3' />
          <h3>TERPERCAYA</h3>
          <p>Anda akan lebih mudah untuk menjual properti Anda</p>
        </StyledFeature>
      </FeaturesBar>
    </Tokenisasi>
  );
};

const Tokenisasi = styled.div`
  margin-top: 36px;
`;

const RegistrasiContainer = styled.div`
  background: url(${landingImage2});
  background-size: 42%;
  background-position: right center;
  background-repeat: no-repeat;
  padding-top: 46px;
  padding-bottom: 80px;
  min-height: 467px;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #000000;
  }

  h2 {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
    margin-top: 36px;
  }

  .left-section {
    width: 50%;
  }
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
  /* background-color: blue; */
  /* background-color: antiquewhite; */
  /* justify-content: space-between; */
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
  width: 200%;
  /* background-color: #797c86; */
  /* overflow: hidden; */
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

const FeaturesBar = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  gap: 50px;
  h3 {
    font-size: 24px;
    line-height: 36px;
    color: #0d3de5;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
  }
`;

const StyledFeature = styled.div`
  background: #fbfdff;
  border: 1px solid #e9ecfc;
  box-shadow: 0px 20px 30px 10px rgba(227, 230, 237, 0.34);
  border-radius: 15px;
  padding: 20px 34px 20px 34px;
  img {
    width: 70%;
  }
`;

export default TokenisasiSection;
