import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './bootstrap.min.css';
import './App.css';

import Landing from './components/Landing';
import NavigationBar from './components/NavigationBar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch keys='routes'>
        <Route path='/' component={Landing} exact />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </Router>
  );
};

export default App;
