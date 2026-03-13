<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    const benefits = [
        {
            title: "Prevent interruptions",
            description:
                "Keep your business running while you migrate. Our migration tools and guides help you move your data without disrupting your store.",
        },
        {
            title: "Import your data quickly",
            description:
                "Import products, customers, orders, and reviews using simple CSV tools or with help from our team.",
        },
        {
            title: "Built for South Africa",
            description:
                "Reconnect your existing payment gateways and shipping partners in just a few steps - no complicated integrations required.",
        },
        {
            title: "Get help when you need it",
            description:
                "Access migration documentation, email support, and live chat assistance if you need help during the process.",
        },
    ];

    const migrationPaths = [
        {
            label: "For smaller stores",
            title: "Migrate manually",
            description:
                "For smaller stores, migrating to SOLDT can be done quickly using CSV imports.",
            items: ["Products", "Customers", "Orders", "Reviews"],
            timing: "Many smaller stores complete migration in as little as 30 minutes to a few hours, depending on the amount of data being moved.",
            followUp:
                "Once imported, you can customize your storefront and publish your new store.",
            cta: "Explore manual migration",
            href: "/contact",
        },
        {
            label: "For growing stores",
            title: "Assisted migration with our team",
            description:
                "If your store has a large catalog or complex data, our team can assist with the migration process.",
            items: [
                "Large product catalogs",
                "Historical order data",
                "Reviews and customer records",
            ],
            timing:
                "We help ensure your store data transfers safely while minimizing the risk of missing products, customers, or orders.",
            followUp:
                "This option is ideal for businesses that want extra migration support.",
            cta: "Contact migration support",
            href: "/contact",
        },
    ];

    const gateways = ["PayFast", "Ozow", "Yoco", "Peach Payments", "RTV"];

    const shippingBenefits = [
        "Easier shipping setup",
        "Real-time courier rates",
        "Centralized order fulfillment",
    ];

    const migrationTimes = [
        {
            size: "Small stores",
            duration: "30 minutes to a few hours",
            description:
                "Many smaller stores complete migration in 30 minutes to a few hours.",
        },
        {
            size: "Medium stores",
            duration: "A few hours",
            description:
                "Stores with larger catalogs can typically migrate within a few hours.",
        },
        {
            size: "Large stores",
            duration: "Longer with support",
            description:
                "For large stores, migration may take longer to ensure all products, customers, and order data transfer correctly.",
        },
    ];

    const sourcePlatforms = [
        "Shopify",
        "Wix",
        "Ecwid",
        "Instagram and WhatsApp selling",
    ];

    const storeFeatures = [
        "Storefront and theme system",
        "Built-in checkout",
        "Payment gateway integrations",
        "SOLDT Shipping",
        "Product and order management",
        "Customer management",
        "Analytics and reporting",
    ];

    const resourceSteps = [
        "Exporting data from your current platform",
        "Importing products and customers",
        "Reconnecting payment gateways",
        "Setting up shipping",
        "Launching your new store",
    ];

    const faqs = [
        {
            question: "What data can I import to SOLDT?",
            answer: "You can import products, customers, orders, and reviews using CSV imports or with assistance from our team.",
        },
        {
            question: "How long does migration take?",
            answer: "Most smaller stores can migrate in 30 minutes to a few hours, depending on how much data is being transferred. Larger stores may take longer to ensure all information transfers correctly.",
        },
        {
            question: "Can I reconnect my existing payment gateways?",
            answer: "Yes. SOLDT supports all major South African payment gateways, including PayFast, Ozow, Yoco, Peach Payments, and RTV. You can reconnect your existing accounts in just a few steps.",
        },
        {
            question: "Do I need technical knowledge to migrate?",
            answer: "No. Many merchants complete migration using simple CSV imports and documentation. If you need help, our team can assist through email or live chat.",
        },
        {
            question: "What if I'm currently selling only on Instagram or WhatsApp?",
            answer: "SOLDT allows you to move from social-only selling to a full online store with built-in checkout, payments, and shipping management.",
        },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
</script>

<svelte:head>
    <title>Migrate to SOLDT - Move Your Store Without the Stress</title>
    <meta
        name="description"
        content="Migrate your online store to SOLDT from Shopify, Wix, Ecwid, Instagram, or WhatsApp selling. Import your products, customers, orders, and reviews and get back to selling fast."
    />
    {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<section class="relative overflow-hidden bg-surface py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0">
        <div
            class="absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/12 blur-3xl"
        ></div>
        <div
            class="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-primary/8 blur-3xl"
        ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-4xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Migrate to SOLDT
            </p>
            <h1 class="mt-4 text-near-black">
                Moving your online store has never been easier
            </h1>
            <p class="mt-6 text-lg leading-relaxed text-zinc-500 md:text-xl">
                Switch from Shopify, Wix, Ecwid, or even Instagram and WhatsApp
                selling, and start running your store on infrastructure built
                for South African commerce.
            </p>
            <p class="mt-4 text-base leading-relaxed text-zinc-500 md:text-lg">
                Import your products, customers, orders, and reviews in
                minutes. With built-in payments, shipping, and storefront
                tools, you can move your store to SOLDT and start selling
                faster.
            </p>

            <div
                class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
                <Button href="https://admin.soldt.co.za/signup" size="lg">
                    Start your free trial
                </Button>
                <Button href="#migration-paths" variant="secondary" size="lg">
                    Explore migration options
                </Button>
            </div>
        </div>
    </div>
</section>

<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Move your store without the stress
            </p>
            <h2 class="mt-3 text-near-black">
                The tools and support you need to make the switch smoothly
            </h2>
            <p class="mt-4 text-lg text-zinc-500">
                Migrating platforms can feel risky. SOLDT gives you the tools
                and support you need to make the switch smoothly.
            </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {#each benefits as benefit}
                <article
                    class="rounded-3xl border border-zinc-200/70 bg-surface p-7 shadow-sm"
                >
                    <h3 class="text-xl text-near-black">{benefit.title}</h3>
                    <p class="mt-3 text-sm leading-relaxed text-zinc-500">
                        {benefit.description}
                    </p>
                </article>
            {/each}
        </div>
    </div>
</section>

<section id="migration-paths" class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Data transfer
            </p>
            <h2 class="mt-3 text-near-black">Migrate your way</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Every business is different. Whether you're running a small
                store or a growing brand, SOLDT gives you flexible ways to
                migrate your data.
            </p>
        </div>

        <div class="mt-14 grid gap-8 lg:grid-cols-2">
            {#each migrationPaths as path}
                <article
                    class="flex h-full flex-col rounded-[2rem] border border-zinc-200/70 bg-white p-8 shadow-sm"
                >
                    <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                        {path.label}
                    </p>
                    <h3 class="mt-3 text-2xl text-near-black">{path.title}</h3>
                    <p class="mt-4 text-zinc-500">{path.description}</p>

                    <div class="mt-6">
                        <p class="text-sm font-semibold uppercase tracking-wide text-zinc-600">
                            You can easily import
                        </p>
                        <ul class="mt-3 grid gap-3 text-sm text-zinc-600 sm:grid-cols-2">
                            {#each path.items as item}
                                <li class="rounded-2xl bg-surface px-4 py-3">
                                    {item}
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <p class="mt-6 text-sm leading-relaxed text-zinc-500">
                        {path.timing}
                    </p>
                    <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                        {path.followUp}
                    </p>

                    <div class="mt-8">
                        <Button href={path.href} variant="secondary" size="md">
                            {path.cta}
                        </Button>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="rounded-[2rem] bg-near-black p-8 text-white md:p-10">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary-light">
                Built for South African commerce
            </p>
            <h2 class="mt-3 text-white">Expand your business with SOLDT</h2>
            <p class="mt-5 text-base leading-relaxed text-zinc-300">
                SOLDT gives South African merchants everything they need to run
                a modern online store without stitching together multiple tools.
            </p>
            <p class="mt-4 text-base leading-relaxed text-zinc-300">
                Reconnect your existing payment gateways and start selling again
                immediately. Payments can be reconnected in just a few steps, so
                your checkout stays uninterrupted.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
                {#each gateways as gateway}
                    <span
                        class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                    >
                        {gateway}
                    </span>
                {/each}
            </div>
        </div>

        <article class="rounded-[2rem] border border-zinc-200/70 bg-surface p-8">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Built-in shipping, no integrations required
            </p>
            <h3 class="mt-3 text-2xl text-near-black">SOLDT Shipping</h3>
            <p class="mt-4 text-zinc-500">
                SOLDT includes a built-in shipping aggregator designed for South
                African merchants.
            </p>
            <p class="mt-4 text-zinc-500">
                Instead of installing third-party apps or connecting external
                tools, you get access to shipping rates from major courier
                partners directly inside your dashboard.
            </p>

            <ul class="mt-6 space-y-3 text-sm text-zinc-600">
                {#each shippingBenefits as benefit}
                    <li class="rounded-2xl bg-white px-4 py-3 shadow-sm">
                        {benefit}
                    </li>
                {/each}
            </ul>

            <p class="mt-6 text-sm leading-relaxed text-zinc-500">
                Everything runs directly from your SOLDT admin.
            </p>
        </article>
    </div>
</section>

<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Migration timeline
            </p>
            <h2 class="mt-3 text-near-black">How long does migration take?</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Migration time depends on the size of your store.
            </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-3">
            {#each migrationTimes as item}
                <article class="rounded-3xl border border-zinc-200/70 bg-white p-7 shadow-sm">
                    <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                        {item.size}
                    </p>
                    <h3 class="mt-3 text-2xl text-near-black">{item.duration}</h3>
                    <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                        {item.description}
                    </p>
                </article>
            {/each}
        </div>
    </div>
</section>

<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-10 lg:grid-cols-2">
            <article class="rounded-[2rem] border border-zinc-200/70 bg-surface p-8">
                <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                    Migrating from popular platforms
                </p>
                <h2 class="mt-3 text-near-black">
                    Move from the platforms South African sellers already use
                </h2>
                <p class="mt-4 text-zinc-500">
                    SOLDT makes it easy to move from platforms commonly used by
                    South African sellers.
                </p>

                <ul class="mt-6 space-y-3 text-sm text-zinc-600">
                    {#each sourcePlatforms as platform}
                        <li class="rounded-2xl bg-white px-4 py-3 shadow-sm">
                            {platform}
                        </li>
                    {/each}
                </ul>

                <p class="mt-6 text-sm leading-relaxed text-zinc-500">
                    Whether you're moving from a full platform or upgrading from
                    social-only selling, SOLDT gives you a complete store and
                    backend in one place.
                </p>
            </article>

            <article class="rounded-[2rem] bg-near-black p-8 text-white">
                <p class="text-sm font-semibold uppercase tracking-widest text-primary-light">
                    Everything you need after you migrate
                </p>
                <h2 class="mt-3 text-white">Your SOLDT store includes</h2>
                <ul class="mt-6 grid gap-3 text-sm text-zinc-200 sm:grid-cols-2">
                    {#each storeFeatures as feature}
                        <li class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                            {feature}
                        </li>
                    {/each}
                </ul>
                <p class="mt-6 text-sm leading-relaxed text-zinc-300">
                    No plugin stacks. No fragmented tools. Just the
                    infrastructure you need to sell online.
                </p>
            </article>
        </div>
    </div>
</section>

<section class="bg-surface py-24">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Migration resources
            </p>
            <h2 class="mt-3 text-near-black">Checklists and guides</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Migrating your store can look different depending on the
                platform you're moving from. SOLDT provides documentation and
                support resources to guide you through the process.
            </p>
        </div>

        <article class="mt-14 rounded-[2rem] border border-zinc-200/70 bg-white p-8 shadow-sm">
            <h3 class="text-2xl text-near-black">Migration documentation</h3>
            <p class="mt-4 text-zinc-500">
                Step-by-step instructions covering:
            </p>

            <ul class="mt-6 grid gap-3 text-sm text-zinc-600 sm:grid-cols-2">
                {#each resourceSteps as step}
                    <li class="rounded-2xl bg-surface px-4 py-3">{step}</li>
                {/each}
            </ul>

            <div class="mt-8">
                <Button href="/contact" variant="secondary" size="md">
                    Explore migration guides
                </Button>
            </div>
        </article>
    </div>
</section>

<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Frequently asked questions
            </p>
            <h2 class="mt-3 text-near-black">Answers before you make the move</h2>
        </div>

        <div class="mt-14 space-y-4">
            {#each faqs as faq}
                <article class="rounded-3xl border border-zinc-200/70 bg-surface p-6">
                    <h3 class="text-xl text-near-black">{faq.question}</h3>
                    <p class="mt-3 text-sm leading-relaxed text-zinc-500">
                        {faq.answer}
                    </p>
                </article>
            {/each}
        </div>
    </div>
</section>

<section class="bg-near-black py-24 text-white">
    <div class="mx-auto max-w-4xl px-6 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Make the move
        </p>
        <h2 class="mt-3 text-white">Migrate your store to SOLDT</h2>
        <p class="mt-5 text-lg leading-relaxed text-zinc-300">
            Move your store to infrastructure built specifically for South
            African e-commerce. Import your data, reconnect your payments, and
            start selling again in minutes.
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Start your free trial
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
                Talk to migration support
            </Button>
        </div>
    </div>
</section>
