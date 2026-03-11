<script lang="ts">
    let openIndex = $state<number | null>(null);

    function toggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }

    const sections = [
        {
            category: "Pricing",
            questions: [
                {
                    q: "What pricing plans does SOLDT offer?",
                    a: `SOLDT offers two plans designed for different stages of business growth.\n\n**Growth – R330/month** — Built for new and growing sellers. Includes everything you need to launch and run a professional online store.\n\n**Pro – R799/month** — Designed for established sellers who need more advanced capabilities and higher limits across the SOLDT Suite.\n\nBoth plans include unlimited products, unlimited orders, and access to the SOLDT Suite of built-in apps. The Pro plan also includes lower transaction fees and higher usage limits.`,
                },
                {
                    q: "How much does SOLDT cost?",
                    a: "You can start selling online with SOLDT from R330 per month. SOLDT charges a small 0.6% transaction fee on successful orders, making it one of the most affordable commerce platforms available for South African merchants.",
                },
                {
                    q: "Are there limits on how many products or orders I can have?",
                    a: "No. Both SOLDT plans allow unlimited products and unlimited orders, so you can grow your business without worrying about platform limits.",
                },
            ],
        },
        {
            category: "Getting Started",
            questions: [
                {
                    q: "How quickly can I launch a store on SOLDT?",
                    a: "Most merchants can launch their store in under an hour. SOLDT was designed for fast setup — after signing up, you can add products, connect payments, and publish your store without installing apps or configuring complex integrations.",
                },
                {
                    q: "Do I need to be a web designer or developer to use SOLDT?",
                    a: "No. SOLDT was built so anyone can launch an online store without technical skills. Your storefront is designed to look professional from day one. For merchants who want more control, SOLDT also includes a simple code editor that allows you to customize your store.",
                },
                {
                    q: "What do I need to start selling on SOLDT?",
                    a: "To start selling online you only need a SOLDT account and a product to sell. You can begin by signing up for a free trial, adding your products, and publishing your store.",
                },
                {
                    q: "Can I connect my own domain to SOLDT?",
                    a: "Yes. When you create a store you automatically receive a free .mysoldtstore.co.za domain. You can also connect a domain purchased from a third-party provider, or purchase and manage a domain directly from your SOLDT dashboard.",
                },
            ],
        },
        {
            category: "Platform & Features",
            questions: [
                {
                    q: "Do I need to install apps to run my store?",
                    a: "No. SOLDT includes the essential tools most stores need built directly into the platform, including Product Reviews, Bundles, Email Marketing, Live Chat, and Product Tabs. You don't need to install multiple third-party apps just to run your store.",
                },
                {
                    q: "Is SOLDT built specifically for South African businesses?",
                    a: "Yes. SOLDT was designed specifically for the South African ecommerce market. The platform includes local payment gateway integrations, ZAR currency support, local shipping tools, and infrastructure optimized for South African merchants.",
                },
                {
                    q: "Can I customize my online store?",
                    a: "Yes. You can customize your store using themes and built-in settings to match your brand. Advanced users can also use SOLDT's code editor to fully customize their storefront.",
                },
                {
                    q: "How is SOLDT different from Shopify?",
                    a: "SOLDT was built specifically for South African businesses. Unlike global platforms that rely heavily on third-party apps, SOLDT includes the essential tools needed to run a store in South Africa directly inside the platform — so you can launch faster, spend less on apps, and manage your entire business from one place.",
                },
            ],
        },
        {
            category: "Payments",
            questions: [
                {
                    q: "Can I connect my own payment processor?",
                    a: "Yes. SOLDT supports a wide range of South African payment gateways with pre-built integrations. Connecting a payment provider takes only a few minutes and does not require any coding.",
                },
                {
                    q: "What payment gateways does SOLDT support?",
                    a: "SOLDT integrates with several popular South African payment providers. You can connect supported payment gateways directly from your dashboard using a simple setup process.",
                },
                {
                    q: "What currencies does SOLDT support?",
                    a: "By default, all SOLDT stores operate in South African Rand (ZAR). Merchants can also configure their store to sell in other currencies such as USD, EUR, and AUD.",
                },
            ],
        },
        {
            category: "Orders & Shipping",
            questions: [
                {
                    q: "What happens when I receive an order?",
                    a: "When a customer places an order you will receive an email notification and a new order alert inside your dashboard. Your Orders page provides everything you need to manage the order, including customer details, order items, and fulfillment status.",
                },
                {
                    q: "How does shipping work on SOLDT?",
                    a: "SOLDT Shipping allows merchants to calculate shipping rates from supported carriers, create shipping waybills directly from the dashboard, and track and manage deliveries. You can also use manual fulfillment if you prefer. Once an order is fulfilled, your customer automatically receives shipping updates.",
                },
            ],
        },
        {
            category: "Migration & Billing",
            questions: [
                {
                    q: "Can I move my store from another platform to SOLDT?",
                    a: "Yes. SOLDT supports easy store migration from other ecommerce platforms. You can import your products and customers, so you can move your business to SOLDT without starting from scratch. Visit soldt.co.za/migrate for more information.",
                },
                {
                    q: "What happens after my free trial ends?",
                    a: "After your free trial ends you can choose the plan that best fits your business. Your store, products, and data remain saved so you can continue running your business without interruption. If you decide not to continue, your store simply becomes inactive.",
                },
                {
                    q: "Is SOLDT suitable for beginners?",
                    a: "Yes. SOLDT was built to make starting an online business simple. You don't need coding skills or prior ecommerce experience. The platform handles the infrastructure so you can focus on building your store and selling your products.",
                },
            ],
        },
    ];

    function key(si: number, qi: number) {
        return si * 100 + qi;
    }
