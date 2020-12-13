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

  cursor: pointer;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #f13f3f;
  box-shadow: inset 0 -2px 0px 1px #910b0b;
  border: 2px solid black;
  transition: 0.1s ease-in-out;
  &:hover {
    box-shadow: none;
  }
  .rebase-button-text {
    font-family: "VT323", monospace;
    font-size: 42px;
  }
  font-size: 20px;
  font-family: "VT323", monospace;
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
