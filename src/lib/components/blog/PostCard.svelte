<script lang="ts">
    import type { BlogPost } from "$lib/types";
    import { formatDate } from "$lib/utils/blog";

    interface Props {
        post: BlogPost;
    }

    let { post }: Props = $props();
</script>

<a
    href="/blog/{post.slug}"
    class="group block overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
>
    <!-- Image placeholder -->
    <div
        class="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5"
    >
        {#if post.coverImage}
            <img
                src={post.coverImage}
                alt={post.title}
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        {:else}
            <div class="flex h-full w-full items-center justify-center">
                <svg
                    class="h-12 w-12 text-primary/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                </svg>
            </div>
        {/if}
    </div>

    <div class="p-6">
        <!-- Tags -->
        {#if post.tags?.length}
            <div class="mb-3 flex flex-wrap gap-2">
                {#each post.tags.slice(0, 2) as tag}
                    <span
                        class="rounded-full bg-primary-muted px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}

        <h3
            class="text-lg font-bold text-near-black transition-colors group-hover:text-primary"
        >
            {post.title}
        </h3>

        <p class="mt-2 line-clamp-2 text-sm text-zinc-500">
            {post.description}
        </p>

        <div class="mt-4 flex items-center gap-3 text-xs text-zinc-400">
            <span>{post.author}</span>
            <span>·</span>
            <time datetime={post.date}>{formatDate(post.date)}</time>
        </div>
    </div>
</a>
