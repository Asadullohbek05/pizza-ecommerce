import PropTypes from "prop-types"

import { createContext, useState, } from "react";
import products from "../data/Products";
import { CART } from "../constants";

export const ProductsContext = createContext();


const ProductsContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem(CART)) || [])

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
        }

        setCart(newCart)
        localStorage.setItem(CART, JSON.stringify(newCart))
    }

    const state = { cart, addToCart, increaseQuantity, decreaseQuantity }

    console.log(cart)

    return <ProductsContext.Provider value={state}>
        {children}
    </ProductsContext.Provider>
}

ProductsContextProvider.propTypes = {
    children: PropTypes.node
}

export default ProductsContextProvider