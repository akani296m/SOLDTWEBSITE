<script lang="ts">
    import type { Snippet } from "svelte";
    import type {
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";

    interface Props {
        variant?: "primary" | "secondary" | "ghost";
        size?: "sm" | "md" | "lg";
        href?: string;
        children: Snippet;
        class?: string;
    }

    let {
        variant = "primary",
        size = "md",
        href,
        children,
        class: className = "",
        ...rest
    }: Props = $props();

    const baseClasses =
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2";

    const variants: Record<string, string> = {
        primary:
            "bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md",
        secondary:
            "bg-white text-near-black border border-zinc-200 hover:border-primary hover:text-primary shadow-sm",
        ghost: "text-zinc-600 hover:text-primary hover:bg-zinc-100",
    };

    const sizes: Record<string, string> = {
        sm: "text-sm px-4 py-2",
        md: "text-sm px-6 py-3",
        lg: "text-base px-8 py-4",
    };

    const classes = $derived(
        `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`,
    );
</script>

{#if href}
    <a {href} class={classes} {...rest}>
        {@render children()}
    </a>
{:else}
    <button class={classes} {...rest}>
        {@render children()}
    </button>
{/if}
