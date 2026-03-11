<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    const apps = [
        {
            name: "Bundles",
            tagline: "Increase order value with smart product bundles.",
            description:
                "Create bundle offers that encourage customers to buy complementary products together. Perfect for skincare routines, clothing sets, product kits, and accessories.",
            features: [
                "Bundle creation",
                "Bundle discounts",
                "Product kits",
                "Bundle analytics",
            ],
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>`,
        },
        {
            name: "Reviews",
            tagline: "Turn customer feedback into sales.",
            description:
                "Display verified customer reviews directly on product pages to build trust with new shoppers.",
            features: [
                "Verified customer reviews",
                "Star ratings",
                "Review moderation",
                "Product review widgets",
            ],
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`,
        },
        {
            name: "Emails",
            tagline: "Bring customers back automatically.",
            description:
                "Send abandoned cart reminders, promotions, and post-purchase emails directly from your store.",
            features: [
                "Campaign builder",
                "Abandoned cart emails",
                "Welcome emails",
                "Customer segmentation",
            ],
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>`,
        },
        {
            name: "Product Tabs",
            tagline: "Organise your product pages.",
            description:
                "Add structured sections for product details, shipping information, and FAQs.",
            features: [
                "Customizable product tabs",
                "FAQ sections",
                "Shipping information tabs",
                "Product details sections",
            ],
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>`,
        },
        {
            name: "Live Chat",
            tagline: "Answer questions before customers leave.",
            description:
                "Give shoppers quick answers and help them complete their purchase.",
            features: [
                "Real-time customer chat",
                "Message notifications",
                "Conversation history",
                "Customer interaction tracking",
            ],
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`,
        },
    ];

    const outcomes = [
        {
            title: "Increase average order value",
            description: "Bundles encourage customers to purchase multiple products together.",
        },
        {
            title: "Build trust with shoppers",
            description: "Customer reviews give buyers the confidence to complete their purchase.",
        },
        {
            title: "Recover lost sales",
            description: "Email automation helps bring back customers who almost purchased.",
        },
        {
            title: "Reduce purchase hesitation",
            description: "Live chat answers questions instantly and helps customers move forward.",
        },
        {
            title: "Create better product pages",
            description: "Product tabs make information easier to navigate and understand.",
        },
    ];

    const integrations = [
        "SOLDT Checkout",
        "Order management",
        "Inventory tracking",
        "Store analytics",
    ];
</script>

<svelte:head>
    <title>SOLDT Suite – Built-In Conversion Tools for South African Online Stores</title>
    <meta
        name="description"
        content="The SOLDT Suite includes the essential ecommerce apps every store needs — bundles, reviews, email marketing, product tabs, and live chat. Built to help South African stores convert more visitors into customers."
    />
</svelte:head>

<!-- Hero -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-muted px-4 py-1.5 text-sm font-semibold text-primary">
                The SOLDT Suite
            </div>
            <h1 class="text-near-black">
                The conversion tools every South African store should have
                <span class="bg-linear-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    by default
                </span>
            </h1>
            <p class="mt-6 text-lg text-zinc-500">
                Most online stores don't struggle because of their product. They struggle because
                they're missing the simple tools that turn visitors into customers.
            </p>
            <p class="mt-4 text-lg text-zinc-500">
                No app store hunting. No monthly app stacking. Just the tools that help your store sell more.
            </p>
            <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="https://admin.soldt.co.za/signup" variant="primary" size="lg">
                    Start your store with SOLDT
                </Button>
            </div>
        </div>
    </div>
</section>

<!-- Conversion System -->
<section class="border-t border-zinc-200/60 bg-white py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">The conversion system behind successful stores</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Every high-performing e-commerce store relies on the same system.
            </p>
        </div>

        <div class="mt-14 mx-auto max-w-3xl">
            <ol class="relative border-l border-primary/20">
                {#each [
                    { step: "Visitors discover products", app: "Storefront" },
                    { step: "They see social proof", app: "Reviews" },
                    { step: "They buy bundles", app: "Bundles" },
                    { step: "They ask questions", app: "Live Chat" },
                    { step: "They return through email", app: "Emails" },
                ] as item, i}
                    <li class="mb-8 ml-8 last:mb-0">
                        <span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                            {i + 1}
                        </span>
                        <div class="flex items-center gap-3">
                            <p class="text-base font-semibold text-near-black">{item.step}</p>
                            <span class="rounded-full bg-primary-muted px-2.5 py-0.5 text-xs font-medium text-primary">{item.app}</span>
                        </div>
                    </li>
                {/each}
            </ol>
            <p class="mt-10 text-center text-zinc-500">
                The <strong class="text-near-black">SOLDT Suite</strong> brings this entire conversion system together inside your store.
            </p>
        </div>
    </div>
</section>

<!-- Apps -->
<section class="bg-surface py-24" id="apps">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Conversion tools designed for real stores</h2>
            <p class="mt-4 text-lg text-zinc-500">
                The essential apps built into every SOLDT store.
            </p>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {#each apps as app, i}
                <div class="flex flex-col rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                    {i === 0 ? 'lg:col-span-2' : ''}">
                    <div class="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-muted text-primary">
                        {@html app.icon}
                    </div>
                    <h3 class="font-display text-xl font-bold text-near-black">{app.name}</h3>
                    <p class="mt-1 text-sm font-semibold text-primary">{app.tagline}</p>
                    <p class="mt-3 text-sm text-zinc-500 leading-relaxed">{app.description}</p>
                    <ul class="mt-6 space-y-2">
                        {#each app.features as feature}
                            <li class="flex items-center gap-2 text-sm text-zinc-600">
                                <svg class="h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Outcomes -->
<section class="border-t border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Built to help South African stores convert more visitors into customers</h2>
        </div>

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {#each outcomes as outcome}
                <div class="rounded-2xl border border-zinc-200/60 bg-surface p-6">
                    <div class="mb-3 h-1.5 w-8 rounded-full bg-primary"></div>
                    <h3 class="text-base font-bold text-near-black">{outcome.title}</h3>
                    <p class="mt-2 text-sm text-zinc-500">{outcome.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Philosophy -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl">
            <h2 class="text-near-black">Built around a simple idea</h2>
            <p class="mt-6 text-lg text-zinc-500">
                Selling online requires more than just a storefront.
            </p>
            <p class="mt-4 text-zinc-500">
                Most merchants quickly realise they need tools to increase trust, answer customer
                questions, recover lost sales, and increase order value. On most platforms, this means
                installing multiple apps and managing several subscriptions.
            </p>
            <blockquote class="mt-8 border-l-4 border-primary pl-6">
                <p class="text-xl font-semibold text-near-black">
                    These tools should come with every store.
                </p>
            </blockquote>
            <p class="mt-6 text-zinc-500">
                That's what the <strong class="text-near-black">SOLDT Suite</strong> was built around.
            </p>
        </div>
    </div>
</section>

<!-- Platform Integration -->
<section class="border-t border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Built as part of the SOLDT platform</h2>
            <p class="mt-4 text-lg text-zinc-500">
                The SOLDT Suite connects directly with the rest of your store. Everything works together inside one platform.
            </p>
        </div>
        <div class="mt-12 flex flex-wrap justify-center gap-4">
            {#each integrations as item}
                <div class="flex items-center gap-2 rounded-full border border-zinc-200/60 bg-surface px-5 py-2.5 text-sm font-medium text-zinc-700">
                    <svg class="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {item}
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- CTA -->
<section class="bg-primary py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-white">Build a store designed to convert</h2>
            <p class="mt-6 text-lg text-primary-light">
                A successful store isn't just about having products. It's about having the right tools
                that help those products sell.
            </p>
            <p class="mt-4 text-primary-light">
                With the <strong class="text-white">SOLDT Suite</strong>, every store launches with the essential conversion tools already built in.
            </p>
            <div class="mt-10">
                <Button href="https://admin.soldt.co.za/signup" variant="secondary" size="lg">
                    Start building your store with SOLDT
                </Button>
            </div>
        </div>
    </div>
</section>
