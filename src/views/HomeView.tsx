//depths
import styled from "styled-components";
import { FC } from "react";
//types
import { CommonProps } from "../types";
//icons
import { HelloDoe } from "../icones/HelloDoe";
//components
import { ButtonAnchor } from "../component/Button.styled";
import { Colors } from "../utiles";
import { GlobalStyle } from "../component/GlobalStyle.styled";

export interface HomeViewProps extends CommonProps {}

// eslint-disable-next-line no-empty-pattern
export const HomeView: FC<HomeViewProps> = ({}) => {
  return (
    <Layout>
      <GlobalStyle />
      <StyledHomeWrapper>
        <h1>Hello Doe!</h1>
        <HelloDoe />
        <StyledRow>
          <ButtonAnchor>Sign in</ButtonAnchor>
          <ButtonAnchor $primary href={"/register"}>
            Sign up
          </ButtonAnchor>
        </StyledRow>
      </StyledHomeWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.DARK_BLACK};
`;

const StyledHomeWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  gap: 8px;
  padding: 32px 0 32px 0;
  width: 100%;
  margin: 0 auto;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
