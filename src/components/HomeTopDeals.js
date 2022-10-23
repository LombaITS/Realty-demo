import React from "react";
import styled from "styled-components";
import house1 from "../img/house1.png";
import house2 from "../img/house2.png";
import house3 from "../img/house3.png";
import house4 from "../img/house4.png";

const TopDeals = () => {
  return (
    <StyledTopDeals>
      <div className='container'>
        <h1>Penawaran Terbaik Minggu Ini</h1>
        <p>
          Cek rekomendasi properti terbaik dari kami serta informasi
          terlengkapnya
        </p>
        <ImageContainer>
          <div className='image'>
            <img src={house1} alt='HouseImage' />
          </div>
          <div className='image'>
            <img src={house2} alt='HouseImage' />
          </div>
          <div className='image'>
            <img src={house3} alt='HouseImage' />
          </div>
          <div className='image'>
            <img src={house4} alt='HouseImage' />
          </div>
        </ImageContainer>
      </div>
    </StyledTopDeals>
  );
};

const StyledTopDeals = styled.div`
  text-align: center;
  margin-top: 74px;
  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: black;
    margin-bottom: 11px;
  }

  p {
    width: 50%;
    margin: 0 auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
    text-align: center;
    margin-bottom: 31px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  img {
    width: 100%;
  }
  margin-bottom: 90px;
`;

export default TopDeals;
