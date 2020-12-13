import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  endAdornment?: React.ReactNode,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
  startAdornment?: React.ReactNode,
  value: string,
}

const Input: React.FC<InputProps> = ({
  endAdornment,
  onChange,
  placeholder,
  startAdornment,
  value,
}) => {
  return (
    <StyledInputWrapper>
      {!!startAdornment && startAdornment}
      <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
      {!!endAdornment && endAdornment}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  align-items: center;
  background-color: #4f3e2e;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0 7px 4px -6px #bbeed6;
    -moz-box-shadow: 0 7px 4px -6px #bbeed6;
         box-shadow: 0 7px 4px -6px #bbeed6!important;
  display: flex;
  height: 52px;
  
  padding: 0 ${props => props.theme.spacing[3]}px;
`

const StyledInput = styled.input`
  background: none;
  font-family: "Digital-Numbers";
  border: 0;
  text-shadow: 
        0 0 10px #759687,
        0 0 20px#bbeed646;


      color: #bbeed6;
  font-size: 24px;
  flex: 1;
  height: 48px;
  margin: 0;
  position: relative;
  left: 5px;
  padding: 0;
  outline: none;
`

export default Input