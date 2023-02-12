import { FaShoppingBasket } from 'react-icons/fa';
import style from '../bag/Bag.module.css';
function Bag(props) {
    return (
        <div className={style.shopHeader}>
            <FaShoppingBasket />
            <div>
                <div className={style.numberShop}>
                    0
                </div>
            </div>
        </div>
    );
};

export default Bag;