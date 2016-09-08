import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import route from '../routes'
import { Router } from 'react-router'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history} routes={route} />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}