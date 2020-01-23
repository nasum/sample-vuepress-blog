module.exports = {
  title: "Sample VuePress Blog",
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "Index",
            dirname: "_posts",
            path: "/"
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag"],
            path: "/tag/",
            layout: "Tag",
            frontmatter: { title: "Tag" },
            itemlayout: "Tag",
            pagination: {
              perPagePosts: 10
            }
          }
        ]
      }
    ]
  ]
};
