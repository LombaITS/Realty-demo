import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Import Component
import Breadcrumb from "../components/Breadcrumb";
import ScrollTop from "../components/ScrollTop";

// Import Image
import RumahView1 from "../img/RumahView1.png";
import RumahView2 from "../img/RumahView2.png";
import RumahView3 from "../img/RumahView3.png";
// import RumahTour from "../img/videoTour.png";
// import MapLocation from "../img/map.png";
import ChatIcon from "../img/chat.svg";
import { useState } from "react";

// Todo Nanti yang SVG dibuatin satu file untuk satu SVG. Truss di Import ke File yang ini yaa!

const DetailProperty = () => {
  let navigate = useNavigate();
  const jadwalHandler = () => {
    navigate("/penjadwalan");
  };

  const [videoTypes, setVideoTypes] = useState("video");

  const beliHandler = () => {
    navigate("/pembelian");
  };

  const videoHanlder = (section) => {
    console.log(section);
    setVideoTypes(`${section}`);
  };

  return (
    <div className='container'>
      <ScrollTop />
      <Breadcrumb BreadcrumbText={`Home / Properti / Detail Properti`} />
      <TitleProperty>
        <h1>Luxury Home Tipe A52</h1>
        <h2>Rp 200 JT</h2>
      </TitleProperty>
      <AlamatProperty>
        <AlamatPropertyItem>
          <svg
            width='27'
            height='28'
            viewBox='0 0 27 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.5 2.75C9.14625 2.75 5.625 6.27125 5.625 10.625C5.625 16.5312 13.5 25.25 13.5 25.25C13.5 25.25 21.375 16.5312 21.375 10.625C21.375 6.27125 17.8538 2.75 13.5 2.75ZM7.875 10.625C7.875 7.52 10.395 5 13.5 5C16.605 5 19.125 7.52 19.125 10.625C19.125 13.865 15.885 18.7137 13.5 21.74C11.16 18.7362 7.875 13.8313 7.875 10.625ZM10.6875 10.625C10.6875 9.0717 11.9467 7.8125 13.5 7.8125C14.5048 7.8125 15.4333 8.34856 15.9357 9.21875C16.4381 10.0889 16.4381 11.1611 15.9357 12.0312C15.4333 12.9014 14.5048 13.4375 13.5 13.4375C11.9467 13.4375 10.6875 12.1783 10.6875 10.625Z'
              fill='#797C86'
            />
          </svg>
          <p>Surabaya, Jawa Timur</p>
        </AlamatPropertyItem>
        <AlamatPropertyItem>
          <svg
            width='27'
            height='28'
            viewBox='0 0 27 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M21.285 6.13625C21.06 5.4725 20.43 5 19.6875 5H7.3125C6.57 5 5.95125 5.4725 5.715 6.13625L3.375 12.875V21.875C3.375 22.4937 3.88125 23 4.5 23H5.625C6.24375 23 6.75 22.4937 6.75 21.875V20.75H20.25V21.875C20.25 22.4937 20.7563 23 21.375 23H22.5C23.1187 23 23.625 22.4937 23.625 21.875V12.875L21.285 6.13625ZM7.70625 7.25H19.2825L20.4975 10.7487H6.49125L7.70625 7.25ZM5.625 18.5H21.375V12.875H5.625V18.5ZM8.4375 14C7.50552 14 6.75 14.7555 6.75 15.6875C6.75 16.6195 7.50552 17.375 8.4375 17.375C9.36948 17.375 10.125 16.6195 10.125 15.6875C10.125 14.7555 9.36948 14 8.4375 14ZM16.875 15.6875C16.875 14.7555 17.6305 14 18.5625 14C19.4945 14 20.25 14.7555 20.25 15.6875C20.25 16.6195 19.4945 17.375 18.5625 17.375C17.6305 17.375 16.875 16.6195 16.875 15.6875Z'
              fill='#797C86'
            />
          </svg>

          <p>20 menit ke Bandara Halim Perdana Kusuma</p>
        </AlamatPropertyItem>
      </AlamatProperty>
      <FasilitasChat>
        <Fasilitas>
          <FasilitasItem>
            <svg
              width='32'
              height='25'
              viewBox='0 0 32 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M31.6667 12.5C31.6667 10.6143 30.2417 9.07143 28.5 9.07143V3.92857C28.5 2.04286 27.075 0.5 25.3333 0.5H6.33333C4.59167 0.5 3.16667 2.04286 3.16667 3.92857V9.07143C1.425 9.07143 0 10.6143 0 12.5V21.0714H2.10583L3.16667 24.5H4.75L5.81083 21.0714H25.8717L26.9167 24.5H28.5L29.5608 21.0714H31.6667V12.5ZM25.3333 9.07143H17.4167V3.92857H25.3333V9.07143ZM6.33333 3.92857H14.25V9.07143H6.33333V3.92857ZM3.16667 12.5H28.5V17.6429H3.16667V12.5Z'
                fill='#797C86'
              />
            </svg>
            <div className='fasilitasText'>4 Kamar</div>
          </FasilitasItem>
          <FasilitasItem>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.66709 8.89961C7.99257 8.89961 9.06709 7.82509 9.06709 6.49961C9.06709 5.17413 7.99257 4.09961 6.66709 4.09961C5.34161 4.09961 4.26709 5.17413 4.26709 6.49961C4.26709 7.82509 5.34161 8.89961 6.66709 8.89961Z'
                fill='#797C86'
              />
              <path
                d='M22.2665 13.7V3.896C22.2665 2.024 20.7425 0.5 18.8705 0.5C17.9705 0.5 17.1065 0.86 16.4705 1.496L14.9705 2.996C14.7785 2.936 14.5745 2.9 14.3585 2.9C13.8785 2.9 13.4345 3.044 13.0625 3.284L16.3745 6.596C16.6145 6.224 16.7585 5.78 16.7585 5.3C16.7585 5.084 16.7225 4.892 16.6745 4.688L18.1745 3.188C18.3545 3.008 18.6065 2.9 18.8705 2.9C19.4225 2.9 19.8665 3.344 19.8665 3.896V13.7H11.6465C11.2865 13.448 10.9625 13.16 10.6625 12.836L8.9825 10.976C8.7545 10.724 8.4665 10.52 8.1545 10.376C7.7825 10.196 7.3745 10.1 6.9545 10.1C5.4665 10.112 4.2665 11.312 4.2665 12.8V13.7H0.666504V20.9C0.666504 22.22 1.7465 23.3 3.0665 23.3C3.0665 23.96 3.6065 24.5 4.2665 24.5H21.0665C21.7265 24.5 22.2665 23.96 22.2665 23.3C23.5865 23.3 24.6665 22.22 24.6665 20.9V13.7H22.2665ZM22.2665 20.9H3.0665V16.1H22.2665V20.9Z'
                fill='#797C86'
              />
            </svg>
            <div className='fasilitasText'>1 Toilet</div>
          </FasilitasItem>
          <FasilitasItem>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.1565 20.99L19.5665 22.58L18.5015 21.515L20.0915 19.925L17.1815 17.015L15.5915 18.605L14.5265 17.54L16.1165 15.95L13.2065 13.04L11.6165 14.63L10.5515 13.565L12.1415 11.975L9.2165 9.05L7.6265 10.64L6.5615 9.575L8.1515 7.985L5.2415 5.075L3.6515 6.665L2.5865 5.6L4.1765 4.01L0.666504 0.5V21.5C0.666504 23.15 2.0165 24.5 3.6665 24.5H24.6665L21.1565 20.99ZM5.1665 20V11.36L13.8065 20H5.1665Z'
                fill='#797C86'
              />
            </svg>
            <div className='fasilitasText'>1200 m2</div>
          </FasilitasItem>
          <FasilitasItem>
            <svg
              width='22'
              height='25'
              viewBox='0 0 22 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_1367_5274)'>
                <path
                  d='M6.6665 0.5C7.49619 0.5 8.1665 1.17031 8.1665 2V3.5H14.1665V2C14.1665 1.17031 14.8368 0.5 15.6665 0.5C16.4962 0.5 17.1665 1.17031 17.1665 2V3.5H19.4165C20.6587 3.5 21.6665 4.50781 21.6665 5.75V8H0.666504V5.75C0.666504 4.50781 1.67432 3.5 2.9165 3.5H5.1665V2C5.1665 1.17031 5.83682 0.5 6.6665 0.5ZM0.666504 9.5H21.6665V22.25C21.6665 23.4922 20.6587 24.5 19.4165 24.5H2.9165C1.67432 24.5 0.666504 23.4922 0.666504 22.25V9.5ZM3.6665 13.25V14.75C3.6665 15.1625 4.004 15.5 4.4165 15.5H5.9165C6.329 15.5 6.6665 15.1625 6.6665 14.75V13.25C6.6665 12.8375 6.329 12.5 5.9165 12.5H4.4165C4.004 12.5 3.6665 12.8375 3.6665 13.25ZM9.6665 13.25V14.75C9.6665 15.1625 10.004 15.5 10.4165 15.5H11.9165C12.329 15.5 12.6665 15.1625 12.6665 14.75V13.25C12.6665 12.8375 12.329 12.5 11.9165 12.5H10.4165C10.004 12.5 9.6665 12.8375 9.6665 13.25ZM16.4165 12.5C16.004 12.5 15.6665 12.8375 15.6665 13.25V14.75C15.6665 15.1625 16.004 15.5 16.4165 15.5H17.9165C18.329 15.5 18.6665 15.1625 18.6665 14.75V13.25C18.6665 12.8375 18.329 12.5 17.9165 12.5H16.4165ZM3.6665 19.25V20.75C3.6665 21.1625 4.004 21.5 4.4165 21.5H5.9165C6.329 21.5 6.6665 21.1625 6.6665 20.75V19.25C6.6665 18.8375 6.329 18.5 5.9165 18.5H4.4165C4.004 18.5 3.6665 18.8375 3.6665 19.25ZM10.4165 18.5C10.004 18.5 9.6665 18.8375 9.6665 19.25V20.75C9.6665 21.1625 10.004 21.5 10.4165 21.5H11.9165C12.329 21.5 12.6665 21.1625 12.6665 20.75V19.25C12.6665 18.8375 12.329 18.5 11.9165 18.5H10.4165ZM15.6665 19.25V20.75C15.6665 21.1625 16.004 21.5 16.4165 21.5H17.9165C18.329 21.5 18.6665 21.1625 18.6665 20.75V19.25C18.6665 18.8375 18.329 18.5 17.9165 18.5H16.4165C16.004 18.5 15.6665 18.8375 15.6665 19.25Z'
                  fill='#797C86'
                />
              </g>
              <defs>
                <clipPath id='clip0_1367_5274'>
                  <rect
                    width='21'
                    height='24'
                    fill='white'
                    transform='translate(0.666504 0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
            <div className='fasilitasText'>Tahun Bangun 2001</div>
          </FasilitasItem>
        </Fasilitas>
        <Chat>
          <img src={ChatIcon} alt='Chat Icon' />
          <div className='chatText'>Chat</div>
        </Chat>
      </FasilitasChat>
      <ImageGallery>
        <div className='image1'>
          <img src={RumahView1} alt='Rumah View 1' />
          <div className='streetView'>
            <svg
              width='28'
              height='27'
              viewBox='0 0 28 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.38916 13.5C3.33541 8.56125 8.13916 5.0625 13.7642 5.0625C19.3892 5.0625 24.1929 8.56125 26.1392 13.5C24.1929 18.4388 19.3892 21.9375 13.7642 21.9375C8.13916 21.9375 3.33541 18.4388 1.38916 13.5ZM23.6867 13.5C21.8304 9.70875 18.0279 7.3125 13.7642 7.3125C9.50041 7.3125 5.69791 9.70875 3.84166 13.5C5.69791 17.2913 9.48916 19.6875 13.7642 19.6875C18.0392 19.6875 21.8304 17.2913 23.6867 13.5ZM13.7642 10.6875C15.3167 10.6875 16.5767 11.9475 16.5767 13.5C16.5767 15.0525 15.3167 16.3125 13.7642 16.3125C12.2117 16.3125 10.9517 15.0525 10.9517 13.5C10.9517 11.9475 12.2117 10.6875 13.7642 10.6875ZM8.70166 13.5C8.70166 10.71 10.9742 8.4375 13.7642 8.4375C16.5542 8.4375 18.8267 10.71 18.8267 13.5C18.8267 16.29 16.5542 18.5625 13.7642 18.5625C10.9742 18.5625 8.70166 16.29 8.70166 13.5Z'
                fill='#766969'
              />
            </svg>
            <div className='streetviewText'>Street View</div>
          </div>
        </div>
        <div className='image2'>
          <img src={RumahView2} alt='Rumah View 1' />
          <div className='more'>
            <img src={RumahView3} alt='Rumah View 1' />
            <div className='more-image'>5+</div>
          </div>
        </div>
      </ImageGallery>
      <SectionTiga>
        <SectionDeskripsi>
          <SectionHeader>Deskripsi</SectionHeader>
          <div className='textDescription'>
            Properti yang dibangun pada tahun 2021 ini terletak di daerah
            Surabaya yang menawarkan akomodasi yang luar biasa dan chic dengan
            kolam renang outdoor pribadi, 4 kamar mandi, 1 toilet dan memiliki
            halaman yang luas. Dibutuhkan sekitar 20 menit berkendara dari
            properti ke Green Island Primary School. Bandara Halim Perdana
            Kusuma dapat dicapai dalam waktu 30 menit berkendara dengan mobil.
            Properti ini juga memiliki sertifikat hak milik, surat PBB, dan
            pembayaran tagihan.
          </div>
          <div className='lihatLebih'>Lihat Lebih</div>
        </SectionDeskripsi>
        <SectionPenjadwalan>
          <div className='penjadwalanTitle'>Jadwalkan Tour</div>
          <div className='availableDate'>
            <DateAvailable>
              <div className='hari'>Kamis</div>
              <div className='tanggal'>28</div>
              <div className='bulan'>JUL</div>
            </DateAvailable>
            <DateAvailable>
              <div className='hari'>Jumat</div>
              <div className='tanggal'>29</div>
              <div className='bulan'>JUL</div>
            </DateAvailable>
          </div>
          <div className='buttonPenjadwalan' onClick={jadwalHandler}>
            Jadwalkan Tour
          </div>
          <div className='atau'>atau</div>
          <div className='buttonBeli' onClick={beliHandler}>
            Beli
          </div>
        </SectionPenjadwalan>
      </SectionTiga>
      <SectionEmpat>
        <Surat>
          <svg
            width='47'
            height='46'
            viewBox='0 0 47 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.18567 7.66732C8.18567 5.55898 9.8915 3.83398 11.9998 3.83398H27.3332L38.8332 15.334V38.334C38.8332 40.4423 37.1082 42.1673 34.9998 42.1673H11.9807C9.87234 42.1673 8.1665 40.4423 8.1665 38.334L8.18567 7.66732ZM25.4165 6.70898V17.2507H35.9582L25.4165 6.70898Z'
              fill='#3151B7'
            />
          </svg>
          <div className='suratText'>Sertifikat Hak Milik</div>
        </Surat>
        <Surat>
          <svg
            width='47'
            height='46'
            viewBox='0 0 47 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.18567 7.66732C8.18567 5.55898 9.8915 3.83398 11.9998 3.83398H27.3332L38.8332 15.334V38.334C38.8332 40.4423 37.1082 42.1673 34.9998 42.1673H11.9807C9.87234 42.1673 8.1665 40.4423 8.1665 38.334L8.18567 7.66732ZM25.4165 6.70898V17.2507H35.9582L25.4165 6.70898Z'
              fill='#3151B7'
            />
          </svg>
          <div className='suratText'>Surat PBB</div>
        </Surat>
        <Surat>
          <svg
            width='47'
            height='46'
            viewBox='0 0 47 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.18567 7.66732C8.18567 5.55898 9.8915 3.83398 11.9998 3.83398H27.3332L38.8332 15.334V38.334C38.8332 40.4423 37.1082 42.1673 34.9998 42.1673H11.9807C9.87234 42.1673 8.1665 40.4423 8.1665 38.334L8.18567 7.66732ZM25.4165 6.70898V17.2507H35.9582L25.4165 6.70898Z'
              fill='#3151B7'
            />
          </svg>
          <div className='suratText'>Pembayaran Tagihan</div>
        </Surat>
      </SectionEmpat>
      <SectionLima>
        <SectionHeader>Detail</SectionHeader>
        <Details>
          <BoxContainer>
            <div className='atas'>
              <div className='detailTitle'>Property ID</div>
              <div className='detailDesc'>H278124</div>
            </div>
            <div className='bawah'>
              <div className='detailTitle'>Toilet</div>
              <div className='detailDesc'>4 Ruangan</div>
            </div>
          </BoxContainer>
          <BoxContainer>
            <div className='atas'>
              <div className='detailTitle'>Harga</div>
              <div className='detailDesc'>Rp200.000.000</div>
            </div>
            <div className='bawah'>
              <div className='detailTitle'>Kamar</div>
              <div className='detailDesc'>2 Ruangan</div>
            </div>
          </BoxContainer>
          <BoxContainer>
            <div className='atas'>
              <div className='detailTitle'>Luas</div>
              <div className='detailDesc'>3600 m2</div>
            </div>
            <div className='bawah'>
              <div className='detailTitle'>Akses Jalan</div>
              <div className='detailDesc'>Roda 4/Roda 2</div>
            </div>
          </BoxContainer>
          <BoxContainer>
            <div className='atas'>
              <div className='detailTitle'>Dibangun</div>
              <div className='detailDesc'>2020-01-22</div>
            </div>
            <div className='bawah'>
              <div className='detailTitle'>Sertifikat</div>
              <div className='detailDesc'>SHM</div>
            </div>
          </BoxContainer>
          <BoxContainer>
            <div className='atas'>
              <div className='detailTitle'>PDAM</div>
              <div className='detailDesc'>Ada</div>
            </div>
            <div className='bawah'>
              <div className='detailTitle'>Listrik</div>
              <div className='detailDesc'>900 Watt</div>
            </div>
          </BoxContainer>
        </Details>
      </SectionLima>
      <SectionEnam>
        <SectionHeader>Video Tour</SectionHeader>
        <div className='videoType'>
          <div
            className={`video tourProperty ${
              videoTypes === "video" ? "active" : ""
            }`}
            onClick={() => videoHanlder("video")}
          >
            Video
          </div>
          <div
            className={`tour tourProperty ${
              videoTypes === "tour" ? "active" : ""
            }  `}
            onClick={() => videoHanlder("tour")}
          >
            3D Tour
          </div>
        </div>
        <div className='imageTour'>
          {videoTypes === "video" ? (
            <iframe
              width='100%'
              height='500px'
              src='https://youtube.com/embed/0P64HU-6KCc'
              title='videotour'
            ></iframe>
          ) : (
            <iframe
              src={`https://my.matterport.com/show/?m=EAwuLRxafYg`}
              width='100%'
              height='500px'
              frameBorder='0'
              title='360'
            ></iframe>
          )}
        </div>
      </SectionEnam>
      <SectionTujuh>
        <SectionHeader>Location</SectionHeader>
        <div className='alamatLengkap'>
          Jl. Arief Rahman Hakim, Keputih gang IC no.7A, Surabaya, Jawa Timur
        </div>
        <div className='mapLocation'>
          {/* Ini Juga masih image dulu, ntar cari plugin map */}
          {/* <img src={MapLocation} alt='Map Location' /> */}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.6403667640202!2d112.73269336772266!3d-7.322330499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbcc00d2f29f%3A0x90772c67667df2e6!2sMAPS%20by%20MAPALSA!5e0!3m2!1sen!2sid!4v1664787717722!5m2!1sen!2sid'
            referrerPolicy='no-referrer-when-downgrade'
            title='map'
          ></iframe>
        </div>
      </SectionTujuh>
      <SectionDelapan>
        <SectionHeader>Area Sekitar</SectionHeader>
        <div className='areaSekitar'>
          <div className='headerArea'>
            <div className='title'>Education</div>
            <div className='viewAll'>View All</div>
          </div>
          <div className='listArea'>
            <div className='sectionLeft'>
              <SekitarList>
                <div className='iconArea'>
                  <svg
                    width='34'
                    height='33'
                    viewBox='0 0 34 33'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M17 4.125L1.875 12.375L7.375 15.3725V23.6225L17 28.875L26.625 23.6225V15.3725L29.375 13.8738V23.375H32.125V12.375L17 4.125ZM26.3775 12.375L17 17.49L7.6225 12.375L17 7.26L26.3775 12.375ZM17 25.74L23.875 21.9862V16.8713L17 20.625L10.125 16.8713V21.9862L17 25.74Z'
                      fill='#756868'
                    />
                  </svg>
                </div>
                <div className='info'>
                  <div className='namaArea'>
                    Green Island Primary School (2.0 km)
                  </div>
                  <div className='rate'>4.5/5 (100 review)</div>
                </div>
              </SekitarList>
              <SekitarList>
                <div className='iconArea'>
                  <svg
                    width='34'
                    height='33'
                    viewBox='0 0 34 33'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M17 4.125L1.875 12.375L7.375 15.3725V23.6225L17 28.875L26.625 23.6225V15.3725L29.375 13.8738V23.375H32.125V12.375L17 4.125ZM26.3775 12.375L17 17.49L7.6225 12.375L17 7.26L26.3775 12.375ZM17 25.74L23.875 21.9862V16.8713L17 20.625L10.125 16.8713V21.9862L17 25.74Z'
                      fill='#756868'
                    />
                  </svg>
                </div>
                <div className='info'>
                  <div className='namaArea'>
                    Green Island Primary School (2.0 km)
                  </div>
                  <div className='rate'>4.5/5 (100 review)</div>
                </div>
              </SekitarList>
            </div>
            <div className='sectionRight'>
              <SekitarList>
                <div className='iconArea'>
                  <svg
                    width='34'
                    height='33'
                    viewBox='0 0 34 33'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M17 4.125L1.875 12.375L7.375 15.3725V23.6225L17 28.875L26.625 23.6225V15.3725L29.375 13.8738V23.375H32.125V12.375L17 4.125ZM26.3775 12.375L17 17.49L7.6225 12.375L17 7.26L26.3775 12.375ZM17 25.74L23.875 21.9862V16.8713L17 20.625L10.125 16.8713V21.9862L17 25.74Z'
                      fill='#756868'
                    />
                  </svg>
                </div>
                <div className='info'>
                  <div className='namaArea'>
                    Green Island Primary School (2.0 km)
                  </div>
                  <div className='rate'>4.5/5 (100 review)</div>
                </div>
              </SekitarList>
              <SekitarList>
                <div className='iconArea'>
                  <svg
                    width='34'
                    height='33'
                    viewBox='0 0 34 33'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M17 4.125L1.875 12.375L7.375 15.3725V23.6225L17 28.875L26.625 23.6225V15.3725L29.375 13.8738V23.375H32.125V12.375L17 4.125ZM26.3775 12.375L17 17.49L7.6225 12.375L17 7.26L26.3775 12.375ZM17 25.74L23.875 21.9862V16.8713L17 20.625L10.125 16.8713V21.9862L17 25.74Z'
                      fill='#756868'
                    />
                  </svg>
                </div>
                <div className='info'>
                  <div className='namaArea'>
                    Green Island Primary School (2.0 km)
                  </div>
                  <div className='rate'>4.5/5 (100 review)</div>
                </div>
              </SekitarList>
            </div>
          </div>
        </div>
      </SectionDelapan>
    </div>
  );
};

