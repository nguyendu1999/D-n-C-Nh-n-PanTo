import { AiOutlineDown } from 'react-icons/ai';
import { FaShoppingBasket } from 'react-icons/fa';
import style from '../nav/Nav.module.css';

function Nav(props) {
    return (
        <div className={style.navHeader}>
            <div className={style.headerOne}>
                <h3>Panto</h3>
            </div>
            <div className={style.headerTow}>
                <ul className={style.headerMenu}>
                    <li className={style.nav1}>Furniture <AiOutlineDown className={style.iconDown} /></li>
                    <li className={style.nav2}>Shop</li>
                    <li className={style.nav3}>About Us</li>
                    <li className={style.nav4}>Contact</li>
                </ul>
            </div>
            <div className={style.shopHeader}>
                <FaShoppingBasket />
                <div className={style.numberShop}>
                    0
                </div>
            </div>
        </div>
    );
};

export default Nav;