import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";

import Rumah1 from "../img/property1.png";
import CheckList from "../img/checklist.svg";
import placeIcon from "../img/placeIcon.svg";
import loveIcon from "../img/loveIcon.svg";

const Tour = () => {
  const navigate = useNavigate();
  const tambahHandler = () => {
    navigate("/properti");
  };
  return (
    <div className='container'>
      <Breadcrumb BreadcrumbText={`Home / Properti / Rumah / Jadwal Tour`} />
      <ButtonHeader className='ButtonHeader'>
        <HeaderText
          TitleText={`Tour Yang Akan Datang`}
          DescriptionText={`Berikut adalah semua daftar tour yang akan anda lakukan`}
        ></HeaderText>
        <div className='buttonTambah' onClick={tambahHandler}>
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
              d='M2.5 12C2.5 6.48 6.98 2 12.5 2C18.02 2 22.5 6.48 22.5 12C22.5 17.52 18.02 22 12.5 22C6.98 22 2.5 17.52 2.5 12ZM13.5 13H17.5V11H13.5V7H11.5V11H7.5V13H11.5V17H13.5V13Z'
              fill='#0D3DE5'
            />
          </svg>
          <div className='text'>Tambah Tour</div>
        </div>
      </ButtonHeader>
      <CardJadwal>
        <div className='jadwalInformation'>
          <div className='timeDate'>
            <div className='date'>Jumat, 29 Juli 2022</div>
            <svg
              width='13'
              height='12'
              viewBox='0 0 13 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.5 11.5C9.53757 11.5 12 9.03757 12 6C12 2.96243 9.53757 0.5 6.5 0.5C3.46243 0.5 1 2.96243 1 6C1 9.03757 3.46243 11.5 6.5 11.5Z'
                fill='#B0B0B0'
              />
            </svg>
            <div className='time'>13:00 PM</div>
          </div>
          <div className='cancelReschedule'>
            <div className='jadwalButton' id='cancel'>
              Batal
            </div>
            <div className='jadwalButton' id='reschedule'>
              Ubah Jadwal
            </div>
          </div>
        </div>
        <hr />
        <div className='jadwalDescription'>
          <div className='description'>
            <ul>
              <li className='active'>
                <div className='decsTitle'>Sudah Terjadwal</div>
                <div className='desc'>
                  Kami akan mengecek apakah pemilik rumah dapat melakukan tour.
                  Kami akan menghubungi lebih lanjut melalui telepon atau email
                </div>
              </li>
              <li className='wait'>
                <div className='decsTitle'>Terkonfirmasi</div>
              </li>
              <li className='nope'>
                <div className='decsTitle'>Selesai</div>
              </li>
            </ul>
          </div>
          <div className='gambarRumah'>
            <div className='info'>
              <div className='infoRumah'>
                <div className='namaRumah'>Rumah Kemang</div>
                <div className='alamatLengkap'>
                  <img src={placeIcon} alt='Icon Alamat' />
                  <div className='alamat'>
                    Jl. Raya Parung Bogor, Jawa Barat
                  </div>
                </div>
              </div>
              <div className='like'>
                <img src={loveIcon} alt='Love Icon' />
              </div>
            </div>
          </div>
        </div>
      </CardJadwal>
    </div>
  );
};

const ButtonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .buttonTambah {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #0d3de5;
    cursor: pointer;
  }
`;

const CardJadwal = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 24px 39px;
  box-shadow: 0px 6px 10px rgba(221, 235, 255, 0.85);
  border-radius: 15px;
  .jadwalInformation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .timeDate {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #000000;
    }
    .cancelReschedule {
      display: flex;
      gap: 16px;

      .jadwalButton {
        padding: 10px 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 28px;
      }

      #cancel {
        color: #f84747;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border: 1px solid #f84747;
        border-radius: 15px;
      }

      #reschedule {
        color: #f89047;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border: 1px solid #f89047;
        border-radius: 15px;
      }
    }
  }

  .jadwalDescription {
    margin-top: 34px;
    display: flex;
    gap: 18px;
    min-height: 253px;
    .description {
      width: 67%;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        position: relative;
        padding-left: 50px;
        /* &::after {
          content: "";
          position: absolute;
          width: 3px;
          height: calc(100% - 23px);
          background-color: #83cf3e;
          left: 15px;
          top: 0px;
          z-index: -1;
          margin-top: 13px;
        } */

        li {
          padding: 10px 0px;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: #83cf3e;
            left: -46px;
            top: -7px;
            z-index: 1;
            margin-top: 15px;
            border-radius: 50%;
          }

          &::after {
            content: "";
            position: absolute;
            width: 3px;
            height: calc(100%);
            background-color: #83cf3e;
            left: -35px;
            top: 0px;
            z-index: -1;
            margin-top: 13px;
          }

          &.wait::after {
            background-color: #797c86;
          }

          &.nope::after {
            height: 0px;
          }

          &.active::before {
            background: url(${CheckList});
            z-index: 1;
          }

          &.wait::before {
            background: white;
            border: solid 1px #83cf3e;
          }

          &.nope::before {
            background: white;
            border: 2px solid #797c86;
          }
        }
      }
      .decsTitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
      }

      .desc {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
      }
    }

    .gambarRumah {
      width: 33%;
      padding: 15px 15px;
      background: linear-gradient(
          180.11deg,
          rgba(255, 255, 255, 0) 0.1%,
          #000000 99.9%
        ),
        url(${Rumah1});
      background-size: cover;
      border-radius: 10px;
      position: relative;

      .info {
        position: absolute;
        bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        .namaRumah {
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;
          color: #ffffff;
        }
        .alamatLengkap {
          display: flex;
          gap: 5px;
          align-items: center;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #ffffff;
        }
      }
    }
  }
`;

export default Tour;
