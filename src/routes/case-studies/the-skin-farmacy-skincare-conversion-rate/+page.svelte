<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    const keyResults = [
        {
            icon: "↑",
            label: "Improved Conversion Rate",
            description: "More product page visitors converted into buyers after the rebuild.",
        },
        {
            icon: "🖼",
            label: "Before/After Product Visuals",
            description: "Image slider sections let shoppers see real skincare transformations.",
        },
        {
            icon: "⭐",
            label: "Reviews Filtered by Skin Type",
            description: "Customers find reviews from people with similar skin concerns.",
        },
        {
            icon: "✓",
            label: "No Paid Apps Required",
            description: "Everything The Skin Farmacy needed was already built into SOLDT.",
        },
    ];

    const companySnapshot = [
        { label: "Company", value: "The Skin Farmacy" },
        { label: "Industry", value: "Skincare" },
        { label: "Location", value: "South Africa" },
        { label: "Platform Used", value: "SOLDT" },
        { label: "Key Features Used", value: "Image Slider Sections, Built-in Reviews, Review Filtering" },
    ];

    const oldStack = [
        { tool: "Review App (e.g. Yotpo)", cost: "Paid monthly" },
        { tool: "Page Builder App", cost: "Paid monthly" },
        { tool: "Custom Code", cost: "Developer cost" },
    ];

    const soldtStack = [
        { tool: "Built-in Reviews", cost: "Included" },
        { tool: "Built-in Storefront Sections", cost: "Included" },
        { tool: "Native Components", cost: "Included" },
    ];

    const results = [
        { icon: "📈", title: "Higher Conversion Rate", description: "More visitors became buyers after the storefront rebuild." },
        { icon: "🎨", title: "Stronger Product Storytelling", description: "Visual before/after sections communicate product value clearly." },
        { icon: "🤝", title: "Higher Buyer Confidence", description: "Structured reviews by skin type helped shoppers commit to purchase." },
    ];

    const relatedResources = [
        {
            title: "How to Start an Online Store in South Africa",
            href: "/blog/how-to-start-an-online-store-south-africa",
            description: "A step-by-step guide to launching your first South African ecommerce store.",
        },
        {
            title: "Best Ecommerce Platforms for South African Businesses",
            href: "/blog/best-ecommerce-platforms-south-africa",
            description: "Compare the top ecommerce platforms available to South African sellers.",
        },
        {
            title: "Best Payment Gateways for South African Online Stores",
            href: "/blog/best-payment-gateways-south-africa",
            description: "Find the right payment gateway for your South African ecommerce store.",
        },
    ];
</script>

