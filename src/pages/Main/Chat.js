import React, { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  height: 85vh;
  background-color: ivory;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ChatContainer = styled.div`
  width: 500px;
  height: 70vh;
  margin-top: 30px;
  border: 1px solid #ccc;
  padding: 16px;
  overflow-y: scroll;
  @media (max-width: 550px) {
    width: 80%;
  }
`;

const Message = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightblue;
  border-radius: 50%;
  margin-right: 8px;
`;

const MessageText = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
`;

const InputContainer = styled.div`  
  width: 500px;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid #ccc;
  @media (max-width: 550px) {
    width: 80%;
  }
`;

const Input = styled.input`
  width: 400px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  @media (max-width: 550px) {
    width: 70%;
  }
`;

function Main() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <Background>

      <ChatContainer>
        {messages.map((message, index) => (
          <Message key={index}>
            <ProfilePicture />
            <MessageText>{message.text}</MessageText>
          </Message>
        ))}
      </ChatContainer>

      <InputContainer>
        <Input
          placeholder="하고싶은 이야기가 있나요?"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>보내기</button>
      </InputContainer>
    </Background>
  );
}

export default Main;
