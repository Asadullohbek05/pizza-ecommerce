import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LanguageContextProvider from './context/LanguageContext.jsx'

import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import ProductsContextProvider from './context/ProductsContext.jsx'
import FavouritesContextProvider, { FavouritesContext } from './context/FavouritesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageContextProvider>
    <ProductsContextProvider>
      <FavouritesContextProvider>
        <App />
      </FavouritesContextProvider>
    </ProductsContextProvider>
    <ToastContainer autoClose={2000} />
  </LanguageContextProvider>
)
