import style from '../background/Background.module.css';
import background from '../../assets/image/Rectangle 1441.png';

function Background() {
    return(
        <div className={style.bgrHeader}>
            <div>
                <img className={style.imgBackground} src={background} alt="" />
            </div>
        </div>
    )
}

export default Background;