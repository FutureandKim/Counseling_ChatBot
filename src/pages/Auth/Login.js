import React, { useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import icon from "../../assets/mainIcon.png";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ivory;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainIcon = styled.img`
  width: 100px;
  margin-bottom: 30px;
` 
const NameField = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
`
const InputField = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
`

const Button = styled.button`
  padding: 15px 25px;
  font-size: 18px;
  background-color: #eea849;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  border-radius: 3px;
`

function Login() {
    const [showCalendar, setShowCalendar] = useState(false); 
    const [selectedDate, setSelectedDate] = useState(null); 
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

 
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    }

 
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowCalendar(false); 
    }


    const handleLoginClick = () => {
        if (!name || !selectedDate) {
            setErrorMessage("입력을 다시 확인해주세요");
        } if(!name)
            setErrorMessage("이름을 입력해주세요");
        else if(!selectedDate)
            setErrorMessage("날짜를 선택해주세요");
        else {
            // 로그인 로직을 추가할 부분
            setErrorMessage(""); 
        }
    }

    return (
      <Background>
        <MainIcon src={icon}></MainIcon>
        <NameField
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="생년월일"
          onClick={toggleCalendar}
          value={selectedDate ? selectedDate.toLocaleDateString() : ''}
          readOnly
        />
        {showCalendar && (
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
        )}
        <Button onClick={handleLoginClick}>CONTINUE</Button>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </Background>
    );
}

export default Login;
