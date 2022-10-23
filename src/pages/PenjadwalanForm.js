import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import HeaderText from "../components/HeaderText";
import ScrollTop from "../components/ScrollTop";

const PenjadwalanForm = () => {
  const navigate = useNavigate();

  const nextHandler = () => {
    navigate("/penjadwalanberhasil");
  };
  return (
    <div className='container'>
      <ScrollTop />
      <Breadcrumb BreadcrumbText={`Home / Properti / Rumah / Jadwalkan`} />
      <HeaderText
        TitleText={`Jadwalkan Tour`}
        DescriptionText={`Anda dapat menjadwalkan tour dengan mengisi form berikut ini`}
      ></HeaderText>
      <FormContainer>
        <div>
          <FormHeader>
            <div className='judulForm'>Data Diri</div>
            <div className='deskripsiForm'>
              Mohon mengisi data diri Anda dengan lengkap dan benar
            </div>
          </FormHeader>
          <FormList>
            <FormItem>
              <div className='labelForm'>Nama Lengkap</div>
              <div className='inputContainer'>
                <input
                  type='text'
                  name='nama'
                  id='nama'
                  placeholder='Masukkan Nama Anda'
                />
              </div>
            </FormItem>
            <div className='twoForm'>
              <FormItem>
                <div className='labelForm'>Email</div>
                <div className='inputContainer'>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    placeholder='Masukkan Email Anda'
                  />
                </div>
              </FormItem>
              <FormItem>
                <div className='labelForm'>Nomor Handphone</div>
                <div className='inputContainer'>
                  <input
                    type='text'
                    name='nomor'
                    id='nomor'
                    placeholder='Masukkan Nomor Handphone Anda'
                  />
                </div>
              </FormItem>
            </div>
            <FormItem>
              <div className='labelForm'>
                Notes <span>(Tidak wajib)</span>
              </div>
              <div className='inputContainer'>
                <input
                  type='text'
                  name='nomor'
                  id='nomor'
                  placeholder='Masukkan Nomor Handphone Anda'
                />
              </div>
            </FormItem>
          </FormList>
        </div>

        <div>
          <FormHeader>
            <div className='judulForm'>Atur Jadwal</div>
            <div className='deskripsiForm'>
              Pilih waktu yang akan dijadikan jadwal tour
            </div>
          </FormHeader>
          <FormList>
            <div className='twoForm'>
              <FormItem>
                <div className='labelForm'>Tanggal</div>
                <div className='inputContainer'>
                  <input type='date' name='date' id='date' />
                </div>
              </FormItem>
              <FormItem>
                <div className='labelForm'>Waktu</div>
                <div className='inputContainer'>
                  <input type='time' name='time' id='time' />
                </div>
              </FormItem>
            </div>
          </FormList>
        </div>

        <div>
          <FormHeader>
            <div className='judulForm'>Metode Tour</div>
            <div className='deskripsiForm'>
              Pilih bagaimana Anda akan melakukan tour
            </div>
          </FormHeader>
          <FormList>
            <div className='twoForm'>
              <FormItem>
                <div className='inputContainerRadio'>
                  <input type='radio' name='tour' id='tour1' />
                  <svg
                    width='38'
                    height='35'
                    viewBox='0 0 38 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M8.25352 18.2295H3.57227L19.1764 5.10449L34.7806 18.2295H30.0993V29.8962H20.7368V21.1462H17.616V29.8962H8.25352V18.2295ZM26.9785 15.5899L19.1764 9.02741L11.3743 15.5899V26.9795H14.4952V18.2295H23.8577V26.9795H26.9785V15.5899Z'
                      fill='#0D3DE5'
                    />
                  </svg>
                  <div className='jenisTour'>Tour Langsung</div>
                </div>
              </FormItem>
              <FormItem>
                <div className='inputContainerRadio'>
                  <input type='radio' name='tour' id='tour2' />
                  <svg
                    width='38'
                    height='35'
                    viewBox='0 0 38 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M8.25352 18.2295H3.57227L19.1764 5.10449L34.7806 18.2295H30.0993V29.8962H20.7368V21.1462H17.616V29.8962H8.25352V18.2295ZM26.9785 15.5899L19.1764 9.02741L11.3743 15.5899V26.9795H14.4952V18.2295H23.8577V26.9795H26.9785V15.5899Z'
                      fill='#0D3DE5'
                    />
                  </svg>
                  <div className='jenisTour'>Video Call</div>
                </div>
              </FormItem>
            </div>
          </FormList>
        </div>
        <div className='button'>
          <ButtonSelanjutnya onClick={nextHandler}>
            Selanjutnya
          </ButtonSelanjutnya>
        </div>
      </FormContainer>
    </div>
  );
};

const FormContainer = styled.div`
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 0px 6px 10px #ddebff;
  border-radius: 15px;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 30px;
`;

const FormHeader = styled.div`
  margin-bottom: 20px;
  .judulForm {
    font-weight: 600;
    font-size: 20px;
    color: #1c1c1c;
  }
  .deskripsiForm {
    font-weight: 400;
    font-size: 18px;
    color: #797c86;
    margin-top: 10px;
  }
`;

const FormList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .twoForm {
    display: flex;
    gap: 20px;
    flex-basis: 100%;
    div {
      width: 100%;
    }
  }
`;

const FormItem = styled.div`
  .labelForm {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
    span {
      color: #797c86;
    }
  }
  .inputContainer {
    padding: 20px 40px;
    background: #f5f7fa;
    border-radius: 15px;
    margin-top: 10px;
    input {
      width: 100%;
      background: #f5f7fa;
      /* background: blue; */
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #797c86;
      &:focus {
        outline-color: #f5f7fa;
        color: black;
      }
    }
  }

  .inputContainerRadio {
    padding: 20px 40px;
    display: flex;
    gap: 20px;
    align-items: center;
    background: #ffffff;
    border: 1px solid #dadada;
    border-radius: 15px;
    border-radius: 15px;
    margin-top: 10px;
  }
`;

const ButtonSelanjutnya = styled.div`
  width: 170px;
  padding: 18px 0px;
  background: #0d3de5;
  border-radius: 15px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  cursor: pointer;
`;

export default PenjadwalanForm;
