import styled, { css } from "styled-components";
import { Colors } from "../utiles";

export const HeadLine = css`
  font-size: 36px;
  font-family: sans-serif;
`;

export const HomeHeadLine = styled.h1`
  font-size: 36px;
  font-family: sans-serif;
  color: ${Colors.GOLD};
`;
export const RegisterHeadLine = styled.h1`
  margin: 60px 0 80px 0;
  ${HeadLine}
`;

export const SignInHeadLine = styled.h1`
  color: ${Colors.GRAY_LIGHT_03};
  ${HeadLine};
`;
