import { GlobalStyles } from '../src/components/styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'primary',
    values: [{ name: 'primary', value: '#0e2431' }],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [GlobalStyles]
