import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAnsSingUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component{
unsubscribeFromAuth = null;
componentDidMount(){
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        });
      });
    }
    else{
      setCurrentUser(userAuth)
    }
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route 
        exact 
        path='/signing' 
        render={()=> 
          this.props.currentUser? (
            <Redirect to='/' />
            ):(
            <SignInAnsSingUp />
            )
            }
            />
      
      </Switch>
    </div>
  );
}
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})
const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
