import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Import Image
import SelesaiImage from "../img/penjadwalanSelesai.png";

const PenjadwalanSelesai = () => {
  const navigate = useNavigate();

  const nextHandler = () => {
    navigate("/tour");
  };
  return (
    <PenjadwalanStatus className='container'>
      <div className='statusPenjadwalan'>
        <img src={SelesaiImage} alt='Penjadwalan Selesai' />
        <div className='titleStatus'>Penjadwalan tour telah berhasil!</div>
        <div className='deskripsiStatus'>
          Anda dapat menunggu informasi selanjutnya melalui email ataupun nomor
          handphone
        </div>
        <div className='selesai' onClick={nextHandler}>
          Selesai
        </div>
      </div>
    </PenjadwalanStatus>
  );
};

const PenjadwalanStatus = styled.div`
  .statusPenjadwalan {
    margin: 40px auto;
    width: 50%;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .titleStatus {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #1c1c1c;
    margin: 32px 0px;
  }

  .deskripsiStatus {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #1c1c1c;
  }

  .selesai {
    margin: 32px auto;
    width: 170px;
    padding: 18px 0px;
    background: #0d3de5;
    border-radius: 15px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default PenjadwalanSelesai;
