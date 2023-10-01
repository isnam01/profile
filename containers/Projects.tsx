import React from 'react';
import { projects } from '../portfolio';
import { Container, Row } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  return (
    projects && (
      <section className="section section-lg pt-2">
        <Container>
          <div className="d-flex py-4 align-items-baseline">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {projects.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Projects;
