import { getAllPosts } from '$lib/utils/blog';

export const prerender = true;

const site = 'https://www.soldt.co.za';

export async function GET() {
    const posts = await getAllPosts();

    const pages = [
        '',
        '/about',
        '/pricing',
        '/contact',
        '/privacy',
        '/blog'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
>
${pages
            .map(
                (page) => `    <url>
        <loc>${site}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>`
            )
            .join('\n')}
${posts
            .map(
                (post) => `    <url>
        <loc>${site}/blog/${post.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
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
