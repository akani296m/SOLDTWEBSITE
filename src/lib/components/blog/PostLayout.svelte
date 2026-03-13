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
    {@html `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "datePublished": date,
        "author": {
            "@type": "Organization",
            "name": "SOLDT",
            "@id": "https://www.soldt.co.za/#organization"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SOLDT",
            "@id": "https://www.soldt.co.za/#organization",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.soldt.co.za/soldt-assets/title(3).svg"
            }
        }
    })}</script>`}
</svelte:head>

<article class="bg-surface py-24">
    <div class="mx-auto max-w-3xl px-6">
        <!-- Back link -->
        <a
            href="/blog"
            class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary"
        >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
        </a>

        <!-- Header -->
        <header class="mb-12">
            {#if tags.length > 0}
                <div class="mb-4 flex flex-wrap gap-2">
                    {#each tags as tag}
                        <span class="rounded-full bg-primary-muted px-3 py-1 text-xs font-medium text-primary">
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
        <div class="prose-blog">
            {@render children()}
        </div>
    </div>
</article>

<style>
    .prose-blog {
        color: #3f3f46;
        font-size: 1.0625rem;
        line-height: 1.85;
    }

    .prose-blog :global(p) {
        margin-top: 1.25rem;
        margin-bottom: 0;
    }

    .prose-blog :global(h2) {
        font-size: 1.5rem;
        font-weight: 700;
        color: #09090b;
        letter-spacing: -0.02em;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
        padding-top: 1.5rem;
        border-top: 1px solid #e4e4e780;
    }

    .prose-blog :global(h3) {
        font-size: 1.125rem;
        font-weight: 600;
        color: #09090b;
        margin-top: 1.75rem;
        margin-bottom: 0.25rem;
    }

    .prose-blog :global(ul),
    .prose-blog :global(ol) {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        padding-left: 1.5rem;
    }

    .prose-blog :global(ul) { list-style-type: disc; }
    .prose-blog :global(ol) { list-style-type: decimal; }

    .prose-blog :global(li) {
        margin-top: 0.375rem;
        line-height: 1.75;
    }

    .prose-blog :global(a) {
        color: #777dd3;
        text-decoration: none;
        font-weight: 500;
    }

    .prose-blog :global(a:hover) { text-decoration: underline; }

    .prose-blog :global(strong) {
        color: #09090b;
        font-weight: 600;
    }

    .prose-blog :global(em) { font-style: italic; }

    .prose-blog :global(blockquote) {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        padding: 1rem 1.5rem;
        border-left: 3px solid #777dd3;
        background-color: #777dd30a;
        border-radius: 0.5rem;
    }

    .prose-blog :global(hr) {
        margin-top: 2rem;
        margin-bottom: 2rem;
        border: 0;
        border-top: 1px solid #e4e4e780;
    }

    .prose-blog :global(code) {
        font-size: 0.9em;
        background-color: #f4f4f5;
        padding: 0.15em 0.4em;
        border-radius: 0.25rem;
        color: #09090b;
    }

    .prose-blog :global(table) {
        width: 100%;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        border-collapse: collapse;
        font-size: 0.9375rem;
    }

    .prose-blog :global(th) {
        text-align: left;
        padding: 0.75rem 1rem;
        font-weight: 600;
        color: #09090b;
        background-color: #fafafa;
        border-bottom: 2px solid #e4e4e7;
    }

    .prose-blog :global(td) {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #f4f4f5;
    }

    .prose-blog :global(tr:hover td) { background-color: #fafafa; }

    .prose-blog :global(img) {
        max-width: 100%;
        border-radius: 0.75rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
</style>
