import React from "react";
import styled from "styled-components";
import ScrollTop from "./ScrollTop";

const Referensi = ({ referensiUser, setReferensiUser }) => {
  const closeHandler = () => {
    setReferensiUser(!referensiUser);
  };
  return (
    <ReferensiContainer>
      <ScrollTop />
      <div className='container'>
        <div className='referensiSection'>
          <div className='sectionSatu'>
            <div className='kosong'></div>
            <div className='title'>Referensi</div>
            <div className='close-btn' onClick={closeHandler}>
              &times;
            </div>
          </div>
          <div className='sectionSatu text-danger mb-2'>
            *sistem ini hanya frontend prototype
          </div>
          <div class='form'>
            <div class='form-element'>
              <div>
                <label for='provinsi'>Provinsi</label>
              </div>
              <select id='provinsi' name='provinsi'>
                <option value='provinsi'>Pilih Provinsi</option>
                <option value='jateng'>jateng</option>
                <option value='jatim'>jatim</option>
                <option value='jabar'>jabar</option>
                <option value='jakarta'>jakarta</option>
              </select>
              <div>
                <label for='kabupaten'>Kabupaten</label>
              </div>
              <select id='kabupaten' name='kabupaten'>
                <option value='kabupaten'>Pilih Kabupaten</option>
                <option value='jateng'>jateng</option>
                <option value='jatim'>jatim</option>
                <option value='jabar'>jabar</option>
                <option value='jakarta'>jakarta</option>
              </select>
              <div>
                <label for='lokasi'>Lokasi</label>
              </div>
              <div id='buttons'>
                {/* gimana caranya biar buttonnya bisa multiple select kek check box??? */}
                <button class='button-value'>Dekat Bandara</button>
                <button class='button-value'>Dekat Sekolah</button>
                <button class='button-value'>Dekat Pusat Perbelanjaan</button>
                <button class='button-value'>Perumahan</button>
                <button class='button-value'>Pusat Kota</button>
                <button class='button-value'>Dekat Jalan tol</button>
                <button class='button-value'>Dekat Rumah Sakit</button>
              </div>
              <div>
                <label for='fasilitas'>Fasilitas</label>
              </div>
              <div id='buttons'>
                <button class='button-value'>Garasi</button>
                <button class='button-value'>Kolam Renang</button>
                <button class='button-value'>Taman</button>
                <button class='button-value'>Gym</button>
              </div>
              <div>
                <label for='tipe'>Tipe</label>
              </div>
              <div id='buttons'>
                <button class='button-value'>Rumah Keluarga</button>
                <button class='button-value'>Rumah Sendiri</button>
              </div>
            </div>
          </div>
          <div className='tombol'>
            <input
              type='submit'
              id='submit'
              value='Submit'
              onClick={closeHandler}
            ></input>
          </div>
        </div>
      </div>
    </ReferensiContainer>
  );
};

const ReferensiContainer = styled.div`
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
        label {
          width: 73px;
          height: 27px;
          left: 82px;
          top: 100px;
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
          color: #1c1c1c;
        }
        select {
          position: relative;
          display: inline-block;
          border: 1px solid #8d93a8;
          padding: 8px 8px;
          border-radius: 10px;
          width: 410px;
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
          margin-bottom: 8px;
        }
        button:hover {
          background-color: #0d3de5;
          color: #ffff;
          transition: 0.7s;
        }
        input[type="submit"] {
          background-color: #0d3de5;
          color: #ffff;
        }
      }
    }
    .tombol {
      button {
        background-color: #ffff;
        color: #0d3de5;
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
        margin-right: 162px;
      }
      button:hover {
        background-color: #0d3de5;
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

export default Referensi;

//   gabisa cara biar overflownya hidden sama waktu close buttonnya diclick
