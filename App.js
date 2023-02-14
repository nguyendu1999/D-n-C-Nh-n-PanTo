import Header from './components/header/Header';
import BodyNo1 from './components/body/body-No1/BodyNo1';
import BodyNo3 from './components/body/body-No2/BodyNo3';
import BodyNo2 from './components/body/body-No2+/Body-No3';
import MyFooter from './components/footer/MyFooter';
import BodyNo4 from './components/body/body_No4/BodyNo4';
import './Setting.css';
function App() {
  return (
    <div>
      <Header />
      {/* <BodyNo1 />
      <BodyNo3 />
      <BodyNo2/> */}
      <BodyNo4/>
      <MyFooter/>
    </div>
  );
}

export default App;