</script>

<svelte:head>
    <title>FAQ — SOLDT</title>
    <meta
        name="description"
        content="Answers to the most common questions about SOLDT — pricing, getting started, payments, shipping, and more."
    />
</svelte:head>

<section class="bg-surface py-24">
    <div class="mx-auto max-w-3xl px-6">
        <!-- Header -->
        <div class="text-center">
            <h1 class="text-near-black">
                Frequently asked
                <span
                    class="bg-linear-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                    questions
                </span>
            </h1>
            <p class="mt-4 text-lg text-zinc-500">
                Everything you need to know about SOLDT. Can't find what you're
                looking for?
                <a href="/contact" class="font-medium text-primary hover:underline"
                    >Reach out to us.</a
                >
            </p>
        </div>

        <!-- FAQ Sections -->
        <div class="mt-16 space-y-12">
            {#each sections as section, si}
                <div>
                    <h2 class="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                        {section.category}
                    </h2>
                    <div class="divide-y divide-zinc-200/60 rounded-2xl border border-zinc-200/60 bg-white shadow-sm">
                        {#each section.questions as item, qi}
                            <div>
                                <button
                                    class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-zinc-50"
                                    onclick={() => toggle(key(si, qi))}
                                    aria-expanded={openIndex === key(si, qi)}
                                >
                                    <span class="text-sm font-semibold text-near-black">{item.q}</span>
                                    <span
                                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-transform duration-200
                                        {openIndex === key(si, qi) ? 'rotate-45 bg-primary/10 text-primary' : 'text-zinc-500'}"
                                    >
                                        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>

                                {#if openIndex === key(si, qi)}
                                    <div class="px-6 pb-5">
                                        <p class="text-sm leading-relaxed text-zinc-500">{item.a}</p>
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

        <!-- CTA -->
        <div class="mt-16 rounded-2xl bg-primary/5 px-8 py-10 text-center">
            <h3 class="font-display text-xl font-bold text-near-black">Still have questions?</h3>
            <p class="mt-2 text-sm text-zinc-500">
                Our team is happy to help you find the right plan and get started.
            </p>
            <div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                    href="/contact"
                    class="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
                >
                    Contact us
                </a>
                <a
                    href="https://admin.soldt.co.za/signup"
                    class="rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold text-near-black transition-all hover:border-primary/30 hover:shadow-sm"
                >
                    Start free trial
                </a>
            </div>
        </div>
    </div>
</section>
