import CoreLayout from '../layouts/PageLayout/PageLayout';
import Oppgave1Route from './Oppgave1';
import Oppgave2Route from './Oppgave2';
import Oppgave3Route from './Oppgave3';
import Oppgave4Route from './Oppgave4';
import Oppgave5Route from './Oppgave5';
import Oppgave1Fasit from './Oppgave1Fasit';
import Oppgave2Fasit from './Oppgave2Fasit';
import Oppgave3Fasit from './Oppgave3Fasit';
import Oppgave4Fasit from './Oppgave4Fasit';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
    Oppgave1Route(store),
    Oppgave1Fasit(store),
    Oppgave2Route(store),
    Oppgave2Fasit(store),
    Oppgave3Route(store),
    Oppgave3Fasit(store),
    Oppgave4Route(store),
    Oppgave4Fasit(store),
    Oppgave5Route(store)
  ]
});

export default createRoutes;
