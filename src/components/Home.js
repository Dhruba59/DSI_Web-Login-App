import { Alert } from "@material-ui/lab";
import React from "react";
import app from '../firebase';
import css from './home.module.css';

const Home = () => {
  return (
    <div className={css.Home}>
      
      <Alert ><h2 className={css.Alert}>You have successfully logged In</h2></Alert>
      <h2 className={css.homepage}>This is the home page</h2>
      <button className={css.Button} onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
