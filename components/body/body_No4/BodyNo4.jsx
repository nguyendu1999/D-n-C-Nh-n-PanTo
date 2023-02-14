import React from 'react'
import style from '../body_No4/BodyNo4.module.css';
import { CgArrowLongLeft } from 'react-icons/cg'
import img1 from '../../assets/image/Rectangle 1450334.png';
import img2 from '../../assets/image/Rectangle 1450.png';
import img3 from '../../assets/image/Rectangle 1446.png';
import Space from '../body-No1/space/Space';

function BodyNo4() {
    return (
        <>
            <Space/>
            <div className={style.bigBodyNo4}>
                <div className={style.no1Body}>
                    <h4>MATERIALS</h4>
                    <h2>Very serious materials for making furniture</h2>
                    <div>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</div>
                    <div className={style.info}>
                        <p>More Info </p>
                        <span><CgArrowLongLeft className={style.arroow} /></span>
                    </div>
                </div>
                <div className={style.no2Body}>
                    <div className={style.smallOne}>
                        <div>
                            <img src={img1} alt="" className={style.img1}/>
                        </div>
                        <div>
                            <img src={img2} alt="" className={style.img2}/>
                            <div className={style.shadowImg2}></div>
                        </div>
                    </div>
                    <div className={style.smallTow}>
                        <img src={img3} alt="" className={style.img3}/>
                        <div className={style.shadow}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyNo4