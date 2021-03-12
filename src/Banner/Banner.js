import React from "react";
import styled from "styled-components";
import Paragraph from "../Shared/Paragraph";

const Flex = styled.div`
  display: flex;
`;

const Container = styled(Flex)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkGrey};
  min-height: 500px;
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  color: white;
  font-family: "Poppins", sans-serif;
`;

const Image = styled.img`
  height: auto;
  max-width: 30vw;
  min-width: 330px;
  width: auto;
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 40px;
  width: auto;
`;

const TextContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    width: auto;
  }
`;

const ImageContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Banner = (props) => (
  <Container>
    <TextContainer>
      <Title>{props.banner.bannerTitle}</Title>
      <Paragraph>{props.banner.bannerParagraph}</Paragraph>
    </TextContainer>
    <ImageContainer>
      <Image src={props.banner.bannerImagePath} />
    </ImageContainer>
  </Container>
);

export default Banner;