const TitleProperty = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #3151b7;
  }
  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    color: #3c3956;
  }
`;

const AlamatProperty = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 5px;
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #797c86;
  }
`;

const AlamatPropertyItem = styled.div`
  display: flex;
  gap: 12px;
`;

const FasilitasChat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Fasilitas = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const Chat = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 49px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 4px 10px #e6edfb;
  border-radius: 15px;
  align-items: center;
  .chatText {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d3de5;
    align-items: center;
  }
`;

const FasilitasItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  .fasilitasText {
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    color: #797c86;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  gap: 20px;
  img {
    width: 100%;
  }
  .image1 {
    flex-grow: 8;
    position: relative;
    .streetView {
      position: absolute;
      bottom: 24px;
      left: 24px;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 10px 24px;
      background: #ffffff;
      border: 1px solid #f9f9f9;
      box-shadow: 0px 4px 10px #e6edfb;
      border-radius: 15px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #766969;
    }
  }
  .image2 {
    flex-grow: 4;
  }

  .more {
    margin-top: 26px;
    position: relative;
    .more-image {
      position: absolute;
      bottom: 24px;
      right: 24px;
      background: #3151b7;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
      padding: 12px 12px;
      border-radius: 50%;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
    }
  }
`;

const SectionHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  color: #3c3956;
  margin-bottom: 20px;
