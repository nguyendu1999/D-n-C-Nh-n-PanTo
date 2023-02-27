import style from '../body_No6/BodyNo6.module.css';
import Space from '../body-No1/space/Space.jsx';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { dataList } from '../../../data';

function BodyNo6() {

  return (
    <div className={style.bigBody6}>
      <Space />
      <div className={style.topBody6}>
        <h3>TESTIMONIALS</h3>
        <h1>Our Client Reviews</h1>
      </div>
      <div className={style.buttonBody6}>
        {dataList.map(item => (
          <div key={item.id} className={style.bigBackground}>
            <div className={style.backgrounds}>
              <img src={item.img} alt={item.titel} />
            </div>
            <div className={style.titelBackground}>
              <img src={item.avatar} alt={item.titel} className={style.avatar} />
              <h3 className={style.titel}>{item.titel}</h3>
              <p className={style.category}>{item.category}</p>
              <div className={style.sizeText}>
                <span className={style.text}>{item.text}</span>
              </div>
              <div className={style.bigStart}>
                <AiTwotoneStar className={style.colorStart} />
                <AiTwotoneStar className={style.colorStart} />
                <AiTwotoneStar className={style.colorStart} />
                <AiTwotoneStar className={style.colorStart} />
                <AiTwotoneStar className={style.colorStart} />
                <AiTwotoneStar className={style.unColorStart} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <BsArrowLeft className={style.left} />
      </div>
      <div>
        <BsArrowRight className={style.right} />
      </div>
      <Space />
    </div>
  )
};

export default BodyNo6;