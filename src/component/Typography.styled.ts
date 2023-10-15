import styled, { css } from "styled-components";
import { Colors } from "../utiles";

export const HeadLine = css`
  font-size: 36px;
  color: ${Colors.RED_FLASHY};
`;

export const RegisterHeadLine = styled.h1`
  margin: 60px 0 80px 0;
  ${HeadLine}
`;
