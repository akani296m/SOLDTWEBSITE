<script lang="ts">
    import type { Component } from "svelte";

    interface Props {
        data: {
            content: Component;
            meta: {
                title: string;
                description: string;
                date: string;
                author: string;
                tags: string[];
                coverImage?: string;
            };
        };
    }

    let { data }: Props = $props();
</script>

<data.content />
