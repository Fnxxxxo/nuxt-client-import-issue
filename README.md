# nuxt-client-import-issue
Solved by add a Webpack configuration.

<pre>
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (process.env.NODE_ENV === 'debug') {
        config.devtools = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
      }
      // Webpack resolve symlinks as relative path instead of node_modules path. 
      config.resolve.symlinks = false
    }
  }
</pre>
