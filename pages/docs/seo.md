
# Search engline optimization

`Benefits`

1. Qualitative – Increased chance that visitors turn into customers
2. Trustable – Higher confidence in your brand or mission.
3. Low-Cost – Aside from the time/ effort spent, having good SEO practices that result in higher search engine ranking is free

`Main concepts`

The 3 concepts used when optimizing a website

1. Technical – Optimize your website for crawling and web performance
2. Creation – Create a content strategy to target specific keywords
3. Popularity – Boost your site's presence online so search engines know you are a trusted source. > This is done through the use of `backlinks` – third-party sites that link back to your site.

 ```bash
 npm i next-seo
 ```

> Create header.js
    - Set proper value of `title`, `desc`, `ogImgRelativePath`, `siteURL`, etc.
    - create `favicon` and put inside public folder
    - Create an OG Image (preview image) of size 1200x630, name it og.png and put it in public/ folder.
    - import header file to all web pages that need meta targets

```js
import Header from "@/components/header";

export default function Home(): JSX.Element {
  return (
    <> <Header /> ...rest of code
    </>
  );}
```

## Next Script

`Script component`  enables you to put 3rd-party script in their app and optimizing the loading strategy.

1. `beforeInteractive`: Load before the page is interactive
   1. used for any critical scripts that need to be fetched/executed before the page is interactive (ex:bot detectors, cookie consent mngr)
2. `afterInteractive`: (default): Load immediately after the page becomes interactive
   1. run client side after next hydrates page (tag mngr, analytics)
3. `lazyOnload`: Load during idle time and late after all resources arefetched (chat support plugins, social media widgets)
4. `Inline scripts`: only used w/ after interactive and lazyOnLoad strategies; must have an 'id' tag
5. `onLoad` property allows you to execute code after it has loaded
   1. `onError` property: enables you to catch when a script fails to load and handle the errors
 will automatically forward it to the final, optimized script element that is outputted to the page.

>
```js
import Script from 'next/script'
<Script
src="www.example.comt/en_US/sdk.js"
  strategy="lazyOnload" />
<Script
src="jsdelivr.nete/npm/cookieconsent@3/build/cookieconsent.min.js"
  strategy="beforeInteractive" />
<Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
'+l:'';j.async=true;j.src=
    'ht://ww.ggletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-XXXXXX');
  `,}} />
<Script
src="et/en_US/sdk.js"
  strategy="lazyOnload" />
<Script
  id="show-banner"
  dangerouslySetInnerHTML={{
(docGetEle).classList.remove('hidden')`,
  }} /> //used for inline scripts/8*/
```

___

```js
import { useState } from 'react'
import Script from 'next/script'

export default function Home() {
  const [stripe, setStripe] = useState(null)
  return (
    <> //onLoad property
      <Script
        id="stripe-js"
        src=".com/v3/"
        onLoad={() => {
          setStripe({ stripe: window.Stripe('pk_test_12345') })
        }}
      />
    </>
  )};
  export default function Home() {
  return (
    <> //onError property
      <Script
        id="will-fail"
        src="ing.js"
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />
    </>
  )}; //add'l attributes ex.
  export default function Home() {
  return (
  <>
  <Script
    src="s.js"
    id="analytics"
    nonce="XUENAJFW"
    data-test="analytics"
  />
  </>
  )}
```

___
