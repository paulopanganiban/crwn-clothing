import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInSignUp from './pages/SignInSignUp';
function App() {
  return (
    <div>
      <Header/>
      {/* SWITCH AND ROUTE is the bread and butter of navigation */}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
