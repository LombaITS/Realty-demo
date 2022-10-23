import React from "react";
import styled from "styled-components";

// Import component
import SideBarItem from "./SideBarItem";

// Import Icon
import myProperty from "../img/myProperty.svg";
import love from "../img/love.svg";
import transaksi from "../img/transaksi.svg";
import pengaturan from "../img/pengaturan.svg";
import logout from "../img/logout.svg";
import { useNavigate } from "react-router-dom";

const SideBar = ({
  UserImage,
  setIsLogin,
  getToken,
  sideBarClicked,
  setsideBarClicked,
}) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLogin(getToken());
    setsideBarClicked(!sideBarClicked);

    sideBarClicked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    navigate("/");
  };

  const transaksiHandler = () => {
    setIsLogin(getToken());
    setsideBarClicked(!sideBarClicked);

    sideBarClicked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    navigate("/daftartransaksi");
  };

  const propertiHander = () => {
    setIsLogin(getToken());
    setsideBarClicked(!sideBarClicked);

    sideBarClicked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    navigate("/propertisaya");
  };

  const waitingForBackend = () => {
    alert(
      "Sistem ini masih frontend saja. Backend dari sistem ini masih dalam tahap pengerjaan"
    );
  };
  return (
    <SideBarContainer>
      <div className='container'>
        <div className='sideBarSection'>
          <div className='profile'>
            <img src={UserImage} alt='User Profile' />
            <div className='name'>Albert Fussels</div>
          </div>
          <hr />
          <div className='itemContainer'>
            <div onClick={propertiHander}>
              <SideBarItem icon={myProperty} desc={`Properti Saya`} />
            </div>
            <div onClick={waitingForBackend}>
              <SideBarItem icon={love} desc={`Wishlist`} />
            </div>
            <div onClick={transaksiHandler}>
              <SideBarItem icon={transaksi} desc={`Daftar Transaksi`} />
            </div>
            <div onClick={waitingForBackend}>
              <SideBarItem icon={pengaturan} desc={`Pengaturan`} />
            </div>
            <div onClick={logoutHandler}>
              <SideBarItem icon={logout} desc={`Keluar`} />
            </div>
          </div>
        </div>
      </div>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 100%;
  left: 0px;
  background: rgba(28, 28, 28, 0.33);
  position: absolute;
  z-index: 3;
  .sideBarSection {
    width: 30%;
    background: white;
    margin-left: auto;
    margin-top: 10px;
    border-radius: 15px;
    padding: 25px 25px;
    .profile {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .itemContainer {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
`;

export default SideBar;