`;

const SectionTiga = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  width: 100%;
  gap: 20px;
`;

const SectionDeskripsi = styled.div`
  width: 67%;
  .textDescription {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #1c1c1c;
  }
  .lihatLebih {
    text-align: right;
    font-weight: 600;
    font-size: 16px;
    line-height: 33px;
    color: #f89047;
    cursor: pointer;
  }
`;

const SectionPenjadwalan = styled.div`
  width: 33%;
  .penjadwalanTitle {
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #3c3956;
  }
  .availableDate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .buttonPenjadwalan {
    width: 100%;
    background: #0d3de5;
    border-radius: 15px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    padding: 12px 0px;
    cursor: pointer;
  }
  .buttonBeli {
    width: 100%;
    background: #ffffff;
    border: 1px solid #0d3de5;
    border-radius: 15px;
    padding: 12px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #0d3de5;
    text-align: center;
    cursor: pointer;
  }
  .atau {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1em;
    color: #797c86;
    padding: 10px 0px;
    text-align: center;
  }
`;

const DateAvailable = styled.div`
  position: relative;
  width: 50%;
  padding: 15px 0px;
  background: #ffffff;
  border: 1px solid #ebf4ff;
  box-shadow: 0px 6px 10px #ddebff;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  .hari {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }
  .tanggal {
    font-weight: 600;
    font-size: 34px;
    line-height: 52px;
    color: #000000;
  }
`;

