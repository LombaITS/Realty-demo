import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer className='container'>
        <div className='summary'>
          <h1>Realty</h1>
          <p>
            Realty adalah situs properti terbaik untuk mencari dan menjual
            properti agar membuat jual beli properti lebih mudah dengan
            menggunakan teknologi blockchain
          </p>
        </div>
        <div className='about-us'>
          <h1>Tentang Kami</h1>
          <a href='/' className='about-us-item'>
            Layanan
          </a>
          <a href='/' className='about-us-item'>
            Tim Kami
          </a>
          <a href='/' className='about-us-item'>
            Berita
          </a>
        </div>
        <div className='bantuan'>
          <h1>Bantuan</h1>
          <a href='/' className='bantuan-link'>
            Customer Service
          </a>
          <a href='/' className='bantuan-link'>
            Akun
          </a>
          <a href='/' className='bantuan-link'>
            Feedback
          </a>
          <a href='/' className='bantuan-link'>
            Aksebilitas
          </a>
        </div>
        <div className='berlangganan'>
          <p>Berlangganan dengan kami dan dapatkan informasi terbaru</p>
          <div className='formEmail'>
            <input
              type='text'
              className='emailInput'
              name='emailInput'
              placeholder='Masukkan Email Anda'
            />
            <br />
            <button type='submit'>Berlangganan</button>
          </div>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #eff0f4;
  mix-blend-mode: normal;
  padding: 54px 60px 30px 60px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #608fe8;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #2f343a;
    max-width: 285px;
  }

  a {
    display: block;
    margin-bottom: 5px;
  }

  .formEmail {
    text-align: right;
    .emailInput {
      width: 100%;
      padding: 7px 6px 7px 12px;
      border: none;
      margin-bottom: 30px;
    }

    button {
      background: #f89047;
      box-shadow: 0px 6px 40px rgba(255, 167, 105, 0.46);
      border-radius: 10px;
      padding: 9px 29px 11px 31px;
      border: none;
      color: white;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default Footer;
