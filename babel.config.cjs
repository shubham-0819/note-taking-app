const test = process.env.NODE_ENV === 'test';

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [...(test ? ['babel-plugin-transform-import-meta'] : [])],
};
