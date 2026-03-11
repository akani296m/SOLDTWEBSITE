<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    const plans = [
        {
            name: "Growth",
            price: "R330",
            period: "/month",
            description: "For serious sellers ready to scale.",
            features: [
                "Unlimited products",
                "Custom domain",
                "All payment gateways",
                "Courier integrations",
                "WhatsApp notifications",
                "Analytics dashboard",
                "Priority support",
                "No SOLDT branding",
            ],
            cta: "Start 7-Day Trial",
            popular: true,
        },
        {
            name: "Pro",
            price: "R799",
            period: "/month",
            description: "For high-volume stores and teams.",
            features: [
                "Everything in Growth",
                "Multi-staff access",
                "Advanced analytics",
                "API access",
                "Bulk operations",
                "Dedicated account manager",
                "Custom integrations",
                "Phone support",
            ],
            cta: "Start 7-Day Trial",
            popular: false,
        },
    ];
</script>

<svelte:head>
    <title>Pricing — SOLDT</title>
    <meta
        name="description"
        content="SOLDT pricing starts at R330/month — one simple plan for South African sellers with built-in payments, shipping, and marketing tools. No hidden app fees. Start free for 7 days."
    />
</svelte:head>

<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-near-black">
                Simple pricing,
                <span
                    class="bg-linear-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                    no surprises
                </span>
            </h1>
            <p class="mt-4 text-lg text-zinc-500">
                Try free for 7 days, no credit card required. No hidden fees.
                All prices in South African Rand.
            </p>
        </div>

        <div class="mt-16 grid gap-8 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {#each plans as plan}
                <div
                    class="relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
						{plan.popular
                        ? 'border-primary shadow-lg shadow-primary/10 ring-1 ring-primary'
                        : 'border-zinc-200/60'}"
                >
                    {#if plan.popular}
                        <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span
                                class="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white"
                            >
                                Most Popular
                            </span>
                        </div>
                    {/if}

                    <div>
                        <h3
                            class="font-display text-lg font-bold text-near-black"
                        >
                            {plan.name}
                        </h3>
                        <p class="mt-1 text-sm text-zinc-500">
                            {plan.description}
                        </p>
                    </div>

                    <div class="mt-6 flex items-baseline gap-1">
                        <span
                            class="font-display text-4xl font-bold text-near-black"
                            >{plan.price}</span
                        >
                        {#if plan.period}
                            <span class="text-sm text-zinc-500"
                                >{plan.period}</span
                            >
                        {/if}
                    </div>

                    <ul class="mt-8 flex-1 space-y-3">
                        {#each plan.features as feature}
                            <li
                                class="flex items-start gap-3 text-sm text-zinc-600"
                            >
                                <svg
                                    class="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                {feature}
                            </li>
                        {/each}
                    </ul>

                    <div class="mt-8">
                        <Button
                            href="https://admin.soldt.co.za/signup"
                            variant={plan.popular ? "primary" : "secondary"}
                            size="md"
                            class="w-full"
                        >
                            {plan.cta}
                        </Button>
                    </div>
                </div>
            {/each}
        </div>

        <!-- FAQ teaser -->
        <div class="mt-16 text-center">
            <p class="text-sm text-zinc-500">
                All plans include SSL, unlimited bandwidth, and 99.9% uptime
                SLA.
                <a
                    href="/contact"
                    class="font-medium text-primary hover:underline"
                    >Questions? Let's chat.</a
                >
            </p>
        </div>
    </div>
</section>
