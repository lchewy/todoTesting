import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { config } from "../config/keys";
import Router from "./Router"

import axios from "axios"

class App extends Component {
  async componentDidMount() {
    firebase.initializeApp(config);
    // const token = "EAAQjZCseQU7IBAIOvy4FhN6TXZBhUEGxivbZCZA2XZBZBT64GXs4b1yNRbFD3mNUN1JwfYj9NOSzayZCEDJ4tQC7sXIZCqwjTSUZBfeck0FQ7hVHzKdhDGemretZAO7ao3YvYF9BWlgL74VLTNHqHq2B7WIEaq1sOzMmlCaNgtQPH8fvlPJME0jh0gBT8tHarpV25WRXtHYOrE2YKKxh8Pst5tInJJZC7XAU3sZD"
    // const res = await axios.get(`https://graph.facebook.com/v3.0/me?fields=id%2Cname%2Cemail&access_token=${token}`)
    // console.log("axios get", res.data)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
