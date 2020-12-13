import React from "react";
import styled, { keyframes } from "styled-components";

const CardAccent: React.FC = ({ children }) => (
  <StyledCardAccent>
    <StyledCard>{children}</StyledCard>
  </StyledCardAccent>
);

const StyledCard = styled.div`
  margin: 10px;
  padding: 0px 10px 10px 0px;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  backdrop-filter: blur(15px);
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RainbowLight = keyframes`
   0% { box-shadow: 0 0 5px #759687; }
   35% { box-shadow: 0 0 10px #bbeed6; }
   50% { box-shadow: 0 0 5px #759687; }
   65% { box-shadow: 0 0 10px #bbeed6; }
   100% { box-shadow: 0 0 5px #759687; }
`;

const StyledCardAccent = styled.div`
  background-size: 300% 300%;
  width: 100%;
  /* border: 10px solid white; */
  animation: ${RainbowLight} 10s infinite;
  /* border-radius: 12px; */
  /* filter: blur(6px);/* */
`;

export default CardAccent;
