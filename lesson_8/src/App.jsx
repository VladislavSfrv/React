import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Promo from './components/HomePage/Promo/Promo';
import SaleCenter from './components/HomePage/SaleCenter/SaleCenter';
import ProductBox from './components/ProductBox/ProductBox';
import Adavantages from './components/HomePage/Advantages/Advantages';
import ProductHeader from './components/ProductPage/ProductHeader/ProductHeader';
import ProductMain from './components/ProductPage/ProductMain/ProductMain';
import Card from './components/Cart/Cart';
import Registration from './components/Registration/Registration';
import Catalog from './components/CatalogPage/Catalog';
import { fetchGoods } from "./redux/Slices/CatalogGoods";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from './components/NotFound/NotFound';



const productsHome = [
  { title: "ELLERY X M'O CAPSULE", description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00", photo: "./../../src/images/top__info_img001.svg" },
  { title: "ELLERY X M'O CAPSULE", description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00", photo: "./../../src/images/top__info_img002-2.svg" },
  { title: "ELLERY X M'O CAPSULE", description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00", photo: "./../../src/images/top__info_img003.svg" },
  { title: "ELLERY X M'O CAPSULE", description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00", photo: "./../../src/images/top__info_img004.svg" },
  { title: "ELLERY X M'O CAPSULE", description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00", photo: "./../../src/images/top__info_img005.svg" },
  { title: "ELLERY X M'O CAPSULE", description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: "52.00", photo: "./../../src/images/top__info_img006.svg" },
]


function App() {
  const { goods } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={[<Promo key={0} />, <SaleCenter key={1} />, <ProductBox goods={productsHome} key={2} />, <Adavantages key={3} />]} />
        <Route path='/product' element={[<ProductHeader key={0} />, <ProductMain key={1} />]} />
        <Route path='/cart' element={<Card />} />
        <Route path='/reg' element={<Registration />} />
        <Route path='/catalog' element={[<Catalog key={0} goods={goods} />, <Adavantages key={1} />]} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
