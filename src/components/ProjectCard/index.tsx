import { ProjectCardContainer } from "./styles"

interface ProjectCardProps {
    name: string
    description: string
    url: string
}

export function ProjectCard({ name, description, url }: ProjectCardProps) {
    return (
        <ProjectCardContainer href={url} target="_blank">
            <h3>{name}</h3>
            <p>{description}</p>
        </ProjectCardContainer>
    )
}