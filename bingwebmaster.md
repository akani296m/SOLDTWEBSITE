Bing Webmaster Guidelines
=========================

These guidelines describe how Bing discovers, crawls, indexes, evaluates, and surfaces content across Bing search experiences, Copilot, and grounding API results.  

**Following these guidelines helps ensure your URLs are eligible for:** 

*   Indexing and ranking 
    
*   Grounding results and citations  
    
*   Sustained visibility and qualified traffic 
    

Failure to follow these guidelines may result in reduced visibility in Bing search, reduced eligibility for grounding experiences, or delisting from the Bing index. 

1\. SEO Fundamentals Still Apply to Grounding and AI Experiences
================================================================

Bing and Copilot search experiences rely on the same core crawling, indexing, and ranking foundation as traditional search. SEO best practices that support discovery, indexing accuracy, and content clarity also support eligibility for AI-generated experiences, grounding results, and citations.  Practices that support:  

*   Crawl efficiency
    
*   Indexing accuracy 
    
*   URL consolidation 
    
*   Content clarity and structure 
    
*   Authority and trust signals  
    

Also support: 

*   Eligibility for grounding results 
    
*   Long‑term visibility across Bing, Copilot, and AI‑powered search experiences. 
    

Content that is discoverable, accurate, well-structured, and created for users performs best across all search experiences.  Bing relies on clear discovery and crawl signals to find, render, and index content accurately. Strong discovery practices help keep indexed content fresh, reliable, and eligible across Bing search and grounding experiences. Ensure Bing can reliably discover your URLs using: 

*   IndexNow URL submission
    
*   XML sitemaps 
    
*   Crawlable internal links 
    
*   External links from relevant websites 
    

