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
                "Accept payments via Major SA Payment Gateways, SnapScan, instant EFT, and more. Built for how South Africans actually pay.",
        },
        {
            icon: "🚚",
            title: "Local Delivery Built-in",
            description:
                "Generate shipping labels, provide tracking numbers, and manage deliveries — all from your dashboard.",
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

    const steps = [
        {
            num: "01",
            title: "Sign up and name your store",
            description:
                "Pick a name, choose a theme, and drop in your logo. Your storefront is ready before your coffee gets cold.",
            icon: "🏪",
        },
        {
            num: "02",
            title: "Add products and connect payments",
            description:
                "Upload your products (or import them). Toggle on SOLDT Payments, and you're accepting Rand from day one — no third-party duct tape required.",
            icon: "📦",
        },
        {
            num: "03",
            title: "Go live and start selling",
            description:
                "Hit publish. Share your link. Your store is live on a .co.za or custom domain — and SOLDT handles shipping labels, order tracking, and customer emails automatically.",
            icon: "🚀",
        },
    ];

    const faqs = [
        {
            question: "Do I need to be tech-savvy to use SOLDT?",
            answer: "Not even a little. If you can post on Instagram, you can build a store on SOLDT. Our onboarding walks you through everything step by step — most sellers are live within 10 minutes.",
        },
        {
            question: "How do my customers pay?",
            answer: "Through SOLDT Payments — Our Built in Payment Gateway or you can also connect any third party party gateway : such as Payfast, Paystack , Yoco and etc ",
        },
        {
            question: "Can I use my own domain name?",
            answer: "Absolutely. Connect a custom .co.za or any domain you already own, or register a new one directly through SOLDT. No GoDaddy runaround required.",
        },
        {
            question: "What about shipping?",
            answer: "SOLDT has built-in shipping tools. Generate labels, give customers tracking numbers, and manage deliveries — all from your dashboard. No third-party courier plugin needed.",
        },
        {
            question: "Is there a free trial?",
            answer: "You can sign up and build your store for free. You only pay when you're ready to go live and start accepting orders.",
        },
        {
            question: "How is this different from Shopify?",
            answer: "Shopify charges you for the platform, then charges you again for every app you need to actually run your store — payments, reviews, shipping, email. SOLDT includes all of that in one plan, built specifically for South African sellers.",
        },
        {
            question: "What if I already have a store on another platform?",
            answer: "We're building import tools to make migration painless. In the meantime, our team can help you move your products manually — reach out and we'll sort you out.",
        },
    ];

    const trustBadges = [
        {
            icon: "🔒",
            title: "SSL Encrypted",
            description:
                "Every store gets HTTPS by default. Customer data is encrypted in transit — always.",
        },
        {
            icon: "✅",
            title: "SOLDT Payments Verified",
            description:
                "Payments processed through Secure Payment Gateway. PCI-DSS compliant.",
        },
        {
            icon: "⬆️",
            title: "99.9% Uptime",
            description:
                "Your store stays live when it matters. Enterprise-grade hosting, zero excuses.",
        },
        {
            icon: "🛡️",
            title: "POPIA Compliant",
            description:
                "Your customers' personal information is handled in line with South African data protection law.",
        },
        {
            icon: "🇿🇦",
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
            soldt: "Built in via SA Payment Gateway",
        },
        {
            feature: "Shipping tools",
            shopify: "Paid apps required",
            soldt: "Built in",
        },
        {
            feature: "Product reviews",
            shopify: "R165–R450/mo app",
            soldt: "Built in (free)",
        },
        {
            feature: "Email marketing",
            shopify: "R230+/mo app",
            soldt: "Built in (free)",
        },
        {
            feature: "Custom domain",
            shopify: "Separate purchase + config",
            soldt: "Register or connect in-app",
        },
        {
            feature: "Transaction fees",
            shopify: "0.5–2% + app fees",
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
                "You're running your business from your phone, juggling WhatsApp orders and Instagram DMs. SOLDT gives you a proper storefront with product variants (length, texture, colour), built-in reviews to build buyer trust, and automated order confirmations.",
            cta: "Start your wig store",
        },
        {
            icon: "👟",
            title: "Fashion & Streetwear Brands",
            description:
                "Your brand deserves more than a link-in-bio. Build a storefront that matches your aesthetic — custom themes, your own domain, size guides, and bundles. SOLDT handles the back-end so you can focus on drops, not dashboards.",
            cta: "Launch your brand",
        },
        {
            icon: "🕯️",
            title: "Home & Handmade Sellers",
            description:
                "Candles, prints, jewellery, skincare — whatever you make, you shouldn't need five platforms to sell it. SOLDT gives you a beautiful storefront, local shipping tools, and email marketing built in.",
            cta: "Open your shop",
        },
        {
            icon: "🔥",
            title: "Side Hustlers Going Full-Time",
            description:
                'You\'re testing the waters — maybe selling on Marketplace or through WhatsApp groups. SOLDT is the step between "informal" and "legit." Get a real store, real payments, and real data on what\'s working.',
            cta: "Make it official",
        },
    ];

    const dashboardFeatures = [
        {
            label: "Real-time order feed",
            description: "See new orders the moment they come in.",
        },
        {
            label: "Revenue at a glance",
            description:
                "Daily, weekly, monthly — know your numbers instantly.",
        },
        {
            label: "One-tap shipping",
            description:
                "Generate shipping labels without leaving the dashboard.",
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

    function toggleFaq(i: number) {
        openFaq = openFaq === i ? -1 : i;
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
    <!-- Ahrefs Analytics -->
    <script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="kGkBmiYupP+0/f7uUp9zRg"
        async
    ></script>
    {@html `<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@graph": [

  {
   "@type": "Organization",
   "@id": "https://www.soldt.co.za/#organization",
   "name": "SOLDT",
   "url": "https://www.soldt.co.za",
   "logo": {
     "@type": "ImageObject",
     "url": "https://www.soldt.co.za/soldt-assets/title(3).svg"
   },
   "description": "SOLDT is South Africa's all-in-one ecommerce platform designed for local merchants to launch, run and scale online stores.",
   "areaServed": {
     "@type": "Country",
     "name": "South Africa"
   },
   "sameAs": [
     "https://www.instagram.com/soldtza",
     "https://www.tiktok.com/@soldtza"
   ]
  },

  {
   "@type": "WebSite",
   "@id": "https://www.soldt.co.za/#website",
   "name": "SOLDT",
   "url": "https://www.soldt.co.za",
   "description": "South Africa's all-in-one ecommerce platform built for local merchants.",
   "publisher": {
     "@id": "https://www.soldt.co.za/#organization"
   }
  },

  {
   "@type": "SoftwareApplication",
   "@id": "https://www.soldt.co.za/#software",
   "name": "SOLDT",
   "applicationCategory": "BusinessApplication",
   "operatingSystem": "Web",
   "url": "https://www.soldt.co.za",
   "description": "SOLDT is an all-in-one ecommerce platform built for South African sellers with built-in payments, shipping tools, WhatsApp commerce and marketing tools.",
   "brand": {
     "@id": "https://www.soldt.co.za/#organization"
   },
   "creator": {
     "@id": "https://www.soldt.co.za/#organization"
   },
   "offers": {
     "@type": "Offer",
     "price": "330",
     "priceCurrency": "ZAR",
     "availability": "https://schema.org/InStock"
   }
  },

  {
   "@type": "WebPage",
   "@id": "https://www.soldt.co.za/#webpage",
   "url": "https://www.soldt.co.za",
   "name": "SOLDT – Sell Online in South Africa | All-in-One eCommerce Platform",
   "isPartOf": { "@id": "https://www.soldt.co.za/#website" },
   "about": { "@id": "https://www.soldt.co.za/#organization" },
   "mainEntity": { "@id": "https://www.soldt.co.za/#software" }
  }

 ]
}
</script>`}
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- HERO                                                          -->
<!-- ═══════════════════════════════════════════════════════════════ -->
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
            <h1 class="text-near-black">
                Sell online.
                <span
                    class="bg-linear-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                    Built for South Africa.
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
                No credit card required · 7-day free trial · Cancel anytime
            </p>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 1 — PRODUCT SCREENSHOT / DEMO VISUAL                  -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Your entire business. One screen.</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Products, orders, payments, shipping — everything you need to
                run your store, without switching tabs.
            </p>
        </div>

        <!-- Dashboard Screenshot Placeholder -->
        <div class="relative mt-16">
            <div
                class="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-2xl shadow-primary/5"
            >
                <!-- Browser chrome -->
                <div
                    class="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3"
                >
                    <span class="h-3 w-3 rounded-full bg-zinc-200"></span>
                    <span class="h-3 w-3 rounded-full bg-zinc-200"></span>
                    <span class="h-3 w-3 rounded-full bg-zinc-200"></span>
                    <span
                        class="ml-4 block h-6 flex-1 rounded-md bg-zinc-100 text-center text-xs leading-6 text-zinc-400"
                        >admin.soldt.co.za</span
                    >
                </div>
                <!-- Dashboard placeholder -->
                <div
                    class="flex min-h-[320px] items-center justify-center bg-linear-to-br from-primary/5 to-primary/10 p-12 md:min-h-[420px]"
                >
                    <div class="text-center">
                        <p class="text-4xl">📊</p>
                        <p
                            class="mt-4 font-display text-lg font-bold text-near-black"
                        >
                            dashboard. Coming soon.
                        </p>
                        <p class="mt-1 text-sm text-zinc-400">
                            Full product screenshot dropping with v1 launch
                        </p>
                    </div>
                </div>
            </div>

            <!-- Floating stat badges -->
            <div
                class="absolute -left-2 bottom-8 hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lg md:block"
            >
                R0 platform fees
            </div>
            <div
                class="absolute -right-2 top-16 hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lg md:block"
            >
                Built for SA sellers
            </div>
            <div
                class="absolute -right-4 bottom-12 hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lg md:block"
            >
                Live in under 10 min
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 2 — HOW IT WORKS                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="how-it-works" class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <p
                class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
                How It Works
            </p>
            <h2 class="mt-2 text-near-black">
                Live in three steps. Seriously.
            </h2>
        </div>

        <div class="mt-16 grid gap-10 md:grid-cols-3">
            {#each steps as step, i}
                <div
                    class="relative rounded-2xl border border-zinc-200/60 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                    <span
                        class="font-display text-5xl font-black text-primary/15"
                        >{step.num}</span
                    >
                    <div
                        class="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-2xl"
                    >
                        {step.icon}
                    </div>
                    <h3 class="mt-5 text-lg font-bold text-near-black">
                        {step.title}
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-zinc-500">
                        {step.description}
                    </p>
                </div>
            {/each}
        </div>

        <div class="mt-12 text-center">
            <Button href="https://admin.soldt.co.za/signup" size="lg"
                >Start selling for free</Button
            >
            <p class="mt-4 text-sm text-zinc-400">
                No credit card. Just build.
            </p>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- FEATURES                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
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

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 3 — PRODUCT TOUR / DEMO CTA                           -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="border-y border-zinc-200/60 bg-white py-24">
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

        <!-- Video Placeholder -->
        <div
            class="mt-12 overflow-hidden rounded-2xl border border-zinc-200/60 shadow-lg"
        >
            <div
                class="relative flex aspect-video items-center justify-center bg-linear-to-br from-zinc-900 to-zinc-800"
            >
                <!-- Play Button -->
                <div class="flex flex-col items-center gap-4">
                    <div
                        class="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-110"
                    >
                        <svg
                            class="ml-1 h-8 w-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-zinc-400">
                        Walkthrough video dropping soon
                    </p>
                    <p class="text-xs text-zinc-500">
                        Sign up to get early access
                    </p>
                </div>
            </div>
        </div>

        <div
            class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
            <Button href="https://admin.soldt.co.za/signup" size="lg"
                >Start your store</Button
            >
            <Button href="#features" variant="secondary" size="lg"
                >Explore the SOLDT Suite</Button
            >
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- INTEGRATIONS STRIP                                            -->
<!-- ═══════════════════════════════════════════════════════════════ -->
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

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 4 — PRICING TEASER                                    -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <p
                class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
                Pricing
            </p>
            <h2 class="mt-2 text-near-black">One plan. No surprises.</h2>
        </div>

        <div class="mx-auto mt-12 max-w-lg">
            <div
                class="rounded-2xl border border-primary/20 bg-white p-10 shadow-lg shadow-primary/5 ring-1 ring-primary/10"
            >
                <div class="flex items-baseline gap-2">
                    <span
                        class="font-display text-5xl font-bold text-near-black"
                        >R330</span
                    >
                    <span class="text-zinc-500">/month</span>
                    <span
                        class="ml-2 rounded-full bg-primary-muted px-3 py-1 text-xs font-semibold text-primary"
                        >+ 0.6% per transaction</span
                    >
                </div>

                <p
                    class="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400"
                >
                    Everything included:
                </p>
                <ul class="mt-4 space-y-3">
                    {#each ["Storefront + custom domain", "Built-in payments ", "Shipping labels & tracking", "Reviews, bundles, email tools", "No hidden app fees. No plugin tax."] as item}
                        <li
                            class="flex items-center gap-3 text-sm text-zinc-600"
                        >
                            <svg
                                class="h-4 w-4 shrink-0 text-primary"
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
                            {item}
                        </li>
                    {/each}
                </ul>

                <p class="mt-6 text-sm italic text-zinc-400">
                    That's less than what most sellers spend on Shopify apps
                    alone — before they've even paid for the plan.
                </p>

                <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                        href="/pricing"
                        variant="secondary"
                        size="md"
                        class="flex-1">See full pricing</Button
                    >
                    <Button
                        href="https://admin.soldt.co.za/signup"
                        size="md"
                        class="flex-1">Start for free</Button
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 7 — WHY SOLDT VS SHOPIFY                              -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
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

        <!-- Comparison Table -->
        <div
            class="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-zinc-200/60 shadow-sm"
        >
            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                    <thead>
                        <tr class="border-b border-zinc-200/60 bg-zinc-50">
                            <th class="px-6 py-4 font-semibold text-zinc-500"
                                >Feature</th
                            >
                            <th class="px-6 py-4 font-semibold text-zinc-400"
                                >Shopify</th
                            >
                            <th class="px-6 py-4 font-semibold text-primary"
                                >SOLDT</th
                            >
                        </tr>
                    </thead>
                    <tbody>
                        {#each comparison as row, i}
                            <tr
                                class="border-b border-zinc-100 {i % 2 === 0
                                    ? 'bg-white'
                                    : 'bg-zinc-50/50'}"
                            >
                                <td
                                    class="px-6 py-4 font-medium text-near-black"
                                    >{row.feature}</td
                                >
                                <td class="px-6 py-4 text-zinc-400"
                                    >{row.shopify}</td
                                >
                                <td class="px-6 py-4 font-medium text-primary"
                                    >{row.soldt}</td
                                >
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="mt-10 text-center">
            <p class="text-lg font-semibold text-near-black">
                Stop paying for a platform that makes you pay again for the
                basics.
            </p>
            <div class="mt-6">
                <Button href="https://admin.soldt.co.za/signup" size="lg"
                    >Switch to SOLDT</Button
                >
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 8 — USE CASE / PERSONA SEGMENTATION                   -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Built for sellers like you</h2>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {#each personas as persona}
                <div
                    class="group flex flex-col rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                    <span class="text-4xl">{persona.icon}</span>
                    <h3 class="mt-4 text-lg font-bold text-near-black">
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
                            size="sm">{persona.cta}</Button
                        >
                    </div>
                </div>
            {/each}
        </div>

        <p class="mt-12 text-center text-sm text-zinc-400">
            Don't see your niche? SOLDT works for any seller, any product, any
            size. If you're selling online in South Africa, this was built for
            you.
        </p>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 10 — DASHBOARD & MOBILE PREVIEW                       -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Run your store from anywhere</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Whether you're on your laptop at home or checking orders from
                your phone between meetings — SOLDT's dashboard gives you full
                control.
            </p>
        </div>

        <div class="mt-16 grid gap-12 lg:grid-cols-2">
            <!-- Desktop mockup -->
            <div
                class="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-xl"
            >
                <div
                    class="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3"
                >
                    <span class="h-2.5 w-2.5 rounded-full bg-zinc-200"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-zinc-200"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-zinc-200"></span>
                    <span
                        class="ml-3 block h-5 flex-1 rounded bg-zinc-100 text-center text-xs leading-5 text-zinc-400"
                        >admin.soldt.co.za</span
                    >
                </div>
                <div
                    class="flex min-h-[280px] items-center justify-center bg-linear-to-br from-primary/5 to-primary/10 p-8"
                >
                    <div class="text-center">
                        <p class="text-3xl">💻</p>
                        <p
                            class="mt-3 font-display text-sm font-bold text-near-black"
                        >
                            Desktop Dashboard
                        </p>
                        <p class="mt-1 text-xs text-zinc-400">
                            Screenshot coming with v1 launch
                        </p>
                    </div>
                </div>
            </div>

            <!-- Mobile mockup -->
            <div class="mx-auto w-full max-w-[280px] lg:mx-0">
                <div
                    class="overflow-hidden rounded-[2rem] border-4 border-zinc-800 bg-white shadow-xl"
                >
                    <div
                        class="flex h-6 items-center justify-center bg-zinc-800"
                    >
                        <span class="h-2 w-16 rounded-full bg-zinc-700"></span>
                    </div>
                    <div
                        class="flex min-h-[380px] items-center justify-center bg-linear-to-br from-primary/5 to-primary/10 p-6"
                    >
                        <div class="text-center">
                            <p class="text-3xl">📱</p>
                            <p
                                class="mt-3 font-display text-sm font-bold text-near-black"
                            >
                                Mobile View
                            </p>
                            <p class="mt-1 text-xs text-zinc-400">
                                Fully responsive
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature callouts -->
        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {#each dashboardFeatures as feat}
                <div class="text-center">
                    <p class="text-sm font-bold text-near-black">
                        {feat.label}
                    </p>
                    <p class="mt-1 text-xs leading-relaxed text-zinc-500">
                        {feat.description}
                    </p>
                </div>
            {/each}
        </div>

        <div class="mt-12 text-center">
            <p class="text-sm italic text-zinc-500">
                This isn't a demo. This is what your dashboard actually looks
                like.
            </p>
            <div class="mt-6">
                <Button href="https://admin.soldt.co.za/signup" size="lg"
                    >Start building your store</Button
                >
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 6 — TRUST SIGNALS & SECURITY                          -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">Built on trust. Backed by security.</h2>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {#each trustBadges as badge}
                <div class="text-center">
                    <div
                        class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted text-2xl"
                    >
                        {badge.icon}
                    </div>
                    <p class="mt-4 text-sm font-bold text-near-black">
                        {badge.title}
                    </p>
                    <p class="mt-1 text-xs leading-relaxed text-zinc-500">
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

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 5 — FAQ                                               -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center text-near-black">
            Got questions? We've got answers.
        </h2>

        <div class="mt-12 space-y-3">
            {#each faqs as faq, i}
                <div
                    class="rounded-xl border border-zinc-200/60 bg-surface transition-colors {openFaq ===
                    i
                        ? 'border-primary/20 bg-primary-muted'
                        : ''}"
                >
                    <button
                        class="flex w-full items-center justify-between px-6 py-5 text-left"
                        onclick={() => toggleFaq(i)}
                    >
                        <span class="pr-4 text-sm font-semibold text-near-black"
                            >{faq.question}</span
                        >
                        <svg
                            class="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 {openFaq ===
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
                                {faq.answer}
                            </p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SECTION 9 — NEWSLETTER / BLOG LEAD CAPTURE                    -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- Part A: Email Capture -->
<section class="bg-linear-to-r from-primary to-primary-dark py-16">
    <div class="mx-auto max-w-2xl px-6 text-center">
        <h2 class="text-white">The SOLDT Seller Report</h2>
        <p class="mt-3 text-sm text-white/70">
            Practical e-commerce tips, platform updates, and seller stories —
            straight to your inbox every week. No fluff. Unsubscribe anytime.
        </p>

        <form
            class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            onsubmit={(e) => e.preventDefault()}
        >
            <input
                type="email"
                placeholder="your@email.co.za"
                class="w-full rounded-full border-0 bg-white/15 px-5 py-3 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/20 backdrop-blur focus:ring-2 focus:ring-white/50 sm:max-w-xs"
            />
            <button
                type="submit"
                class="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-zinc-50 sm:w-auto"
            >
                Subscribe
            </button>
        </form>

        <p class="mt-4 text-xs text-white/50">
            Join 200+ SA sellers already subscribed.
        </p>
    </div>
</section>

<!-- Part B: Latest from the Blog -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <h2 class="text-center text-near-black">Fresh from the SOLDT blog</h2>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {#each [{ category: "Getting Started", title: "5 Shopify Alternatives for South African Sellers (2026)", excerpt: "Tired of paying in dollars? Here are the platforms actually built for local sellers.", time: "7 min read" }, { category: "Seller Stories", title: "How I Went From WhatsApp Orders to 200 Sales a Month", excerpt: "One wig seller's journey from DM chaos to a store that runs itself.", time: "5 min read" }, { category: "Tips & Strategy", title: "The Real Cost of Selling on Shopify in South Africa", excerpt: "We broke down every fee. The number might surprise you.", time: "6 min read" }] as post}
                <div
                    class="group overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                    <!-- Thumbnail placeholder -->
                    <div
                        class="flex h-48 items-center justify-center bg-linear-to-br from-primary/5 to-primary/10"
                    >
                        <span class="text-3xl">📝</span>
                    </div>
                    <div class="p-6">
                        <span
                            class="text-xs font-semibold uppercase tracking-wider text-primary"
                            >{post.category}</span
                        >
                        <h3
                            class="mt-2 text-base font-bold text-near-black leading-snug"
                        >
                            {post.title}
                        </h3>
                        <p class="mt-2 text-sm text-zinc-500">{post.excerpt}</p>
                        <p class="mt-3 text-xs text-zinc-400">{post.time}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="mt-10 text-center">
            <Button href="/blog" variant="secondary" size="md"
                >Read more on the blog</Button
            >
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- FINAL CTA                                                     -->
<!-- ═══════════════════════════════════════════════════════════════ -->
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
