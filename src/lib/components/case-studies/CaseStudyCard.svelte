<script lang="ts">
    import type { CaseStudy } from '$lib/types';
    import { formatDate } from '$lib/utils/blog';

    interface Props {
        caseStudy: CaseStudy;
    }

    let { caseStudy }: Props = $props();
</script>

<a
    href="/case-studies/{caseStudy.slug}"
    class="group block overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
>
    <div class="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div class="flex h-full w-full items-center justify-center p-8">
            <div class="text-center">
                <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm ring-1 ring-zinc-200/70 transition-transform duration-500 group-hover:scale-105">
                    {caseStudy.icon}
                </div>
                <p class="mt-4 text-sm font-semibold text-near-black">{caseStudy.client}</p>
                <p class="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-400">
                    {caseStudy.industry}
                </p>
            </div>
        </div>
    </div>

    <div class="p-6">
        {#if caseStudy.tags.length}
            <div class="mb-3 flex flex-wrap gap-2">
                {#each caseStudy.tags.slice(0, 3) as tag}
                    <span class="rounded-full bg-primary-muted px-2.5 py-0.5 text-xs font-medium text-primary">
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}

        <h3 class="text-lg font-bold text-near-black transition-colors group-hover:text-primary">
            {caseStudy.title}
        </h3>

        <p class="mt-2 line-clamp-3 text-sm text-zinc-500">
            {caseStudy.description}
        </p>

        <ul class="mt-4 space-y-2 text-sm text-zinc-600">
            {#each caseStudy.highlights.slice(0, 2) as highlight}
                <li class="flex items-start gap-2">
                    <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>{highlight}</span>
                </li>
            {/each}
        </ul>

        <div class="mt-5 flex items-center gap-3 text-xs text-zinc-400">
            <span>{caseStudy.client}</span>
            <span>·</span>
            <time datetime={caseStudy.date}>{formatDate(caseStudy.date)}</time>
        </div>
    </div>
</a>
