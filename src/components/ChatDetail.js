import React from "react";
import styled from "styled-components";

// * Masih HARDCODED USER IMAGE
import UserImage from "../img/userImage.svg";

const ChatDetail = ({ setIsChatClicked, isChatClicked }) => {
  const showChat = () => {
    setIsChatClicked(!isChatClicked);
  };
  return (
    <SectionKanan>
      <div className='HeaderChat'>
        <div className='infoUser'>
          <img src={UserImage} alt='User Preview' />
          <div className='userDetail'>
            <div className='nama'>
              Pak Muh <span>Penjual</span>
            </div>
            <div className='keterangan'>Penjual rumah kemang</div>
          </div>
        </div>
        <div className='aktif'>
          <div className='status'>Sedang Aktif</div>
          <svg
            onClick={showChat}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.12502 9.00002L12.005 12.88L15.885 9.00002C16.275 8.61002 16.905 8.61002 17.295 9.00002C17.685 9.39002 17.685 10.02 17.295 10.41L12.705 15C12.315 15.39 11.685 15.39 11.295 15L6.70502 10.41C6.51777 10.2232 6.41254 9.96954 6.41254 9.70502C6.41254 9.4405 6.51777 9.18685 6.70502 9.00002C7.09502 8.62002 7.73502 8.61002 8.12502 9.00002Z'
              fill='black'
              fill-opacity='0.54'
            />
          </svg>
        </div>
      </div>
      <hr />
      <div className='percakapan'>
        <div className='tanggal'>
          Jumat, 23 Jun 2021 • 21:00 • Belum terhubung dengan backend{" "}
        </div>
        <div className='percakapanItem user'>
          <div className='text'>Halo Selamat Malam</div>
          <div className='status'>
            <svg
              width='17'
              height='14'
              viewBox='0 0 17 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.25003 9.43241L2.81753 6.99991L1.9892 7.82241L5.25003 11.0832L12.25 4.08324L11.4275 3.26074L5.25003 9.43241Z'
                fill='#3c60e2'
              />
              <path
                d='M8.25003 9.43241L5.81753 6.99991L4.9892 7.82241L8.25003 11.0832L15.25 4.08324L14.4275 3.26074L8.25003 9.43241Z'
                fill='#3c60e2'
              />
            </svg>
            <div className='time'>22:22</div>
          </div>
        </div>
        <div className='percakapanItem seller'>
          <div className='text'>Halo selamat malam juga</div>
          <div className='status'>
            <div className='time'>22:22</div>
          </div>
        </div>
        <div className='percakapanItem user'>
          <div className='text'>
            Selamat pagi pak, saya tertarik dengan rumah bapak
          </div>
          <div className='status'>
            <svg
              width='17'
              height='14'
              viewBox='0 0 17 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.25003 9.43241L2.81753 6.99991L1.9892 7.82241L5.25003 11.0832L12.25 4.08324L11.4275 3.26074L5.25003 9.43241Z'
                fill='#3c60e2'
              />
              <path
                d='M8.25003 9.43241L5.81753 6.99991L4.9892 7.82241L8.25003 11.0832L15.25 4.08324L14.4275 3.26074L8.25003 9.43241Z'
                fill='#3c60e2'
              />
            </svg>
            <div className='time'>22:22</div>
          </div>
        </div>
      </div>
      <hr />
      <div className='replyContainer'>
        <div className='replyUser'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15 3.75H12.6225L11.6925 2.7375C11.415 2.43 11.01 2.25 10.59 2.25H7.41C6.99 2.25 6.585 2.43 6.3 2.7375L5.3775 3.75H3C2.175 3.75 1.5 4.425 1.5 5.25V14.25C1.5 15.075 2.175 15.75 3 15.75H15C15.825 15.75 16.5 15.075 16.5 14.25V5.25C16.5 4.425 15.825 3.75 15 3.75ZM9 7.5C7.75736 7.5 6.75 8.50736 6.75 9.75C6.75 10.9926 7.75736 12 9 12C10.2426 12 11.25 10.9926 11.25 9.75C11.25 8.50736 10.2426 7.5 9 7.5ZM5.25 9.75C5.25 11.82 6.93 13.5 9 13.5C11.07 13.5 12.75 11.82 12.75 9.75C12.75 7.68 11.07 6 9 6C6.93 6 5.25 7.68 5.25 9.75Z'
              fill='#797C86'
            />
          </svg>
          <input
            type='text'
            name='userReply'
            id='userReply'
            placeholder='Tulis Pesan...'
          />
        </div>
        <svg
          width='41'
          height='41'
          viewBox='0 0 41 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='20.5' cy='20.5' r='20.5' fill='#0D3DE5' />
          <path
            d='M15.6005 26.4501L27.9609 21.1518C28.5347 20.9039 28.5347 20.0964 27.9609 19.8484L15.6005 14.5501C15.133 14.3447 14.6159 14.6918 14.6159 15.1947L14.6088 18.4601C14.6088 18.8143 14.8709 19.1189 15.2251 19.1614L25.2338 20.5001L15.2251 21.8318C14.8709 21.8814 14.6088 22.1859 14.6088 22.5401L14.6159 25.8055C14.6159 26.3084 15.133 26.6555 15.6005 26.4501Z'
            fill='white'
          />
        </svg>
      </div>
    </SectionKanan>
  );
};

const SectionKanan = styled.div`
  width: 60%;
  height: 528px;
  .HeaderChat {
    padding: 15px 16px 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .infoUser {
      display: flex;
      align-items: center;
      gap: 15px;

      .nama {
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
        span {
          margin-left: 5px;
          padding: 2px 8px;
          background: #e9eeff;
          border-radius: 4px;
          font-weight: 600;
          font-size: 10px;
          line-height: 20px;
          color: #0d3de5;
        }
      }

      .keterangan {
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        color: #797c86;
      }
    }

    .aktif {
      display: flex;
      align-items: center;
      gap: 5px;
      svg {
        cursor: pointer;
      }
      .status {
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        color: #0fde30;
      }
    }
  }

  .percakapan {
    height: 335px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-end;
    padding: 5px 15px;
    .tanggal {
      text-align: center;
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      color: #514f4d;
      margin-bottom: 7px;
    }

    .percakapanItem {
      padding: 7px 9px;
      display: flex;
      align-items: center;
      background: #eff0f4;
      width: fit-content;
      gap: 30px;
      margin: 5px 0px;
      .text {
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        color: #1c1c1c;
      }
      .status {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        color: #797c86;
        gap: 3px;
      }
      &.seller {
        border-radius: 0px 10px 10px 10px;
        margin-right: auto;
        background: #4c7dfd;
        .text {
          color: white;
        }
        .status {
          color: white;
        }
      }

      &.user {
        border-radius: 10px 0px 10px 10px;
        margin-left: auto;
      }
    }
  }

  .replyContainer {
    padding: 5px 16px 0px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    .replyUser {
      width: 85%;
      padding: 12px 15px;
      background: #ffffff;
      border: 1px solid #e5e7e9;
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      input {
        border: none;
        width: 100%;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #797c86;
        &:focus {
          outline-color: white;
        }
      }
    }
  }
`;

export default ChatDetail;
