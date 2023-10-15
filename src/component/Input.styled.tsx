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
  background-color: ${Colors.SOFT_BLACK};
  color: ${Colors.WHITE_01};
  border: none;
  border-radius: 4px;

  &#username {
    color: ${Colors.WHITE_01};
    font-weight: bold;
  }

  &#password {
    color: ${Colors.WHITE_01};
  }

  &:focus {
    outline: 1px solid ${Colors.GOLD};
  }
`;
