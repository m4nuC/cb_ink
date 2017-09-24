import React from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Main from './containers/Main';
import reducer from './reducers';
import Expo from 'expo';

// Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE)
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
