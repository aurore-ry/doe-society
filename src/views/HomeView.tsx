//depths
import { FC } from "react";
//types
import { CommonProps } from "../types";
//icons
import { HelloDoe } from "../icones/HelloDoe";
//components
import { ButtonAnchor } from "../component/Button.styled";
import { StyledWrapper, StyledRow } from "../component/Layout.styled";
import { HomeHeadLine } from "../component/Typography.styled";
import styled from "styled-components";

export interface HomeViewProps extends CommonProps {}

// eslint-disable-next-line no-empty-pattern
export const HomeView: FC<HomeViewProps> = ({}) => {
  return (
    <div>
      <StyledWrapper>
        <HomeHeadLine>Hello dear Doe</HomeHeadLine>
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

export const StylizedDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
`;
