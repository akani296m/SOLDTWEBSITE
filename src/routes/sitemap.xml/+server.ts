import { getAllPosts } from '$lib/utils/blog';

export const prerender = true;

const site = 'https://www.soldt.co.za';

// Update this date whenever the site is redeployed with meaningful content changes
const SITE_UPDATED = '2026-03-11';

const pages: { path: string; priority: string; changefreq: string }[] = [
    { path: '',              priority: '1.0', changefreq: 'weekly'  },
    { path: '/about',        priority: '0.8', changefreq: 'monthly' },
    { path: '/pricing',      priority: '0.9', changefreq: 'weekly'  },
    { path: '/faq',          priority: '0.9', changefreq: 'weekly'  },
    { path: '/soldt-suite',  priority: '0.8', changefreq: 'monthly' },
    { path: '/domains',      priority: '0.8', changefreq: 'monthly' },
    { path: '/contact',      priority: '0.6', changefreq: 'monthly' },
    { path: '/privacy',      priority: '0.3', changefreq: 'yearly'  },
    { path: '/blog',         priority: '0.7', changefreq: 'daily'   },
];

export async function GET() {
    const posts = await getAllPosts();

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
        .map(
            ({ path, priority, changefreq }) => `    <url>
        <loc>${site}${path}</loc>
        <lastmod>${SITE_UPDATED}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`
        )
        .join('\n')}
${posts
        .map(
            (post) => `    <url>
        <loc>${site}/blog/${post.slug}</loc>
        <lastmod>${post.date ?? SITE_UPDATED}</lastmod>
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
