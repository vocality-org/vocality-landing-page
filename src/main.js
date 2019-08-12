import App from './App.svelte';

import 'normalize.css/normalize.css';
import 'basscss/css/basscss.css';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    new App({
        target: document.body
    });
});