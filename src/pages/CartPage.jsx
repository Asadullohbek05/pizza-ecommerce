import { useContext } from "react"
import { ProductsContext } from './../context/ProductsContext';
import CartCard from "../components/card/CartCard";
import cat from "../assets/cat.png"
import { LanguageContext } from './../context/LanguageContext';

import sendIcon from "../assets/svg/sendIcon.svg"

const CartPage = () => {
    const { cart, totalSumm } = useContext(ProductsContext)
    const { lang } = useContext(LanguageContext)
    return (
        <div className="max-w-[850px] mx-auto pt-10 pb-14 px-4">
            {cart.length ? <h1 className="text-[40px] font-semibold mb-6">{lang.yourOrder}</h1> : ''}
            <div>
                {
                    cart.length > 0 ? cart.map((card) => <CartCard key={card.id} {...card} />) :
                        <div className="flex flex-col items-center">
                            <img src={cat} className="w-[200px]" />
                            <h1 className="text-[20px] text-center px-4 my-2 text-[#FF7010]">В вашей корзине на данный момент нет товаров :(</h1>
                        </div>
                }
            </div>
            {
                cart.length ?
                    <form className="py-4 px-6 flex-row  sm:flex justify-between items-center gap-4 sm:gap-1  bg-white border rounded-[8px]">
                        <div className="flex justify-center">
                            <input required type="text" placeholder={lang.promocode} className="input input-bordered w-full max-w-xs" />
                            <button className="btn bg-[#FF7010]">
                                <img src={sendIcon} alt="" />
                            </button>
                        </div>
                        <h2 className="text-[18px] sm:text-[20px] text-[#FF7010] mt-4 sm:mt-0 text-center font-semibold">{lang.total}: {totalSumm} ₽</h2>
                    </form> : ''
            }
        </div>
    )
}

export default CartPage