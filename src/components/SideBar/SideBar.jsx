import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Dashboard from "assets/Dashboard.png";
import Shop from "assets/shop.png";
import Judge from "assets/judge.svg";
import Buy from "assets/buy-crypto.png";
import Wallet from "assets/wallet-3.png";
import Lovely from "assets/lovely.png";
import Clock from "assets/clock.png";
import Setting from "assets/setting.png";
import Light from "assets/Light.png";
import { Card } from "components/Card";

const StyleSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: white;
  height: 100vh;
  padding: 32px;
  .TitleSideBar {
    width: 58px;
    height: 16px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 3px;
    margin-bottom: 26px;
  }
  .Toggle {
    display: flex;
    justify-content: space-between;
    .switch {
      position: relative;
      display: inline-block;
      width: 56px;
      height: 30px;
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #2196f3;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    }
  }
`;
const StyleNavItem = styled.div`
  display: flex;
  margin-bottom: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20.83px;
  font-family: "DM Sans", sans-serif;
  img {
    margin-right: 16px;
    object-fit: contain;
  }
  .testColor {
    color: #7a797d;
    text-decoration: none;
  }
`;
const NavItem = ({ path, text, image }) => {
  return (
    <StyleNavItem>
      <img src={image} alt="" />
      <NavLink to={path} className="testColor">
        {text}{" "}
      </NavLink>
    </StyleNavItem>
  );
};
export const SideBar = () => {
  return (
    <StyleSideBar>
      <NavItem text="Dashboard" path="/" image={Dashboard}></NavItem>
      <NavItem text="Market" path="/about" image={Shop}></NavItem>
      <NavItem text="Login" path="/login" image={Judge}></NavItem>
      <div className="TitleSideBar">Profile</div>
      <NavItem text="My Portfolio" path="/" image={Buy}></NavItem>
      <NavItem text="Wallet" path="/about" image={Wallet}></NavItem>
      <NavItem text="Favourites" path="/login" image={Lovely}></NavItem>
      <NavItem text="History" path="/about" image={Clock}></NavItem>
      <NavItem text="Settings" path="/login" image={Setting}></NavItem>
      <div className="TitleSideBar">Other</div>
      <div className="Toggle">
        <NavItem text="Light Mode" path="/login" image={Light}></NavItem>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round"></span>
        </label>
      </div>
      <Card/>
    </StyleSideBar>
  );
};
