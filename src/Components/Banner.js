import React from "react";
import Particles from "react-tsparticles";
import styled, { keyframes } from "styled-components";

function Banner() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 130,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: [
                "#ff0000",
                "#66ff33",
                "#ffff4d",
                "#0099cc",
                "#cc00ff",
                "#ffffff",
              ],
            },
            links: {
              color: "#ffff4d",
              distance: 100,
              enable: true,
              opacity: 0.3,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 6,
            },
          },
          detectRetina: true,
        }}
      />
      <Intro>
        <Top>
          Hi, I'm <span>Shubh Purwar</span>
        </Top>
        <Below>
          <div>I am a</div>
          <List>
            <li>
              <span>Developer.</span>
            </li>
            <li>
              <span>Coder.</span>
            </li>
            <li>
              <span>Speaker.</span>
            </li>
            <li>
              <span>Motivator.</span>
            </li>
            <li>
              <span>Writer.</span>
            </li>
          </List>
        </Below>
      </Intro>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  #tsparticles {
    position: absolute;
  }
`;

const Intro = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 50px;
`;

const Top = styled.div`
  span {
    color: #00ccff;
  }
`;
const Below = styled.div`
  display: inline-flex;
  div {
    font-size: 50px;
  }
`;
const slide = keyframes`
  100% {
    top: -400px;
  }
`;
const List = styled.ul`
  margin: 0 0 0 10px;
  padding: 0;
  line-height: 80px;
  height: 80px;
  overflow: hidden;
  li {
    list-style: none;
    position: relative;
    top: 0;
    animation: ${slide} 10s steps(5) infinite;
  }
  span {
    color: #cc33ff;
    position: relative;
  }
  span::after {
    content: "";
    position: absolute;
    left: 0;
    background: #000;
    height: 100%;
    width: 100%;
    border-left: 3px solid #cc33ff;
    animation: typing 2s steps(10) infinite;
  }
  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 -30px 0 30px;
    }
  }
`;
