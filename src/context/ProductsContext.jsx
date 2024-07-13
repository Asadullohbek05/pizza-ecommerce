import PropTypes from "prop-types"

import { createContext, useContext, useState, } from "react";
import products from "../data/Products";
import { CART } from "../constants";
import { toast } from "react-toastify";
import { LanguageContext } from "./LanguageContext";

export const ProductsContext = createContext();


const ProductsContextProvider = ({ children }) => {
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem(CART)) || [])
    const { lang } = useContext(LanguageContext)
    const [isRunning, setIsRunning] = useState(false); // Track if the timer is running

    const controlQuantity = (id, sign) => {
        let res = cart.map((product) => {
            if (product.id === id) {
                sign === '+' ? product.quantity++ : product.quantity--
            }
            return product
        })

        return res
    }

    const addToCart = (id) => {
        let product = products.find((pr) => pr.id === id)
        let productInCart = cart.find((pr) => pr.id === id)
        let newCart;

        if (productInCart) {
            newCart = controlQuantity(id, '+')
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
            toast.success('Product Added Successfully')
        }

        setCart(newCart)
        localStorage.setItem(CART, JSON.stringify(newCart))
    }

    const increaseQuantity = (id) => {
        const newCart = controlQuantity(id, '+')
        setCart(newCart)
        localStorage.setItem(CART, JSON.stringify(newCart))
    }

    const decreaseQuantity = (id) => {
        let productInCart = cart.find((pr) => pr.id === id)
        let newCart;

        if (productInCart.quantity > 1) {
            newCart = controlQuantity(id, '-')
        } else {
            newCart = cart.filter((pr) => pr.id !== id)
            toast.info(lang.productRemoveFromCart)
        }

        setCart(newCart)
        localStorage.setItem(CART, JSON.stringify(newCart))
    }

    let totalSumm = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

    const state = { cart, addToCart, increaseQuantity, setCart, decreaseQuantity, totalSumm, isRunning, setIsRunning }


    return <ProductsContext.Provider value={state}>
        {children}
    </ProductsContext.Provider>
}

ProductsContextProvider.propTypes = {
    children: PropTypes.node
}

export default ProductsContextProvider