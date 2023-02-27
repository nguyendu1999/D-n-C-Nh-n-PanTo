import style from '../menu/Menu.module.css';
import App from './menu1/menu1';
function Menu(props) {
    return(
        <div className={style.headerTow}>
                <ul className={style.headerMenu}>
                    <li className={style.nav1}>
                      <App/>
                     </li>
                    <li className={style.nav1}>Shop</li>
                    <li className={style.nav1}>About Us</li>
                    <li className={style.nav1}>Contact</li>
                </ul>
            </div>
    );
}

export default Menu