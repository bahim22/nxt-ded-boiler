
# Next frame info

The router will automatically route files named index to the root of the directory.

pages/index.js → /
pages/blog/index.js → /blog

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

pages/blog/[slug].js → /blog/:slug (/blog/hello-world)
pages/[username]/settings.js → /:username/settings (/foo/settings)
pages/post/[...all].js → /post/* (/post/2020/id/title)
