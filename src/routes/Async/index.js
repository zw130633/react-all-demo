module.exports = {
  path: 'async',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/Async'))
    })
  }
}
