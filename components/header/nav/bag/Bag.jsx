import { FaShoppingBasket } from 'react-icons/fa';
import style from '../bag/Bag.module.css';
import { DELETE_PRODUCT } from './action/actionType';

function Bag(props) {
    return (
        <>
            <div className={style.shopHeader}>
                <FaShoppingBasket className={style.Icon}/>
                <ul className={style.numberShop}>
                    0
                    <div className={style.hoverShop}>
                        <div className={style.pushShop}>
                            <ul>
                                <li>
                                    1000
                                </li>
                            </ul>
                        </div>
                    </div>
                </ul>
            </div>

        </>
    );
};

export default Bag;