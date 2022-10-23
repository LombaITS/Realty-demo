// Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Import React Router Dom
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Header Import
import Header from "./components/Header";
// Footer Import
import Footer from "./components/Footer";

// Import Pages
import AkunManagement from "./pages/AkunManagement";
import Beranda from "./pages/Beranda";
import Tokenisasi from "./pages/Tokenisasi";
import Properti from "./pages/Properti";
import DetailProperty from "./pages/DetailProperty";
import PenjadwalanForm from "./pages/PenjadwalanForm";
import PenjadwalanSelesai from "./pages/PenjadwalanSelesai";
import Tour from "./pages/Tour";
import ChatButton from "./components/ChatButton";
import DaftarTransaksi from "./pages/DaftarTransaksi";
import DaftarkanAsset from "./pages/DaftarkanAsset";
import PropertiSaya from "./pages/PropertiSaya";
import DetailTransaksi from "./pages/DetailTransaksi";
import Pembelian from "./pages/Pembelian";
import AssetDetail from "./pages/AssetsDetail";

function App() {
  const getToken = () => {
    const userToken = localStorage.getItem("token");

    if (userToken != null) return userToken;

    return false;
  };
  const [isLogin, setIsLogin] = useState(getToken());
  return (
    <div className='App'>
      <GlobalStyle />
      <Header isLogin={isLogin} setIsLogin={setIsLogin} getToken={getToken} />
      <Routes>
        <Route
          exact
          path='/masuk'
          element={<AkunManagement isLogin={isLogin} setIsLogin={setIsLogin} />}
        />

        <Route exact path='/' element={<Beranda />} />
        <Route exact path='/tokenisasi' element={<Tokenisasi />} />
        <Route exact path='/properti' element={<Properti />} />
        <Route exact path='/detailproperti' element={<DetailProperty />} />
        <Route exact path='/penjadwalan' element={<PenjadwalanForm />} />
        <Route exact path='/tour' element={<Tour />} />
        <Route exact path='/daftartransaksi' element={<DaftarTransaksi />} />
        <Route exact path='/daftarasset' element={<DaftarkanAsset />} />
        <Route exact path='/propertisaya' element={<PropertiSaya />} />
        <Route exact path='/detailtransaksi' element={<DetailTransaksi />} />
        <Route exact path='/pembelian' element={<Pembelian />} />
        <Route exact path='/assetdetail' element={<AssetDetail />} />
        <Route
          exact
          path='/penjadwalanberhasil'
          element={<PenjadwalanSelesai />}
        />
      </Routes>
      {isLogin && <ChatButton />}
      <Footer />
    </div>
  );
}

export default App;
