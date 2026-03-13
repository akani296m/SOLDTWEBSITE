<script lang="ts">
    import CaseStudyCard from '$lib/components/case-studies/CaseStudyCard.svelte';
    import { caseStudies } from '$lib/data/case-studies';
</script>

<svelte:head>
    <title>Case Studies — SOLDT</title>
    <meta
        name="description"
        content="See how South African brands use SOLDT to improve storefronts, increase conversion rates, and grow online sales."
    />
</svelte:head>

<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-near-black">
                SOLDT
                <span class="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    Case Studies
                </span>
            </h1>
            <p class="mt-4 text-lg text-zinc-500">
                Real examples of South African brands improving conversion, trust, and storefront performance with SOLDT.
            </p>
        </div>

        {#if caseStudies.length > 0}
            <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {#each caseStudies as caseStudy}
                    <CaseStudyCard {caseStudy} />
                {/each}
            </div>
        {:else}
            <div class="mt-16 rounded-2xl border border-zinc-200/60 bg-white p-12 text-center shadow-sm">
                <p class="text-lg text-zinc-500">
                    No case studies yet. Check back soon.
                </p>
            </div>
        {/if}
    </div>
</section>
