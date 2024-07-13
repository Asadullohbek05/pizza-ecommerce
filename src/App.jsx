import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Index"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import Accept from "./components/acceptPage/Accept"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/acceptPage" element={<Accept />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App