import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PropertyList = ({
  propertyImage,
  title,
  alamat,
  harga,
  bathroom,
  toilet,
  luas,
}) => {
  let navigate = useNavigate();
  const detailPropertyHandler = () => {
    navigate(`/detailproperti`);
  };
  return (
    <EachProperti onClick={detailPropertyHandler}>
      <ImageContainer>
        <img src={propertyImage} alt='Property' />
        <div className='typeProperty'>Tanah</div>
      </ImageContainer>
      <DescriptionContainer>
        <PropertyTitle>
          <h4>{title}</h4>
          <svg
            width='35'
            height='35'
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='17.5' cy='17.5' r='17.5' fill='#FFF4ED' />
            <path
              d='M27.1888 9.12275C24.022 7.08273 20.1115 8.03474 18.0003 10.3694C15.8891 8.03474 11.9786 7.0714 8.81186 9.12275C7.13251 10.2108 6.07691 12.0468 6.00494 13.9848C5.83701 18.3822 9.96342 21.9069 16.261 27.3129L16.381 27.4149C17.2926 28.1969 18.6961 28.1969 19.6077 27.4036L19.7397 27.2902C26.0372 21.8955 30.1517 18.3708 29.9957 13.9735C29.9237 12.0468 28.8681 10.2108 27.1888 9.12275V9.12275ZM18.1203 25.6242L18.0003 25.7376L17.8804 25.6242C12.1706 20.7395 8.40402 17.5095 8.40402 14.2341C8.40402 11.9674 10.2033 10.2674 12.6024 10.2674C14.4497 10.2674 16.249 11.3894 16.8848 12.9421H19.1279C19.7517 11.3894 21.551 10.2674 23.3983 10.2674C25.7973 10.2674 27.5966 11.9674 27.5966 14.2341C27.5966 17.5095 23.8301 20.7395 18.1203 25.6242Z'
              fill='#F89047'
            />
          </svg>
        </PropertyTitle>
        <AlamatProperty>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75ZM7.125 6.75C7.125 5.71447 7.96447 4.875 9 4.875C9.66987 4.875 10.2889 5.23237 10.6238 5.8125C10.9587 6.39263 10.9587 7.10737 10.6238 7.6875C10.2889 8.26763 9.66987 8.625 9 8.625C7.96447 8.625 7.125 7.78553 7.125 6.75Z'
              fill='#8E8E8E'
              fill-opacity='0.68'
            />
          </svg>

          <p>{alamat}</p>
        </AlamatProperty>
        <h3>{harga}</h3>
        <Keterangan>
          <KeteranganSection>
            <svg
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.9453 7H17.9453M3.94531 12H4.94531H3.94531ZM20.9453 12C21.2105 12 21.4649 11.8946 21.6524 11.7071C21.84 11.5196 21.9453 11.2652 21.9453 11V7C21.9453 6 21.3453 4 18.9453 4C16.5453 4 15.9453 6 15.9453 7L20.9453 12ZM20.9453 12V14C20.9453 15.138 20.3623 17.248 18.2003 17.841L20.9453 12ZM20.9453 12H4.94531H20.9453ZM4.94531 12V14C4.94531 15.138 5.52831 17.248 7.69031 17.841L4.94531 12ZM6.94531 20L7.69031 17.841L6.94531 20ZM7.69031 17.841C8.06031 17.943 8.47731 18 8.94531 18H16.9453C17.3689 18.0037 17.791 17.9502 18.2003 17.841H7.69031ZM18.9453 20L18.2003 17.841L18.9453 20ZM15.9453 7H13.9453H15.9453Z'
                stroke='#8E8E8E'
                stroke-opacity='0.66'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p>{bathroom} Toilet</p>
          </KeteranganSection>
          <KeteranganSection>
            <svg
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M19.9453 6.5H11.9453V14.5H3.94531V4.5H1.94531V19.5H3.94531V16.5H21.9453V19.5H23.9453V10.5C23.9453 8.29 22.1553 6.5 19.9453 6.5ZM10.9453 10.5C10.9453 12.16 9.60531 13.5 7.94531 13.5C6.28531 13.5 4.94531 12.16 4.94531 10.5C4.94531 8.84 6.28531 7.5 7.94531 7.5C9.60531 7.5 10.9453 8.84 10.9453 10.5ZM8.94531 10.5C8.94531 9.95 8.49531 9.5 7.94531 9.5C7.39531 9.5 6.94531 9.95 6.94531 10.5C6.94531 11.05 7.39531 11.5 7.94531 11.5C8.49531 11.5 8.94531 11.05 8.94531 10.5ZM13.9453 14.5H21.9453V10.5C21.9453 9.4 21.0453 8.5 19.9453 8.5H13.9453V14.5Z'
                fill='#8E8E8E'
                fill-opacity='0.68'
              />
            </svg>

            <p>{toilet} Kamar</p>
          </KeteranganSection>
          <KeteranganSection>
            <svg
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M5.94531 12.5H2.94531L12.9453 3.5L22.9453 12.5H19.9453V20.5H13.9453V14.5H11.9453V20.5H5.94531V12.5ZM17.9453 10.69L12.9453 6.19L7.94531 10.69V18.5H9.94531V12.5H15.9453V18.5H17.9453V10.69Z'
                fill='#8E8E8E'
                fill-opacity='0.66'
              />
            </svg>

            <p>{luas} m2</p>
          </KeteranganSection>
        </Keterangan>
      </DescriptionContainer>
    </EachProperti>
  );
};

const EachProperti = styled.div`
  width: 24%;
  /* flex-grow: 25%; */
  background: #ffffff;
  border: 1px solid rgba(238, 238, 238, 0.72);
  box-shadow: 0px 10px 10px 7px rgba(238, 238, 238, 0.34);
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  .typeProperty {
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 25px;
    padding: 9px 18px;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #ffffff;
    background: #f89047;
  }
`;

const DescriptionContainer = styled.div`
  padding: 15px 15px;
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #1c1c1c;
  }
  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #0d3de5;
  }
`;

const PropertyTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AlamatProperty = styled.div`
  margin-top: 8px;
  margin-bottom: 11px;
  display: flex;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #8e8e8e;
  }
`;

const Keterangan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KeteranganSection = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 30px;
    color: #8e8e8e;
  }
`;
export default PropertyList;