<svelte:head>
    <title>How a Skincare Brand Increased Conversion Rate with SOLDT | The Skin Farmacy Case Study</title>
    <meta
        name="description"
        content="Learn how The Skin Farmacy, a South African skincare brand, improved conversion rates by rebuilding their online store with SOLDT's built-in storefront sections and review tools."
    />
    <meta property="og:title" content="How a Skincare Brand Increased Conversion Rate with SOLDT | The Skin Farmacy Case Study" />
    <meta property="og:description" content="Learn how The Skin Farmacy, a South African skincare brand, improved conversion rates by rebuilding their online store with SOLDT's built-in storefront sections and review tools." />
    <meta property="og:type" content="article" />
    {@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.soldt.co.za/case-studies/the-skin-farmacy-skincare-conversion-rate/#article",
      "headline": "How The Skin Farmacy Increased Skincare Store Conversion Rates by Switching to SOLDT",
      "description": "The Skin Farmacy, a South African skincare brand, rebuilt their online store using the SOLDT ecommerce platform to improve how their products were presented online.",
      "url": "https://www.soldt.co.za/case-studies/the-skin-farmacy-skincare-conversion-rate",
      "author": {
        "@type": "Organization",
        "name": "SOLDT",
        "@id": "https://www.soldt.co.za/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SOLDT",
        "@id": "https://www.soldt.co.za/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.soldt.co.za/soldt-assets/title(3).svg"
        }
      },
      "about": {
        "@type": "Organization",
        "name": "The Skin Farmacy",
        "description": "A South African skincare brand that rebuilt their online store using the SOLDT ecommerce platform.",
        "areaServed": {
          "@type": "Country",
          "name": "South Africa"
        }
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
      "description": "SOLDT is a South African ecommerce platform built to help merchants launch, run, and grow online stores with local infrastructure and built-in tools.",
      "areaServed": {
        "@type": "Country",
        "name": "South Africa"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.soldt.co.za/#software",
      "name": "SOLDT",
      "url": "https://www.soldt.co.za",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "SOLDT is an all-in-one ecommerce platform for South African sellers with built-in storefronts, payments, shipping, reviews, and analytics.",
      "brand": { "@id": "https://www.soldt.co.za/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.soldt.co.za/case-studies/the-skin-farmacy-skincare-conversion-rate/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.soldt.co.za/" },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.soldt.co.za/case-studies" },
        { "@type": "ListItem", "position": 3, "name": "The Skin Farmacy", "item": "https://www.soldt.co.za/case-studies/the-skin-farmacy-skincare-conversion-rate" }
      ]
    }
  ]
}
</script>`}
</svelte:head>

<!-- ───── Hero ───── -->
<section class="relative overflow-hidden bg-surface py-20 md:py-28">
    <div class="pointer-events-none absolute inset-0">
        <div class="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
    </div>
    <div class="relative mx-auto max-w-7xl px-6">
        <!-- Back link -->
        <a
            href="/case-studies"
            class="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary"
        >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Case Studies
        </a>

        <div class="grid items-center gap-12 lg:grid-cols-2">
            <!-- Left: Title + Subtitle -->
            <div class="max-w-xl">
                <span class="mb-4 inline-block rounded-full bg-primary-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    Case Study — Skincare
                </span>
                <h1 class="text-near-black">
                    How The Skin Farmacy Increased Skincare Store Conversion Rates by Switching to SOLDT
                </h1>
                <p class="mt-6 text-lg leading-relaxed text-zinc-500">
                    The Skin Farmacy, a South African skincare brand, rebuilt their online store using the SOLDT ecommerce platform to better showcase their products. By using SOLDT's built-in storefront sections and review tools, the brand increased buyer confidence and improved their store's conversion rate.
                </p>
            </div>

            <!-- Right: Visual placeholder -->
            <div class="flex items-center justify-center">
                <div class="w-full max-w-md rounded-2xl border border-zinc-200/60 bg-white p-2 shadow-lg">
                    <div class="flex h-72 items-center justify-center rounded-xl bg-zinc-50">
                        <div class="text-center">
                            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                <span class="text-2xl">🧴</span>
                            </div>
                            <p class="text-sm font-semibold text-near-black">The Skin Farmacy</p>
                            <p class="mt-1 text-xs text-zinc-400">SOLDT Storefront</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ───── Key Results ───── -->
<section class="border-y border-zinc-200/60 bg-white py-16">
    <div class="mx-auto max-w-7xl px-6">
        <p class="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Key Results
        </p>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {#each keyResults as result}
                <div class="rounded-2xl border border-zinc-200/60 bg-surface p-6">
                    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-muted text-xl font-bold text-primary">
                        {result.icon}
                    </span>
                    <p class="mt-4 font-bold text-near-black">{result.label}</p>
                    <p class="mt-2 text-sm leading-relaxed text-zinc-500">{result.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Company Snapshot ───── -->
<section class="bg-surface py-16">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl">
            <p class="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
                Company Snapshot
            </p>
            <div class="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm">
                {#each companySnapshot as row, i}
                    <div class="flex items-start gap-6 px-6 py-4 {i < companySnapshot.length - 1 ? 'border-b border-zinc-100' : ''}">
                        <span class="w-36 shrink-0 text-sm font-semibold text-zinc-400">{row.label}</span>
                        <span class="text-sm text-near-black">{row.value}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- ───── The Challenge ───── -->
<section class="border-y border-zinc-200/60 bg-white py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">The Challenge</p>
            <h2 class="mt-2 text-near-black">Competing in one of ecommerce's most visual categories</h2>
            <div class="mt-6 space-y-5 text-lg leading-relaxed text-zinc-500">
                <p>
                    The Skin Farmacy operates in one of the most competitive categories in ecommerce — skincare. In this market, presentation matters just as much as the product itself. Larger skincare brands dominate online because their websites clearly show product results and build strong trust through reviews and visual storytelling.
                </p>
                <p>
                    The Skin Farmacy's previous storefront made it difficult to compete with brands that had highly polished product pages, visual before-and-after transformations, structured customer reviews, and clear social proof.
                </p>
                <p>
                    Achieving this level of presentation on most ecommerce platforms typically requires installing several apps or writing custom code for advanced product page layouts — adding unnecessary complexity and cost for a growing brand.
                </p>
            </div>
            <ul class="mt-8 grid gap-3 sm:grid-cols-2">
                {#each ["Highly polished product pages", "Visual before-and-after transformations", "Structured customer reviews", "Clear social proof"] as item}
                    <li class="flex items-center gap-3 rounded-xl border border-zinc-200/60 bg-surface px-4 py-3 text-sm text-zinc-600">
                        <span class="h-2 w-2 shrink-0 rounded-full bg-zinc-300"></span>
                        {item}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>

<!-- ───── Why They Switched ───── -->
<section class="bg-surface py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">Why They Switched</p>
            <h2 class="mt-2 text-near-black">Everything they needed, already built in</h2>
            <div class="mt-6 space-y-5 text-lg leading-relaxed text-zinc-500">
                <p>
                    The Skin Farmacy chose SOLDT because it allowed them to rebuild their storefront using tools already built into the platform. SOLDT is an <a href="/soldt-suite" class="font-medium text-primary hover:underline">ecommerce platform designed for South African businesses</a>, with storefronts, payments, and shipping built into one system.
                </p>
                <p>
                    Instead of installing separate apps to achieve the functionality they needed, The Skin Farmacy could configure their store directly using SOLDT's built-in <a href="/soldt-suite" class="font-medium text-primary hover:underline">storefront sections</a> and review system. This let the brand focus on what matters most in skincare ecommerce — showing real product results and building customer trust.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ───── Feature: Before/After Image Slider ───── -->
<section class="border-y border-zinc-200/60 bg-white py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
            <div class="max-w-lg">
                <p class="text-sm font-semibold uppercase tracking-widest text-primary">Feature</p>
                <h2 class="mt-2 text-near-black">Showing Real Skincare Results</h2>
                <p class="mt-4 text-lg leading-relaxed text-zinc-500">
                    One of the most important additions to The Skin Farmacy's new storefront was the ability to showcase real product transformations. Using SOLDT's image slider sections, The Skin Farmacy added before-and-after skincare images directly to their product pages.
                </p>
                <p class="mt-4 text-lg leading-relaxed text-zinc-500">
                    These visual comparisons allow shoppers to immediately see the impact of the products. For skincare buyers, seeing real transformations plays a major role in purchasing decisions. Instead of simply describing product benefits, The Skin Farmacy could now show the results visually — increasing confidence for first-time buyers.
                </p>
            </div>

            <!-- Visual mock -->
            <div class="flex justify-center lg:justify-end">
                <div class="w-full max-w-sm rounded-2xl border border-zinc-200/60 bg-surface p-4 shadow-sm">
                    <div class="overflow-hidden rounded-xl">
                        <div class="flex">
                            <div class="flex-1 bg-zinc-100 py-12 text-center">
                                <p class="text-xs font-semibold text-zinc-400">BEFORE</p>
                            </div>
                            <div class="w-px bg-zinc-300"></div>
                            <div class="flex-1 bg-primary-muted py-12 text-center">
                                <p class="text-xs font-semibold text-primary">AFTER</p>
                            </div>
                        </div>
                    </div>
                    <p class="mt-4 text-center text-xs text-zinc-400">Before/After Image Slider — SOLDT Storefront</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ───── Feature: Reviews + Skin Type Filtering ───── -->
<section class="bg-surface py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
            <!-- Visual mock -->
            <div class="flex justify-center lg:justify-start">
                <div class="w-full max-w-sm rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm">
                    <div class="mb-4 flex gap-2 flex-wrap">
                        {#each ["All Skin Types", "Oily Skin", "Sensitive Skin", "Acne-Prone"] as tag, i}
                            <span class="rounded-full px-3 py-1 text-xs font-medium {i === 0 ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-600'}">
                                {tag}
                            </span>
                        {/each}
                    </div>
                    <div class="space-y-3">
                        {#each [{ stars: 5, text: "Cleared my acne in 3 weeks." }, { stars: 5, text: "Perfect for sensitive skin." }] as review}
                            <div class="rounded-xl border border-zinc-100 p-3">
                                <div class="flex gap-0.5 mb-1">
                                    {#each Array(review.stars) as _}
                                        <span class="text-xs text-amber-400">★</span>
                                    {/each}
                                </div>
                                <p class="text-xs text-zinc-600">{review.text}</p>
                            </div>
                        {/each}
                    </div>
                    <p class="mt-4 text-center text-xs text-zinc-400">Built-in Reviews — SOLDT</p>
                </div>
            </div>

            <div class="max-w-lg">
                <p class="text-sm font-semibold uppercase tracking-widest text-primary">Feature</p>
                <h2 class="mt-2 text-near-black">Building Trust with Structured Reviews</h2>
                <p class="mt-4 text-lg leading-relaxed text-zinc-500">
                    Customer reviews are one of the most important trust signals in skincare ecommerce. Using SOLDT's <a href="/soldt-suite" class="font-medium text-primary hover:underline">built-in review tools</a>, The Skin Farmacy was able to collect and display customer feedback in a more useful format.
                </p>
                <p class="mt-4 text-lg leading-relaxed text-zinc-500">
                    Instead of displaying reviews in a generic list, customers could filter reviews based on skin type — oily, sensitive, acne-prone, and more. This allows shoppers to quickly find reviews from people with similar skin concerns, helping them feel more confident about trying the product themselves.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ───── Technology Stack Comparison ───── -->
<section class="border-y border-zinc-200/60 bg-white py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">Simplifying the Stack</p>
            <h2 class="mt-2 text-near-black">One platform instead of many apps</h2>
            <p class="mt-4 text-lg text-zinc-500">
                On most ecommerce platforms, achieving the same functionality requires managing several paid apps. SOLDT builds everything in so brands can focus on selling, not software.
            </p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-2">
            <!-- Typical setup -->
            <div class="rounded-2xl border border-zinc-200/60 bg-surface p-8">
                <div class="mb-6 flex items-center gap-3">
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-400">✕</span>
                    <h3 class="text-base font-bold text-near-black">Typical Ecommerce Setup</h3>
                </div>
                <div class="space-y-3">
                    {#each oldStack as row}
                        <div class="flex items-center justify-between rounded-xl border border-zinc-100 bg-white px-4 py-3">
                            <span class="text-sm text-zinc-700">{row.tool}</span>
                            <span class="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-500">{row.cost}</span>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- SOLDT -->
            <div class="rounded-2xl border border-primary/20 bg-primary-muted p-8">
                <div class="mb-6 flex items-center gap-3">
                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">✓</span>
                    <h3 class="text-base font-bold text-near-black">SOLDT</h3>
                </div>
                <div class="space-y-3">
                    {#each soldtStack as row}
                        <div class="flex items-center justify-between rounded-xl border border-primary/10 bg-white/60 px-4 py-3">
                            <span class="text-sm text-zinc-700">{row.tool}</span>
                            <span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{row.cost}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ───── Results ───── -->
<section class="bg-surface py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">The Results</p>
            <h2 class="mt-2 text-near-black">Measurable improvements across the store</h2>
            <p class="mt-4 text-lg text-zinc-500">
                After launching their new storefront on SOLDT, The Skin Farmacy noticed clear improvements in how customers interacted with their product pages.
            </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-3">
            {#each results as result}
                <div class="rounded-2xl border border-zinc-200/60 bg-white p-8 text-center shadow-sm">
                    <span class="text-4xl">{result.icon}</span>
                    <h3 class="mt-4 text-base font-bold text-near-black">{result.title}</h3>
                    <p class="mt-2 text-sm leading-relaxed text-zinc-500">{result.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── Quote ───── -->
<section class="border-y border-zinc-200/60 bg-white py-20">
    <div class="mx-auto max-w-3xl px-6 text-center">
        <span class="text-5xl font-serif text-primary/30">"</span>
        <blockquote class="mt-2 text-xl font-medium leading-relaxed text-near-black md:text-2xl">
            Being able to show real skincare transformations and organize reviews by skin type made a huge difference for our customers. SOLDT gave us the tools to build a store experience that actually communicates the value of our products.
        </blockquote>
        <p class="mt-6 text-sm font-semibold text-zinc-500">— The Skin Farmacy Team</p>
    </div>
</section>

<!-- ───── Why This Matters ───── -->
<section class="bg-surface py-20">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">Why This Matters</p>
            <h2 class="mt-2 text-near-black">Skincare buyers are research-driven</h2>
            <p class="mt-6 text-lg leading-relaxed text-zinc-500">
                Skincare shoppers are highly research-driven. Before making a purchase, they want to see real product results, reviews from customers with similar skin concerns, and clear visual proof that the product works. Stores that communicate this information effectively consistently outperform competitors with generic product pages.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-zinc-500">
                SOLDT's built-in storefront tools make it easier for brands to create trust-focused ecommerce experiences without relying on multiple apps or development work. For skincare brands in particular, the combination of visual storytelling and structured social proof is a direct driver of conversion.
            </p>
            <ul class="mt-8 space-y-3">
                {#each ["Real product results shown visually", "Reviews from customers with similar skin concerns", "Clear visual proof that the product works"] as item}
                    <li class="flex items-center gap-3 text-zinc-600">
                        <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary font-bold">✓</span>
                        <span class="text-sm">{item}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>

<!-- ───── CTA ───── -->
<section class="bg-near-black py-24">
    <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-white">Build your store with SOLDT</h2>
        <p class="mt-4 text-lg text-zinc-400">
            SOLDT gives South African businesses everything they need to launch and grow an online store — storefronts, <a href="/migrate" class="text-primary hover:underline">payments, shipping</a>, and essential ecommerce tools built directly into the platform.
        </p>
        <div class="mt-10">
            <Button href="https://admin.soldt.co.za/signup" size="lg">
                Start Selling on SOLDT
            </Button>
        </div>
    </div>
</section>

<!-- ───── Related Resources ───── -->
<section class="border-t border-zinc-200/60 bg-surface py-20">
    <div class="mx-auto max-w-7xl px-6">
        <p class="mb-8 text-sm font-semibold uppercase tracking-widest text-primary">Related Resources</p>
        <div class="grid gap-6 sm:grid-cols-3">
            {#each relatedResources as resource}
                <a
                    href={resource.href}
                    class="group rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
                >
                    <p class="font-semibold text-near-black group-hover:text-primary transition-colors">
                        {resource.title}
                    </p>
                    <p class="mt-2 text-sm leading-relaxed text-zinc-500">{resource.description}</p>
                    <span class="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                        Read more
                        <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </a>
            {/each}
        </div>
    </div>
</section>
