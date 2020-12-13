import React from 'react'
import styled from 'styled-components'

interface ModalTitleProps {
  text?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({ text }) => (
  <StyledModalTitle>
    {text}
  </StyledModalTitle>
)

const StyledModalTitle = styled.div`
  align-items: center;
  font-family: "KoHo", sans-serif;

  color: black;
  display: flex;
  font-size: 22px;
  font-weight: 700;
  height: ${props => props.theme.topBarSize}px;
  justify-content: center;
`

export default ModalTitle