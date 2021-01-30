import React from "react";
import styled from "styled-components";
import Paragraph from "../Shared/Paragraph";
import Bold from "../Shared/Bold";

const Flex = styled.div`
  display: flex;
`;

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: ${(props) => props.theme.colors.black};
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 20%;
  padding-left: 20%;
  @media screen and (max-width: 768px) {
    padding-right: 5%;
    padding-left: 5%;
  }
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
    <TextContainer>
      <Title>About Me</Title>
      <Paragraph>
        I'm a software engineer with a passion for learning, teaching, and
        creating content on social media. My favorite technologies right now are{" "}
        <Bold>TypeScript, React, HTML, CSS, Python, and Flask</Bold>. I love
        coding because it's both technical, and creative!
      </Paragraph>
    </TextContainer>
  </Container>
);

export default Banner;
