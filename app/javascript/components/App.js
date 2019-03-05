import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import HelloWorld from './HelloWorld'

import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
