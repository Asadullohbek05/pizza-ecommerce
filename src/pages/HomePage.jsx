import { Link } from "react-router-dom"

import fireIcon from "../assets/svg/Fire.svg"
import pizza from "../assets/svg/pizza.svg"
import sushi from "../assets/svg/Sushi.svg"
import drink from "../assets/svg/Drink.svg"
import snacks from "../assets/svg/Snacks.svg"
import combo from "../assets/svg/Combo.svg"
import desert from "../assets/svg/Dessert.svg"
import souse from "../assets/svg/Sauce.svg"
import DiscountData from "../data/DiscountData"
import DiscountCard from "../components/card/DiscountCard"
import locationIcon from "../assets/svg/Location.svg";
import sendIcon from "../assets/svg/sendIcon.svg"
import categories from './../data/categories';
import products from './../data/Products';
import filterIcon from "../assets/svg/Filter.svg"
import ProductCard from "../components/card/ProductCard"
import { useContext, useState } from "react"
import CartButton from "../components/cartButton/CartButton"
import { LanguageContext } from "../context/LanguageContext"
import LikeButton from "../components/likeButton/LikeButton"

const HomePage = () => {
    const { lang } = useContext(LanguageContext)
    const [open, setOpen] = useState(true)

    const openText = () => {
        setOpen(!open)
    }

    return (
        <div className="max-w-[1330px] px-5 mx-auto">
            <div className="my-4 sm:my-7 flex justify-between gap-3 overflow-x-auto">
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={fireIcon} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.stock}</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={pizza} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.pizza}</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={sushi} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.sushi}</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={drink} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.beverages}</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={snacks} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.snacks}</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={combo} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.combo}</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={desert} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.dessert}</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={souse} alt="" />
                    <span className="text-[14px] sm:text-[18px]">{lang.sauces}</span>
                </Link>
            </div>
            <div className="flex justify-between flex-wrap gap-4 overflow-x-auto ">
                {
                    DiscountData.map((item) => <DiscountCard key={item.id} {...item} />)
                }
            </div>
            <form className="md:flex items-center justify-between gap-2 px-8 py-4 border bg-white rounded-[8px] mt-5 mb-7">
                <h3 className="text-[17px] text-center md:text-left mb-4 lg:mb-0">{lang.checkDeliveryAddress}</h3>
                <div className="flex w-full md:w-[80%] justify-between sm:gap-2">
                    <div className="flex border rounded-[6px] w-[82%] px-3 ">
                        <img src={locationIcon} className="me-2" alt="" />
                        <input required className="h-[48px] w-[90%] outline-none" type="text" placeholder={lang.address} />
                    </div>
                    <button className="bg-[#FF7010] flex items-center px-4 py-3 sm:py-3 sm:px-8 rounded-[6px] text-white text-[16px]"><span className="hidden sm:block">{lang.check}</span> <img className="sm:hidden" src={sendIcon} alt="" /></button>
                </div>
            </form>
            <div>
                {
                    categories.map((category) => (
                        <div key={category.id}>
                            <div className="flex justify-between items-center my-6">
                                <h1 className="text-[28px] sm:text-[40px] font-semibold text-[#191919]">{category.name}</h1>
                                <button className="flex items-center gap-2 bg-white py-2 px-3 sm:px-4 border text-[16px] rounded-[6px] text-[#191919]"><img src={filterIcon} alt="" /> Фильтры</button>
                            </div>
                            <div id={category} className="flex flex-wrap justify-evenly md:justify-between gap-1">
                                {products
                                    .filter(product => product.category === category.name)
                                    .map(filteredProduct => (
                                        <ProductCard key={filteredProduct.id} {...filteredProduct} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mx-auto max-w-[850px]  mt-7 mb-8">
                <div className={`overflow-hidden ${open ? 'h-[200px]' : 'h-auto'} sm:${open ? 'h-[300px]' : 'h-auto'}`}>
                    <h1 className="text-[18px] sm:text-[32px] text-[#191919] font-semibold mb-3 sm:mb-4">{lang.pizzaDeliveryInMoscow}</h1>
                    <p className="text-[14px] sm:text-[16px] mb-4">{lang.deliveryText1}
                    </p>
                    <h2 className="text-[18px] sm:text-[20px] font-semibold">{lang.howToMakeOrder}</h2>
                    <p className="text-[14px] sm:text-[16px]">
                        {lang.deliveryText2}
                    </p>
                </div>
                <button onClick={openText} className="text-[#FF7010] text-[16px] font-semibold mt-4">
                    {open ? lang.ShowFull : lang.ShowBriefly}
                </button>
            </div>
            <CartButton />
            <LikeButton />
        </div>
    )
}

export default HomePage