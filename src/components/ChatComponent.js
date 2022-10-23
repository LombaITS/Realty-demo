import React from "react";
import styled from "styled-components";

// * Import Components
import ChatItem from "./ChatItem";
import ChatDetail from "./ChatDetail";

import UserImage from "../img/userImage.svg";

const ChatComponent = ({ isChatClicked, setIsChatClicked }) => {
  return (
    <ChatContainer>
      <SectionKiri>
        <div className='title'>Chat</div>
        <div className='inputUser'>
          <div className='groupInput'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8.72958 8.31535H9.19041L12.1012 11.232L11.2321 12.1012L8.31541 9.19035V8.72951L8.15791 8.56618C7.49291 9.13785 6.62958 9.48201 5.69041 9.48201C3.59624 9.48201 1.89874 7.78451 1.89874 5.69035C1.89874 3.59618 3.59624 1.89868 5.69041 1.89868C7.78458 1.89868 9.48208 3.59618 9.48208 5.69035C9.48208 6.62951 9.13791 7.49285 8.56624 8.15785L8.72958 8.31535ZM3.06541 5.69035C3.06541 7.14285 4.23791 8.31535 5.69041 8.31535C7.14291 8.31535 8.31541 7.14285 8.31541 5.69035C8.31541 4.23785 7.14291 3.06535 5.69041 3.06535C4.23791 3.06535 3.06541 4.23785 3.06541 5.69035Z'
                fill='#B9B9B9'
              />
            </svg>
            <input
              type='text'
              name='searchMesssage'
              id='searchMesssage'
              placeholder='Cari Pengguna'
            />
          </div>
          <div className='filter'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M1.75 3.5V4.66667H12.25V3.5H1.75ZM5.83333 10.5H8.16667V9.33333H5.83333V10.5ZM10.5 7.58333H3.5V6.41667H10.5V7.58333Z'
                fill='#0D3DE5'
              />
            </svg>
          </div>
        </div>
        <hr />
        <ChatItem
          UserImage={UserImage}
          Nama={`Pak Muh`}
          Pesan={`Selamat pagi pak, saya tertarik dengan rumah bapak`}
        />
        <ChatItem
          UserImage={UserImage}
          Nama={`Pak Kyungsoo`}
          Pesan={`Selamat pagi pak, saya tertarik dengan rumah bapak`}
        />
        <hr />
      </SectionKiri>
      <ChatDetail
        isChatClicked={isChatClicked}
        setIsChatClicked={setIsChatClicked}
      />
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  width: 673px;
  height: 528px;
  background: #ffffff;
  box-shadow: 0px 6px 30px 2px #d9d9d9;
  border-radius: 15px;
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 4;
  display: flex;
`;

const SectionKiri = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px solid #e5e7e9;
  .title {
    padding: 10px 7px 0px 15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .inputUser {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 7px 0px 15px;
    .groupInput {
      display: flex;
      align-items: center;
      gap: 7px;
      background: #ffffff;
      border: 1px solid #e5e7e9;
      border-radius: 10px;
      padding: 5px 15px;
      input {
        border: none;
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        color: #b9b9b9;
        &:focus {
          outline-color: white;
        }
      }
    }
    .filter {
      padding: 3px 10px;
      background: #e9eeff;
      border-radius: 10px;
    }
  }
`;

export default ChatComponent;
