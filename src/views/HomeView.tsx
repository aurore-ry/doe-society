//depths
import styled from "styled-components";
import { FC } from "react";
//types
import { CommonProps } from "../types";
//icons
import { HelloDoe } from "../icones/HelloDoe";
//components
import { ButtonAnchor } from "../component/Button.styled";
import { GlobalStyle } from "../component/GlobalStyle.styled";
import { StyledWrapper, StyledRow } from "../component/Layout.styled";
import { HomeHeadLine } from "../component/Typography.styled";

export interface HomeViewProps extends CommonProps {}

// eslint-disable-next-line no-empty-pattern
export const HomeView: FC<HomeViewProps> = ({}) => {
  return (
    <div>
      <GlobalStyle />
      <StyledWrapper>
        <HomeHeadLine>Hello dear Doe!</HomeHeadLine>
        <HelloDoe />
        <StyledRow>
          <ButtonAnchor href={"/signin"}>Sign in</ButtonAnchor>
          <ButtonAnchor $primary href={"/signup"}>
            Sign up
          </ButtonAnchor>
        </StyledRow>
      </StyledWrapper>
    </div>
  );
};
