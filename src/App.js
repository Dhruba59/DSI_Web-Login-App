import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/SignIn';
import SignUpPage from './components/SignUp';
import HomePage from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import { AuthProvider } from "../src/Context/authContext";
import firebase from 'firebase';
import { useState } from 'react';


const getUserMail = () => {
  const user = firebase.auth().currentUser;
  if(user) {
    console.log(user);
    return "abcd";
  }
} 

function App() {

  const [email, setEmail] = useState();
  const [signedIn, setSignedIn] = useState(false)

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
      setEmail(user.email);
      
    }
    else{
      setEmail();
      setSignedIn(false);
    }
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Navbar signedIn={signedIn} userMail={email}/>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/signin" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </div>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
