import Oppgave1 from './components/Oppgave1View';

export default (store) => ({
  path : 'oppgave1Fasit',
  getComponent (nextState, cb) {
    require.ensure([], () => {

      cb(null, Oppgave1);

    }, 'oppgave1Fasit')
  }
})
