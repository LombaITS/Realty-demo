import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import mandiri from "../img/mandiri.png";

const PembelianStepThree = ({ setStepActive }) => {
  const navigate = useNavigate();

  const nextStep = () => {
    navigate("/daftartransaksi");
  };
  return (
    <ThreeStyle>
      <div className='head'>
        <div className='title'>Selesaikan Pembayaran Dalam</div>
        <div className='waktu'>23:59:58</div>
        <div className='desc'>Batas Akhir Pembayaran</div>
        <div className='tanggal'>Jumat, 5 Agustus 2022 02:49</div>
      </div>
      <div className='pembayaran'>
        <div className='header'>
          <div className='nama'>Mandiri Virtual Account</div>
          <img src={mandiri} alt='Bank Preview' />
        </div>
        <hr />
        <div className='bottom'>
          <div className='info'>
            <div className='sectionDesc'>
              <div className='title'>Nomor Virtual Account</div>
              <div className='nomor'>80778948603490920900000</div>
            </div>
            <div className='copy'>
              <div className='title'>salin</div>
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M17.0254 1.5H5.02539C3.92539 1.5 3.02539 2.4 3.02539 3.5V17.5H5.02539V3.5H17.0254V1.5ZM20.0254 5.5H9.02539C7.92539 5.5 7.02539 6.4 7.02539 7.5V21.5C7.02539 22.6 7.92539 23.5 9.02539 23.5H20.0254C21.1254 23.5 22.0254 22.6 22.0254 21.5V7.5C22.0254 6.4 21.1254 5.5 20.0254 5.5ZM9.02539 21.5H20.0254V7.5H9.02539V21.5Z'
                  fill='#0D3DE5'
                />
              </svg>
            </div>
          </div>
          <div className='info'>
            <div className='sectionDesc'>
              <div className='title'>Total Pembayaran</div>
              <div className='nomor'>Rp750.000.000</div>
            </div>
            <div className='copy'>
              <div className='title'>Lihat Detail</div>
            </div>
          </div>
        </div>
      </div>
      <ButtonContainer>
        {/* <ButtonStyled className='secondary'>Kembali</ButtonStyled> */}
        <ButtonStyled className='primary' onClick={nextStep}>
          Selanjutnya
        </ButtonStyled>
      </ButtonContainer>
    </ThreeStyle>
  );
};

const ThreeStyle = styled.div`
  .head {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 60px;
    .title {
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      color: #1c1c1c;
    }
    .waktu {
      font-weight: 700;
      font-size: 20px;
      line-height: 36px;
      color: #0d3de5;
    }
    .desc {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #797c86;
    }

    .tanggal {
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      color: #1c1c1c;
    }
  }

  .pembayaran {
    background: #ffffff;
    border: 1px solid #bec3d2;
    border-radius: 15px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      .nama {
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        color: #1c1c1c;
      }
    }

    hr {
      margin-top: -10px;
      /* border: 1px solid #bec3d2; */
      background: #bec3d2;
    }

    .bottom {
      padding: 15px 20px;

      .info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .sectionDesc {
          .title {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #797c86;
          }
          .nomor {
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
            color: #1c1c1c;
          }
        }
        .copy {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #0d3de5;
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

export default PembelianStepThree;
