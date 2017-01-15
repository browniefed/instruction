import React from 'react';
import Title from "../components/text/title";
import Article from "../components/article/article";
import Body from "../components/article/body";

const About = props => {
  return (
    <Article>
      <Title>About Instruction</Title>
      <Body>
        <p>
          Instructions sole purpose is with helping you stay up to date with the latest technology. We will focus on content for all developer levels.
        </p>
        <br />
        <p>
           All content will be backed by github and interactive code embeds when we can. The site will be a mix of documentation, tutorials, screencasts, and step-by-step sample projects.
        </p>
        <br />
        <p>
          This site is maintained by <a href="https://twitter.com/browniefed">Jason Brown</a>.
        </p>
      </Body>
    </Article>
  );
};

export default About;