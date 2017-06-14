import CoreLayout from '../layouts/PageLayout/PageLayout';
import Oppgave1Route from './Oppgave1';
import Oppgave2Route from './Oppgave2';
import Oppgave3Route from './Oppgave3';
import Oppgave4Route from './Oppgave4';
import Oppgave5Route from './Oppgave5';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
    Oppgave1Route(store),
    Oppgave2Route(store),
    Oppgave3Route(store),
    Oppgave4Route(store),
    Oppgave5Route(store)
  ]
});

export default createRoutes;
