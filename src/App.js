import React, { Component } from 'react'
import './App.css'
import { hot } from 'react-hot-loader'
// import firebase from "./firebase"
import Main from './Components/Layout/main'

// firebase.firestore().collection('test').add({
//     title: 'Just a collection test',
//     time_secs: "20s"
// })

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}

export default hot(module)(App)