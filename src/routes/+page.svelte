<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    const features = [
        {
            icon: "🏪",
            title: "Beautiful Storefronts",
            description:
                "Launch a professional online store in minutes. No design skills needed — just pick a template and sell.",
        },
        {
            icon: "💸",
            title: "SA Payment Gateways",
            description:
                "Accept payments via Paystack, Yoco, SnapScan, Ozow, and more. Built for how South Africans actually pay.",
        },
        {
            icon: "🚚",
            title: "Local Delivery Built-in",
            description:
                "Integrated with The Courier Guy, Pargo, and Bob Go. Same-day, next-day, and collect-point delivery.",
        },
        {
            icon: "📱",
            title: "WhatsApp Commerce",
            description:
                "Send order updates, abandoned cart reminders, and support messages right where your customers are.",
        },
        {
            icon: "📊",
            title: "Smart Analytics",
            description:
                "Know exactly what's selling, who's buying, and where to focus. Real insights, not vanity metrics.",
        },
        {
            icon: "🌍",
            title: "Multi-Currency",
            description:
                "Sell in ZAR, USD, GBP, or any currency. Expand across Africa and the world with zero friction.",
        },
    ];

    const logos = [
        {
            src: "/logos/idSL4BuSLF_1772554245976.png",
            alt: "Paystack",
            bg: false,
        },
        {
            src: "/logos/idRtuYI1UJ_logos.jpeg",
            alt: "Payfast by Network",
            bg: false,
        },
        {
            src: "/logos/idUgAWkn0x_1772554320044.jpeg",
            alt: "Peach Payments",
            bg: true,
        },
        {
            src: "/logos/id9wjmXiU8_1772554331016.jpeg",
            alt: "Aramex",
            bg: true,
        },
    ];

    const stats = [
        { value: "2,500+", label: "Active stores" },
        { value: "R12M+", label: "Monthly GMV" },
        { value: "99.9%", label: "Uptime" },
        { value: "< 2min", label: "Store setup" },
    ];

    const steps = [
        {
            number: "01",
            title: "Sign up and name your store",
            description:
                "Pick a name, choose a theme, and drop in your logo. Your storefront is ready before your coffee gets cold.",
            icon: "storefront",
        },
        {
            number: "02",
            title: "Add products and connect payments",
            description:
                "Upload your products (or import them). Toggle on PayFast, and you're accepting Rand from day one — no third-party duct tape required.",
            icon: "payments",
        },
        {
            number: "03",
            title: "Go live and start selling",
            description:
                "Hit publish. Share your link. Your store is live on a .co.za or custom domain — and SOLDT handles shipping labels, order tracking, and customer emails automatically.",
            icon: "rocket",
        },
    ];

    const faqs = [
        {
            q: "Do I need to be tech-savvy to use SOLDT?",
            a: "Not even a little. If you can post on Instagram, you can build a store on SOLDT. Our onboarding walks you through everything step by step — most sellers are live within 10 minutes.",
        },
        {
            q: "How do my customers pay?",
            a: "Through PayFast — South Africa's most trusted payment gateway. Your customers can pay with credit card, instant EFT, SnapScan, and more. Payouts go straight to your bank account.",
        },
        {
            q: "Can I use my own domain name?",
            a: "Absolutely. Connect a custom .co.za or any domain you already own, or register a new one directly through SOLDT. No GoDaddy runaround required.",
        },
        {
            q: "What about shipping?",
            a: "SOLDT has built-in shipping tools. Generate labels, give customers tracking numbers, and manage deliveries — all from your dashboard. No third-party courier plugin needed.",
        },
        {
            q: "Is there a free trial?",
            a: "You can sign up and build your store for free. You only pay when you're ready to go live and start accepting orders.",
        },
        {
            q: "How is this different from Shopify?",
            a: "Shopify charges you for the platform, then charges you again for every app you need to actually run your store — payments, reviews, shipping, email. SOLDT includes all of that in one plan, built specifically for South African sellers.",
        },
        {
            q: "What if I already have a store on another platform?",
            a: "We're building import tools to make migration painless. In the meantime, our team can help you move your products manually — reach out and we'll sort you out.",
        },
        {
            q: "Is my store data safe?",
            a: "Yes. SOLDT uses encrypted connections, secure payment processing through PayFast, and your data is hosted on enterprise-grade infrastructure. We never sell or share your information.",
        },
    ];

    const trustBadges = [
        {
            icon: "lock",
            title: "SSL Encrypted",
            description:
                "Every store gets HTTPS by default. Customer data is encrypted in transit — always.",
        },
        {
            icon: "shield",
            title: "PayFast Verified",
            description:
                "Payments processed through South Africa's leading gateway. PCI-DSS compliant.",
        },
        {
            icon: "server",
            title: "99.9% Uptime",
            description:
                "Your store stays live when it matters. Enterprise-grade hosting, zero excuses.",
        },
        {
            icon: "document",
            title: "POPIA Compliant",
            description:
                "Your customers' personal information is handled in line with South African data protection law.",
        },
        {
            icon: "support",
            title: "SA-Based Support",
            description: "Real humans. Local timezone. No chatbot maze.",
        },
    ];

    const comparison = [
        {
            feature: "Monthly cost",
            shopify: "From $39/mo (~R720+)",
            soldt: "R330/mo",
        },
        {
            feature: "SA payments (EFT, SnapScan)",
            shopify: "Requires third-party app",
            soldt: "Built in via PayFast",
        },
        {
            feature: "Shipping tools",
            shopify: "Paid apps required",
            soldt: "Built in",
        },
        {
            feature: "Product reviews",
            shopify: "R9-R25/mo app",
            soldt: "Built in (free)",
        },
        {
            feature: "Email marketing",
            shopify: "R13+/mo app",
            soldt: "Built in (free)",
        },
        {
            feature: "Custom domain",
            shopify: "Separate purchase + config",
            soldt: "Register or connect in-app",
        },
        {
            feature: "Transaction fees",
            shopify: "0.5-2% + app fees",
            soldt: "0.6% flat",
        },
        {
            feature: "Built for SA market",
            shopify: "No",
            soldt: "Yes — Rand-first, local everything",
        },
    ];

    const personas = [
        {
            icon: "💇‍♀️",
            title: "Wig & Hair Sellers",
            description:
                "You're running your business from your phone, juggling WhatsApp orders and Instagram DMs. SOLDT gives you a proper storefront with product variants (length, texture, colour), built-in reviews to build buyer trust, and automated order confirmations — so you stop losing sales to \"read\" receipts.",
            cta: "Start your wig store",
        },
        {
            icon: "👗",
            title: "Fashion & Streetwear Brands",
            description:
                "Your brand deserves more than a link-in-bio. Build a storefront that matches your aesthetic — custom themes, your own domain, size guides, and bundles. SOLDT handles the back-end so you can focus on drops, not dashboards.",
            cta: "Launch your brand",
        },
        {
            icon: "🕯️",
            title: "Home & Handmade Sellers",
            description:
                "Candles, prints, jewellery, skincare — whatever you make, you shouldn't need five platforms to sell it. SOLDT gives you a beautiful storefront, local shipping tools, and email marketing built in. One login. Everything handled.",
            cta: "Open your shop",
        },
        {
            icon: "🚀",
            title: "Side Hustlers Going Full-Time",
            description:
                "You're testing the waters — maybe selling on Marketplace or through WhatsApp groups. SOLDT is the step between \"informal\" and \"legit.\" Get a real store, real payments, and real data on what's working — without the real overhead.",
            cta: "Make it official",
        },
    ];

    const blogPosts = [
        {
            slug: "5-tips-boost-sales",
            category: "Tips & Strategy",
            title: "5 Tips to Boost Your Online Store Sales in South Africa",
            excerpt:
                "Practical, actionable tips for South African e-commerce sellers to increase conversions and grow revenue.",
            readTime: "5 min read",
        },
        {
            slug: "why-we-built-soldt",
            category: "Company",
            title: "Why We Built SOLDT: An E-commerce Platform for South Africa",
            excerpt:
                "The story behind SOLDT — why existing platforms weren't working for South African sellers and what we're doing differently.",
            readTime: "7 min read",
        },
    ];

    const dashboardCallouts = [
        {
            label: "Real-time order feed",
            description: "See new orders the moment they come in.",
        },
        {
            label: "Revenue at a glance",
            description: "Daily, weekly, monthly — know your numbers instantly.",
        },
        {
            label: "One-tap shipping",
            description: "Generate shipping labels without leaving the dashboard.",
        },
        {
            label: "Product management",
            description:
                "Edit listings, update stock, adjust prices — all in one place.",
        },
        {
            label: "Customer insights",
            description:
                "See who's buying, what's trending, and where to focus.",
        },
    ];

    let openFaq = $state(-1);

    function toggleFaq(index: number) {
        openFaq = openFaq === index ? -1 : index;
    }
