module.exports = {
  stories: ['../stories/**/*.stories.js',
            '../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-a11y/register'
  ]
};
