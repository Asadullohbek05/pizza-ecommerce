import PropTypes from 'prop-types';
import ControlQuantityBtns from '../shares/ControlQuantityBtns';
const CartCard = ({ id, category, filter, image, name, description, price, quantity }) => {
    return (
        <div className="bg-white rounded-[12px] p-4 border mb-4 flex justify-between items-center">
            <div className='flex items-center gap-4'>
                <img className='w-[120px]' src={image} />
                <div>
                    <h4 className='text-[20px] font-semibold mb-2'>{name}</h4>
                    <h4 className='text-[16px]'>{description.slice(0, 30)}</h4>
                </div>
            </div>
            <div className='flex items-center gap-10'>
                <ControlQuantityBtns id={id} quantity={quantity} />
                <p className='text-[#FF7010] text-[20px] font-semibold'>399 ₽</p>
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
};

export default CartCard