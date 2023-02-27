import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../body_No5/BodyNo5.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import Space from '../body-No1/space/Space';
import { useEffect, useState } from 'react';
import { Radio } from "antd";
// import MenuFilter from "./menu_Body_No5/menuFilter/menuFilter"; 

function BodyNo5() {

    const [postList, setpostList] = useState([]);
    const [tempProduct, setTempProduct] = useState();

    useEffect(() => {
        async function fetchPostListh() {
            try {
                const requestUrl = 'https://fe21-db.vercel.app/furniture';
                const response = await fetch(requestUrl);
                const resJson = await response.json();
                const data = resJson;
                setpostList(data);
                setTempProduct(data); 
            } catch (error) {
                console.log('Failed to fecth post list');
            }
        }
        fetchPostListh();
    }, []);

    function hanldeClickToFilter(props){
        
        var newCategories = tempProduct.filter((product, index) => {
            return product.categories === props;
        })
        console.log('new',newCategories);
        setpostList(newCategories);
    }

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
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <div className={style.bigradio}>
                            <Radio.Button value="a" onClick={() => hanldeClickToFilter(1)} style={{ fontSize: 30, margin: 20, width: 110, height: 40, textAlign: "center", borderRadius: 30 }}>Chair</Radio.Button>
                            <Radio.Button value="b" onClick={() =>hanldeClickToFilter(2)} style={{ fontSize: 30, margin: 20, width: 110, height: 40, textAlign: "center", borderRadius: 30 }}>Beds</Radio.Button>
                            <Radio.Button value="c" onClick={() =>hanldeClickToFilter(3)} style={{ fontSize: 30, margin: 20, width: 110, height: 40, textAlign: "center", borderRadius: 30 }}>Sofa</Radio.Button>
                            <Radio.Button value="d" onClick={() =>hanldeClickToFilter(4)} style={{ fontSize: 30, margin: 20, width: 110, height: 40, textAlign: "center", borderRadius: 30 }}>Lamp</Radio.Button>
                        </div>
                    </Radio.Group>
                    <Radio.Group
                        defaultValue="c"
                        buttonStyle="solid"
                        style={{
                            marginTop: 36,
                            fontSize: 36,
                        }}
                    >
                    </Radio.Group>
                </div>
                <menuFilter/>
            </div>

            <Slider {...settings}>
                {postList.map(item => (
                    <div className={style.allSlide}>
                        <div className={style.imgBig}>
                            <div className={style.sizeImg}>
                                <img src={item.img} alt={item.name} className={style.Image} />
                            </div>
                            <p>Chair</p>
                            <h2>{item.name}</h2>
                            <div>
                                <AiTwotoneStar className={style.start} />
                                <AiTwotoneStar className={style.start} />
                                <AiTwotoneStar className={style.start} />
                                <AiTwotoneStar className={style.start} />
                                <AiTwotoneStar className={style.start} />
                            </div>
                        </div>
                        <div className={style.priceAndIcon}>
                            <div>
                                <h3>${item.price}</h3>
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