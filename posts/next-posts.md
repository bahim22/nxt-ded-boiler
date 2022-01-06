
# Next Pages info

## Api

___
[API routes](http://localhost:3000/api/hello).
> Edit endpoint in `pages/api/hello.js`.
> `pages/api` Dir. is mapped to `/api/*`, where the files are viewed as [API routes]
___

## Routing

>`Index routes` & `nested routes`
> Linking between pages and to `dynamic paths`
> inject the router w/ `useRouter`(_prefferred_ method) or ~withRouter~

A.  Files with name index get auto routed by `router` to root of Dir '/'
___
pages/index.js → /
pages/blog/index.js → /blog
___
B. Use bracket syntax to make dynamic segment (e.g. url slugs, pretty urls, etc.)
> enables ability to match named parameters
___
pages/blog/[slug].js → /blog/:slug (/blog/hello-world)
pages/[username]/settings.js → /:username/settings (/foo/settings)
pages/post/[...all].js → /post/* (/post/2020/id/title)
___

Ex._post/[pid].js Post func_

```jsx
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query

    return
     (<p> Post: { pid } </p>) };
export default Post
```

> This allows /post/1, /post/abc,to match w/ pages/post/[pid].js.Then the path param is sent as a query param to the page, and also merged w/ the other query param.
___

```jsx
import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
};

// Option for Link ex.2; adding brackets to a page ([param]) to create a dynamic route 
// (e.g. url slugs, pretty urls, etc)

import Link from 'next/link'

export default Home = () => {
  return (
    <ul>
      <li>
        <Link href="/post/abc">
          <a>Go to pages/post/[pid].js</a>
        </Link>
      </li>
      <li> <Link href="/post/abc?foo=bar"> <a>Also goes to pages/post/[pid].js</a>
        </Link>
      </li>
      <li> <Link href="/post/abc/a-comment"> <a>Go to pages/post/[pid]/[comment].js</a>
        </Link>
      </li>
    </ul>
  )};
```

___

`Catching all routes`
Dynamic routes can be extended to catch all paths by + three dots (...) inside  brackets. 
>Ex. pages/post/[...slug].js (or use [...param]) matches /post/a, but also /post/a/b, /post/a/b/c
