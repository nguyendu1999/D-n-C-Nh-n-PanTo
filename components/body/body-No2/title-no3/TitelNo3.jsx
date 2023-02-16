import style from '../title-no3/TitelNo3.module.css';
import imgChair from '../../../assets/image/Rectangle 144677777.png';
import { CgArrowLongLeft } from 'react-icons/cg';
function TitelNo3() {
    return (
        <>
            <div className={style.bigTitelNo2}>
                <div className={style.bigImg}>
                    <img src={imgChair} alt="" className={style.img} />
                    <div className={style.shadow1}></div>
                    <div className={style.shadow2}></div>
                </div>
                <div className={style.smallTitelNo2}>
                    <h4 className={style.no1}>EXPERIENCES</h4>
                    <h2 className={style.no2}>WE PROVIDE YOU THE BEST EXPERIENCE</h2>
                    <p className={style.no3}>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                    <div className={style.info}>
                        <p>More Info </p>
                        <span><CgArrowLongLeft className={style.arroow} /></span>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default TitelNo3;