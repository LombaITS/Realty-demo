import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";
import PropertiItem from "../components/PropertiItem";

import Home1 from "../img/house1.png";
import Home2 from "../img/house2.png";
import styled from "styled-components";

const PropertiSaya = () => {
  return (
    <PropertiContainer className='container'>
      <Breadcrumb BreadcrumbText={`Home / Properti / Rumah / Milik Saya`} />
      <HeaderText
        TitleText={`Properti Saya`}
        DescriptionText={`Berikut adalah daftar properti yang anda miliki`}
      ></HeaderText>
      <div className='propertiContainer'>
        <PropertiItem
          namaRumah={`Rumah Kemang`}
          pemilik={`Pak Muh`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          toilet={`2`}
          kamar={`2`}
          luas={`1400`}
          status={`true`}
          tanggal={`28 Juli 2022`}
          idTransaksi={`ID/01001`}
          gambarRumah={Home2}
        />
        <PropertiItem
          namaRumah={`Rumah Kemang`}
          pemilik={`Pak Muh`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          toilet={`2`}
          kamar={`2`}
          luas={`1400`}
          status={`menunggu`}
          tanggal={`28 Juli 2022`}
          idTransaksi={`ID/01002`}
          gambarRumah={Home1}
        />
        <PropertiItem
          namaRumah={`Rumah Kemang`}
          pemilik={`Pak Muh`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          toilet={`2`}
          kamar={`2`}
          luas={`1400`}
          status={`false`}
          tanggal={`28 Juli 2022`}
          idTransaksi={`ID/01001`}
          gambarRumah={Home2}
        />
      </div>
    </PropertiContainer>
  );
};

const PropertiContainer = styled.div`
  margin-bottom: 40px;
  .propertiContainer {
    padding: 40px 30px;
    background: #ffffff;
    box-shadow: 0px 16px 30px rgba(128, 161, 193, 0.2);
  }
`;

export default PropertiSaya;
