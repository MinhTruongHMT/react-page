import { Layout } from "components/Layout";
import { styled } from "styled-components";
import { CardETH } from "components/Card";
import { Discover } from "components/Discover";
import { Trending } from "components/Trending";
import { CardStyle } from "components/Card";
const StyleContener = styled.div`
  display: flex;
  flex-direction: row;
  .divright {
    width: 70%;
    margin-right: 20px;
    .ETH {
      width: 100%;
      height: 294px;
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-around;
    }
  }
  .divleft {
    width: 50%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;

    .wrapDiv {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
    }
  }
`;

const Home = () => {
  return (
    <Layout>
      <StyleContener>
        <div className="divright">
          <Discover />
          <Trending />
          <div className="ETH">
            <CardETH></CardETH>
            <CardETH></CardETH>
            <CardETH></CardETH>
            <CardETH></CardETH>
          </div>
        </div>
        <div className="divleft">
          <div className="wrapDiv">
            <CardStyle
              title={"Revenue"}
              amount="5.00"
              percent={12.3}
            ></CardStyle>
            <CardStyle
              title={"Spending"}
              amount="5.00"
              percent={-12.3}
            ></CardStyle>
            <CardStyle
              title={"ROI"}
              content="+14.02"
              percent={12.3}
            ></CardStyle>
            <CardStyle
              title={"Estimated"}
              amount="5.00"
              percent={12.3}
            ></CardStyle>
          </div>
        </div>
      </StyleContener>
    </Layout>
  );
};
export default Home;
