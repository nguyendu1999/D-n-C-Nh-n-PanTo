import Nav from './nav/Nav';
import Background from './background/Background';
import Content from './content/Content';
function Header() {
    return (
        <div>
            <div> <Background/></div>
            <div><Nav/></div>
            <div><Content/></div>
        </div>
    );
}
export default Header;