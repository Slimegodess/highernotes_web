import { createStore } from 'vuex';
import { albumInfo } from '@/store/albums/albums';
import { auth } from './auth/auth';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    albumInfo,
  },
});
