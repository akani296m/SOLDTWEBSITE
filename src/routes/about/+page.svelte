<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    const problems = [
        {
            stat: "Days, not minutes",
            description:
                "How long it currently takes most SA sellers to go from idea to live store using existing tools.",
        },
        {
            stat: "1,000 moving pieces",
            description:
                "Payments, shipping, domains, reviews, emails — all separate tools, separate logins, separate bills.",
        },
        {
            stat: "It shouldn't be easier to register a UK LTD",
            description:
                "But right now, for many SA sellers, it genuinely is — just to get access to integrated payments and a real platform.",
        },
    ];

    const oldWay = [
        "Days of manual KYC before you can even test your idea",
        "Fragmented tools — Zapier to connect your reviews, emails, analytics",
        "Storefronts that look dated or feel weak out of the box",
        "Paying for apps before you've made your first sale",
        "Platforms designed for US and EU markets, adapted for SA as an afterthought",
        "New sellers look amateur next to established brands — unfair from day one",
    ];

    const soldt = [
        "Go from idea to live store fast — built for speed, not bureaucracy",
        "Payments, shipping, .co.za domains — all built in, all local",
        "Beautiful storefronts from day one — no designer required",
        "Reviews, email marketing, and analytics included in every plan",
        "Designed around how South African shoppers actually buy",
        "A brand-new seller and a 5-year veteran get the same world-class storefront",
    ];

    const pillars = [
        {
            icon: "⚡",
            title: "Speed is the product",
            description:
                "SOLDT is engineered around one belief: if your idea can't go live fast, it might never go live at all. Every feature we build is measured by how much time it removes.",
        },
        {
            icon: "🧰",
            title: "Everything included",
            description:
                "Reviews. Emails. Analytics. Other platforms charge per app or force you into Zapier. SOLDT Suite gives you the tools you need on generous free tiers — you only pay for what you actually use.",
        },
        {
            icon: "🇿🇦",
            title: "Designed for SA shoppers",
            description:
                "Our storefronts aren't global templates localised after the fact. They're built around what South African shoppers look for, how they browse, and how they buy.",
        },
    ];
</script>

