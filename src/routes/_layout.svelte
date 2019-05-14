<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<div class="page">
	<Header {segment}/>

	<main class="main">
		<slot></slot>
	</main>

	<Footer {segment}/>
</div>
