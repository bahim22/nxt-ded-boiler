
# Search engline optimization

`Benefits`

1. Qualitative – Increased chance that visitors turn into customers
2. Trustable – Higher confidence in your brand or mission.
3. Low-Cost – Aside from the time/ effort spent, having good SEO practices that result in higher search engine ranking is free

`Main concepts`

The3 concepts in process of optimizing a website

1. Technical – Optimize your website for crawling and web performance
2. Creation – Create a content strategy to target specific keywords
3. Popularity – Boost your site's presence online so search engines know you are a trusted source. > This is done through the use of `backlinks` – third-party sites that link back to your site.

 ```bash
 npm i next-seo
 ```

> Create header.js
    - Set proper value of `title`, `desc`, `ogImgRelativePath`, `siteURL`, etc.
    - create `favicon` and put inside public folder
    - import header file to all web pages that need meta targets

```js
    import Header from "@/components/header";

export default function Home(): JSX.Element {
  return (
    <> <Header /> ...rest of code
    </>
  );}
```

## dynamic sitemap
