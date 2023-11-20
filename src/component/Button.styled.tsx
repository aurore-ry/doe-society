import styled, { css } from "styled-components";
import Colors from "../utiles/Colors";

const baseButtonCss = css<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${Colors.PRIMARY};
  font-size: 16px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  &:hover {
    cursor: pointer;
    filter: brightness(0.76);
    border-color: ${Colors.GOLD};
  }

  ${(props) =>
    props.$primary &&
    css`
      color: ${Colors.WHITE_01};
      background: ${Colors.PRIMARY};
    `}
`;

export const Button = styled.button<{ $primary?: boolean }>`
  height: 38px;
  width: 122px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  ${baseButtonCss}
`;

export const ButtonAnchor = styled.a<{ $primary?: boolean }>`
  height: 38px;
  width: 122px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  ${baseButtonCss};
`;

export const ButtonAnchorSmall = styled.a<{ $primary?: boolean }>`
  height: 40px;
  width: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  font-size: 10px;
  ${baseButtonCss}
`;
