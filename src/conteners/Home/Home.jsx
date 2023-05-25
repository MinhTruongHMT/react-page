//import { styled } from "styled-components";
import { Layout } from "components/Layout";
import { styled } from "styled-components";
import Rectangle from "assets/Rectangle 13.svg";
import { Button } from "components/Button";
const StyleContener = styled.div`
  width: 100%;
  background-color: red;
  .background{
    position: relative;
    img{
      width: 50%;
    }
    .Text{
      position: absolute;
      top: 77px;
      left: 69px;
      right: 120px;
    }
  }

`;


const Home = () => {
  return (
    <Layout>
      <StyleContener>
        <div>
          <div className="background">
            <img src={Rectangle} alt="Rectangle" />
            <div className="Text">
              <h1>Discover, Create and Sell Your Own NFT.
              </h1>
              <button>gf</button>
              <button>gf</button>
            </div>
          </div>
        </div>
      </StyleContener>
    </Layout>
  );
};
export default Home;
