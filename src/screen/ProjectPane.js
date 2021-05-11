import ProjectCard from './ProjectCard';
import { Card, Header } from 'semantic-ui-react';
import { PaneContainer } from '../component/PaneContainer';
import { projects } from '../data/projects';

const ProjectPane = () => {
  return (
    <PaneContainer id='projects'>
      <Header as='h2'>Projects</Header>
      <Card.Group>
        {projects.map((project) => (
          <ProjectCard {...project} key={`project-card-${project.key}`} />
        ))}
      </Card.Group>
    </PaneContainer>
  );
};

export default ProjectPane;
