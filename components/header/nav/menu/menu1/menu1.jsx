import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import style from '../menu1/menu1.module.css';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Shop
      </a>
    ),
  },
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        About Us
      </a>
    ),
  },
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#ư">
        Contact
      </a>
    ),
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className={style.push}>
          Furniture
        </div>
          <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;