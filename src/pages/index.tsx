import Head from "next/head"
import { Content, HomeContainer } from "../../styles/pages/home"

export default function App() {
  return (
    <>
      <Head>
        <title>Zenky</title>
        <meta content='My personal website with informations, projects and contacts.' name="description" />
        <meta content='My personal website with informations, projects and contacts.' property="og:description" />
      </Head>

      <HomeContainer>
        <Content>
          <h1>Zenky</h1>
          <p>
            Front-end Developer
            <span>Coding ideas and sharing knowledge.</span>
          </p>
        </Content>
      </HomeContainer>
    </>
  )
}
