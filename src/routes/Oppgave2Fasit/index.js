import Oppgave2 from './components/Oppgave2View';

export default (store) => ({
  path : 'oppgave2Fasit',
  getComponent (nextState, cb) {
    require.ensure([], () => {

      cb(null, Oppgave2);

    }, 'oppgave2Fasit')
  }
})