const SectionEmpat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 53px 69px;
  background: #f5f8fd;
  margin-bottom: 40px;
`;

const Surat = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .suratText {
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    color: #3c3956;
  }
`;

const SectionLima = styled.div`
  margin-bottom: 50px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 38px;
  background: #f5f8fd;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .detailTitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;
    color: #756868;
    margin-bottom: 2px;
  }
  .detailDesc {
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    color: #3c3956;
  }
`;

const SectionEnam = styled.div`
  .videoType {
    display: flex;
    gap: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;

    .video,
    .tour {
      color: #746565;
      cursor: pointer;

      &.active {
        color: #3151b7;
        font-weight: 600;
        border-bottom: 2px solid #3151b7;
      }
    }
  }

  .imageTour {
    margin-top: 20px;
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
`;

const SectionTujuh = styled.div`
  margin-bottom: 50px;
  .alamatLengkap {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    color: #6d6b7d;
  }

  .mapLocation {
    margin-top: 10px;

    img {
      width: 100%;
      border-radius: 20px;
    }

    iframe {
      width: 100%;
      height: 400px;
    }
  }
`;

const SectionDelapan = styled.div`
  margin-bottom: 50px;
  .areaSekitar {
    background: #f5f8fd;
    padding: 34px 34px;
  }
  .headerArea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-weight: 600;
      font-size: 22px;
      line-height: 36px;
      color: #3c3956;
    }
    .viewAll {
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      color: #f89047;
    }
  }
  .listArea {
    display: flex;
    gap: 15px;
    justify-content: space-around;
    margin-top: 37px;
  }
`;

const SekitarList = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
  .namaArea {
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: #756868;
    margin-bottom: 3px;
  }
  .rate {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #756868;
  }
`;

export default DetailProperty;
