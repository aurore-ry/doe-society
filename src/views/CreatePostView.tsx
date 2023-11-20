import { Input, InputGroup } from "../component/Input.styled";
import { StyledLabel } from "../component/Label.styled";

export const CreatePostView = () => {
  return (
    <div>
      <form method={"POST"}>
        <InputGroup>
          <StyledLabel htmlFor={"title"}>Title:</StyledLabel>
          <Input name={"title"} />
        </InputGroup>
        <InputGroup>
          <StyledLabel htmlFor={"caption"}>Caption:</StyledLabel>
          <Input name={"caption"} />
        </InputGroup>
        <textarea></textarea>
      </form>
    </div>
  );
};
