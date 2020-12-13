import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/refinery">
        Refinery
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Oil Wells
      </StyledLink>
      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: #bbeed6;
  /* font-weight: 700; */
  font-family: Homenaje;
  font-size: 32px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    text-shadow: 0 0 10px #759687, 0 0 20px#bbeed646;
  }
  &.active {
    text-shadow: 0 0 10px #759687, 0 0 20px#bbeed646;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #bbeed6;
  /* font-weight: 700; */
  font-family: Homenaje;
  font-size: 32px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.78);
  }
  &.active {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.78);
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
