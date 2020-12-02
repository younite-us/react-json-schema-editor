/**
 * @class UiJson
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from './App';

import styles from './styles.css'

export default class UiJson extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      // <div className={styles.test}>
      //   Example Component: {text}
      // </div>
      <Provider store={store}>
        <App {...this.props} />
      </Provider>
    )
  }
}
