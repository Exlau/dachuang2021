import logo from './logo.svg';
import { Route, Redirect } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import './App.css';
import Index from './components/Index';
import Login from './components/Login';


function App(props) {
  return (
    <div className="App">
      <Route path='/' render={() => <Redirect to='/index/home' />} />
      <Route path='/login' component={Login} history={props.history} />
      <Route path='/index' component={Index} history={props.history}></Route>
    </div>
  );
}

export default App;
