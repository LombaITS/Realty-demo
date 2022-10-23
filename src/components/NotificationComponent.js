import React from "react";
import styled from "styled-components";

import ToggleSwitch from "./ToggleSwitch";
import NotificationItem from "./NotificationItem";

import UserImage from "../img/userImage.svg";
import PropertyImage from "../img/house1.png";

// Todo Nanti yang SVG dibuatin satu file untuk satu SVG. Truss di Import ke File yang ini yaa!

const NotificationComponent = () => {
  return (
    <NotificationContainer>
      <div className='container'>
        <div className='notificationSection'>
          <div className='sectionSatu'>
            <div className='title'>Notifikasi</div>
            <div className='sudahBaca'>Tandai Sudah dibaca</div>
          </div>
          <div className='sectionDua'>
            <div className='pembaruanNotifikasi'>
              <svg
                width='15'
                height='18'
                viewBox='0 0 15 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.2358 15.5C9.56879 16.5 8.73579 17 7.73579 17C6.73579 17 5.90279 16.5 5.23579 15.5M12.8208 14H2.65079C2.35862 14.0001 2.07166 13.9227 1.81924 13.7756C1.56681 13.6285 1.35796 13.417 1.21405 13.1627C1.07014 12.9085 0.996322 12.6206 1.00014 12.3284C1.00396 12.0363 1.08528 11.7504 1.23579 11.5C2.21722 9.86426 2.73569 7.99257 2.73579 6.085V5C2.73579 3.93913 3.15721 2.92172 3.90736 2.17157C4.6575 1.42143 5.67492 1 6.73579 1H8.73579C9.79665 1 10.8141 1.42143 11.5642 2.17157C12.3144 2.92172 12.7358 3.93913 12.7358 5V6.085C12.7358 7.992 13.2538 9.865 14.2358 11.5C14.3863 11.7504 14.4676 12.0363 14.4714 12.3284C14.4753 12.6206 14.4014 12.9085 14.2575 13.1627C14.1136 13.417 13.9048 13.6285 13.6523 13.7756C13.3999 13.9227 13.1129 14.0001 12.8208 14Z'
                  stroke='#1C1C1C'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='textDecs'>
                <div className='title'>Pembaruan Notifikasi</div>
                <div className='decs'>
                  Aktifkan pengiriman pembaruan notifikasi baru
                </div>
              </div>
            </div>
            <div className='switchToggle'>
              <ToggleSwitch />
            </div>
          </div>
          <hr />
          <NotificationItem
            UserImage={UserImage}
            Nama={`Albert Russel`}
            Decs={`Menggunggah properti dekat dengan sekolah SMA Fransiskus Bekasi `}
            time={`2 Jam yang lalu`}
            PropertyImage={PropertyImage}
          />
          <hr />
          <NotificationItem
            UserImage={UserImage}
            Nama={`Albert Russel`}
            Decs={`Menggunggah properti dekat dengan sekolah SMA Fransiskus Bekasi `}
            time={`2 Jam yang lalu`}
            PropertyImage={PropertyImage}
          />
          <hr />
          <NotificationItem
            UserImage={UserImage}
            Nama={`Albert Russel`}
            Decs={`Menggunggah properti dekat dengan sekolah SMA Fransiskus Bekasi `}
            time={`2 Jam yang lalu`}
            PropertyImage={PropertyImage}
          />
        </div>
      </div>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 100%;
  left: 0px;
  background: rgba(28, 28, 28, 0.33);
  position: absolute;
  z-index: 3;
  .notificationSection {
    width: 500px;
    background-color: white;
    margin-left: auto;
    margin-top: 10px;
    border-radius: 15px;
    padding: 25px 25px;

    .sectionSatu {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      .title {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #000000;
      }
      .sudahBaca {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #797c86;
      }
    }

    .sectionDua {
      padding: 20px 20px;
      border: 1px solid #eaecf0;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      .pembaruanNotifikasi {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        .title {
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
          color: #1c1c1c;
        }

        .decs {
          font-weight: 400;
          font-size: 10px;
          line-height: 16px;
          color: #797c86;
        }
      }
    }
  }
`;

export default NotificationComponent;
