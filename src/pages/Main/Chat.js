import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import icon from "../../assets/mainIcon.png";

const Background = styled.div`
  height: 85vh;
  background-color: ivory;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ChatContainer = styled.div`
  width: 600px;
  height: 70vh;
  margin-top: 30px;
  padding: 16px;
  overflow-y: scroll;
  @media (max-width: 650px) {
    width: 80%;
  }

  /*스크롤바*/
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; /*스크롤바 배경 색상*/
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eea849; /* 스크롤바 색상 */
    border-radius: 6px;
  }
  scrollbar-width: thin; /* 스크롤바 너비 */
  scrollbar-color: #eea849 transparent; /* 썸과 트랙 색상 */
`;

//chatbot bubble
const ChatbotContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  margin-bottom: 8px;
`;

const ProfilePicture = styled.img`
  width: 60px;
  margin-right: 8px;
`;

const ChatbotText = styled.div`
  background-color: #eea849;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #eea849;
  word-wrap: break-word;
  max-width: 55%; 
`;

//user bubble
const Message = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const MessageText = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #eea849;
  word-wrap: break-word;
  max-width: 55%; 
`;

const InputContainer = styled.div`  
  width: 600px;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid #ccc;
  @media (max-width: 650px) {
    width: 80%;
  }
`;

const Input = styled.input`
  width: 500px;
  padding: 8px;
  border: 1px solid #eea849;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  @media (max-width: 650px) {
    width: 70%;
  }
`;

const Send = styled.button`
  margin-left: 10px;
  font-size: 16px;
  background-color: #eea849;
  border: none;
  border-radius: 8px;
  padding: 8px;
  color: #fff;
`

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Background>
       <ChatContainer ref={chatContainerRef}>

        <ChatbotContainer>
        <ProfilePicture src={icon}/>
        <ChatbotText>안녕하세요 오늘 하루 어떠셨나요?</ChatbotText>
        </ChatbotContainer>

        {messages.map((message, index) => (
          <Message key={index}>
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
        <Send onClick={handleSendMessage}>전송</Send>
      </InputContainer>
    </Background>
  );
}

export default Chat;
