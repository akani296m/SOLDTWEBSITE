<script lang="ts">
	import "./layout.css";
	import { page } from "$app/state";
	import Header from "$lib/components/layout/Header.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
	import { SITE_URL } from "$lib/constants/site";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		rel="canonical"
		href={`${SITE_URL}${page.url.pathname === "/" ? "/" : page.url.pathname.replace(/\/+$/, "")}`}
	/>
	<meta name="theme-color" content="#777DD3" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
