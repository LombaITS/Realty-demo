import React from "react";
import styled from "styled-components";
import HeaderText from "../components/HeaderText";
import Breadcrumb from "../components/Breadcrumb";
import pdfExist from "../img/pdfExist.svg";
// import pdfUpload from "../img/pdfUpload.svg";
import addImage from "../img/addImage.svg";
import addvideo from "../img/addVideo.svg";
import { useNavigate } from "react-router-dom";

const AssetDetail = () => {
  const navigate = useNavigate();
  const saveData = () => {
    navigate("/propertisaya");
  };
  return (
    <DetailAsset className='container'>
      <Breadcrumb BreadcrumbText={`Home / Properti / Rumah / Detail`} />

      <HeaderText
        TitleText={`Data Property`}
        DescriptionText={`Silahkan mengisi data property dengan lengkap dan benar`}
      ></HeaderText>
      <div className='formContainer'>
        <div className='title'>Data Properti</div>
        <div className='desc'>
          Mohon mengisi data properti dengan lengkap dan benar
        </div>
        <div className='label'>Alamat</div>
        <div className='alamatContainer'>
          <div className='provinsi'>
            <div className='labelForm'>Provinsi</div>
            <input
              type='text'
              name='provinsi'
              id='provinsi'
              placeholder='Masukkan Provinsi'
              value={`Jawa Barat`}
            />
          </div>
          <div className='kabupaten'>
            <div className='labelForm'>Kabupaten</div>
            <input
              type='text'
              name='kabupaten'
              id='kabupaten'
              placeholder='Masukkan Kabupaten'
              value={`Bogor`}
            />
          </div>
          <div className='kecamatan'>
            <div className='labelForm'>Kecamatan</div>
            <input
              type='text'
              name='kecamatan'
              id='kecamatan'
              placeholder='Masukkan Kecamatan'
              value={`Parung`}
            />
          </div>
        </div>
        <textarea
          name='alamatLengkap'
          id='alamatLengkap'
          defaultValue={`Jalan Raya Bogor, Jawa Barat`}
        ></textarea>

        <div className='label'>Dokumen</div>
        <div className='labelForm'>Sertifikat Properti</div>
        <div className='labelFormDecs'>*Surat Hak Milik/Hak Guna Bangunan</div>
        <label for='inputTag'>
          <img src={pdfExist} alt='File Upload' />
          <br />
          Surat Hak Milik
          <input className='hidden' id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <div className='labelForm'>Surat PBB</div>
        <label for='inputTag'>
          <img src={pdfExist} alt='File Upload' />
          <br />
          Surat PBB
          <input className='hidden' id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <div className='labelForm'>Pembayaran Tagihan</div>
        <label for='inputTag'>
          <img src={pdfExist} alt='File Upload' />
          <br />
          Surat Pembayaran Tagihan
          <input className='hidden' id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <div className='labelForm'>Gambar Property</div>
        <label for='inputTag'>
          <img src={addImage} alt='File Upload' />
          <br />
          Tambah Gambar Property
          <input id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <div className='labelForm'>Video Property</div>
        <label for='inputTag'>
          <img src={addvideo} alt='File Upload' />
          <br />
          Tambah Gambar Property
          <input id='inputTag' type='file' />
          <br />
          <span id='imageName'></span>
        </label>

        <div className='alamatContainer'>
          <div className='provinsi'>
            <div className='labelForm'>Luas</div>
            <input
              type='text'
              name='provinsi'
              id='provinsi'
              placeholder='Masukkan Provinsi'
              value={`1400 m2`}
            />
          </div>
          <div className='kabupaten'>
            <div className='labelForm'>Tahun Dibangun</div>
            <input
              type='text'
              name='kabupaten'
              id='kabupaten'
              placeholder='Masukkan Kabupaten'
              value={`2012`}
            />
          </div>
          <div className='kecamatan'>
            <div className='labelForm'>Sertifikat</div>
            <input
              type='text'
              name='kecamatan'
              id='kecamatan'
              placeholder='Masukkan Kecamatan'
              value={`Hak Milik`}
            />
          </div>
        </div>

        <div className='alamatContainer mt-4'>
          <div className='provinsi'>
            <div className='labelForm'>Toilet</div>
            <input
              type='text'
              name='provinsi'
              id='provinsi'
              placeholder='Masukkan Jumlah Toilet'
            />
          </div>
          <div className='kamartidur'>
            <div className='labelForm'>Kamar Tidur</div>
            <input
              type='text'
              name='kabupaten'
              id='kabupaten'
              placeholder='Masukkan Jumlah Kamar Tidur'
            />
          </div>
          <div className='kecamatan'>
            <div className='labelForm'>Garasi</div>
            <input
              type='text'
              name='kecamatan'
              id='kecamatan'
              placeholder='Masukkan Jumlah slot mobil'
            />
          </div>
        </div>

        <div className='alamatContainer mt-4'>
          <div className='provinsi'>
            <div className='labelForm'>Akses PDAM</div>
            <input
              type='text'
              name='provinsi'
              id='provinsi'
              placeholder='Ya/Tidak'
            />
          </div>
          <div className='kamartidur'>
            <div className='labelForm'>Akses Mobil</div>
            <input
              type='text'
              name='kabupaten'
              id='kabupaten'
              placeholder='Ya/Tidak'
            />
          </div>
          <div className='kamartidur'>
            <div className='labelForm'>Harga Jual property</div>
            <input
              type='text'
              name='kabupaten'
              id='kabupaten'
              placeholder='Ya/Masukkan Harga Jual Property'
            />
          </div>
        </div>

        <ButtonContainer>
          <ButtonStyled className='primary' onClick={saveData}>
            Selanjutnya
          </ButtonStyled>
        </ButtonContainer>
      </div>
    </DetailAsset>
  );
};

const DetailAsset = styled.div`
  margin-bottom: 50px;
  .hidden {
    display: none;
  }

  .formContainer {
    padding: 30px 60px;
    background: #ffffff;
    box-shadow: 0px 16px 30px rgba(128, 161, 193, 0.2);
    border-radius: 15px;
    margin-top: 30px;
    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #1c1c1c;
      margin-bottom: 8px;
    }
    .desc {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #797c86;
    }

    .label {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    .labelForm {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #797c86;
      margin-bottom: 10px;
    }

    .labelFormDecs {
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
      color: #aeaeae;
      margin-top: -5px;
    }

    input {
      width: 100%;
      background: #f5f7fa;
      border-radius: 15px;
      padding: 16px 16px;
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: black;
    }

    textarea {
      width: 100%;
      height: 102px;
      background: #f5f7fa;
      border-radius: 15px;
      padding: 16px 16px;
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: black;
      margin-top: 15px;
    }

    label {
      width: 100%;
      text-align: center;
      background: #f5f7fa;
      border-radius: 15px;
      padding: 20px 40px;
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #797c86;
      margin-bottom: 20px;
    }

    .alamatContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      div {
        width: 100%;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const ButtonStyled = styled.div`
  padding: 14px 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  border-radius: 15px;
  cursor: pointer;
  &.secondary {
    color: #0d3de5;
    background: #ffffff;
    border: 1px solid #0d3de5;
  }
  &.primary {
    color: white;
    background: #0d3de5;
  }
`;
export default AssetDetail;
