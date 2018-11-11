import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './containers/login';
import Register from './containers/register';
import AuthRoute from './components/authRoute';
import BossInfo from './containers/bossinfo';
import store from './store';
import 'antd-mobile/dist/antd-mobile.css';


class App extends Component {
  render() {
    return (
     <Provider store = {store}>
     <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
    
          <Route path='/login' exact component={Login}/>
          <Route path='/reg' exact component={Register}/>
          <Route path='/bossinfo' exact component={BossInfo}/>
     
      </div>
     </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
