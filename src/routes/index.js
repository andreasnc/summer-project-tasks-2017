import CoreLayout from '../layouts/PageLayout/PageLayout';
import Login from './Login';
import Secret from './Secret';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
    Login(store),
    Secret(store)
  ]
});

export default createRoutes;
