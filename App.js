import Header from './components/header/Header';
import BodyNo1 from './components/body/body-No1/BodyNo1';
import BodyNo3 from './components/body/body-No2/BodyNo3';
import BodyNo2 from './components/body/body-No2+/Body-No3';
import MyFooter from './components/footer/MyFooter';
import BodyNo4 from './components/body/body_No4/BodyNo4';
import BodyNo5 from './components/body/body_No5/BodyNo5';
import BodyNo6 from './components/body/body_No6/BodyNo6';
import './Setting.css';
function App() {
  return (
    <div>
      <Header />
      <BodyNo1/>
      <BodyNo5/>
      <BodyNo3 />
      <BodyNo4/>
      <BodyNo2/>
      <BodyNo6/>
      <MyFooter/>
    </div>
  );
}

export default App;
