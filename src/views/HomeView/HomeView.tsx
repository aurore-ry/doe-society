//depths
import styled from "styled-components";
import { FC } from "react";
//types
import { CommonProps } from "../../types";

export interface HomeViewProps extends CommonProps {}

// eslint-disable-next-line no-empty-pattern
export const HomeView: FC<HomeViewProps> = ({}) => {
  return (
    <StyledHomeWrapper>
      <h1>Hello Duke!</h1>
    </StyledHomeWrapper>
  );
};

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
