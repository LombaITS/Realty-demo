import React, { useState } from "react";
import styled from "styled-components";
import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";
import Filter from "../components/Filter";

// Import Property
import property1 from "../img/property1.png";
import property2 from "../img/property2.png";
import property3 from "../img/property3.png";
import property4 from "../img/property4.png";

// Import Componen
import PropertyList from "../components/PropertyList";
// import { Link } from "react-router-dom";

const Properti = () => {
  const [filterClicked, setFilterClicked] = useState(false);
  const showFilter= () => {
    setFilterClicked(!filterClicked);
    filterClicked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };
  return (
    <StyledProperty className='container'>
      <Breadcrumb BreadcrumbText={`Home / Properti`} />
      <HeaderText
        TitleText={`Semua Properti`}
        DescriptionText={`Berikut adalah semua properti yang dapat anda beli`}
      ></HeaderText>
      <SearchPropertyContainer>
        <div className='searchInputContainer'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M14.9649 14.2549H15.7549L20.7449 19.2549L19.2549 20.7449L14.2549 15.7549V14.9649L13.9849 14.6849C12.8449 15.6649 11.3649 16.2549 9.75488 16.2549C6.16488 16.2549 3.25488 13.3449 3.25488 9.75488C3.25488 6.16488 6.16488 3.25488 9.75488 3.25488C13.3449 3.25488 16.2549 6.16488 16.2549 9.75488C16.2549 11.3649 15.6649 12.8449 14.6849 13.9849L14.9649 14.2549ZM5.25488 9.75488C5.25488 12.2449 7.26488 14.2549 9.75488 14.2549C12.2449 14.2549 14.2549 12.2449 14.2549 9.75488C14.2549 7.26488 12.2449 5.25488 9.75488 5.25488C7.26488 5.25488 5.25488 7.26488 5.25488 9.75488Z'
              fill='black'
              fill-opacity='0.54'
            />
          </svg>

          <input type='text' placeholder='Cari Berdasarkan Lokasi' />
        </div>
        <select name='properti' id='properti'>
          <option value='rumah'>Rumah</option>
          <option value='tanah'>Tanah</option>
        </select>
        <button className='filterProperti' onClick={showFilter} alt='Filter'>Filter</button>
      </SearchPropertyContainer>
      <p className='jumlahProperti'>Terdapat 200 properti</p>
      <ListProperti>
        <PropertyList
          propertyImage={property1}
          title={`Rumah Kemang`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          harga={`Rp 200 JT`}
          bathroom={4}
          toilet={4}
          luas={1400}
        />
        <PropertyList
          propertyImage={property2}
          title={`Rumah Kemang`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          harga={`Rp 200 JT`}
          bathroom={4}
          toilet={4}
          luas={1400}
        />
        <PropertyList
          propertyImage={property3}
          title={`Rumah Kemang`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          harga={`Rp 200 JT`}
          bathroom={4}
          toilet={4}
          luas={1400}
        />
        <PropertyList
          propertyImage={property4}
          title={`Rumah Kemang`}
          alamat={`Jl. Raya Parung Bogor, Jawa Barat`}
          harga={`Rp 200 JT`}
          bathroom={4}
          toilet={4}
          luas={1400}
        />
      </ListProperti>
      {filterClicked && <Filter filterClicked={filterClicked} setFilterClicked={setFilterClicked}/>}
    </StyledProperty>
  );
};

const StyledProperty = styled.div`
  .jumlahProperti {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #5d5d5d;
    margin: 30px 0px;
  }
`;

const SearchPropertyContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: center;
  .searchInputContainer {
    flex-grow: 3;
    display: flex;
    align-items: center;
    gap: 30px;

    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 37px;

    background: #ffffff;
    border: 2px solid #d9d9d9;
    border-radius: 15px;

    input {
      border: none;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #a7a7a7;
      &:focus {
        outline-color: #fff;
      }
    }
  }

  select {
    flex-grow: 1;
    padding: 18px 20px;
    background: #ffffff;
    border: 2px solid #d9d9d9;
    border-radius: 15px;
  }

  .filterProperti {
    flex-grow: 1;
    padding-top: 18px;
    padding-bottom: 18px;
    background: #0d3de5;
    border-radius: 15px;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const ListProperti = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  /* gap: 1px; */
  justify-content: space-between;
`;

export default Properti;
