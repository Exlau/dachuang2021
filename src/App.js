import logo from './logo.svg';
import 'antd-mobile/dist/antd-mobile.css'
import './App.css';
import Routers from './components/Routers';



function App(props) {
  return (
    <div className="App">
      <Routers history={props.history} />
    </div>
  );
}

export default App;
