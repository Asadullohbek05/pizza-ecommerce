import { useContext } from "react"
import { FavouritesContext } from "../context/FavouritesContext"
import { LanguageContext } from "../context/LanguageContext"
import ProductCard from "../components/card/ProductCard"

import cartImg from "../assets/cat.png"
import CartButton from "../components/cartButton/CartButton"

const FavouritesPage = () => {
    const { favourites } = useContext(FavouritesContext)
    const { lang } = useContext(LanguageContext)
    return (
        <div className="max-w-[1330px] px-5 mx-auto pt-10 pb-14">
            {favourites.length ?
                <div>
                    <h1 className="text-[25px] sm:text-[40px] text-left font-semibold mb-6">{lang.yourLikedProducts} ({favourites.length}) </h1>
                    <div className="flex flex-wrap justify-evenly gap-1">
                        {
                            favourites.map((product) => <ProductCard key={product.id} {...product} />)
                        }
                    </div>
                </div>
                :
                <div className="flex flex-col items-center">
                    <img src={cartImg} className="w-[200px]" />
                    <h1 className="text-[20px] text-center px-4 my-2 text-[#FF7010]">{lang.empty}</h1>
                </div>}
            <CartButton />
        </div>
    )
}

export default FavouritesPage