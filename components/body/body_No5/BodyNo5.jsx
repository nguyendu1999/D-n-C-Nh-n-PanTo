import Slider from "react-slick";
import { dataList } from "../../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../body_No5/BodyNo5.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import Space from '../body-No1/space/Space';
function BodyNo5() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={style.bigSlide}>
            <Space />
            <div className={style.head}>
                <div className={style.headOne}>
                    <h2>Best Selling Product</h2>
                </div>
                <div className={style.headTow}>
                    <ul>
                        <li>
                            <a href='#id1'>Chair</a>
                        </li>
                        <li>
                            <a href="#id2">Beds</a>
                        </li>
                        <li>
                            <a href="#id3">Sofa</a>
                        </li>
                        <li>
                            <a href="#id4">Lamp</a>
                        </li>

                    </ul>
                </div>
            </div>
            <Slider {...settings}>
                {dataList.map(item => (
                    <div className={style.allSlide}>
                        <div className={style.imgBig}>
                            <img src={item.img} alt={item.titel} className={style.Image} />
                            <p>{item.category}</p>
                            <h2>{item.titel}</h2>
                            <div>
                                <AiTwotoneStar className={style.start} />
                                <AiTwotoneStar className={style.start}/>
                                <AiTwotoneStar className={style.start}/>
                                <AiTwotoneStar className={style.start}/>
                                <AiTwotoneStar className={style.start}/>
                            </div>
                        </div>
                        <div className={style.priceAndIcon}>
                            <div>
                                <h3>{item.price}</h3>
                            </div>
                            <div>
                                <BsFillPlusSquareFill className={style.plus} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default BodyNo5;