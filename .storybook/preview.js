import '../src/assets/scss/main.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark-green',
    values: [
      {
        name: 'dark-green',
        value: '#0f3433',
      },
      {
        name: 'light-green',
        value: '#abd1c6',
      },
    ],
  },
}
