import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './bootstrap.min.css';
import './App.css';

import Landing from './components/Landing';
import NavigationBar from './components/NavigationBar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer position='bottom-left' />
        <NavigationBar />
        <Switch keys='routes'>
          <Route path='/' component={Landing} exact />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
