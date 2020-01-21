import Vuex from 'vuex';
import { App } from './app';
import { getModule } from 'vuex-module-decorators';

const store = new Vuex.Store({
  modules: {
    app: App,
  },
});

export const AppState = getModule(App, store);
