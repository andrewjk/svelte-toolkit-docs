import * as sapper from '@sapper/app';
// HACK: How do we package a component library??
import '../../svelte-toolkit/src/styles/_styles.scss';

sapper.start({
	target: document.querySelector('#sapper')
});