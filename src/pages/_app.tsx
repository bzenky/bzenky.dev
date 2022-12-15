import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { defaultTheme } from '../../styles/defaultTheme'
import { GlobalStyle } from '../../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}