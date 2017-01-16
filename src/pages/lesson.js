import React from 'react';
import Title from "../components/text/title";
import Subtitle from "../components/text/subtitle";
import Article from "../components/article/article";
import Body from "../components/article/body";

const Lesson = ({ title, subtitle }) => {
  return (
    <Article>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Body>
      </Body>
    </Article>
  );
};

export default Lesson;