import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { defaultTheme } from '../../styles/defaultTheme'
import { GlobalStyle } from '../../styles/global'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}