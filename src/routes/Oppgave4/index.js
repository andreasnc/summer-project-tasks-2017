import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : 'oppgave4',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default;
      const reducer = require('./reducer/counter').default;

      injectReducer(store, { key: 'counter', reducer });

      cb(null, Counter);

    }, 'oppgave4')
  }
})
