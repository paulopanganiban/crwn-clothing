import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop';
function App() {
  return (
    <div>
      {/* SWITCH AND ROUTE is the bread and butter of navigation */}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