<svelte:head>
    <title
        >About SOLDT — Ecommerce Platform Built for South African Businesses</title
    >
    <meta
        name="description"
        content="Learn the story behind SOLDT, the ecommerce platform built for South African businesses. Discover our mission to make starting an online store faster and easier."
    />
    {@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.soldt.co.za/about/#webpage",
      "url": "https://www.soldt.co.za/about",
      "name": "About SOLDT",
      "headline": "South Africa deserves faster commerce.",
      "description": "Learn why SOLDT was built to help South African merchants launch online stores faster with local commerce infrastructure, built-in tools, and storefronts designed for how South Africans shop.",
      "isPartOf": {
        "@id": "https://www.soldt.co.za/#website"
      },
      "about": {
        "@id": "https://www.soldt.co.za/#organization"
      },
      "mainEntity": {
        "@id": "https://www.soldt.co.za/#software"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.soldt.co.za/#organization",
      "name": "SOLDT",
      "url": "https://www.soldt.co.za",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.soldt.co.za/soldt-assets/title(3).svg"
      },
      "description": "SOLDT is a South African commerce platform built to help merchants launch, run, and grow online stores faster with local infrastructure and built-in tools.",
      "areaServed": {
        "@type": "Country",
        "name": "South Africa"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.soldt.co.za/#website",
      "url": "https://www.soldt.co.za",
      "name": "SOLDT",
      "publisher": {
        "@id": "https://www.soldt.co.za/#organization"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.soldt.co.za/#software",
      "name": "SOLDT",
      "url": "https://www.soldt.co.za",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "SOLDT is an all-in-one ecommerce platform built for South African sellers, with local payments, shipping, domains, reviews, email marketing, analytics, and storefronts designed for the South African market.",
      "brand": {
        "@id": "https://www.soldt.co.za/#organization"
      },
      "creator": {
        "@id": "https://www.soldt.co.za/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "South Africa"
      },
      "featureList": [
        "Local commerce infrastructure for South African sellers",
        "Built-in payments",
        "Built-in shipping tools",
        ".co.za domain support",
        "Reviews included",
        "Email marketing included",
        "Analytics included",
        "Storefronts designed for South African shoppers"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.soldt.co.za/about/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.soldt.co.za/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.soldt.co.za/about"
        }
      ]
    }
  ]
}
</script>`}
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
            <p
                class="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
            >
                About SOLDT
            </p>
            <h1 class="text-near-black">
                South Africa deserves
                <span
                    class="bg-linear-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                    faster commerce.
                </span>
            </h1>
            <p class="mt-6 text-lg leading-relaxed text-zinc-500 md:text-xl">
                E-commerce here is fragmented. It's slow. It takes weeks just to
                find out if your idea was worth pursuing. We built SOLDT to
                change that — so the next great South African brand doesn't die
                waiting on paperwork.
            </p>
        </div>
    </div>
</section>

<!-- ───── Why South Africa ───── -->
<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl">
            <p
                class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
                Why South Africa
            </p>
            <h2 class="mt-2 text-near-black">
                One of Africa's strongest economies.<br />Not the tools to
                match.
            </h2>
            <div class="mt-6 space-y-5 text-lg leading-relaxed text-zinc-500">
                <p>
                    There's an unbelievable amount of money flowing through this
                    country. South Africans are ready to buy. Sellers are ready
                    to sell. But the infrastructure to connect them? It's been
                    built for other markets, stitched together with workarounds,
                    or simply doesn't exist yet.
                </p>
                <p>
                    In the US, you can have a business idea on Friday and a live
                    store by Sunday. In South Africa, that same idea takes days
                    — sometimes weeks — just to get off the ground. That gap
                    isn't a feature problem. It's an infrastructure problem. And
                    it's exactly what SOLDT was built to solve.
                </p>
            </div>
        </div>

        <!-- Problem stats -->
        <div class="mt-16 grid gap-6 sm:grid-cols-3">
            {#each problems as problem}
                <div
                    class="rounded-2xl border border-zinc-200/60 bg-surface p-8"
                >
                    <p class="text-xl font-bold text-near-black">
                        {problem.stat}
                    </p>
                    <p class="mt-3 text-sm leading-relaxed text-zinc-500">
                        {problem.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Old Way vs SOLDT ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-near-black">The Old Way vs SOLDT</h2>
            <p class="mt-4 text-lg text-zinc-500">
                We didn't just build another store builder. We replaced the
                entire process.
            </p>
        </div>

        <div class="mt-16 grid gap-8 lg:grid-cols-2">
            <!-- Old Way -->
            <div
                class="rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm"
            >
                <div class="mb-6 flex items-center gap-3">
                    <span
                        class="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm"
                        >✕</span
                    >
                    <h3 class="text-lg font-bold text-near-black">
                        The Old Way
                    </h3>
                </div>
                <ul class="space-y-4">
                    {#each oldWay as item}
                        <li class="flex items-start gap-3">
                            <span
                                class="mt-1 h-2 w-2 shrink-0 rounded-full bg-zinc-300"
                            ></span>
                            <span class="text-sm leading-relaxed text-zinc-500"
                                >{item}</span
                            >
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- SOLDT Way -->
            <div
                class="rounded-2xl border border-primary/20 bg-primary-muted p-8 shadow-sm"
            >
                <div class="mb-6 flex items-center gap-3">
                    <span
                        class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white"
                        >✓</span
                    >
                    <h3 class="text-lg font-bold text-near-black">
                        The SOLDT Way
                    </h3>
                </div>
                <ul class="space-y-4">
                    {#each soldt as item}
                        <li class="flex items-start gap-3">
                            <span
                                class="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"
                            ></span>
                            <span class="text-sm leading-relaxed text-zinc-600"
                                >{item}</span
                            >
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- ───── Built Different ───── -->
<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <p
                class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
                Built Different
            </p>
            <h2 class="mt-2 text-near-black">
                Not a Shopify clone. A platform built for here.
            </h2>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-3">
            {#each pillars as pillar}
                <div
                    class="group rounded-2xl border border-zinc-200/60 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                    <span class="text-4xl">{pillar.icon}</span>
                    <h3 class="mt-5 text-lg font-bold text-near-black">
                        {pillar.title}
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-zinc-500">
                        {pillar.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Where We're Going ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl">
            <p
                class="text-sm font-semibold uppercase tracking-widest text-primary"
            >
                Where We're Going
            </p>
            <h2 class="mt-2 text-near-black">
                Every enterprise started as a small store. SOLDT wants to power
                every stage of that journey.
            </h2>
            <div class="mt-6 space-y-5 text-lg leading-relaxed text-zinc-500">
                <p>
                    We're not here to replace Shopify — they've built a great
                    platform and they deserve their share of the market. SOLDT
                    exists to make sure South African sellers have a world-class
                    option that was built for them from the ground up. Not
                    "South African Shopify." A platform that stands on its own.
                </p>
                <p>
                    And South Africa is just the start. As commerce grows across
                    the continent — Kenya, Ghana, and beyond — SOLDT will grow
                    with it. The goal is simple: if you have a business idea
                    anywhere in Africa, SOLDT should be the only place you'd
                    want to sell.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ───── CTA ───── -->
<section class="bg-near-black py-24">
    <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-white">Ready to build something?</h2>
        <p class="mt-4 text-lg text-zinc-400">
            Your next idea deserves better than a 3-week setup process.
        </p>
        <div class="mt-10">
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Start Selling on SOLDT
            </Button>
        </div>
    </div>
</section>
