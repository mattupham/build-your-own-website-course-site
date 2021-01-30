import React from "react";
import styled from "styled-components";
import Paragraph from "../Shared/Paragraph";
import Project from "./Project";
import Flex from "../Shared/Flex";

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: ${(props) => props.theme.colors.darkGrey};
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 5%;
  padding-left: 5%;
  color: white;
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 40px;
  width: auto;
  font-family: "Poppins", sans-serif;
`;

const TextContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
  max-width: 1020px;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const Banner = () => (
  <Container>
    <Title>Projects</Title>
    <Paragraph style={{ marginBottom: "50px" }}>
      Projects I've been working on lately
    </Paragraph>
    <TextContainer>
      <Project
        src={"./project1.png"}
        alt="Personal Website"
        title="Personal Website"
        description={[
          "TypeScript, React, Next.js, NodeJS",
          <br />,
          <br />,
          "My Personal Website, which includes information about who I am, what mysocial media accounts are, and subscribe to my monthly newsletter!",
        ]}
      />
      <Project
        src={"./project2.png"}
        alt="Discord Bot"
        title="Discord Bot"
        description={[
          "TypeScript, NodeJS, Discord.js",
          <br />,
          <br />,
          "My Discord community bot, which onboards people into the community, promps them to introduce themselves, and provides commands for staff",
        ]}
      />
      <Project
        src={"./project3.png"}
        alt="My Links Site"
        title="My Links Site"
        description={[
          "TypeScript, NodeJS, Discord.js",
          <br />,
          <br />,
          "My custom link site, where people can click through to any of my social media sites. They can also subscribe to my newsletter!",
        ]}
      />
    </TextContainer>
  </Container>
);

export default Banner;
