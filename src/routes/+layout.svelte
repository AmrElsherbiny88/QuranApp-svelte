<script>
	   let { children } = $props();
	   import '../app.postcss';
	   import Navbar from '../routes/components/navbar.svelte';
</script>

{@render children()}

<Navbar/>