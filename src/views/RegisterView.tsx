//depths
import { FC } from "react";
import styled from "styled-components";
//types
import { CommonViewProps } from "../types";
// components
import { Input, InputGroup } from "../component/Input.styled";
import { StyledLabel } from "../component/Label.styled";
import { Button } from "../component/Button.styled";
import { FormContainer } from "../component/Form.styled";
import { RegisterHeadLine } from "../component/Typography.styled";

export interface RegisterViewProps extends CommonViewProps {}

export const RegisterView: FC<RegisterViewProps> = () => {
  return (
    <PageWrapper>
      <RegisterHeadLine>Fall down the rabbit hole :)</RegisterHeadLine>
      <FormContainer>
        <form method={"POST"} action={"http://localhost:3000/auth/signup"}>
          <InputGroup>
            <StyledLabel htmlFor={"email"}>Email</StyledLabel>
            <Input type="email" name={"email"} id={"email"} />
          </InputGroup>
          <InputGroup>
            <StyledLabel htmlFor={"username"}>Username</StyledLabel>
            <Input type="username" name={"username"} id={"username"} />
          </InputGroup>
          <InputGroup>
            <StyledLabel htmlFor={"password"}>Password</StyledLabel>
            <Input type="password" name={"password"} id={"password"} />
          </InputGroup>
          <InputGroup>
            <StyledLabel htmlFor={"passwordConfirm"}>
              Confirm your password
            </StyledLabel>
            <Input
              type={"password"}
              name={"passwordConfirm"}
              id={"passwordConfirm"}
            />
          </InputGroup>
          <Button type={"submit"}>Register</Button>
        </form>
      </FormContainer>
    </PageWrapper>
  );
};

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
