<script lang="ts">
    import { formatDate } from "$lib/utils/blog";
    import type { Snippet } from "svelte";

    interface Props {
        title: string;
        description: string;
        date: string;
        author: string;
        tags?: string[];
        coverImage?: string;
        children: Snippet;
    }

    let {
        title,
        description,
        date,
        author,
        tags = [],
        coverImage,
        children,
    }: Props = $props();
</script>

<svelte:head>
    <title>{title} — SOLDT Blog</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />
    {#if coverImage}
        <meta property="og:image" content={coverImage} />
    {/if}
</svelte:head>

<article class="mx-auto max-w-3xl px-6 py-16">
    <!-- Back link -->
    <a
        href="/blog"
        class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary"
    >
        <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
            />
        </svg>
        Back to Blog
    </a>

    <!-- Header -->
    <header class="mb-12">
        {#if tags.length > 0}
            <div class="mb-4 flex flex-wrap gap-2">
                {#each tags as tag}
                    <span
                        class="rounded-full bg-primary-muted px-3 py-1 text-xs font-medium text-primary"
                    >
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}

        <h1 class="text-near-black">{title}</h1>

        <div class="mt-4 flex items-center gap-4 text-sm text-zinc-500">
            <span>By {author}</span>
            <span>·</span>
            <time datetime={date}>{formatDate(date)}</time>
        </div>

        {#if description}
            <p class="mt-6 text-lg text-zinc-600">{description}</p>
        {/if}
    </header>

    <!-- Content -->
    <div
        class="prose prose-zinc prose-lg max-w-none prose-headings:font-display prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:hidden prose-code:after:hidden prose-img:rounded-xl"
    >
        {@render children()}
    </div>
</article>
