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
    <!-- Background decoration -->
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
            <!-- Badge -->
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
                <Button href="#features" variant="secondary" size="lg">
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
            <!-- First set -->
            {#each logos as logo}
                <div class="logo-item">
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        class="logo-img {logo.bg ? 'rounded-xl' : ''}"
                    />
                </div>
            {/each}
            <!-- Duplicate for seamless loop -->
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

<!-- ───── CTA ───── -->
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
