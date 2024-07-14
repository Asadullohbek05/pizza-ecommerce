import PropTypes from "prop-types"

import { createContext, useContext, useState } from "react";
import products from "../data/Products";
import { FAVOURITES } from "../constants";
import { toast } from "react-toastify";
import { LanguageContext } from "./LanguageContext";

export const FavouritesContext = createContext();


const FavouritesContextProvider = ({ children }) => {
    const { lang } = useContext(LanguageContext)
    const [favourites, setFavuorites] = useState(JSON.parse(localStorage.getItem(FAVOURITES)) || [])

    const likeProduct = (id) => {
        let newProduct = products.find((pr) => pr.id === id)
        let productInFavourites = favourites.find((pr) => pr.id === id)
        let newFavourites;
        if (productInFavourites) {
            newFavourites = favourites.filter((pr) => pr.id !== id)
            toast.info(lang.unFavourite)
        } else {
            newFavourites = [...favourites, newProduct]
            toast.success(lang.favourite)
        }
        setFavuorites(newFavourites)
        localStorage.setItem(FAVOURITES, JSON.stringify(newFavourites))
    }

    const state = { favourites, likeProduct }
    return <FavouritesContext.Provider value={state}>
        {children}
    </FavouritesContext.Provider>
}

FavouritesContextProvider.propTypes = {
    children: PropTypes.node
}

export default FavouritesContextProvider