import { useContext } from "react"
import { ProductsContext } from './../context/ProductsContext';
import CartCard from "../components/card/CartCard";
import cat from "../assets/cat.png"

const CartPage = () => {
    const { cart } = useContext(ProductsContext)
    return (
        <div className="max-w-[850px] mx-auto pt-10 pb-14 px-4">
            {cart.length ? <h1 className="text-[40px] font-semibold mb-6">Ваш заказ</h1> : ''}
            <div>
                {
                    cart.length > 0 ? cart.map((card) => <CartCard key={card.id} {...card} />) :
                        <div className="flex flex-col items-center">
                            <img src={cat} className="w-[200px]" />
                            <h1 className="text-[20px] text-center px-4 my-2 text-[#FF7010]">В вашей корзине на данный момент нет товаров :(</h1>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartPage