import React from "react";
import styled from "styled-components";
import ScrollTop from "./ScrollTop";
import { Link } from "react-router-dom";

const Filter = ({filterClicked, setFilterClicked}) => {
  // gatau how to close :") functionnya error
  const closeHandler = () => {
    setFilterClicked(!filterClicked);
    filterClicked
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };
  return (
    <FilterContainer>
      <ScrollTop />
      <div className='container'>
        <div className='referensiSection'>
          <div className='sectionSatu'>
            <div className='kosong'></div>
            <div className='title'>Filter</div>
            <div className='close-btn' onClick={closeHandler}>
              &times;
            </div>
          </div>
          <Nav>
                <Link to="#">Rumah</Link>
                <Link to="#">Tanah</Link>
              </Nav>
          <div class='form'>
            <div class='form-element'>
              <div>
                <label for='harga'>Harga</label>
              </div>
              <div className="section">
                <div className="row">
                  <p>Terendah</p>
                  <select id='terendah' name='terendah'>
                    <option value='template'>Rp</option>
                    <option value='terendah'>RP 1000.000</option>
                    <option value='terendah'>RP 2000.000</option>
                    <option value='terendah'>RP 3000.000</option>
                    <option value='terendah'>RP 5000.000</option>
                  </select>
                  </div>
                  <div className="row">
                  <p>Tertinggi</p>
                  <select id='tertinggi' name='tertinggi'>
                    <option value='template'>Rp</option>
                    <option value='tertinggi'>Rp 10.000.000</option>
                    <option value='tertinggi'>Rp 10.000.000</option>
                    <option value='tertinggi'>Rp 10.000.000</option>
                    <option value='tertinggi'>Rp 10.000.000</option>
                  </select>
                  </div>
                  </div>
                  <div>
                <label for='kamar'>Kamar Tidur</label>
              </div>
              <div className="section">
                <div className="row">
                  <p>Terendah</p>
                  <select id='terendah' name='terendah'>
                    <option value='template'>0</option>
                    <option value='terendah'>1</option>
                    <option value='terendah'>2</option>
                    <option value='terendah'>3</option>
                    <option value='terendah'>4</option>
                  </select>
                  </div>
                  <div className="row">
                  <p>Tertinggi</p>
                  <select id='tertinggi' name='tertinggi'>
                    <option value='template'> </option>
                    <option value='tertinggi'>2</option>
                    <option value='tertinggi'>3</option>
                    <option value='tertinggi'>4</option>
                    <option value='tertinggi'>5</option>
                  </select>
                  </div>
                  </div>
              <div>
                <label for='kamarmandi'>Kamar Mandi</label>
              </div>
              <select id='km' name='km'>
                <option value='template'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
              <div>
                <label for='garasi'>Garasi</label>
              </div>
              <select id='garasi' name='garasi'>
                <option value='template'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
              <div>
                <label for='luas'>Luas</label>
              </div>
              <select id='luas' name='luas'>
                <option value='template'>0</option>
                <option value='1'>25</option>
                <option value='2'>36</option>
                <option value='3'>49</option>
                <option value='4'>64</option>
              </select>
              <div>
                <label for='kondisi'>Kondisi Rumah</label>
              </div>
              <div class="checkbox">
                <div className="item">
                  <input type="checkbox" id="checkbox_1"/>
                  <label for="checkbox_1">Baru dibangun</label>
                </div>
                <div className="item"> 
                  <input type="checkbox" id="checkbox_2"/>
                  <label for="checkbox_2">Sudah lama</label>
                </div>
              </div>

              <div>
                <label for='lokasi'>Lokasi Rumah</label>
              </div>
              <div class="checkbox">
                <div className="item">
                  <input type="checkbox" id="sekolah"/>
                  <label for="sekolah">Dekat sekolah</label>
                </div>
                <div className="item">
                  <input type="checkbox" id="kantor"/>
                  <label for="kantor">Dekat kantor</label>
                  </div> 
                  <div className="item">
                  <input type="checkbox" id="bandara"/>
                  <label for="bandara">Dekat bandara</label>
                  </div>
                </div>
              </div>
          </div>
          <div className='tombol'>
            <input type='reset' id='reset' value='Hapus'></input>
            <input type='submit' id='submit' value='Cari' onClick={closeHandler}></input>
          </div>
        </div>
      </div>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0px;
  background: rgba(28, 28, 28, 0.33);
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  .referensiSection {
    width: 500px;
    background-color: white;
    margin-left: auto;
    margin-top: 10px;
    border-radius: 15px;
    padding: 25px 25px;
    margin: 0 auto;
    .sectionSatu {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0px;
      .title {
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
        margin-bottom: 10px;
      }
      .close-btn {
        font-weight: 100;
        font-size: 40px;
        line-height: 22px;
        color: #b0b0b0;
        cursor: pointer;
      }
    }

    .form {
      padding: 20px 20px;
      border: 1px solid #eaecf0;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      .form-element {
        display: block;
        align-items: center;
        .checkbox{
          width: 450px;
          display: inline;
          cursor: pointer; 
          margin: auto;
          justify-content: space-between;
          .item{
            float: left;
            width: 50%;
            display: flex;
            margin-bottom: 12px;
            input[type="checkbox"]{
              width: 32px;
              height: 25px;
              background: #FFFFFF;
              border: 1px solid #525252;
              border-radius: 5px;
              cursor: pointer;
            }
              label{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                color: #474444;
                align-items: center;
                margin: 0;
              }
              input[type="checkbox"]:checked{
                background-color: #0D3DE5;
              }
          }
        }
        
        label {
          width: 200px;
          height: 27px;
          left: 82px;
          top: 100px;
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
          color: #1c1c1c;
          margin-bottom: 2px;
        }

        .section{
          content: "";
          display: table;
          padding: 6px 15px;
          margin-right: 0px;
          width: 450px;
        }

        .row{
          display: block;
          margin-right: 15px;
          float: left;
          width: 50%;
          p{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 4px;
          }
        }

        select {
          position: relative;
          display: inline-block;
          border: 1px solid #8d93a8;
          padding: 8px 8px;
          border-radius: 10px;
          width: 200px;
          align-items: center;
          margin-bottom: 14px;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #797c86;
        }

        button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          padding: 8px 11px;
          height: 38px;
          background-color: #ffff;
          color: #797c86;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          position: relative;
          display: inline-block;
          border: 1px solid #8d93a8;
          border-radius: 10px;
          margin-right: 10px;
          margin-bottom: 6px;
        }
        button:hover {
          background-color: #0d3de5;
          color: #ffff;
          transition: 0.7s;
        }
      }
    }
    .tombol {
      input[type="reset"]{
        background-color: #ffff;
        color: #0D3DE5;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        position: relative;
        display: inline-block;
        padding: 5px 8px;
        width: 140px;
        height: 45px;
        border: 1px solid #0D3DE5;
        border-radius: 15px;  
        margin-right: 162px;
    }
    input[type="reset"]:hover{
      background-color:#0D3DE5;
      color: #ffff;
      transition: 0.7s;
    }
      input {
        background-color: #0d3de5;
        color: #ffff;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        position: relative;
        display: inline-block;
        padding: 5px 8px;
        width: 140px;
        height: 45px;
        border: 1px solid #0d3de5;
        border-radius: 15px;
      }
      input:hover {
        background-color: #ffff;
        color: #0d3de5;
        transition: 0.7s;
      }
    }
  }
`;
const Nav = styled.nav`
  background: #fff;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 18px;
  margin-top: 10px; 
  width: 400px;
  display: flex;
  justify-content: space-around;
  z-index: 10;
a{
  position: relative;
  width: 200px;
  justify-content: center;
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}

a:after{
    content: "";
    height: 3px;
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: 0.5s;
    background-color: #0D3DE5;
    width: 0;
}

a:hover{
  color: #232323;
  font-weight: 600;
}

a:hover:after{
    width: 100%;
}
;`
export default Filter;

//   gabisa cara biar overflownya hidden sama waktu close buttonnya diclick