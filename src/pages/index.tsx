import Head from "next/head"
import { Content, HomeContainer } from "../../styles/pages/home"

export default function App() {
  return (
    <>
      <Head>
        <title>Zenky</title>
        <meta content='Meu site pessoal contendo informações, projetos, contatos.' name="description" />
        <meta content='Meu site pessoal contendo informações, projetos, contatos.' property="og:description" />
      </Head>

      <HomeContainer>
        <Content>
          <h1>Zenky</h1>
          <p>
            Desenvolvedor Front-end na <a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord</a>
            <span>Codando ideias e compartilhando conhecimento.</span>
          </p>
        </Content>
      </HomeContainer>
    </>
  )
}
