import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Input, { InputProps } from '../Input'

interface TokenInputProps extends InputProps {
  max: number | string,
  symbol: string,
  onSelectMax?: () => void,
}

const TokenInput: React.FC<TokenInputProps> = ({
  max,
  symbol,
  onChange,
  onSelectMax,
  value,
}) => {
  return (
    <StyledTokenInput>
      <StyledMaxText>{max.toLocaleString()} {symbol} Available</StyledMaxText>
      <Input
        endAdornment={(
          <StyledTokenAdornmentWrapper>
            
            <StyledSpacer />
            <div>
              <Button size="sm" text="Max" onClick={onSelectMax} />
            </div>
          </StyledTokenAdornmentWrapper>
        )}
        onChange={onChange}
        placeholder="0"
        value={value}
      />
    </StyledTokenInput>
  )
}

/*
            <div>
              <Button size="sm" text="Max" />
            </div>
*/

const StyledTokenInput = styled.div`
  width: 94.5%;
`

const StyledSpacer = styled.div`
  width: ${props => props.theme.spacing[3]}px;
`

const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
  
`

const StyledMaxText = styled.div`
  align-items: center;
  color: black;
  font-family: "KoHo", sans-serif;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 44px;
  justify-content: flex-start;
`

const StyledTokenSymbol = styled.span`
  color: ${props => props.theme.color.grey[600]};
  font-family: "KoHo", sans-serif;
  font-weight: 700;
  font-size: 12px;
  width: 60px;
`

export default TokenInput
