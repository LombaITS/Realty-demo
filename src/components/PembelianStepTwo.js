import React, { useState } from "react";

import styled from "styled-components";

import house1 from "../img/houseBuy1.png";
import mandiri from "../img/mandiri.png";
import bri from "../img/bri.png";
import bni from "../img/bni.png";

const PembelianStepTwo = ({ setStepActive }) => {
  const nextHandler = () => {
    setStepActive("3");
  };
  const kembaliHandler = () => {
    setStepActive("1");
  };

  const [metodePembayaran, setMetodePembayaran] = useState("credit");

  const setPembayaran = (metode) => {
    setMetodePembayaran(metode);
  };
  return (
    <PembelianStepTwoStyled>
      <div className='section'>
        <div className='left'>
          <div className='title'>Metode Pembayaran</div>
          <div className='desc'>
            Pilih metode pembayaran yang akan Anda gunakan
          </div>
          <div className='metodePembayaran'>
            <div
              className={`credit pembayaran ${
                metodePembayaran === "credit" ? "active" : ""
              }`}
              onClick={() => setPembayaran("credit")}
            >
              <svg
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M20 4.5H4C2.89 4.5 2.01 5.39 2.01 6.5L2 18.5C2 19.61 2.89 20.5 4 20.5H20C21.11 20.5 22 19.61 22 18.5V6.5C22 5.39 21.11 4.5 20 4.5ZM19 18.5H5C4.45 18.5 4 18.05 4 17.5V12.5H20V17.5C20 18.05 19.55 18.5 19 18.5ZM4 8.5H20V6.5H4V8.5Z'
                  fill='white'
                />
              </svg>
              <div className='metode'>Kartu Kredit</div>
            </div>
            <div
              className={`bank pembayaran ${
                metodePembayaran === "bank" ? "active" : ""
              }`}
              onClick={() => setPembayaran("bank")}
            >
              <svg
                width='32'
                height='25'
                viewBox='0 0 32 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.65 15.5V11H25.3V8L31.5 13.25L25.3 18.5V15.5H20.65ZM19.1 6.05V8H0.5V6.05L9.8 0.5L19.1 6.05ZM8.25 9.5H11.35V17H8.25V9.5ZM2.05 9.5H5.15V17H2.05V9.5ZM17.55 9.5V13.25L14.45 15.95V9.5H17.55ZM11.505 18.5L10.575 19.25L13.21 21.5H0.5V18.5H11.505ZM23.75 17V21.5H19.1V24.5L12.9 19.25L19.1 14V17H23.75Z'
                  fill='#0D3DE5'
                />
              </svg>
              <div className='metode'>Transfer Bank</div>
            </div>
          </div>
          {metodePembayaran === "credit" && (
            <>
              <div className='bodyForm'>
                <div className='formContainer'>
                  <div className='label'>Nama pada kartu</div>
                  <input
                    type='text'
                    name='nama'
                    id='nama'
                    placeholder='Zelda Sibuea'
                  />
                </div>
                <div className='formContainer'>
                  <div className='label'>Nomor Kartu</div>
                  <input
                    type='text'
                    name='nama'
                    id='nama'
                    placeholder='012348248823'
                  />
                </div>
                <div className='formContainer flex'>
                  <div>
                    <div className='label'>Expired</div>
                    <input type='date' name='date' id='date' />
                  </div>
                  <div>
                    <div className='label'>CVV</div>
                    <input
                      type='number'
                      name='nomor'
                      id='nomor'
                      placeholder='123'
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {metodePembayaran === "bank" && (
            <>
              <div className='pilihanBank'>
                <div className='inputContainerRadio'>
                  <input type='radio' name='bank' id='bank' />
                  <img src={mandiri} alt='mandiriPreview' />
                  <div>Mandiri Virtual Account</div>
                </div>
                <div className='inputContainerRadio'>
                  <input type='radio' name='bank' id='bank' />
                  <img src={bri} alt='mandiriPreview' />
                  <div>BRI Virtual Account</div>
                </div>
                <div className='inputContainerRadio'>
                  <input type='radio' name='bank' id='bank' />
                  <img src={bni} alt='mandiriPreview' />
                  <div>BNI Virtual Account</div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className='right'>
          <div className='title'>Properti</div>
          <img src={house1} alt='House Preview' />
          <div className='propertyDetail'>
            <div className='pemilik'>Rumah kemang</div>
            <div className='alamat'>
              <svg
                width='24'
                height='18'
                viewBox='0 0 24 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.5 1.5C6.5975 1.5 4.25 3.8475 4.25 6.75C4.25 10.6875 9.5 16.5 9.5 16.5C9.5 16.5 14.75 10.6875 14.75 6.75C14.75 3.8475 12.4025 1.5 9.5 1.5ZM5.75 6.75C5.75 4.68 7.43 3 9.5 3C11.57 3 13.25 4.68 13.25 6.75C13.25 8.91 11.09 12.1425 9.5 14.16C7.94 12.1575 5.75 8.8875 5.75 6.75ZM7.625 6.75C7.625 5.71447 8.46447 4.875 9.5 4.875C10.1699 4.875 10.7889 5.23237 11.1238 5.8125C11.4587 6.39263 11.4587 7.10737 11.1238 7.6875C10.7889 8.26763 10.1699 8.625 9.5 8.625C8.46447 8.625 7.625 7.78553 7.625 6.75Z'
                  fill='#8e8e8e'
                  fillOpacity='0.68'
                />
              </svg>
              <div>Jl. Raya Parung Bogor, Jawa Barat</div>
            </div>
            <div className='detail'>
              <div className='toilet'>
                <svg
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.5 7H17.5M3.5 12H4.5H3.5ZM20.5 12C20.7652 12 21.0196 11.8946 21.2071 11.7071C21.3946 11.5196 21.5 11.2652 21.5 11V7C21.5 6 20.9 4 18.5 4C16.1 4 15.5 6 15.5 7L20.5 12ZM20.5 12V14C20.5 15.138 19.917 17.248 17.755 17.841L20.5 12ZM20.5 12H4.5H20.5ZM4.5 12V14C4.5 15.138 5.083 17.248 7.245 17.841L4.5 12ZM6.5 20L7.245 17.841L6.5 20ZM7.245 17.841C7.615 17.943 8.032 18 8.5 18H16.5C16.9236 18.0037 17.3457 17.9502 17.755 17.841H7.245ZM18.5 20L17.755 17.841L18.5 20ZM15.5 7H13.5H15.5Z'
                    stroke='#8e8e8e'
                    strokeOpacity='0.66'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div>2 Toilet</div>
              </div>
              <div className='kamar'>
                <svg
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M19.5 6.5H11.5V14.5H3.5V4.5H1.5V19.5H3.5V16.5H21.5V19.5H23.5V10.5C23.5 8.29 21.71 6.5 19.5 6.5ZM10.5 10.5C10.5 12.16 9.16 13.5 7.5 13.5C5.84 13.5 4.5 12.16 4.5 10.5C4.5 8.84 5.84 7.5 7.5 7.5C9.16 7.5 10.5 8.84 10.5 10.5ZM8.5 10.5C8.5 9.95 8.05 9.5 7.5 9.5C6.95 9.5 6.5 9.95 6.5 10.5C6.5 11.05 6.95 11.5 7.5 11.5C8.05 11.5 8.5 11.05 8.5 10.5ZM13.5 14.5H21.5V10.5C21.5 9.4 20.6 8.5 19.5 8.5H13.5V14.5Z'
                    fill='#8e8e8e'
                    fillOpacity='0.68'
                  />
                </svg>
                <div>2 Kamar</div>
              </div>
              <div className='luas'>
                <svg
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.5 12.5H2.5L12.5 3.5L22.5 12.5H19.5V20.5H13.5V14.5H11.5V20.5H5.5V12.5ZM17.5 10.69L12.5 6.19L7.5 10.69V18.5H9.5V12.5H15.5V18.5H17.5V10.69Z'
                    fill='#8e8e8e'
                    fillOpacity='0.66'
                  />
                </svg>
                <div>1400 m2</div>
              </div>
            </div>
          </div>
          <div className='harga'>
            <div className='sectionHarga'>
              <div className='subtitle'>Total</div>
              <div className='nominal'>Rp800000000</div>
            </div>
            <div className='sectionHarga'>
              <div className='subtitle'>Penawaran</div>
              <div className='nominal'>-Rp50000000</div>
            </div>
            <div className='sectionHarga'>
              <div className='subtitle'>Total Akhir</div>
              <div className='nominal'>Rp750000000</div>
            </div>
          </div>
        </div>
      </div>
      <ButtonContainer>
        <ButtonStyled className='secondary' onClick={kembaliHandler}>
          Kembali
        </ButtonStyled>
        <ButtonStyled className='primary' onClick={nextHandler}>
          Selanjutnya
        </ButtonStyled>
      </ButtonContainer>
    </PembelianStepTwoStyled>
  );
};

const PembelianStepTwoStyled = styled.div`
  .section {
    display: flex;
    gap: 20px;
    .left {
      width: 50%;
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
        margin-bottom: 20px;
      }

      .metodePembayaran {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        .pembayaran {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 15px;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #0d3de5;
          border-radius: 5px;
          font-weight: 700;
          font-size: 14px;
          line-height: 28px;
          color: #0d3de5;

          path {
            fill: #0d3de5 !important;
          }

          &.active {
            background: #0d3de5;
            color: white;
            path {
              fill: white !important;
            }
          }
        }
      }

      .bodyForm {
        .formContainer {
          margin-bottom: 10px;
          .label {
            font-weight: 400;
            font-size: 16px;
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
            padding: 10px 20px;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #797c86;
            background: #f5f8ff;
            border: 1px solid #dae1f4;
            border-radius: 5px;
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

      .pilihanBank {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .inputContainerRadio {
          cursor: pointer;
          padding: 16px 16px;
          border: 1px solid #bec3d2;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }

    .right {
      width: 50%;
      .title {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #0d3de5;
        background: #edf1ff;
        border-radius: 10px;
        padding: 13px 20px;
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        height: 220px;
        margin-bottom: 20px;
      }

      .propertyDetail {
        margin-bottom: 20px;
        .pemilik {
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          color: #1c1c1c;
          margin-bottom: 15px;
        }
        .alamat {
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #8e8e8e;
          margin-bottom: 15px;
        }
        .detail {
          display: flex;
          align-items: center;
          gap: 12px;
          .toilet,
          .kamar,
          .luas {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #8e8e8e;
          }
        }
      }

      .harga {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .sectionHarga {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .subtitle {
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
            color: #1c1c1c;
          }

          .nominal {
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            text-align: right;
            color: #1c1c1c;
          }
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

export default PembelianStepTwo;
