/*globals COURSES:true */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import GlobalNav from '../components/GlobalNav'

import img1 from '../style/bg.png'

//module.hot.accept = true
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

//      <div style={{ padding: 20 }}>
//        {this.props.children || <Dashboard courses={COURSES} />}
//      </div>
////      <h1>rrrr</h1>
////      <img src= {require('/react-all-demo-github/style/bg.png')} />
//				<img src= {img1} />
//        <img style={{'float':'left'}} src= {img1} />
//    </div>
////    <img src= {require('/react-all-demo-github/style/bg.png')} />

//module.exports = App

//export default connect({})(App)

function mapStateToProps(state, ownProps) {
  return {}
}
//console.log(module.hot);
//if(module.hot) {
//  module.hot.accept()
//}

export default connect(mapStateToProps)(App)
