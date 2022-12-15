import { useRef } from 'react'
import { LottieRefCurrentProps } from "lottie-react"
import { IconAnimation, ProjectCardContainer, TitleWrapper } from "./styles"

interface ProjectCardProps {
    name: string
    description: string
    url: string
    icon?: any
}

export function ProjectCard({ icon, name, description, url }: ProjectCardProps) {
    const iconRef = useRef<LottieRefCurrentProps | null>(null)

    return (
        <ProjectCardContainer
            href={url}
            target="_blank"
            onMouseEnter={() => iconRef.current?.play()}
            onMouseLeave={() => iconRef.current?.stop()}
            onTouchStart={() => iconRef.current?.play()}
            onTouchEnd={() => iconRef.current?.stop()}
        >
            <TitleWrapper>
                {icon &&
                    <IconAnimation
                        lottieRef={iconRef}
                        animationData={icon}
                        loop={false}
                        autoplay={false}
                    />
                }
                <h3>{name}</h3>
            </TitleWrapper>
            <p>{description}</p>
        </ProjectCardContainer>
    )
}