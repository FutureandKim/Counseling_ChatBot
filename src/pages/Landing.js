import React from "react";
import styled from "styled-components";

const OrangeBox = styled.div`
  background-color:orange;
  width: 33%;
  height: 100vh;
  float: left;
`
const Btn = styled.button`

`

function Landing() {
    return (
      <div>
        <OrangeBox/>
        <Btn>
          챗봇 사용 ➜
        </Btn>
      </div>
    );
  }
  
  export default Landing;