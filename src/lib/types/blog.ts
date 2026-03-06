export interface BlogPost {
    title: string;
    slug: string;
    description: string;
    date: string;
    author: string;
    coverImage?: string;
    tags: string[];
    published: boolean;
}

export interface BlogPostModule {
    metadata: BlogPost;
    default: ConstructorOfATypedSvelteComponent;
}
