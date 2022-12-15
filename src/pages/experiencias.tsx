import { CareerItemWrapper, ExperienciesContainer } from "../../styles/pages/experiences";

export default function Experiencias() {
    return (
        <ExperienciesContainer>
            <h1>Experiências</h1>

            <CareerItemWrapper>
                <h3>Desenvolvedor Front-end</h3>
                <div>
                    <a href="https://www.magazord.com.br" target="_blank" rel="noreferrer">Magazord</a>
                    <span> · Rio do Sul - SC</span>
                </div>
                <span>nov 2021 - momento</span>
                <p>Participo de OKR´s de desenvolvimento de features novas, desenvolvo features e atividades de suporte/correção.</p>
                <span>Stacks: React · JavaScript · SASS · Twig · JQuery</span>
            </CareerItemWrapper>

            <CareerItemWrapper>
                <h3>Desenvolvedor Front-end</h3>
                <div>
                    <a href="https://www.rotaseguros.com.br" target="_blank" rel="noreferrer">Rota Seguros</a>
                    <span> · Belo Horizonte - MG</span>
                </div>
                <span>ago 2021 - out 2021</span>
                <p>Atualizações nos sites, criação de landing pages, seções.</p>
                <span>Stacks: CSS · JavaScript · HTML</span>
            </CareerItemWrapper>
        </ExperienciesContainer>
    )
}