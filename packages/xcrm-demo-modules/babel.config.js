module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: 'node >= 10 and iOS >= 6 and not ie <= 8'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  'plugins': [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]
}
