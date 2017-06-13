import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : 'oppgave3',
  getComponent (nextState, cb) {
    require.ensure([], () => {
      const Oppgave3 = require('./containers/Oppgave3Container').default;
      const reducer = require('./reducer/oppgave3reducer').default;

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'characters', reducer });

      cb(null, Oppgave3);

    }, 'oppgave3')
  }
})