</script>

<svelte:head>
    <title
        >SOLDT – Sell Online in South Africa | All-in-One eCommerce Platform</title
    >
    <meta
        name="description"
        content="SOLDT is South Africa's all-in-one eCommerce platform. Launch your online store, accept payments, manage shipping, and grow your brand — all from one place. Start free."
    />
</svelte:head>

<!-- ───── Hero ───── -->
<section class="relative overflow-hidden bg-surface py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0">
        <div
            class="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        ></div>
        <div
            class="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <div
                class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-sm font-medium text-primary"
            >
                <span class="h-2 w-2 rounded-full bg-primary animate-pulse"
                ></span>
                Now in public beta
            </div>

            <h1 class="text-near-black">
                Sell online.
                <span
                    class="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                    Built for Africa.
                </span>
            </h1>

            <p class="mt-6 text-lg text-zinc-500 md:text-xl">
                The all-in-one e-commerce platform designed for South African
                sellers. Local payments, local delivery, WhatsApp commerce —
                everything you need to launch and scale.
            </p>

            <div
                class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
                <Button href="https://admin.soldt.co.za/signup" size="lg">
                    Start Selling Free
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                    See How It Works
                </Button>
            </div>

            <p class="mt-6 text-sm text-zinc-400">
                No credit card required · Free 14-day trial · Cancel anytime
            </p>
        </div>
    </div>
