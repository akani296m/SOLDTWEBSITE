<script lang="ts">
	import { page } from "$app/state";
	import { mainNav } from "$lib/data/navigation";

	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/60 bg-surface/80 backdrop-blur-xl"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a
			href="/"
			class="flex items-center gap-2 font-display text-xl font-bold tracking-tight"
		>
			<span
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-black text-white"
			>
				S
			</span>
			<span class="text-near-black">SOLDT</span>
		</a>

		<!-- Desktop Nav -->
		<nav class="hidden items-center gap-8 md:flex">
			{#each mainNav as item}
				<a
					href={item.href}
					class="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-primary
						{page.url.pathname === item.href ||
					(item.href !== '/' &&
						page.url.pathname.startsWith(item.href.split('#')[0]))
						? 'text-primary'
						: ''}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- CTA + Mobile Toggle -->
		<div class="flex items-center gap-4">
			<a
				href="https://admin.soldt.co.za/signup"
				class="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md md:inline-flex"
			>
				Get Started
			</a>

			<!-- Mobile hamburger -->
			<button
				class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 md:hidden"
				onclick={toggleMobile}
				aria-label="Toggle navigation"
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Nav -->
	{#if mobileOpen}
		<div class="border-t border-zinc-200/60 bg-surface px-6 py-6 md:hidden">
			<nav class="flex flex-col gap-4">
				{#each mainNav as item}
					<a
						href={item.href}
						class="text-base font-medium text-zinc-700 transition-colors hover:text-primary"
						onclick={closeMobile}
					>
						{item.label}
					</a>
				{/each}
				<a
					href="https://admin.soldt.co.za/signup"
					class="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
					onclick={closeMobile}
				>
					Get Started Free
				</a>
			</nav>
		</div>
	{/if}
</header>

<!-- Spacer for fixed header -->
<div class="h-[73px]"></div>
