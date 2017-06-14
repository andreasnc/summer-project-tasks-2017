import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : 'oppgave5',
  getComponent (nextState, cb) {
    require.ensure([], () => {
      const Oppgave5 = require('./containers/Oppgave5Container').default;
      const reducer = require('./reducer/oppgave5reducer').default;

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'characters', reducer });

      cb(null, Oppgave5);

    }, 'oppgave5')
  }
})
