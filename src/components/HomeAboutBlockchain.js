import React from "react";
import styled from "styled-components";

import AboutBlockchainImage from "../img/aboutBlockchain.png";

const AboutBlockchain = () => {
  return (
    <AboutBlockhains>
      <AboutBlockhainsContainer className='container'>
        <Description>
          <h3>Info</h3>
          <h1>Tentang Blockchain</h1>
          <p>
            Blockchain diperkenalkan sebagai suatu database jaringan yang
            terdistribusi (Distributed Ledger Technology) dengan menggunakan
            sistem yang kompleks, dimana memungkinkan terjadi nya suatu
            transaksi yang aman tanpa menggunakan perantara.
          </p>
        </Description>
        <CardAbout>
          <CardInd>
            <h2>DIGITALISASI</h2>
            <p>
              Token yang didapat setelah melakukan pendaftaran akan dijadikan
              sebagai sertifikat digital properti
            </p>
          </CardInd>
          <CardInd>
            <h2>BALIK NAMA</h2>
            <p>
              Dengan papandaya pembeli tidak perlu lagi melakukan proses balik
              nama properti
            </p>
          </CardInd>
          <CardInd>
            <h2>MENJUAL</h2>
            <p>
              Kemudahan menjual properti yang sudah di daftarkan dan juga yang
              sudah di beli. Cukup 1 klik, properti anda akan segera dilisting
            </p>
          </CardInd>
        </CardAbout>
      </AboutBlockhainsContainer>
    </AboutBlockhains>
  );
};

const AboutBlockhains = styled.div`
  margin-top: 76px;
  /* background-color: aquamarine; */
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 40px;
    color: black;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #0d3de5;
  }
  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #0d3de5;
    padding-top: 37px;
    /* background-color: red; */
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #1c1c1c;
  }
`;

const AboutBlockhainsContainer = styled.div`
  background: url(${AboutBlockchainImage});
  background-size: 42%;
  background-repeat: no-repeat;
  min-height: 630px;
  /* background-color: green; */
`;

const Description = styled.div`
  width: 50%;
  margin-left: auto;
  margin-top: 40px;
  /* background-color: aliceblue; */
`;

const CardAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const CardInd = styled.div`
  flex-basis: 25%;
  padding: 40px 17px 36px 17px;
  background: #ffffff;
  box-shadow: 0px 10px 18px 3px rgba(227, 230, 237, 0.34);
  border-radius: 15px;
`;

export default AboutBlockchain;
