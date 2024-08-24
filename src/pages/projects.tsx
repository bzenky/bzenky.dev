import Head from "next/head";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectContainer, ProjectsWrapper } from "../../styles/pages/projects";
import { projects } from "../utils/projects-list";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Zenky</title>
        <meta
          content="Some of my favorite personal projects."
          name="description"
        />
        <meta
          content="Some of my favorite personal projects."
          property="og:description"
        />
      </Head>

      <ProjectContainer>
        <h1>Projects</h1>
        <p>
          Some of my favorite personal projects, from course projects where new
          features and enhancements were implemented, to projects developed from
          the scratch.
        </p>

        <ProjectsWrapper>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                url={project.url}
                icon={project.icon}
              />
            );
          })}
        </ProjectsWrapper>
      </ProjectContainer>
    </>
  );
}
