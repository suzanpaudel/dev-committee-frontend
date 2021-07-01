import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Switch keys='routes'>
        <Route path='/' component={HomePage} exact />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </Router>
  );
};

export default App;
