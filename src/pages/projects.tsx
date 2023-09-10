import Head from "next/head"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectContainer, ProjectsWrapper } from "../../styles/pages/projects"
import book from '../assets/book.json'
import clock from '../assets/clock.json'
import eye from '../assets/eye.json'
import star from '../assets/star.json'

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Zenky</title>
                <meta content='Some of my favorite personal projects.' name="description" />
                <meta content='Some of my favorite personal projects.' property="og:description" />
            </Head>


            <ProjectContainer>
                <h1>Projects</h1>
                <p>Some of my favorite personal projects - from course projects where new features were implemented, to projects developed from scratch.</p>

                <ProjectsWrapper>
                    <ProjectCard
                        name="Pomo Pomodoro"
                        description="Pomodoro with lofi radio and some configurations"
                        url="https://www.pomopomodoro.com"
                        icon={clock}
                    />

                    <ProjectCard
                        name="Todo List"
                        description="Application to manage your tasks"
                        url="https://www.todolist.bzenky.dev"
                        icon={book}
                    />

                    <ProjectCard
                        name="Yotei Theme"
                        description="VS Code Theme inspired by a sunset"
                        url="https://marketplace.visualstudio.com/items?itemName=Zenky.yotei"
                        icon={eye}
                    />

                    <ProjectCard
                        name="Pokedex"
                        description="Simple Pokédex with the first pokémon generation"
                        url="https://www.pokedex.bzenky.dev/"
                        icon={star}
                    />
                </ProjectsWrapper>
            </ProjectContainer>
        </>
    )
}