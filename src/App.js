import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch, useHistory } from 'react-router-dom'
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInSignUp from './pages/SignInSignUp';
import { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase';
import { connect } from 'react-redux'
import { setCurrentUser, signOutOfApp } from './redux/userReducer'
import { useSelector, useDispatch } from 'react-redux'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Checkout from './components/Checkout';
function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
             // dispatch({type: 'SET_CURRENT_USER', payload: user})
            id: snapshot.id,
            ...snapshot.data()
          }))
          history.push('/')
        })
      } else {
        dispatch(signOutOfApp())
      }
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
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
