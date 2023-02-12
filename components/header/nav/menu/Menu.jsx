import { AiOutlineDown } from 'react-icons/ai';
import style from '../menu/Menu.module.css';
function Menu(props) {
    return(
        <div className={style.headerTow}>
                <ul className={style.headerMenu}>
                    <li className={style.nav1}>Furniture <AiOutlineDown className={style.iconDown}/> </li>
                    <li className={style.nav1}>Shop</li>
                    <li className={style.nav1}>About Us</li>
                    <li className={style.nav1}>Contact</li>
                </ul>
            </div>
    );
}

export default Menu