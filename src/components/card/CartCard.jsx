import PropTypes from 'prop-types';
import ControlQuantityBtns from '../shares/ControlQuantityBtns';
const CartCard = ({ id, category, filter, image, name, description, price, quantity }) => {
    return (
        <div className="relative bg-white rounded-[12px] p-4 border mb-4 flex justify-evenly sm:justify-normal items-center">
            {filter ? <div className="absolute top-2 sm:top-5 left-0 px-2 py-[2px] sm:px-4 sm:py-[7px] bg-[#E23535] text-white rounded-tr-[8px] rounded-br-[8px]"><span className="text-[12px] sm:text-[14px] uppercase">{filter}</span></div> : ''}
            <div className='mr-3'>
                <img className='w-[100px] sm:w-[150px]' src={image} />
            </div>
            <div className='sm:flex justify-between w-[70%] sm:w-full'>
                <div className='flex flex-col'>
                    <h4 className='text-[14px] sm:text-[20px] font-semibold mb-2'>{name}</h4>
                    <h4 className='text-[12px] sm:text-[16px]'>{description.slice(0, 30)}</h4>
                </div>
                <div className='flex items-center gap-10 mt-3 sm:mt-0'>
                    <ControlQuantityBtns id={id} quantity={quantity} />
                    <p className='text-[#FF7010] text-[16px] sm:text-[20px] font-semibold'>{price * quantity} ₽</p>
                </div>
            </div>
        </div>
    )
}

CartCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    filter: PropTypes.string,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default CartCard