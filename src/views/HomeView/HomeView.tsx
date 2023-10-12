//depths
import styled, { css } from "styled-components";
import { FC } from "react";
//types
import { CommonProps } from "../../types";
//icons
import { HelloDoe } from "../../icones/HelloDoe";
import { Colors } from "../../utiles";

export interface HomeViewProps extends CommonProps {}

// eslint-disable-next-line no-empty-pattern
export const HomeView: FC<HomeViewProps> = ({}) => {
  return (
    <Layout>
      <StyledHomeWrapper>
        <h1>Hello Doe!</h1>
        <HelloDoe />
        <StyledRow>
          <Button>Sign in</Button>
          <Button $primary>Sign up</Button>
        </StyledRow>
      </StyledHomeWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledHomeWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  gap: 8px;
  padding: 32px 0 32px 0;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 16px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ $primary?: boolean }>`
  height: 38px;
  width: 122px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${Colors.PRIMARY};
  font-size: 16px;
  color: ${Colors.PRIMARY};
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
      background: ${Colors.PRIMARY};
      color: white;
    `}
`;
