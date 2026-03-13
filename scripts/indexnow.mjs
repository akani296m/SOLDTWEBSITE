import { readdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * IndexNow submission script for SOLDT
 *
 * Pings Bing (and other search engines) via the IndexNow API whenever
 * content is deployed, so the index is refreshed promptly.
 *
 * Run after deploy:   node scripts/indexnow.mjs
 * Or add to package.json:  "postdeploy": "node scripts/indexnow.mjs"
 *
 * The key file must be hosted at:
 *   https://www.soldt.co.za/7b55f0976a8346729af856206c035cf2.txt
 *   (It already is — in the /static directory)
 */

const KEY = '7b55f0976a8346729af856206c035cf2';
const HOST = 'www.soldt.co.za';
const BLOG_POSTS_DIR = join(process.cwd(), 'src/routes/blog/_posts');
const blogSlugs = readdirSync(BLOG_POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));

const URLS = [
    `https://${HOST}/`,
    `https://${HOST}/about`,
    `https://${HOST}/pricing`,
    `https://${HOST}/faq`,
    `https://${HOST}/soldt-suite`,
    `https://${HOST}/domains`,
    `https://${HOST}/migrate`,
    `https://${HOST}/contact`,
    `https://${HOST}/privacy`,
    `https://${HOST}/terms`,
    `https://${HOST}/blog`,
    `https://${HOST}/sitemap.xml`,
    ...blogSlugs.map((slug) => `https://${HOST}/blog/${slug}`),
];

async function submitIndexNow() {
    const body = {
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: URLS,
    };

    console.log(`Submitting ${URLS.length} URLs to IndexNow...`);

    const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
    });

    if (res.ok || res.status === 202) {
        console.log(`✅ IndexNow submission accepted (status ${res.status})`);
    } else {
        const text = await res.text();
        console.error(`❌ IndexNow submission failed (status ${res.status}): ${text}`);
        process.exit(1);
    }
}

submitIndexNow();
