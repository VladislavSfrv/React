import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import "./index.css"
import TodoList from "./components/TodoList/TodoList.jsx";
import Form from "./components/Form/Form.jsx";
import Goods from "./components/Goods/Goods.jsx";
import FavoriteList from "./components/FavoriteList/FavoriteList.jsx";
import CatalogProducts from "./components/CatalogProducts/CatalogProducts.jsx";


function App() {
  const headerNav = [
    { text: "TodoList", link: "/" }, 
    { text: "FavoritesGoods", link: "/favorites-goods" }, 
    {text: "CatalogProducts", link: "/catalog-products" },
  ];

  const goods = [
    { id: 1, name: 'Samsung Galaxy S23', description: 'Флагманский смартфон с отличной камерой и производительностью', price: 75000 },
    { id: 2, name: 'iPhone 15', description: 'Последняя модель iPhone с новыми функциями и улучшенной камерой', price: 90000 },
    { id: 3, name: 'Google Pixel 8', description: 'Смартфон с чистым Android и лучшими камерами', price: 60000 },
    { id: 4, name: 'OnePlus 11', description: 'Смартфон с высокой производительностью и быстрой зарядкой', price: 55000 },
    { id: 5, name: 'Xiaomi Mi 13', description: 'Смартфон с хорошим соотношением цены и качества', price: 40000 },
  ];

  return (
    <BrowserRouter>
      <Header headerNav={headerNav} />
      <main className="main">
        <Routes>
          <Route path="/" element={[<Form key={crypto.randomUUID()} />, <TodoList key={crypto.randomUUID()} />]} />
          <Route path="/favorites-goods" element={[<Goods goods={goods} key={crypto.randomUUID()}/>, <FavoriteList goods = {goods} key={crypto.randomUUID()}/>]} />
          <Route path="/catalog-products" element={<CatalogProducts />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
