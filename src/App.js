import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInSignUp from './pages/SignInSignUp';
import { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/userReducer'
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } // end if
      dispatch({type: 'SET_CURRENT_USER', payload: user})
    })
    return unsubscribe
  }, [])
  return (
    <div>
      <Header />
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
