import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

class ToggleableState {
  isOpen = false;

  @Mutation
  open() {
    this.isOpen = true;
  }

  @Mutation
  close() {
    this.isOpen = false;
  }
}

class AppDrawerState extends ToggleableState {}

@Module({
  name: 'app',
  namespaced: true,
})
export class App extends VuexModule {
  appDrawer = new AppDrawerState();
}
