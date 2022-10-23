import React, { useState, useEffect } from "react";
import WhyChooseUs from "../components/HomeWhyChooseUs";
import AboutBlockchain from "../components/HomeAboutBlockchain";
import TopDeals from "../components/HomeTopDeals";
import HomeSection1 from "../components/HomeSection1";
import Referensi from "../components/Referensi";

const Beranda = () => {
  const [referensiUser, setReferensiUser] = useState(true);
  useEffect(() => {
    referensiUser
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [referensiUser]);
  return (
    <div className='beranda'>
      {referensiUser && (
        <Referensi
          referensiUser={referensiUser}
          setReferensiUser={setReferensiUser}
        />
      )}

      <HomeSection1 />
      <WhyChooseUs />
      <AboutBlockchain />
      <TopDeals />
    </div>
  );
};

export default Beranda;
