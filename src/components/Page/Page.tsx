import React from 'react'
import styled from 'styled-components'

import refinery from '../../assets/img/refinery.jpeg'


const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>

  </StyledPage>
)

const StyledPage = styled.div``

const StyledMain = styled.div`
  background-color: #161519;
  background-image: url(${refinery});
  background-position: -11px;
  background-size: cover;
  height: auto;
  
  background-attachment: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

export default Page
