import React from "react";
import { useState } from "react";
import styled from "styled-components";

import ChatComponent from "./ChatComponent";

import ChatIcon from "../img/chat.svg";

const ChatButton = () => {
  const [isChatClicked, setIsChatClicked] = useState(false);
  const showChat = () => {
    setIsChatClicked(!isChatClicked);
  };
  return (
    <ChatSection>
      {isChatClicked && (
        <ChatComponent
          setIsChatClicked={setIsChatClicked}
          isChatClicked={isChatClicked}
        />
      )}
      <StyledChat onClick={showChat}>
        <img src={ChatIcon} alt='Chat Icon' />
        <div className='chatText'>Chat</div>
      </StyledChat>
    </ChatSection>
  );
};

const ChatSection = styled.div`
  position: fixed;
  bottom: 10%;
  right: 15%;
`;

const StyledChat = styled.div`
  width: 186px;
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 10px 25px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 4px 10px #e6edfb;
  border-radius: 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #0d3de5;
  position: absolute;
  cursor: pointer;
`;

export default ChatButton;
