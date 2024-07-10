import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DiscountCard = ({ image, description }) => {
    return (
        <Link to={'/'} style={{ backgroundImage: `url(${image})` }} className="relative w-full sm:w-[300px] mb-3 h-[343px] bg-cover bg-center rounded-2xl p-5">
            <p className='text-white text-[20px] w-[220px] absolute bottom-5'>{description}</p>
        </Link>
    );
};

DiscountCard.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};

export default DiscountCard;
