// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Blog',
        baseDir: './content/blog',
        pathPrefix: '/blog',
        resolveAbsolutePaths: true,
        template: './src/templates/BlogDetail.vue',

        refs: {
          // Example 2: Create a Tag collection by reference `tags` field.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
        plugins: [
          [
            'gridsome-plugin-remark-shiki',
            {
              theme: 'Material-Theme-Palenight',
              skipInline: true,
            },
          ],
        ],
      },
    },
  ],
};
