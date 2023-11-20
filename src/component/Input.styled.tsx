import styled from "styled-components";
import Colors from "../utiles/Colors";

export const InputGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  width: 100%;
  padding: 12px;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 6px 6px;
  background-color: #d0aae762;
  color: ${Colors.PRIMARY} !important;
  border: none;
  border-radius: 4px;

  &#username {
    color: ${Colors.PRIMARY} !important;
    font-weight: bold;
  }

  &#password {
    color: ${Colors.PRIMARY} !important;
  }

  &:focus {
    outline: 1px solid ${Colors.PRIMARY};
  }
`;
