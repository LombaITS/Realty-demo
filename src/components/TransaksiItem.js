import React from "react";
import styled from "styled-components";
import homeTransactionIcon from "../img/homeTransactionIcon.png";

const TransaksiItem = ({
  tanggal,
  status,
  idTransaksi,
  namaRumah,
  pemilik,
  alamat,
  kamar,
  toilet,
  luas,
  harga,
  gambarRumah,
  mintaToken,
  setMintaToken,
}) => {
  const mintaTokenHandler = () => {
    setMintaToken(!mintaToken);
  };
  return (
    <TransactionItem>
      <div className='title'>
        <img src={homeTransactionIcon} alt='Home Transcation Icon' />
        <div className='type'>Rumah</div>
        <div className='tanggal'>{tanggal}</div>
        {status === "true" ? (
          <div className='status success'>Pembayaran Berhasil</div>
        ) : status === "false" ? (
          <div className='status gagal'>Pembayaran Gagal</div>
        ) : (
          <div className='status waitingConf'>
            Menunggu Konfirmasi Pembayaran
          </div>
        )}
        <div className='id'>{idTransaksi}</div>
      </div>
      <div className='propertyTitle'>{namaRumah}</div>
      <div className='propertyTrans'>
        <div className='leftSection'>
          <div className='imageContainer'>
            <img src={gambarRumah} alt='House Preview' />
          </div>
          <div className='propertyDetail'>
            <div className='pemilik'>Pemilik : {pemilik}</div>
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
                  fill='#1c1c1c'
                  fillOpacity='0.68'
                />
              </svg>
              <div>{alamat}</div>
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
                    stroke='#1c1c1c'
                    strokeOpacity='0.66'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div>{toilet} Toilet</div>
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
                    fill='#1c1c1c'
                    fillOpacity='0.68'
                  />
                </svg>
                <div>{kamar} Kamar</div>
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
                    fill='#1c1c1c'
                    fillOpacity='0.66'
                  />
                </svg>
                <div>{luas} m2</div>
              </div>
            </div>
          </div>
        </div>
        <div className='rightSection'>
          <div className='utils'>
            <div className='transactionTotal'>
              <div className='titles'>Total Transaksi</div>
              <div className='value'>Rp{harga}</div>
            </div>
            <div className='acces'>
              {status === "true" ? (
                <>
                  <div className='token success' onClick={mintaTokenHandler}>
                    Minta Token
                  </div>
                </>
              ) : (
                <div className='token wait'>Minta Token</div>
              )}
              <div className='more'>
                <svg
                  width='19'
                  height='4'
                  viewBox='0 0 19 4'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='2.5' cy='2' r='2' fill='#BEC3D2' />
                  <circle cx='9.5' cy='2' r='2' fill='#BEC3D2' />
                  <circle cx='16.5' cy='2' r='2' fill='#BEC3D2' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransactionItem>
  );
};

const TransactionItem = styled.div`
  margin-bottom: 40px;
  padding: 22px 29px;
  background: #ffffff;
  border: 1px solid #d9d9e3;
  border-radius: 15px;
  font-size: 18px;
  line-height: 28px;
  color: #1c1c1c;
  .title {
    display: flex;
    align-items: center;
    gap: 24px;
    img {
      width: 30px;
      height: 30px;
    }
    .type {
      font-weight: 600;
    }
    .tanggal {
      font-weight: 400;
    }

    .status {
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      padding: 5px 28px;
      border-radius: 5px;
      &.success {
        color: #03ac0e;
        background: #d1f2d3;
      }
      &.waitingConf {
        background: #eef4fc;
        color: #1d5bbf;
      }
    }

    .id {
      color: #797c86;
    }
  }

  .propertyTitle {
    margin-top: 25px;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #393838;
  }

  .propertyTrans {
    display: flex;
    align-items: flex-end;
    width: 100%;
    .leftSection {
      width: 70%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;
      .imageContainer {
        width: 30%;
        img {
          width: 100%;
          height: 160px;
        }
      }
      .propertyDetail {
        .pemilik {
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          color: #393838;
          margin-bottom: 15px;
        }
        .alamat {
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          color: #393838;
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
            font-size: 16px;
            line-height: 30px;
            color: #393838;
          }
        }
      }
    }
    .rightSection {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;

      .transactionTotal {
        .titles {
          font-weight: 600;
          font-size: 18px;

          color: #797c86;
        }
        .value {
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;
          color: #1c1c1c;
        }
      }

      .utils {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }

  .acces {
    text-align: right;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 34px;
    margin-top: 22px;
    .moreDetail {
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      color: #0d3de5;
      cursor: pointer;
    }

    .token {
      padding: 15px 20px;
      background: #797c86;
      border-radius: 15px;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;

      &.success {
        background: #0d3de5;
      }

      &.wait {
        background: #797c86;
      }
    }
    .more {
      background: #ffffff;
      border: 1px solid #bec3d2;
      border-radius: 5px;
      padding: 5px 15px;
      cursor: pointer;
    }
  }
`;

export default TransaksiItem;
