import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NotificationComponent from "./NotificationComponent";
import SideBar from "./SideBar";

import Notification from "../img/notification.svg";
import NotificationExist from "../img/notificationExist.svg";
import UserImage from "../img/userImage.svg";

const Header = ({ isLogin, setIsLogin, getToken }) => {
  let navigate = useNavigate();
  const brandHandler = () => {
    navigate(`/`);
  };

  const loginHandler = () => {
    navigate("/masuk");
  };

  // * Untuk sekarang notifikasi nya di set ke True dulu aja.
  // * kalau nanti database nya dah ada, baru dibuat secara dinamis. untuk sekarang hardcoded dulu
  let notificationExist = true;

  const [notificationClicked, setNotificationClicked] = useState(false);
  const [sideBarClicked, setsideBarClicked] = useState(false);

  // * Fungsi untuk fetch notification dari database sama show nya
  const showNotification = () => {
    // TODO Nanti kalau database nya dah ada, butuh di fetch data notifikasi nya ke user yaa
    setsideBarClicked(false);
    setNotificationClicked(!notificationClicked);
    notificationClicked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  const showSideBar = () => {
    setNotificationClicked(false);
    setsideBarClicked(!sideBarClicked);

    sideBarClicked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };
  return (
    <StyledNav>
      <NavContainer className='container'>
        <NavbarBrand onClick={brandHandler}>RealtyBlockchain</NavbarBrand>
        <StyledNavItem>
          <Link to='/tokenisasi'>REGISTRASI TANAH</Link>
          <Link to='/properti'>PROPERTI</Link>
          <Link to='/tour'>TOUR</Link>
          <Link to='/'>KONTAK</Link>
          <Link to='/'>TENTANG KAMI</Link>
        </StyledNavItem>
        {isLogin ? (
          <StyledUserSection>
            {notificationExist ? (
              <img
                src={NotificationExist}
                onClick={showNotification}
                alt='Notification'
              />
            ) : (
              <img src={Notification} alt='Notification' />
            )}
            <img src={UserImage} onClick={showSideBar} alt='User' />
          </StyledUserSection>
        ) : (
          <StyledLoginButton onClick={loginHandler}>
            <div className='login'>MASUK</div>
          </StyledLoginButton>
        )}
      </NavContainer>
      {notificationClicked && <NotificationComponent />}
      {sideBarClicked && (
        <SideBar
          UserImage={UserImage}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          getToken={getToken}
          sideBarClicked={sideBarClicked}
          setsideBarClicked={setsideBarClicked}
        />
      )}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  padding: 26px 0px;
  background: #ffffff;
  box-shadow: 0px 20px 13px rgba(243, 244, 248, 0.45);
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #2a2829;
  cursor: pointer;
`;

const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 40px;

  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
  }

  a:hover {
    text-decoration: none;
  }
`;

const StyledUserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;
  img {
    cursor: pointer;
  }
`;

// * ini styling untuk yang "masuk"

const StyledLoginButton = styled.div`
  width: 148px;
  height: 51px;
  background: #eff0f4;
  border-radius: 5px;
  text-align: center;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .login {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #0d3de5;
  }
`;

export default Header;
