import { ProjectCard } from "../components/ProjectCard"
import { ProjectContainer, ProjectsWrapper } from "../../styles/pages/projects"
import book from '../assets/book.json'
import clock from '../assets/clock.json'
import eye from '../assets/eye.json'
import star from '../assets/star.json'

export default function Projetos() {
    return (
        <ProjectContainer>
            <h1>Projetos</h1>
            <p>Entre desafios de cursos e projetos próprios, estou sempre estudando e realizando algum projeto, segue alguns dos projetos.</p>

            <ProjectsWrapper>
                <ProjectCard
                    name="Pomo Pomodoro"
                    description="Pomodoro com rádio lofi"
                    url="https://www.pomopomodoro.tech"
                    icon={clock}
                />

                <ProjectCard
                    name="Todo List"
                    description="Aplicação para gerenciar suas atividades"
                    url="https://www.todolist.bzenky.dev"
                    icon={book}
                />

                <ProjectCard
                    name="Yotei Theme"
                    description="Tema para VS Code inspirado em um entardecer"
                    url="https://marketplace.visualstudio.com/items?itemName=Zenky.yotei"
                    icon={eye}
                />

                <ProjectCard
                    name="Pokedex"
                    description="Uma pokedex contendo a primeira geração de pokemons"
                    url="https://www.pokedex.bzenky.dev/"
                    icon={star}
                />
            </ProjectsWrapper>
        </ProjectContainer>
    )
}