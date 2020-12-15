import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IconButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  to?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  disabled,
  onClick,
  to,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {!!to ? <StyledLink to={to}>{children}</StyledLink> : children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  position: relative;

  cursor: pointer;
  display: flex;
  cursor: pointer;
  outline: none;
  margin: 5px auto 15px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "VT323", monospace;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  font-weight: 500;
  color: black;
  /* padding: 1.25em 2em; */
  background: #f13f3f;
  border: 2px solid #0f0e0e;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f61d1d;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #0f0e0e;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    background: #f13f3f;
    transform: translate(0, 0.25em);
    &::before {
      // box-shadow: 0 0 0 2px #0f0e0e, 0 0.5em 0 0 #3b3636;
      transform: translate3d(0, 0.5em, -1em);
    }
  }
  &:active {
    background: #f13f3f;
    transform: translate(0em, 0.75em);
    &::before {
      // box-shadow: 0 0 0 2px #0f0e0e, 0 0 #3b3636;
      transform: translate3d(0, 0, -1em);
    }
  }
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: black;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;

export default IconButton;
