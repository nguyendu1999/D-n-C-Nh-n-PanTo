import { FaShoppingBasket } from 'react-icons/fa';
import style from '../bag/Bag.module.css';
function Bag(props){
    return(
        <div className={style.shopHeader}>
                <FaShoppingBasket />
                <div className={style.numberShop}>
                    0
                </div>
            </div>
    );
};

export default Bag;