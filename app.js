export default {
  name: 'route-resolver',
  
  webpack: {
    libraryTarget: 'umd',
  },
  
  babel: {
    plugins: [
      'transform-class-properties'
    ],
    presets: [
      'stage-0',
      ['env', {
        modules: false
      }],
    ],
    env: {
      production: {
        presets: [ 
          ['babili', {}],
        ]
      },
      test: {
        plugins: [
          'istanbul'
        ],
        sourceMaps: 'inline'
      }
    }
  },
  
}
