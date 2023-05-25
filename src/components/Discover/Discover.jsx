import { styled } from "styled-components";
const StyleDiscover = styled.div`
  padding: 77px 120px 77px 60px;
  font-weight: 700;
  font-size: 30px;
  line-height: 64.8px;
  font-family: "Epilogue", sans-serif;
  border-radius: 12px;
  background-color: #5429ff;
  color: white;
  .ButtonStyleDiscover,
  .ButtonStyleCreate {
    width: 128px;
    height: 46px;
    border-radius: 40px;
  }
  .ButtonStyleDiscover {
    border: 0;
    color: #5429ff;
    font-weight: 700;
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
    line-height: 22px;
    margin-right: 12px;
  }
  .ButtonStyleCreate {
    border: 1px solid white;
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
    font-family: "DM Sans", sans-serif;
    line-height: 22px;
    color: white;
  }
`;
export const Discover = () => {
  return (
    <StyleDiscover>
      <h1>Discover, Create and Sell Your Own NFT.</h1>
      <div>
        <button className="ButtonStyleDiscover">Discover</button>
        <button className="ButtonStyleCreate">Create</button>
      </div>
    </StyleDiscover>
  );
};
