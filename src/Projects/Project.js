import styled from "styled-components";
import React from "react";
import Flex from "../Shared/Flex";
import Paragraph from "../Shared/Paragraph";

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 40px;
  width: auto;
  font-family: "Poppins", sans-serif;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  cursor: pointer;
`;

const ProjectDescription = styled(Paragraph)`
  font-size: 22px;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ProjectTitle = styled(Title)`
  font-size: 48px;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Container = styled(Flex)`
  max-width: 1400px;
  width: 100%;
  margin-bottom: 40px;
  padding-top: 4.5vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ImageLink = styled.a``;

const TextContainer = styled(Flex)`
  margin-right: 30px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    max-width: 600px;
    align-items: center;
  }
  max-width: 33.33%;
  flex-direction: column;
  justify-content: center;
`;

const Project = (props) => (
  <Container>
    <TextContainer>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectDescription>{props.description}</ProjectDescription>
    </TextContainer>
    <ImageContainer>
      <ImageLink>
        <Image src={props.src} alt={props.alt} />
      </ImageLink>
    </ImageContainer>
  </Container>
);

export default Project;
