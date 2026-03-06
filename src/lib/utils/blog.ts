import type { BlogPost } from '$lib/types';

/** Fetch and sort all published blog posts from .md files */
export async function getAllPosts(): Promise<BlogPost[]> {
    const modules = import.meta.glob('/src/routes/blog/_posts/*.md', { eager: true });

    const posts: BlogPost[] = [];

    for (const [path, module] of Object.entries(modules)) {
        const mod = module as { metadata: BlogPost };
        const slug = path.split('/').pop()?.replace('.md', '') ?? '';

        if (mod.metadata?.published !== false) {
            posts.push({ ...mod.metadata, slug });
        }
    }

    // Sort by date descending
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
}

/** Format a date string for display */
export function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
