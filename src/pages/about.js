import React from 'react';
import Title from "../components/title";
import Article from "../components/article/article";
import Body from "../components/article/body";

const About = props => {
  return (
    <Article>
      <Title>About Instruction</Title>
      <Body>
        this is text
      </Body>
    </Article>
  );
};

export default About;