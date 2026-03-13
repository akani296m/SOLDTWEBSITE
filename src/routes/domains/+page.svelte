<script lang="ts">
    const features = [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>`,
            title: "DNS Management",
            description: "Control your domain records easily from your dashboard.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>`,
            title: "SSL Security",
            description: "Every domain connected to SOLDT includes automatic HTTPS security.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>`,
            title: "Domain Forwarding",
            description: "Redirect traffic from one domain to another whenever needed.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
            title: "Ownership Protection",
            description: "Your domain ownership stays secure.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
            title: "Global Infrastructure",
            description: "Fast DNS performance for stores serving customers anywhere.",
        },
    ];

    const mockResults = [
        { domain: "glowlabs.co.za", available: true, price: "R149/yr" },
        { domain: "glowlabs.store", available: true, price: "R199/yr" },
        { domain: "glowlabs.shop", available: true, price: "R179/yr" },
        { domain: "glowlabs.com", available: false, price: null },
    ];

    let searchQuery = $state("");
    let showResults = $state(false);

    function handleSearch() {
        if (searchQuery.trim()) {
            showResults = true;
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter") handleSearch();
    }
</script>

<svelte:head>
    <title>Buy and Connect a Domain for Your Online Store | SOLDT Domains</title>
    <meta
        name="description"
        content="Search, buy, and connect your domain directly inside SOLDT. Launch your online store with a professional domain in minutes — no technical setup required."
    />
    {@html `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.soldt.co.za/domains#webpage",
      "url": "https://www.soldt.co.za/domains",
      "name": "SOLDT Domains | Buy and Connect a Domain for Your Store",
      "description": "Search, buy, and connect your domain directly inside SOLDT. Launch your online store with a professional domain in minutes with no technical setup required.",
      "isPartOf": {
        "@id": "https://www.soldt.co.za/#website"
      },
      "about": {
        "@id": "https://www.soldt.co.za/#organization"
      },
      "publisher": {
        "@id": "https://www.soldt.co.za/#organization"
      },
      "mainEntity": {
        "@id": "https://www.soldt.co.za/domains#software"
      },
      "breadcrumb": {
        "@id": "https://www.soldt.co.za/domains#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.soldt.co.za/#website",
      "url": "https://www.soldt.co.za/",
      "name": "SOLDT",
      "publisher": {
        "@id": "https://www.soldt.co.za/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.soldt.co.za/#organization",
      "name": "SOLDT",
      "url": "https://www.soldt.co.za/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.soldt.co.za/soldt-assets/title(3).svg"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.soldt.co.za/domains#software",
      "name": "SOLDT Domains",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://www.soldt.co.za/domains",
      "provider": {
        "@id": "https://www.soldt.co.za/#organization"
      },
      "description": "SOLDT Domains lets merchants search, buy, and connect domains directly inside their dashboard. It includes the core features expected from professional domain registrars, including DNS management, SSL security, forwarding, renewals, and ownership protection.",
      "featureList": [
        "Search for domain names inside the SOLDT dashboard",
        "Buy domains directly inside SOLDT",
        "Connect existing domains easily",
        "DNS management",
        "SSL security",
        "Domain forwarding",
        "Easy renewals",
        "Ownership protection",
        "Manage domain and store in one dashboard"
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://www.soldt.co.za/domains",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "ZAR",
        "category": "Domain registration and connection"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.soldt.co.za/domains#breadcrumb",
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
          "name": "Domains",
          "item": "https://www.soldt.co.za/domains"
        }
      ]
    }
  ]
}</script>`}
</svelte:head>

<!-- ───── Hero ───── -->
<section class="relative overflow-hidden bg-surface py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0">
        <div class="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
    </div>
    <div class="relative mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                SOLDT Domains
            </p>
            <h1 class="text-near-black">
                Secure your store's domain
                <span class="bg-linear-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    in minutes
                </span>
            </h1>
            <p class="mt-6 text-lg leading-relaxed text-zinc-500 md:text-xl">
                Search, buy, and connect your domain directly inside SOLDT. Launch your store with a professional domain — no technical setup required.
            </p>
            <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                    href="https://admin.soldt.co.za/signup"
                    class="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md"
                >
                    Start your free trial
                </a>
                <a
                    href="#domain-search"
                    class="rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-near-black transition-all hover:border-primary/30 hover:shadow-sm"
                >
                    Search domains
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ───── Domain Search ───── -->
<section id="domain-search" class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-3xl px-6">
        <div class="text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                Find Your Domain
            </p>
            <h2 class="mt-2 text-near-black">Find the perfect domain for your brand</h2>
            <p class="mt-4 text-lg text-zinc-500">
                Search for your store name and secure the domain instantly inside your SOLDT dashboard.
            </p>
        </div>

        <!-- Search bar -->
        <div class="mt-10">
            <div class="flex overflow-hidden rounded-2xl border border-zinc-200/60 bg-surface shadow-sm transition-all focus-within:border-primary/40 focus-within:shadow-md">
                <input
                    id="domain-search-input"
                    type="text"
                    placeholder="Enter your brand name..."
                    bind:value={searchQuery}
                    onkeydown={handleKeydown}
                    class="flex-1 bg-transparent px-6 py-4 text-sm text-near-black placeholder-zinc-400 outline-none"
                />
                <button
                    onclick={handleSearch}
                    class="m-2 flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    Search
                </button>
            </div>
            <p class="mt-3 text-center text-xs text-zinc-400">
                💡 Tip: Short, simple names are easier for customers to remember.
            </p>
        </div>

        <!-- Mock results -->
        {#if showResults}
            <div class="mt-8 overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm">
                <div class="divide-y divide-zinc-100">
                    {#each mockResults as result}
                        <div class="flex items-center justify-between px-6 py-4">
                            <span class="text-sm font-medium text-near-black">
                                {searchQuery.trim() || "yourbrand"}{result.domain.replace(/^[^.]+/, "")}
                            </span>
                            <div class="flex items-center gap-4">
                                {#if result.available}
                                    <span class="text-sm text-zinc-400">{result.price}</span>
                                    <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                        Available
                                    </span>
                                    <a
                                        href="https://admin.soldt.co.za/signup"
                                        class="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-primary-dark"
                                    >
                                        Get it
                                    </a>
                                {:else}
                                    <span class="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-400">
                                        Taken
                                    </span>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="border-t border-zinc-100 bg-surface px-6 py-4 text-center">
                    <a
                        href="https://admin.soldt.co.za/signup"
                        class="text-sm font-medium text-primary hover:underline"
                    >
                        Sign up to purchase your domain →
                    </a>
                </div>
            </div>
        {/if}
    </div>
</section>

<!-- ───── Buy Domains Without Leaving SOLDT ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="grid items-center gap-16 lg:grid-cols-2">
            <div>
                <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                    No Extra Logins
                </p>
                <h2 class="mt-2 text-near-black">
                    Buy your domain directly from your dashboard
                </h2>
                <div class="mt-6 space-y-5 text-lg leading-relaxed text-zinc-500">
                    <p>
                        With SOLDT Domains, you don't need to manage your domain somewhere else and try to connect it later.
                    </p>
                    <p>
                        Search for available domains, purchase them instantly, and your store is ready to launch — all from inside the SOLDT dashboard.
                    </p>
                </div>
                <ul class="mt-8 space-y-3">
                    {#each ["No separate accounts.", "No complicated DNS setup.", "Just secure your name and start selling."] as point}
                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-3 w-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="text-sm font-medium text-zinc-600">{point}</span>
                        </li>
                    {/each}
                </ul>
                <div class="mt-10">
                    <a
                        href="https://admin.soldt.co.za/signup"
                        class="inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
                    >
                        Get your domain
                    </a>
                </div>
            </div>

            <!-- Visual card -->
            <div class="rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm">
                <div class="mb-4 flex items-center gap-2">
                    <div class="h-3 w-3 rounded-full bg-red-400"></div>
                    <div class="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div class="h-3 w-3 rounded-full bg-green-400"></div>
                    <div class="ml-2 flex-1 rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-400">
                        dashboard.soldt.co.za/domains
                    </div>
                </div>
                <div class="space-y-3">
                    <div class="rounded-xl border border-zinc-100 bg-surface p-4">
                        <p class="text-xs font-semibold uppercase tracking-wider text-zinc-400">Your Domains</p>
                        <div class="mt-3 space-y-2">
                            {#each [{ d: "mybrand.co.za", status: "Active" }, { d: "mystore.shop", status: "Active" }] as row}
                                <div class="flex items-center justify-between rounded-lg bg-white px-4 py-3">
                                    <span class="text-sm font-medium text-near-black">{row.d}</span>
                                    <span class="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600">{row.status}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="rounded-xl border border-primary/20 bg-primary/5 p-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs font-semibold text-primary">+ Add a domain</p>
                                <p class="mt-0.5 text-xs text-zinc-400">Search and buy instantly</p>
                            </div>
                            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ───── Connect Existing Domains ───── -->
<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="grid items-center gap-16 lg:grid-cols-2">
            <!-- Visual card -->
            <div class="order-2 lg:order-1 rounded-2xl border border-zinc-200/60 bg-surface p-8 shadow-sm">
                <div class="space-y-4">
                    <div class="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-lg">
                            🌐
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-near-black">Step 1</p>
                            <p class="text-xs text-zinc-400">Enter your existing domain name</p>
                        </div>
                        <div class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-3.5 w-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-lg">
                            ⚙️
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-near-black">Step 2</p>
                            <p class="text-xs text-zinc-400">Follow the guided DNS setup</p>
                        </div>
                        <div class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-3.5 w-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg">
                            🚀
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-near-black">Step 3</p>
                            <p class="text-xs text-zinc-400">Your domain is live on SOLDT</p>
                        </div>
                        <div class="ml-auto">
                            <span class="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">Live</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2">
                <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                    Already Have a Domain?
                </p>
                <h2 class="mt-2 text-near-black">
                    Already own a domain? Connect it in minutes.
                </h2>
                <div class="mt-6 space-y-5 text-lg leading-relaxed text-zinc-500">
                    <p>
                        If you purchased a domain from another provider, you can easily connect it to your SOLDT store.
                    </p>
                    <p>
                        Our guided setup walks you through the DNS configuration step by step so your store can go live without technical knowledge.
                    </p>
                    <p>
                        Your brand stays yours — SOLDT simply powers the commerce behind it.
                    </p>
                </div>
                <div class="mt-10">
                    <a
                        href="https://admin.soldt.co.za/signup"
                        class="inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
                    >
                        Connect your domain
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ───── Everything Included ───── -->
<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                What's Included
            </p>
            <h2 class="mt-2 text-near-black">
                Everything your domain needs — already included
            </h2>
            <p class="mt-4 text-lg text-zinc-500">
                Every domain on SOLDT comes with the infrastructure your store needs to perform.
            </p>
        </div>

        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {#each features as feature}
                <div class="group rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {@html feature.icon}
                    </div>
                    <h3 class="mt-5 text-base font-bold text-near-black">{feature.title}</h3>
                    <p class="mt-2 text-sm leading-relaxed text-zinc-500">{feature.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- ───── One Dashboard ───── -->
<section class="border-y border-zinc-200/60 bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-primary">
                One Platform
            </p>
            <h2 class="mt-2 text-near-black">Manage your domain and store in one place</h2>
            <div class="mt-6 space-y-5 text-lg leading-relaxed text-zinc-500">
                <p>
                    With SOLDT, your domain isn't managed somewhere else.
                </p>
                <p>
                    Your products, orders, store design, and domain are all controlled from the same dashboard — giving you complete control over your online business.
                </p>
            </div>
            <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
                {#each ["No switching tools.", "No extra logins.", "One platform built for selling online in South Africa."] as point}
                    <span class="rounded-full border border-zinc-200 bg-surface px-4 py-2 text-sm font-medium text-zinc-600">
                        {point}
                    </span>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- ───── Closing CTA ───── -->
<section class="bg-near-black py-24">
    <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-white">Your brand starts with the right name</h2>
        <p class="mt-4 text-lg text-zinc-400">
            Secure your domain, launch your store, and start selling online — all with SOLDT.
        </p>
        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
                href="https://admin.soldt.co.za/signup"
                class="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
                Start your free trial
            </a>
            <a
                href="#domain-search"
                class="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
                Search domains
            </a>
        </div>
    </div>
</section>
