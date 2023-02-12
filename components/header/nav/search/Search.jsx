import style from '../search/Search.module.css';
import { GrSearch } from 'react-icons/gr';
function Search() {
    return (
        <div className={style.bigSearch}>
            <div className={style.smallSearch}>
                <div>
                    <input className={style.input} type="text" name="" id="search" placeholder="Search furniture" />

                </div>
                <div>
                    <GrSearch className={style.iconSearch} />
                </div>
            </div>
        </div>
    );
};
export default Search;