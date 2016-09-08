/*globals COURSES:true */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import GlobalNav from '../components/GlobalNav'

class App extends Component {
  render() {
  	const { children, inputValue } = this.props
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </div>
    )
  }
}

//module.exports = App

//export default connect({})(App)

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App)
