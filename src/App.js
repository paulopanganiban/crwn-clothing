import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInSignUp from './pages/SignInSignUp';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
  auth.onAuthStateChanged(user => {
    if (user) {
      setCurrentUser(user)
      console.log(currentUser)
    } else {
      // dispatch logout
    }
   })
  }, [])
  return (
    <div>
      <Header currentUser={currentUser}/>
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
