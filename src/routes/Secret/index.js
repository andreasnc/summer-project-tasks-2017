import SecretView from './components/SecretView';

export default (store) => ({
  path : 'secret',
  getComponent (nextState, cb) {
    require.ensure([], () => {

      cb(null, SecretView);

    }, 'secret')
  }
})
