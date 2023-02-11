import style from '../nav/Nav.module.css';
import Titel from './titel/Titel'
import Menu from './menu/Menu';
import Bag from './bag/Bag';
function Nav(props) {
    return (
        <div className={style.navHeader}>
            <div><Titel/></div>
            <div><Menu/></div>
            <div><Bag/></div>
        </div>
    );
};

export default Nav;