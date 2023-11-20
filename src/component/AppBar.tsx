import styled from "styled-components";
import { Colors } from "../utiles";
import { ButtonAnchorSmall } from "./Button.styled";
import { CreatePost } from "../icones/CreatePost";

export const AppBar = () => {
  return (
    <AppBarParentContainer>
      <AppBarContainer>
        <div>
          <ButtonAnchorSmall href={"/CreatePost"}>
            New post <CreatePost size={26} />
          </ButtonAnchorSmall>
        </div>
      </AppBarContainer>
    </AppBarParentContainer>
  );
};

export const AppBarParentContainer = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AppBarContainer = styled.div`
  margin: 0;
  width: 50%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 20px;
  border-bottom: 3px solid ${Colors.PRIMARY};
`;
