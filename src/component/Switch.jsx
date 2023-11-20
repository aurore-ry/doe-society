import { func, string } from "prop-types";
import { DarkTheme } from "../icones/DarkMode";
import { LightMode } from "../icones/LightMode";
import styled from "styled-components";

const SwitchMode = ({ theme, switchTheme }) => {
  return (
    <SwitchContainer theme={theme} onClick={switchTheme}>
      {theme === "light" ? (
        <DarkTheme size={"28px"} />
      ) : (
        <LightMode size={"28px"} />
      )}
    </SwitchContainer>
  );
};
SwitchMode.propTypes = {
  theme: string.isRequired,
  switchTheme: func.isRequired,
};

export const SwitchContainer = styled.button`
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  margin: 0 auto;
  padding: 0.5rem;
  position: relative;
  width: auto;
  height: auto;
`;
export default SwitchMode;
