import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  gap: 8px;
  padding: 32px 0 32px 0;
`;

export const StyledRow = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
