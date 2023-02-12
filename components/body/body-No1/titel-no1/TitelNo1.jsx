import style from '../titel-no1/Titel-no1.module.css';
import { CgArrowLongLeft } from 'react-icons/cg';

function TitelNo1() {
    return (
        <div className={style.titelNo1}>
            <div>
                <h2 className={style.bigTitle}>Why Choosing Us</h2>
            </div>
            <div className={style.bigText}>
                <div className={style.textNo1}>
                    <h3 className={style.tilteText}>Luxury facilities</h3>
                    <p className={style.text}>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <div className={style.endTiltel}>
                        <p>More Info </p>
                        <span><CgArrowLongLeft className={style.arroow} /></span>
                    </div>
                </div>

                <div className={style.textNo1}>
                    <h3 className={style.tilteText}>Luxury facilities</h3>
                    <p className={style.text}>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <div className={style.endTiltel}>
                        <p>More Info </p>
                        <span><CgArrowLongLeft className={style.arroow} /></span>
                    </div>
                </div>
                <div className={style.textNo1}>
                    <h3 className={style.tilteText}>Luxury facilities</h3>
                    <p className={style.text}>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <div className={style.endTiltel}>
                        <p>More Info </p>
                        <span><CgArrowLongLeft className={style.arroow} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitelNo1;