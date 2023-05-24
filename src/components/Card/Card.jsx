import { styled } from "styled-components";
import { Button } from "components/Button";
import ETH from "assets/Ethereum (ETH).png";
const StyleButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px 16px;
`;

export const Card = ({ Title, IconFist, IconFlast }) => {
  return (
    <StyleButton>
        <p>Your Balance</p>
        <h1>1,034.02</h1>
        <div>
            <img src={ETH} alt="" />
            <p>ETH</p>
        </div>
      <Button/>
    </StyleButton>
  );
};
