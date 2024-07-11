import PropTypes from 'prop-types';

import { FaRegHeart } from 'react-icons/fa';


const ProductCard = ({ filter, image, name, description, price }) => {
    return (
        <div className="w-full sm:w-[300px] items-center h-auto flex flex-row sm:flex-col justify-between border rounded-[12px] bg-white mb-3 sm:mb-[30px] ownCard overflow-hidden">
            <div className="relative mb-1 py-2 sm:py-0 h-full flex justify-center items-center sm:w-auto w-[30%] overflow-hidden">
                <img src={image} className="w-[200px] object-cover sm:w-auto sm:h-auto" />
                {filter ? <div className="absolute top-2 sm:top-5 left-0 px-2 py-[2px] sm:px-4 sm:py-[7px] bg-[#E23535] text-white rounded-tr-[8px] rounded-br-[8px]"><span className="text-[12px] sm:text-[14px] uppercase">{filter}</span></div> : ''}
                <button className='hidden sm:block absolute heartIcon right-[-40px] top-4 p-1 text-white'>
                    <FaRegHeart color='#E23535' size={30} />
                </button>
            </div>
            <div className="p-3 sm:p-5 w-[70%] sm:w-full relative">
                <h3 className="text-[#191919] text-[14px] sm:text-[18px] font-semibold mb-1 sm:mb-3">{name}</h3>
                <p className="text-[#191919] text-[12px] sm:text-[16px] mb-[10px] sm:mb-4">{description}</p>
                <div className="flex justify-between items-center text-[#FF7010] text-[18px] font-semibold sm:gap-5">
                    <button className="bg-[#FF7010] hover:opacity-[0.8] rounded-[6px] text-white font-thin px-3 py-1 sm:px-8 sm:py-[13px] text-[16px]">Выбрать</button>
                    <span>от {price} ₽</span>
                </div>
                <button className='block sm:hidden absolute right-2 top-2 p-1 text-white'>
                    <FaRegHeart color='#E23535' size={20} />
                </button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // filter: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};


export default ProductCard