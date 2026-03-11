<script lang="ts">
    interface FaqItem {
        question: string;
        answer: string;
    }

    interface Props {
        faqs: FaqItem[];
    }

    let { faqs }: Props = $props();

    let openIndex = $state<number | null>(null);

    function toggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<div class="not-prose mt-2 space-y-3">
    {#each faqs as faq, i}
        <div
            class="rounded-xl border border-zinc-200/60 bg-surface transition-colors {openIndex === i
                ? 'border-primary/20 bg-primary-muted'
                : ''}"
        >
            <button
                class="flex w-full items-center justify-between px-6 py-5 text-left"
                onclick={() => toggle(i)}
                aria-expanded={openIndex === i}
            >
                <span class="pr-4 text-sm font-semibold text-near-black">{faq.question}</span>
                <svg
                    class="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 {openIndex === i
                        ? 'rotate-180'
                        : ''}"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {#if openIndex === i}
                <div class="px-6 pb-5">
                    <p class="text-sm leading-relaxed text-zinc-500">{@html faq.answer}</p>
                </div>
            {/if}
        </div>
    {/each}
</div>