Clear discovery signals improve crawl efficiency, indexing accuracy, and grounding eligibility. Use XML [sitemaps](https://www.bing.com/webmasters/help/Sitemaps-3b5cf6ed) to indicate which URLs matter and when content changes.Sitemaps should: 

*   List only canonical URLs 
    
*   Reflect current site structure 
    
*   Remove deleted or redirected URLs promptly 
    
*   Include freshness signals (such as lastmod) where applicable 
    

Proper sitemap usage helps Bing maintain accurate, up‑to‑date indexing and reliable grounding eligibility. Sitemaps do not guarantee visibility, but they significantly improve accuracy and freshness across Bing search experiences. Additionally, freshness signals like accurate lastmod values and HTTP validation headers such as ETags help Bing detect content changes more reliably. Use [IndexNow](https://www.bing.com/indexnow) to notify Bing when: 

*   URLs are added 
    
*   Content is updated 
    
*   URLs are removed 
    

Timely notifications help Bing refresh the index and reduce outdated or incorrect URL references in Copilot responses and grounding results. Avoid batch submissions when possible. Streaming submissions provide faster updates, reduce server load, and improve indexing accuracy.   Ensure each important URL is reachable through crawlable internal links. Links should:  

*   Use standard links 
    
*   Include relevant anchor text or image alt attributes 
    

Strong internal and external linking supports discovery, authority evaluation, and grounding eligibility.Avoid serving the same content across multiple URLs. 

*   Duplicate URLs dilute signals and reduce Bing’s confidence in selecting a URL for grounding results or citations. 
    
*   Use canonical URLs, parameter controls, and consistent URL structures to consolidate signals and improve grounding visibility.
    

When content moves:  

*   Use 301 redirects for permanent URL changes 
    
*   Use 302 redirects only for very short-term changes (less than 2 days) 
    
*   Use redirects instead of canonical tags 
    

Proper redirects preserve visibility, traffic, and grounding continuity. Content that cannot be reliably rendered may not be indexed or selected for grounding results. When content is permanently removed:  

*   Return a 404 status code 
    
*   Use Bing’s Content Removal tools when appropriate 
    
*   Update deleted or changed URLs via IndexNow  
    

Proper removal prevents outdated URLs from appearing in search or being referenced in grounding results.  

*   robots.txt controls crawl access, not indexing.  
    
*   Use NOINDEX when a URL should NOT appear in Bing search, Copilot experiences, or grounding API results.
    

Important display considerations: Important grounding considerations: 

*   Thin, ad heavy, or affiliate-only URLs may lose ranking eligibility and grounding visibility. 
    

*   *   Logical
        
        –
        =
        
        ###### heading hierarchy
        
    *   Semantic HTML elements 
        

Missing, duplicate, or overly short title tags and meta descriptions may reduce indexing reliability, ranking, and eligibility for grounding results and citations. 

*   Use Structured Data AccuratelyStructured data may support clearer grounding but does not guarantee visibility or grounding traffic. Markup must accurately reflect visible content. 
    

Ensure Content can be Verified IndependentlyURLs are more likely to be selected for grounding queries and citations when content stands on its own.  Ensure:  

*   Facts and definitions are explicit 
    
*   Key statements do not rely on implied content 
    
*   Important information is visible on the URL itself 
    

Define Entities Clearly and ConsistentlyUse clear and consistent naming for people, organizations, products, and locations.  

*   Avoid ambiguous references.  
    
*   Clear entity definition improves grounding visibility and citation accuracy.  
    

Focus Each URL on a Single TopicURLs focused on a primary topic are more likely to be selected for grounding results.  

*   Avoid mixing unrelated concepts on a single URL 
    
*   Align titles, heading, and content intent  
    

Surface Key information earlyPlace essential information near the top of the URL 

*   Avoid long introductions before addressing the main topic. 
    
*   Early clarity improves grounding visibility and reliability. 
    

Keep Content Accurate and Up to DateUpdate content when facts or guidance change. 

*   Use freshness signals appropriately 
    
*   Remove or revise outdated information to prevent incorrect information from surfacing.  
    
*   Notify IndexNow when content is added, updated, or deleted.  
    

20\. Preserve URL Stability Over Time Avoid unnecessary URL changes. When changes are required:  

*   Use proper redirects 
    
*   Preserve meaning and intent 
    

Stable URLs support long-term visibility and continuity.  21. Manage Crawl Efficiency and Reduce Crawl WasteBing allocates crawl capacity based on site health, efficiency, signal quality, and crawl value. Excessive crawl waste, duplication, or low‑value URLs can directly limit indexing, delay discovery, and reduce grounding visibility for important content. Excessive low-value URLs, duplication, or crawl waste can: 

*   Delay indexing of important content 
    
*   Reduce grounding visibility for priority URLs 
    

Best Practices: 

*   Eliminate duplicate or low-value URLs 
    
*   Use canonicalization consistently 
    
*   Block unnecessary crawl paths with robots.txt 
    
*   Keep site structure logical and accessible 
    

22\. Crawl Efficiency, Visibility, and Measuring Beyond ClicksContent may surface across Bing search experiences without a traditional click. Managing crawl efficiency and URL quality helps ensure important content remains indexed, retrievable, and visible as impressions, citations, or grounding references.

*   Content may appear as impressions, citations, or grounding references in Copilot responses. 
    
*   A decline in clicks does not always indicate a loss of visibility. 
    

Monitor: 

*   Impressions 
    
*   Indexing status 
    
*   Grounding and citation eligibility 
    

Search engine optimization (SEO) improves the technical quality, clarity, and accessibility of websites, helping Bing discover, understand, and evaluate content. SEO best practices support long‑term visibility across Bing, Copilot, and AI‑powered search experiences. Generative Engine Optimization (GEO) focuses on content eligibility for grounding and reference in AI responses. 

SEO does not guarantee rankings or traffic, and GEO does not guarantee grounding or citations in AI experiences. When taken to extremes, some tactics can be abused. The practices below represent manipulative, misleading, or low‑quality behavior.  

Sites that engage in these practices may experience reduced rankings, suppressed grounding visibility, loss of grounding eligibility, ignored structured data, or removal from the Bing index. Microsoft may take action against deceptive or abusive behavior. Site owners can contact support through Bing Webmaster Tools if action was taken in error, and users may report abuse using the [feedback](https://www.bing.com/webmasters/support) link on bing.com after performing a search.