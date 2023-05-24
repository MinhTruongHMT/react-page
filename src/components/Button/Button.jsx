import { styled } from "styled-components";
const StyleButton = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  padding: 14.5px 16px 14.5px 16px;
`;

export const Button = ({ Title, IconFist, IconFlast }) => {
  return (
    <StyleButton>
      <img src={IconFist} alt="icon" />
      {Title}
      <img src={IconFlast} alt="icon" />
    </StyleButton>
  );
};
