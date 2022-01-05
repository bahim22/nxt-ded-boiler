
# Next frame info

## Routing

>(index routes, nexted routes) linking between pages
>linking to dynamic paths
> injecting the router with `useRouter` or withRouter

The router will automatically route files named index to the root of the directory.

pages/index.js → /
pages/blog/index.js → /blog

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

pages/blog/[slug].js → /blog/:slug (/blog/hello-world)
pages/[username]/settings.js → /:username/settings (/foo/settings)
pages/post/[...all].js → /post/* (/post/2020/id/title)

```jsx
import Link from 'next/link'

function Home() {
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
}

export default Home
```
