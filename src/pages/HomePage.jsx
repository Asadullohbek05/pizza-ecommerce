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

const HomePage = () => {
    return (
        <div className="max-w-[1330px] px-5 mx-auto">
            <div className="my-4 sm:my-7 flex justify-between gap-3 overflow-x-auto">
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={fireIcon} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Акции</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={pizza} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Пицца</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={sushi} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Суши</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={drink} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Напитки</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={snacks} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Закуски</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={combo} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Комбо</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={desert} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Десерты</span>
                </Link>
                <Link className="flex sm:flex-col justify-center items-center hover:text-[#E23535] transition bg-white gap-2 px-6 sm:px-10 py-2 sm:py-5 w-[150px] sm:w-[135px] border rounded-[6px] sm:rounded-[12px]">
                    <img className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={souse} alt="" />
                    <span className="text-[14px] sm:text-[18px]">Соусы</span>
                </Link>
            </div>
            <div className="flex justify-between flex-wrap gap-4 overflow-x-auto ">
                {
                    DiscountData.map((item) => <DiscountCard key={item.id} {...item} />)
                }
            </div>
            <form className="md:flex items-center justify-between gap-2 px-8 py-4 border bg-white rounded-[8px] mt-5 mb-7">
                <h3 className="text-[18px] text-center md:text-left mb-4 lg:mb-0">Проверить адрес доставки</h3>
                <div className="flex w-full md:w-[80%] justify-between sm:gap-2">
                    <div className="flex border rounded-[6px] w-[82%] px-3 ">
                        <img src={locationIcon} className="me-2" alt="" />
                        <input required className="h-[48px] w-[90%] outline-none" type="text" placeholder="Адрес" />
                    </div>
                    <button className="bg-[#FF7010] flex items-center px-4 py-3 sm:py-3 sm:px-8 rounded-[6px] text-white text-[16px]"><span className="hidden sm:block">Проверить</span> <img className="sm:hidden" src={sendIcon} alt="" /></button>
                </div>
            </form>
            <div>
                {
                    categories.map((category) => (
                        <div key={category.id}>
                            <div className="flex justify-between items-center mb-7">
                                <h1 className="text-[28px] sm:text-[40px] font-semibold text-[#191919]">{category.name}</h1>
                                <button className="flex items-center gap-2 bg-white py-2 px-3 sm:px-4 border text-[16px] rounded-[6px] text-[#191919]"><img src={filterIcon} alt="" /> Фильтры</button>
                            </div>
                            <div className="flex flex-wrap justify-evenly md:justify-between gap-1">
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
        </div>
    )
}

export default HomePage