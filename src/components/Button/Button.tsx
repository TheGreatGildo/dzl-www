import React, { useContext, useMemo } from "react";
import styled, { ThemeContext } from "styled-components";

import { Link } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  text?: string;
  to?: string;
  variant?: "default" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
}) => {
  const { color, spacing } = useContext(ThemeContext);

  let buttonColor: string;
  switch (variant) {
    case "secondary":
      buttonColor = color.grey[500];
      break;
    case "default":
    default:
      buttonColor = color.primary.main;
  }

  let boxShadow: string;
  let buttonSize: number;
  let buttonPadding: number;
  let fontSize: number;
  switch (size) {
    case "sm":
      boxShadow = `4px 4px 8px ${color.grey[300]},
        -8px -8px 16px ${color.grey[100]}FF;`;
      buttonPadding = spacing[3];
      buttonSize = 36;
      fontSize = 14;
      break;
    case "lg":
      boxShadow = `6px 6px 12px ${color.grey[300]},
        -12px -12px 24px ${color.grey[100]}ff;`;
      buttonPadding = spacing[4];
      buttonSize = 72;
      fontSize = 16;
      break;
    case "md":
    default:
      boxShadow = `6px 6px 12px ${color.grey[300]},
        -12px -12px 24px -2px ${color.grey[100]}ff;`;
      buttonPadding = spacing[4];
      buttonSize = 56;
      fontSize = 16;
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>;
    } else if (href) {
      return (
        <StyledExternalLink href={href} target="__blank">
          {text}
        </StyledExternalLink>
      );
    } else {
      return text;
    }
  }, [href, text, to]);

  return (
    <StyledButton
      boxShadow={boxShadow}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      size={buttonSize}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  );
};

interface StyledButtonProps {
  boxShadow: string;
  color: string;
  disabled?: boolean;
  fontSize: number;
  padding: number;
  size: number;
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
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;

export default Button;
