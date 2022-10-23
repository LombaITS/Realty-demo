import React from "react";
import styled from "styled-components";
import ScrollTop from "./ScrollTop";

import mintaTokenSuccess from "../img/mintaTokenSuccess.png";
import { useNavigate } from "react-router-dom";

const MintaToken = ({ mintaToken, setMintaToken }) => {
  const navigate = useNavigate();
  const nextHandler = () => {
    setMintaToken(!mintaToken);
    document.body.style.overflow = "auto";
    navigate("/detailtransaksi");
  };
  return (
    <MintaTokenStyled>
      <ScrollTop />
      <div className='tokenContainer'>
        <div className='title'>Permintaan Token Berhasil Diproses</div>
        <hr />
        <div className='desc'>
          Token anda akan segera dikirimkan ke alamat wallet anda
        </div>
        <img src={mintaTokenSuccess} alt='Token Success' />
        <div className='detail'>
          <div className='up'>
            <div>Status</div>
            <div>Kode Transaksi</div>
          </div>
          <hr />
          <div className='down'>
            <div className='statusDesc'>
              <svg
                width='34'
                height='34'
                viewBox='0 0 34 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2.83325 17C2.83325 9.17998 9.17992 2.83331 16.9999 2.83331C24.8199 2.83331 31.1666 9.17998 31.1666 17C31.1666 24.82 24.8199 31.1666 16.9999 31.1666C9.17992 31.1666 2.83325 24.82 2.83325 17ZM8.07492 17.9916L13.1608 23.0775C13.7133 23.63 14.6199 23.63 15.1583 23.0775L25.9108 12.325C26.4633 11.7725 26.4633 10.88 25.9108 10.3275C25.3583 9.77498 24.4658 9.77498 23.9133 10.3275L14.1666 20.0741L10.0724 15.9941C9.51992 15.4416 8.62742 15.4416 8.07492 15.9941C7.80964 16.2588 7.66056 16.6182 7.66056 16.9929C7.66056 17.3676 7.80964 17.727 8.07492 17.9916Z'
                  fill='#13BB38'
                />
              </svg>
              <div>Berhasil</div>
            </div>
            <div className='code'>0x5B38Da6a701c568545dCfc....</div>
          </div>
        </div>
        <div className='nextButton' onClick={nextHandler}>
          Lihat Properti Saya
        </div>
      </div>
    </MintaTokenStyled>
  );
};

const MintaTokenStyled = styled.div`
  position: absolute;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background: rgba(28, 28, 28, 0.33);
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .tokenContainer {
    text-align: center;
    width: 752px;
    background: #ffffff;
    border-radius: 5px;
    .title {
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      color: #000000;
      padding-top: 36px;
      padding-bottom: 16px;
    }

    .desc {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #797c86;
      margin-bottom: 32px;
    }

    .detail {
      margin: 21px auto;
      width: 512px;
      border: 1px solid #bec3d2;
      border-radius: 5px;
      margin-bottom: 40px;
      hr {
        margin-top: 0px;
        border: 1px solid #bec3d2;
        margin-bottom: 0px;
      }

      .up,
      .down {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 24px;
      }

      .up {
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        color: #1c1c1c;
      }

      .down {
        font-weight: 600;
        font-size: 16px;
        line-height: 30px;
        .statusDesc {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #1c1c1c;
        }
        .code {
          color: #0d3de5;
        }
      }
    }
    .nextButton {
      background: #0d3de5;
      color: white;
      font-size: 20px;
      padding: 20px 0px;
      cursor: pointer;
    }
  }
`;

export default MintaToken;
