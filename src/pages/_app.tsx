import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { defaultTheme } from '../../styles/defaultTheme'
import { GlobalStyle } from '../../styles/global'
import { Layout } from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}