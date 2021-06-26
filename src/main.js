import { createApp } from 'vue';
import Amplify from 'aws-amplify';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import { Plugin } from 'vue-responsive-video-background-player';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line camelcase,import/extensions
import aws_exports from './aws-exports.js';

import './assets/tailwind.css';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

const app = createApp(App).use(store).use(router).use(Plugin);
app.mount('#app');
