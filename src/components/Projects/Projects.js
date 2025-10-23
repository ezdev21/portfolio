import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ecommerce from "../../Assets/Projects/ecommerce_optimized.png";
import video_sharing from "../../Assets/Projects/video-sharing_optimized.png";
import pool from "../../Assets/Projects/pool_optimized.png";
import madot from "../../Assets/Projects/madot_optimized.png";
import tiruhakim from "../../Assets/Projects/tiruhakim_optimized.png";
import union from "../../Assets/Projects/union_optimized.png";
import jestra from "../../Assets/Projects/jestra_optimized.png";
import social_media from "../../Assets/Projects/social-media_optimized.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", fontSize: '21px', fontWeight: '100' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tiruhakim}
              isBlog={false}
              title="Hospital Management System"
              description="TiruHakim is an online database of patient reviews for doctors and facilities in Ethiopia. we give you the tools you need to find the best provider for you!"  
              demoLink="https://tiruhakim.com"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pool}
              isBlog={false}
              title="Pool Transport"
              description="Pool technology solution PLC is a technology-based company that works in providing cost effective and technologically advanced platforms to the society. Which works in providing solution towards solving problems. Among these technology-based systems; POOL technology offers transportation services to people, organizations, and institutions."
              demoLink="https://pool.et"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jestra}
              isBlog={false}
              title="Logistics System"
              description="Logistics management ensures a company has sufficient resources to fulfill client needs through the manufacturing of products, and that the products can be delivered accurately and in good condition.it can have a positive impact on a business’s bottom line and the customer’s experience by reducing the costs related to shipping, storage, and spoilage and ensuring customers receive their products as expected"
              demoLink="https://jestra.ecs.et"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce wesbsite and application"
              description="ecommerce app project made in laravel rest and graphql api, Vuejs and tailwindcss with docker running environment tested with phpunit 10. get latest products,full search feature included,watch later products and add to cart "
              ghLink="https://github.com/ezdev21/ecommerce"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={madot}
              isBlog={false}
              title="Madot Technology Solutions"
              description="The company's mission is to promote problem-solving within our organization; produce, deliver, and support technology to make it more accessible to our customers. Increasing the capital of the organization, creating job opportunities, playing a significant role in the economic development of our country, and bringing the wealth of stakeholders and employees to a better standard of living."
              demoLink="https://madottechnology.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video_sharing}
              isBlog={false}
              title="Video sharing webiste and application"
              description="video sharing website made with laravel,Vuejs and tailwindcss project with docker sail running environment tested with phpunit. 10 get latest videos, create channel, upload videos, like and comment on videos, create playlist, subscribe channels, get notifications.!! "
              ghLink="https://github.com/ezdev21/video-sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={union}
              isBlog={false}
              title="Union Academy website"
              description="Union academy dedicated to holistic education, fostering innovation, nurturing talents, and cultivating a vibrant learning community for future leaders."  
              demoLink="https://union.wogenholdings.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social_media}
              isBlog={false}
              title="Social Media Platform"
              description="social media platform project built in laravel 10 websocket(pusher) vue and tailwindcss.realtime posts comments and chats,follow friends,create post,chat system integrated,friend requests and suggestions.videos Resources"
              ghLink="https://github.com/ezdev21/social-media"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
