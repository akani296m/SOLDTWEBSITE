<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";
</script>

<svelte:head>
    <title>Contact — SOLDT</title>
    <meta
        name="description"
        content="Get in touch with the SOLDT team. We'd love to hear from you."
    />
</svelte:head>

<section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-near-black">Get in touch</h1>
            <p class="mt-4 text-lg text-zinc-500">
                Have a question, partnership idea, or just want to say hello?
                We'd love to hear from you.
            </p>
        </div>

        <div class="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2">
            <!-- Contact Form -->
            <div
                class="rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm"
            >
                <h2 class="text-xl font-bold text-near-black">
                    Send us a message
                </h2>
                <form class="mt-6 space-y-5" action="/contact" method="POST">
                    <div>
                        <label
                            for="name"
                            class="mb-1.5 block text-sm font-medium text-zinc-700"
                            >Name</label
                        >
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            class="w-full rounded-lg border border-zinc-200 bg-surface px-4 py-3 text-sm text-near-black placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label
                            for="email"
                            class="mb-1.5 block text-sm font-medium text-zinc-700"
                            >Email</label
                        >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            class="w-full rounded-lg border border-zinc-200 bg-surface px-4 py-3 text-sm text-near-black placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label
                            for="subject"
                            class="mb-1.5 block text-sm font-medium text-zinc-700"
                            >Subject</label
                        >
                        <select
                            id="subject"
                            name="subject"
                            class="w-full rounded-lg border border-zinc-200 bg-surface px-4 py-3 text-sm text-near-black focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                            <option>General Enquiry</option>
                            <option>Partnership</option>
                            <option>Support</option>
                            <option>Press / Media</option>
                            <option>Careers</option>
                        </select>
                    </div>
                    <div>
                        <label
                            for="message"
                            class="mb-1.5 block text-sm font-medium text-zinc-700"
                            >Message</label
                        >
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            class="w-full rounded-lg border border-zinc-200 bg-surface px-4 py-3 text-sm text-near-black placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            placeholder="Tell us what's on your mind..."
                        ></textarea>
                    </div>
                    <Button variant="primary" size="md" class="w-full">
                        Send Message
                    </Button>
                </form>
            </div>

            <!-- Contact Info -->
            <div class="flex flex-col gap-8">
                <div
                    class="rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm"
                >
                    <h3 class="text-lg font-bold text-near-black">
                        Other Ways to Reach Us
                    </h3>
                    <ul class="mt-6 space-y-5">
                        <li class="flex items-start gap-4">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted text-primary"
                            >
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    /></svg
                                >
                            </div>
                            <div>
                                <p class="text-sm font-medium text-near-black">
                                    Email
                                </p>
                                <a
                                    href="mailto:support@soldt.co.za"
                                    class="text-sm text-primary hover:underline"
                                    >support@soldt.co.za</a
                                >
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted text-primary"
                            >
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    /><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    /></svg
                                >
                            </div>
                            <div>
                                <p class="text-sm font-medium text-near-black">
                                    Office
                                </p>
                                <p class="text-sm text-zinc-500">
                                    Johannesburg, South Africa
                                </p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted text-primary"
                            >
                                <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    ><path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                                    /></svg
                                >
                            </div>
                            <div>
                                <p class="text-sm font-medium text-near-black">
                                    WhatsApp
                                </p>
                                <a
                                    href="https://wa.me/27600000000"
                                    class="text-sm text-primary hover:underline"
                                    >+27 60 000 0000</a
                                >
                            </div>
                        </li>
                    </ul>
                </div>

                <div
                    class="rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-sm"
                >
                    <h3 class="text-lg font-bold">Need help right now?</h3>
                    <p class="mt-2 text-sm text-white/80">
                        Check out our help centre for instant answers to the
                        most common questions.
                    </p>
                    <a
                        href="https://help.soldt.co.za"
                        class="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/30"
                    >
                        Visit Help Centre →
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
