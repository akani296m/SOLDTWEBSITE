import { getAllPosts } from '$lib/utils/blog';
import { SITE_URL } from '$lib/constants/site';
import { statSync } from 'node:fs';
import { resolve } from 'node:path';

export const prerender = true;

const pages: { path: string; priority: string; changefreq: string; source: string }[] = [
    { path: '',              priority: '1.0', changefreq: 'weekly',  source: 'src/routes/+page.svelte' },
    { path: '/about',        priority: '0.8', changefreq: 'monthly', source: 'src/routes/about/+page.svelte' },
    { path: '/pricing',      priority: '0.9', changefreq: 'weekly',  source: 'src/routes/pricing/+page.svelte' },
    { path: '/faq',          priority: '0.9', changefreq: 'weekly',  source: 'src/routes/faq/+page.svelte' },
    { path: '/soldt-suite',  priority: '0.8', changefreq: 'monthly', source: 'src/routes/soldt-suite/+page.svelte' },
    { path: '/domains',      priority: '0.8', changefreq: 'monthly', source: 'src/routes/domains/+page.svelte' },
    { path: '/migrate',      priority: '0.7', changefreq: 'monthly', source: 'src/routes/migrate/+page.svelte' },
    { path: '/contact',      priority: '0.6', changefreq: 'monthly', source: 'src/routes/contact/+page.svelte' },
    { path: '/privacy',      priority: '0.3', changefreq: 'yearly',  source: 'src/routes/privacy/+page.svelte' },
    { path: '/terms',        priority: '0.3', changefreq: 'yearly',  source: 'src/routes/terms/+page.svelte' },
    { path: '/blog',         priority: '0.7', changefreq: 'daily',   source: 'src/routes/blog/+page.svelte' },
];

function lastModifiedDate(source: string): string {
    return statSync(resolve(source)).mtime.toISOString().split('T')[0];
}

export async function GET() {
    const posts = await getAllPosts();

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
        .map(
            ({ path, priority, changefreq, source }) => `    <url>
        <loc>${SITE_URL}${path}</loc>
        <lastmod>${lastModifiedDate(source)}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`
        )
        .join('\n')}
${posts
        .map(
            (post) => `    <url>
        <loc>${SITE_URL}/blog/${post.slug}</loc>
        <lastmod>${post.date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`
        )
        .join('\n')}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
