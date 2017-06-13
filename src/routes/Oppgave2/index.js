import Oppgave2 from './components/Oppgave2View';

export default (store) => ({
  path : 'oppgave2',
  getComponent (nextState, cb) {
    require.ensure([], () => {

      cb(null, Oppgave2);

    }, 'oppgave2')
  }
})
