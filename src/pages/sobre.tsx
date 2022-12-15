import Image from "next/image"
import {
    AboutContainer,
    BioWrapper,
    Main,
    PhotoBioWrapper
} from "../../styles/pages/about"
import profilePhoto from '../assets/zenky.png'

export default function Sobre() {
    return (
        <AboutContainer>
            <h1>Sobre</h1>
            <Main>
                <PhotoBioWrapper>
                    <Image src={profilePhoto} alt="Zenky's Profile Photo" />

                    <BioWrapper>
                        <p>Olá, eu sou Bruno Zenky, um entusiasta de finanças, exatas e tecnologia.</p>
                        <p>Inicialmente com formação em Ciências Contábeis e com experiência na área de RH, no meio da pandemia despertou um desejo antigo de trabalhar/estudar tecnologia.</p>
                        <p>Após muito estudo tive a oportunidade de fazer a transição de carreira como Desenvolvedor Front-end, e desde então os desafios e estudos nunca pararam.</p>
                    </BioWrapper>
                </PhotoBioWrapper>

                <BioWrapper>
                    <p>Sou desenvolvedor com maior foco em <em>JavaScript - React/React Native/Next</em>. Atualmente trabalho como <strong>desenvolvedor front-end</strong> na <strong>Magazord</strong>.</p>
                    <p>Geralmente estou codando algum projeto pessoal, para acompanhar, de uma olhada no github ou me mande uma mensagem.</p>
                </BioWrapper>
            </Main>
        </AboutContainer>
    )
}