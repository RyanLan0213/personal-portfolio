import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import c1 from "../assets/projecticon/react.PNG";
import c2 from "../assets/projecticon/AngularDB.PNG";
import c3 from "../assets/projecticon/flappybird.jpg";
import c4 from "../assets/projecticon/eyedisease.jpg";
import c5 from "../assets/projecticon/pacman.jpg";
import c6 from "../assets/projecticon/locationshare.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Website",
      description: "A personal portfolio design => React",
      imgUrl: c1,
      
    },
    {
      title: "Game Search Database",
      description: "A database for search games => Angular",
      imgUrl: c2,
    },
    {
      title: "Flappy Bird",
      description: "Flappy bird game => C# in Unity",
      imgUrl: c3,
    },
    {
      title: "Eye Disease Dectector",
      description: "Research Project for detecting early eye disease =>Python, JavaScript",
      imgUrl: c4,
    },
    {
      title: "PacMan",
      description: "Well known PacMan game with advanced feature =>Java, GUI Design",
      imgUrl: c5,
    },
    {
      title: "Speed Warning",
      description: "Android application warns you for overspeeding with location updates on emergency => Java,Kotlin,",
      imgUrl: c6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects includes three independent projects varies in software development, web development and game development</p>
                <p>Group project includes android studio mobile application development, machine learning algorithm development, and game development</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
