export const mainNav = [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
] as const;

export const footerNav = {
    product: [
        { label: 'Features', href: '/#features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Domains', href: '/domains' },
        { label: 'Integrations', href: '/#integrations' },
        { label: 'Roadmap', href: '/about#roadmap' }
    ],
    company: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/about#careers' }
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
    ]
} as const;
