import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Index"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import Accept from "./components/acceptPage/Accept"
import FavouritesPage from "./pages/FavouritesPage"
import PizzaPage from "./pages/PizzaPage"
import SushiPage from "./pages/SushiPage"
import DrinksPage from "./pages/DrinksPage"
import SnacksPage from "./pages/SnacksPage"
import ComboPage from "./pages/ComboPage"
import DesertsPage from "./pages/DesertsPage"
import CaucesPage from "./pages/CaucesPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/acceptPage" element={<Accept />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/pizza" element={<PizzaPage />} />
          <Route path="/sushi" element={<SushiPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/snacks" element={<SnacksPage />} />
          <Route path="/combo" element={<ComboPage />} />
          <Route path="/deserts" element={<DesertsPage />} />
          <Route path="/causes" element={<CaucesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App