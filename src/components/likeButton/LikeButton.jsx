import { useContext } from "react"
import { FaRegHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FavouritesContext } from "../../context/FavouritesContext"

const LikeButton = () => {
    const { favourites } = useContext(FavouritesContext)
    return (
        <div className="fixed flex lg:hidden items-center justify-center rounded-full left-5 bottom-5 w-14 h-14 bg-[#FF7010] shadow-2xl">
            <div className="relative">
                <Link to={'/favourites'}>
                    <FaRegHeart color="white" size={21} />
                </Link>
                <span className="absolute w-5 h-5 border border-[#FF7010] flex items-center justify-center rounded-full bg-white py-[4px] px-[7px] top-[-17px] left-[-17px] text-[12px] text-[#FF7010]">{favourites.length}</span>
            </div>
        </div>
    )
}

export default LikeButton