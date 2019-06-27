import * as sapper from '@sapper/app';
import '../node_modules/normalize.css/normalize.css';
import 'svelte-toolkit/main.scss';

sapper.start({
	target: document.querySelector('#sapper')
});
