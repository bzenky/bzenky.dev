import { ProjectContainer, ProjectsWrapper } from "../../styles/pages/projects"
import { ProjectCard } from "../components/ProjectCard"

export default function Projects() {
    return (
        <ProjectContainer>
            <h1>Projetos</h1>
            <p>Entre desafios de cursos e projetos próprios, estou sempre estudando e realizando algum projeto, segue alguns dos projetos.</p>

            <ProjectsWrapper>
                <ProjectCard
                    name="Pomo Pomodoro"
                    description="Pomodoro com rádio lofi"
                    url="https://www.pomopomodoro.tech"
                />

                <ProjectCard
                    name="Todo List"
                    description="Aplicação para gerenciar suas atividades"
                    url="https://www.todolist.bzenky.dev"
                />

                <ProjectCard
                    name="Yotei Theme"
                    description="Tema para VS Code inspirado em um entardecer"
                    url="https://marketplace.visualstudio.com/items?itemName=Zenky.yotei"
                />

                <ProjectCard
                    name="Pokedex"
                    description="Uma pokedex contendo a primeira geração dos pokemons"
                    url="https://www.pokedex.bzenky.dev/"
                />
            </ProjectsWrapper>
        </ProjectContainer>
    )
}