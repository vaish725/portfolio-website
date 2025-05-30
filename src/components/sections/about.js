import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'TensorFlow/PyTorch', 'AWS/GCP', 'Computer Vision', 'React/Node.js', 'Machine Learning'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">        <StyledText>
          <div>
            <p>
              Hello! My name is Vaishnavi and I'm a Machine Learning Engineer with a passion for building intelligent systems. My journey in technology began with computer science fundamentals and quickly evolved into a deep fascination with AI and computer vision.
            </p>            <p>
              I have professional experience working at{' '}
              <a href="https://www.accenture.com/">Accenture Solutions</a> where I designed and implemented robust AWS solutions. Prior to that, I worked as a Machine Learning Engineer Intern at{' '}
              <a href="https://appsorship.com/">AppsOShip</a> where I designed an autonomous GUI detection system using computer vision.
            </p>

            <p>
              I'm passionate about exploring the intersection of machine learning, cloud computing, and practical applications that solve real-world problems. My technical expertise includes computer vision, cloud architecture, and developing machine learning models for real-world applications.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <div 
              className="img"
              style={{
                height: "300px",
                width: "300px",
                backgroundColor: "#112240",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64ffda",
                fontSize: "16px",
                fontFamily: "monospace",
                borderRadius: "var(--border-radius)"
              }}
            >
              <span>Vaishnavi Kamdi</span>
            </div>
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
