import CoreLayout from '../layouts/PageLayout/PageLayout';
import Oppgave1Route from './Oppgave1';
import Oppgave2Route from './Oppgave2';
import Oppgave3Route from './Oppgave3';
import Oppgave4Route from './Oppgave4';
import Oppgave5Route from './Oppgave5';
import Oppgave1FasitRoute from './Oppgave1Fasit';
import Oppgave2FasitRoute from './Oppgave2Fasit';
import Oppgave3FasitRoute from './Oppgave3Fasit';
import Oppgave4FasitRoute from './Oppgave4Fasit';
import Oppgave5FasitRoute from './Oppgave5Fasit';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
    Oppgave1Route(store),
    Oppgave1FasitRoute(store),
    Oppgave2Route(store),
    Oppgave2FasitRoute(store),
    Oppgave3Route(store),
    Oppgave3FasitRoute(store),
    Oppgave4Route(store),
    Oppgave4FasitRoute(store),
    Oppgave5Route(store),
    Oppgave5FasitRoute(store)
  ]
});

export default createRoutes;
