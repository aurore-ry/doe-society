import styled from "styled-components";

export const FormContainer = styled.div`
  width: 400px;
  min-height: 460px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: #20202016;
  border-radius: 4px;
  box-shadow: rgba(161, 101, 251, 0.25) 0px 30px 60px -12px;

  & > form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 4px;
  }
`;
