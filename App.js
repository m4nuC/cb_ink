import React from 'react';
import Expo from 'expo';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import Main from './containers/Main';
import reducer from './reducers'

const store = createStore(
  reducer,
)

export default class Bootstraper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
