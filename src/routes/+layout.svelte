<script>
	   let { children } = $props();
	   import '../app.postcss';
	   import Navbar from '../lib/navbar.svelte';
</script>

{@render children()}

<Navbar/>