</section>

<!-- ───── Stats Strip ───── -->
<section class="border-y border-zinc-200/60 bg-white">
    <div class="mx-auto max-w-7xl px-6 py-12">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
            {#each stats as stat}
                <div class="text-center">
                    <p
                        class="font-display text-3xl font-bold text-near-black md:text-4xl"
                    >
                        {stat.value}
                    </p>
                    <p class="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Section 1: Product Screenshot / Demo Visual ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Your entire business. One screen.</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Products, orders, payments, shipping — everything you need to
                run your store, without switching tabs.
            </p>
        </div>

        <div class="relative mx-auto mt-16 max-w-5xl">
            <!-- Browser frame mockup -->
            <div
                class="rounded-2xl border border-zinc-200/60 bg-white shadow-2xl shadow-primary/5 overflow-hidden"
            >
                <!-- Browser chrome -->
                <div
                    class="flex items-center gap-2 border-b border-zinc-200/60 bg-zinc-50 px-4 py-3"
                >
                    <div class="flex gap-1.5">
                        <div class="h-3 w-3 rounded-full bg-zinc-300"></div>
                        <div class="h-3 w-3 rounded-full bg-zinc-300"></div>
                        <div class="h-3 w-3 rounded-full bg-zinc-300"></div>
                    </div>
                    <div
                        class="mx-auto flex-1 max-w-md rounded-lg bg-white border border-zinc-200 px-4 py-1.5 text-center text-xs text-zinc-400"
                    >
                        admin.soldt.co.za/dashboard
                    </div>
                </div>
                <!-- Dashboard placeholder -->
                <div
                    class="relative aspect-[16/9] bg-gradient-to-br from-surface to-primary/5 flex items-center justify-center"
                >
                    <div class="text-center px-8">
                        <div
                            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
                        >
                            <svg
                                class="h-8 w-8 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                />
                            </svg>
                        </div>
                        <p class="text-lg font-semibold text-near-black">
                            Real dashboard. Coming soon.
                        </p>
                        <p class="mt-2 text-sm text-zinc-400">
                            Full product screenshot dropping with launch
                        </p>
                    </div>
                </div>
            </div>

            <!-- Floating stat badges -->
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3">
                <span
                    class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25"
                    >R0 platform fees</span
                >
                <span
                    class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25"
                    >Built for SA sellers</span
                >
                <span
                    class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25"
                    >Live in under 10 min</span
                >
            </div>
        </div>
    </div>
</section>

<!-- ───── Section 2: How It Works ───── -->
<section id="how-it-works" class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Live in three steps. Seriously.</h2>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-3">
            {#each steps as step, i}
                <div class="relative text-center md:text-left">
                    <!-- Step number -->
                    <div
                        class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted md:mx-0"
                    >
                        <span
                            class="font-display text-xl font-bold text-primary"
                            >{step.number}</span
                        >
                    </div>
                    <h3 class="text-lg font-bold text-near-black">
                        {step.title}
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-zinc-500">
                        {step.description}
                    </p>

                    <!-- Connector line (desktop only) -->
                    {#if i < steps.length - 1}
                        <div
                            class="absolute right-0 top-7 hidden h-px w-8 translate-x-full bg-zinc-200 md:block"
                        ></div>
                    {/if}
                </div>
            {/each}
        </div>

        <div class="mt-12 text-center">
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Start selling for free
            </Button>
            <p class="mt-4 text-sm text-zinc-400">
                No credit card. No 14-day countdown. Just build.
            </p>
        </div>
    </div>
</section>

<!-- ───── Features ───── -->
<section id="features" class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Everything you need to sell online</h2>
            <p class="mt-4 text-lg text-zinc-500">
                From storefront to checkout to delivery — SOLDT handles it all
                so you can focus on your products and customers.
            </p>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {#each features as feature}
                <div
                    class="group rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
                >
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-2xl"
                    >
                        {feature.icon}
                    </div>
                    <h3 class="mt-5 text-lg font-bold text-near-black">
                        {feature.title}
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-zinc-500">
                        {feature.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Section 3: Product Tour / Video CTA ───── -->
<section class="bg-white py-24">
    <div class="mx-auto max-w-4xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">
                See what selling on SOLDT actually looks like
            </h2>
            <p class="mt-4 text-lg text-zinc-500">
                Watch a 2-minute walkthrough — from adding your first product to
                getting your first order notification.
            </p>
        </div>

        <!-- Video placeholder -->
        <div class="relative mt-12 overflow-hidden rounded-2xl border border-zinc-200/60 bg-near-black aspect-video flex items-center justify-center">
            <div class="text-center px-8">
                <!-- Play button -->
                <div
                    class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-lg shadow-primary/25 transition-transform hover:scale-110"
                >
                    <svg
                        class="h-8 w-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
                <p class="text-sm text-zinc-400">
                    Walkthrough video dropping soon. Sign up to get early access.
                </p>
            </div>
        </div>

        <div
            class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Start your store
            </Button>
            <Button href="#features" variant="secondary" size="lg">
                Explore the SOLDT Suite
            </Button>
        </div>
    </div>
</section>

<!-- ───── Section 4: Pricing Teaser ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">One plan. No surprises.</h2>
        </div>

        <div
            class="mx-auto mt-12 max-w-lg rounded-2xl border border-primary/20 bg-white p-10 shadow-lg shadow-primary/5"
        >
            <div class="text-center">
                <p class="font-display text-5xl font-bold text-near-black">
                    R330<span class="text-xl font-medium text-zinc-400"
                        >/month</span
                    >
                </p>
                <p class="mt-2 text-sm text-zinc-500">+ 0.6% per transaction</p>
            </div>

            <div class="mt-8 border-t border-zinc-100 pt-8">
                <p
                    class="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400"
                >
                    Everything included
                </p>
                <ul class="space-y-3">
                    {#each ["Storefront + custom domain", "Built-in payments via PayFast", "Shipping labels & tracking", "Reviews, bundles, email tools", "No hidden app fees. No plugin tax."] as item}
                        <li class="flex items-start gap-3">
                            <svg
                                class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
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
                            <span class="text-sm text-zinc-600">{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            <p
                class="mt-8 text-center text-sm italic text-zinc-400"
            >
                That's less than what most sellers spend on Shopify apps alone — before
                they've even paid for the plan.
            </p>

            <div
                class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
                <Button href="/pricing" variant="secondary">
                    See full pricing breakdown
                </Button>
                <Button href="https://admin.soldt.co.za/signup">
                    Start for free
                </Button>
            </div>
        </div>
    </div>
</section>

<!-- ───── Integrations Strip ───── -->
<section
    id="integrations"
    class="border-y border-zinc-200/60 bg-white py-16 overflow-hidden"
>
    <p
        class="text-center text-sm font-medium uppercase tracking-wider text-zinc-400 mb-10"
    >
        Trusted integrations
    </p>

    <div class="marquee-track" aria-hidden="true">
        <div class="marquee-inner">
            {#each logos as logo}
                <div class="logo-item">
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        class="logo-img {logo.bg ? 'rounded-xl' : ''}"
                    />
                </div>
            {/each}
            {#each logos as logo}
                <div class="logo-item">
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        class="logo-img {logo.bg ? 'rounded-xl' : ''}"
                    />
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Section 5: FAQ ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-3xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Got questions? We've got answers.</h2>
        </div>

        <div class="mt-12 space-y-3">
            {#each faqs as faq, i}
                <div
                    class="rounded-xl border border-zinc-200/60 bg-white overflow-hidden transition-all duration-200"
                >
                    <button
                        class="flex w-full items-center justify-between px-6 py-5 text-left"
                        onclick={() => toggleFaq(i)}
                        aria-expanded={openFaq === i}
                    >
                        <span class="pr-4 text-sm font-semibold text-near-black"
                            >{faq.q}</span
                        >
                        <svg
                            class="h-5 w-5 flex-shrink-0 text-zinc-400 transition-transform duration-200 {openFaq ===
                            i
                                ? 'rotate-180'
                                : ''}"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {#if openFaq === i}
                        <div class="px-6 pb-5">
                            <p class="text-sm leading-relaxed text-zinc-500">
                                {faq.a}
                            </p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Section 6: Trust Signals ───── -->
<section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Built on trust. Backed by security.</h2>
        </div>

        <div class="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {#each trustBadges as badge}
                <div class="text-center">
                    <div
                        class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted"
                    >
                        {#if badge.icon === "lock"}
                            <svg
                                class="h-7 w-7 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        {:else if badge.icon === "shield"}
                            <svg
                                class="h-7 w-7 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        {:else if badge.icon === "server"}
                            <svg
                                class="h-7 w-7 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                />
                            </svg>
                        {:else if badge.icon === "document"}
                            <svg
                                class="h-7 w-7 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        {:else}
                            <svg
                                class="h-7 w-7 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        {/if}
                    </div>
                    <h4 class="text-sm font-bold text-near-black">
                        {badge.title}
                    </h4>
                    <p class="mt-2 text-xs leading-relaxed text-zinc-500">
                        {badge.description}
                    </p>
                </div>
            {/each}
        </div>

        <p class="mt-12 text-center text-sm text-zinc-500">
            We don't just help you sell — we make sure your customers feel safe
            buying from you.
        </p>
    </div>
</section>

<!-- ───── Section 7: Why SOLDT vs Shopify ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-4xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">
                Shopify wasn't built for South African sellers. SOLDT was.
            </h2>
            <p class="mt-4 text-lg text-zinc-500">
                No shade — Shopify is a great platform. But when you're selling
                in Rand, shipping locally, and trying to keep costs down, the
                gaps show fast.
            </p>
        </div>

        <!-- Comparison table -->
        <div
            class="mt-12 overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm"
        >
            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="border-b border-zinc-100">
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold text-zinc-400"
                                >Feature</th
                            >
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold text-zinc-400"
                                >Shopify</th
                            >
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold text-primary"
                                >SOLDT</th
                            >
                        </tr>
                    </thead>
                    <tbody>
                        {#each comparison as row, i}
                            <tr
                                class="{i < comparison.length - 1
                                    ? 'border-b border-zinc-50'
                                    : ''}"
                            >
                                <td
                                    class="px-6 py-4 text-sm font-medium text-near-black"
                                    >{row.feature}</td
                                >
                                <td class="px-6 py-4 text-sm text-zinc-500"
                                    >{row.shopify}</td
                                >
                                <td
                                    class="px-6 py-4 text-sm font-medium text-primary"
                                    >{row.soldt}</td
                                >
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            <!-- Mobile stacked cards -->
            <div class="md:hidden divide-y divide-zinc-100">
                {#each comparison as row}
                    <div class="px-5 py-4">
                        <p class="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            {row.feature}
                        </p>
                        <div class="mt-2 flex items-start justify-between gap-4">
                            <div>
                                <p class="text-xs text-zinc-400">Shopify</p>
                                <p class="text-sm text-zinc-500">{row.shopify}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs text-primary">SOLDT</p>
                                <p class="text-sm font-medium text-primary">{row.soldt}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="mt-10 text-center">
            <p class="mb-6 text-sm font-medium text-zinc-600">
                Stop paying for a platform that makes you pay again for the
                basics.
            </p>
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Switch to SOLDT
            </Button>
        </div>
    </div>
</section>

<!-- ───── Section 8: Use Case / Persona Segmentation ───── -->
<section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Built for sellers like you</h2>
        </div>

        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {#each personas as persona}
                <div
                    class="group flex flex-col rounded-2xl border border-zinc-200/60 bg-surface p-7 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                    <div
                        class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-2xl"
                    >
                        {persona.icon}
                    </div>
                    <h3 class="text-base font-bold text-near-black">
                        {persona.title}
                    </h3>
                    <p
                        class="mt-3 flex-1 text-sm leading-relaxed text-zinc-500"
                    >
                        {persona.description}
                    </p>
                    <div class="mt-6">
                        <Button
                            href="https://admin.soldt.co.za/signup"
                            variant="secondary"
                            size="sm"
                        >
                            {persona.cta}
                        </Button>
                    </div>
                </div>
            {/each}
        </div>

        <p class="mt-12 text-center text-sm text-zinc-500">
            Don't see your niche? SOLDT works for any seller, any product, any
            size. If you're selling online in South Africa, this was built for
            you.
        </p>
    </div>
</section>

<!-- ───── Section 10: Dashboard & Mobile Preview ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Run your store from anywhere</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Whether you're on your laptop at home or checking orders from
                your phone between meetings — SOLDT's dashboard gives you full
                control.
            </p>
        </div>

        <div class="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <!-- Device mockups -->
            <div class="relative">
                <!-- Desktop mockup -->
                <div
                    class="rounded-2xl border border-zinc-200/60 bg-white shadow-xl overflow-hidden"
                >
                    <div
                        class="flex items-center gap-2 border-b border-zinc-200/60 bg-zinc-50 px-4 py-2.5"
                    >
                        <div class="flex gap-1.5">
                            <div class="h-2.5 w-2.5 rounded-full bg-zinc-300"
                            ></div>
                            <div class="h-2.5 w-2.5 rounded-full bg-zinc-300"
                            ></div>
                            <div class="h-2.5 w-2.5 rounded-full bg-zinc-300"
                            ></div>
                        </div>
                        <div
                            class="mx-auto flex-1 max-w-xs rounded bg-white border border-zinc-200 px-3 py-1 text-center text-xs text-zinc-400"
                        >
                            admin.soldt.co.za
                        </div>
                    </div>
                    <div
                        class="aspect-[16/10] bg-gradient-to-br from-surface to-primary/5 flex items-center justify-center"
                    >
                        <p class="text-sm text-zinc-400">
                            Dashboard preview coming soon
                        </p>
                    </div>
                </div>

                <!-- Phone mockup -->
                <div
                    class="absolute -bottom-6 -right-4 w-28 rounded-2xl border-4 border-zinc-800 bg-white shadow-2xl overflow-hidden md:w-36"
                >
                    <div class="aspect-[9/19] bg-gradient-to-br from-surface to-primary/5 flex items-center justify-center">
                        <div class="mx-auto h-1 w-8 rounded-full bg-zinc-300"
                        ></div>
                    </div>
                </div>
            </div>

            <!-- Feature callouts -->
            <div class="space-y-6">
                {#each dashboardCallouts as callout}
                    <div class="flex items-start gap-4">
                        <div
                            class="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-muted"
                        >
                            <svg
                                class="h-4 w-4 text-primary"
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
                        </div>
                        <div>
                            <p class="text-sm font-bold text-near-black">
                                {callout.label}
                            </p>
                            <p class="mt-1 text-sm text-zinc-500">
                                {callout.description}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="mt-16 text-center">
            <p class="mb-6 text-sm font-medium text-zinc-600">
                This isn't a demo. This is what your dashboard actually looks
                like.
            </p>
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Start building your store
            </Button>
        </div>
    </div>
</section>

<!-- ───── Section 9: Newsletter + Blog Teaser ───── -->
<!-- Part A: Email Capture -->
<section class="relative overflow-hidden py-20">
    <div class="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark"></div>
    <div class="relative mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-white">The SOLDT Seller Report</h2>
        <p class="mt-4 text-base text-white/80">
            Practical e-commerce tips, platform updates, and seller stories —
            straight to your inbox every week. No fluff. Unsubscribe anytime.
        </p>

        <form
            class="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onsubmit={(e) => e.preventDefault()}
        >
            <input
                type="email"
                placeholder="your@email.co.za"
                class="flex-1 rounded-full border-0 bg-white/15 px-6 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
                type="submit"
                class="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-zinc-100 hover:shadow-md"
            >
                Subscribe
            </button>
        </form>

        <p class="mt-4 text-xs text-white/60">
            Join 200+ SA sellers already subscribed.
        </p>
    </div>
</section>

<!-- Part B: Blog Teaser -->
<section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Fresh from the SOLDT blog</h2>
        </div>

        <div class="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {#each blogPosts as post}
                <a
                    href="/blog/{post.slug}"
                    class="group rounded-2xl border border-zinc-200/60 bg-surface p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                    <span
                        class="inline-block rounded-full bg-primary-muted px-3 py-1 text-xs font-medium text-primary"
                    >
                        {post.category}
                    </span>
                    <h3
                        class="mt-4 text-base font-bold text-near-black group-hover:text-primary transition-colors"
                    >
                        {post.title}
                    </h3>
                    <p class="mt-2 text-sm text-zinc-500">{post.excerpt}</p>
                    <p class="mt-4 text-xs text-zinc-400">{post.readTime}</p>
                </a>
            {/each}
        </div>

        <div class="mt-10 text-center">
            <Button href="/blog" variant="secondary">
                Read more on the blog
            </Button>
        </div>
    </div>
</section>

<!-- ───── Bottom CTA ───── -->
<section class="bg-near-black py-24">
    <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-white">Ready to start selling?</h2>
        <p class="mt-4 text-lg text-zinc-400">
            Join thousands of South African entrepreneurs who are growing their
            businesses with SOLDT. Start your free trial today.
        </p>
        <div
            class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Start Your Free Trial
            </Button>
            <Button
                href="/contact"
                variant="ghost"
                size="lg"
                class="text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
                Talk to Sales
            </Button>
        </div>
    </div>
</section>

<style>
    .marquee-track {
        width: 100%;
        overflow: hidden;
        mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
        );
        -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
        );
    }

    .marquee-inner {
        display: flex;
        align-items: center;
        gap: 3.5rem;
        width: max-content;
        animation: marquee-scroll 22s linear infinite;
    }

    .marquee-inner:hover {
        animation-play-state: paused;
    }

    .logo-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-img {
        height: 52px;
        width: auto;
        max-width: 160px;
        object-fit: contain;
        filter: grayscale(100%);
        opacity: 0.55;
        transition:
            filter 0.3s ease,
            opacity 0.3s ease;
    }

    .logo-img:hover {
        filter: grayscale(0%);
        opacity: 1;
    }

    @keyframes marquee-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
