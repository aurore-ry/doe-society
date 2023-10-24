import styled from "styled-components";
import { Button } from "../component/Button.styled";
import { FormContainer } from "../component/Form.styled";
import { Input, InputGroup } from "../component/Input.styled";
import { StyledLabel } from "../component/Label.styled";
import { StyledRow, StyledWrapper } from "../component/Layout.styled";
import { SignInIcon } from "../icones/SignInIcon";
import { SignInHeadLine } from "../component/Typography.styled";

export const SignInView = () => {
  return (
    <div>
      <StyledWrapper>
        <BoxContainer>
          <StyledRow>
            <FormContainer>
              <SignInHeadLine>Sign in</SignInHeadLine>
              <SignInIcon size={26} />
              <form
                method={"POST"}
                action={"http://localhost:3000/auth/signin"}
              >
                <InputGroup>
                  <StyledLabel htmlFor={"username"}>Username</StyledLabel>
                  <Input name={"username"} />
                </InputGroup>
                <InputGroup>
                  <StyledLabel htmlFor={"password"}>Password</StyledLabel>
                  <Input type={"password"} name={"password"} />
                </InputGroup>
                <Button type={"submit"}>Sign in</Button>
              </form>
            </FormContainer>
          </StyledRow>
        </BoxContainer>
      </StyledWrapper>
    </div>
  );
};

const BoxContainer = styled.div`
  width: 700px;
  height: 400px;
`;
