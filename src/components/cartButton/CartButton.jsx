import { Link } from "react-router-dom"

import shoppingBag from "../../assets/svg/shopping-bag-2.svg"

const CartButton = () => {
    return (
        <div className="fixed flex sm:hidden items-center justify-center rounded-full right-5 bottom-5 w-14 h-14 bg-[#FF7010] shadow-2xl">
            <div className="relative">
                <Link to={'/cart'} className="">
                    <img src={shoppingBag} alt="" />
                </Link>
                <span className="absolute w-5 h-5 border border-[#FF7010] flex items-center justify-center rounded-full bg-white py-[4px] px-[7px] top-[-17px] right-[-17px] text-[12px] text-[#FF7010]">1</span>
            </div>
        </div>
    )
}

export default CartButton