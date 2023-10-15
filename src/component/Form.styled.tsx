import styled from "styled-components";

export const FormContainer = styled.div`
  width: 400px;
  min-height: 460px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: #202020dc;
  border-radius: 4px;
  box-shadow: rgba(151, 0, 0, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

  & > form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 4px;
  }
`;
