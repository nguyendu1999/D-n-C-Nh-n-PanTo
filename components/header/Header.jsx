import Nav from './nav/Nav';
import Background from './background/Background';
import Content from './content/Content';
import Search from './nav/search/Search';
function Header() {
    return (
        <div>
            <div> <Background/></div>
            <div><Nav/></div>
            <div><Content/></div>
            <div><Search/></div>
        </div>
    );
}
export default Header;