<script lang="ts">
    import PostCard from "$lib/components/blog/PostCard.svelte";
    import type { BlogPost } from "$lib/types";

    interface Props {
        data: {
            posts: BlogPost[];
        };
    }

    let { data }: Props = $props();
</script>

<svelte:head>
    <title>Blog — SOLDT</title>
    <meta
        name="description"
        content="Tips, guides, and insights for South African e-commerce sellers."
    />
</svelte:head>

<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-near-black">
                The SOLDT
                <span
                    class="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                    Blog
                </span>
            </h1>
            <p class="mt-4 text-lg text-zinc-500">
                E-commerce tips, product updates, and stories from the South
                African seller community.
            </p>
        </div>

        {#if data.posts.length > 0}
            <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {#each data.posts as post}
                    <PostCard {post} />
                {/each}
            </div>
        {:else}
            <div
                class="mt-16 rounded-2xl border border-zinc-200/60 bg-white p-12 text-center shadow-sm"
            >
                <p class="text-lg text-zinc-500">
                    No posts yet. Check back soon! ✍️
                </p>
            </div>
        {/if}
    </div>
</section>
