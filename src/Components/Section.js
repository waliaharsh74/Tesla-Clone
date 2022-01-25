import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function section(props) {
  return (
    <Wrap bgImage={props.backgroundimg}>
      <Fade top>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description} </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade top>
          <ButtonGroup>
            <LeftButton opac={props.opacity} mg={props.mglf}>
              {props.leftbtntext}
            </LeftButton>
            <RightButton>{props.rightbtntext}</RightButton>
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: #171a20;
  color: white;
  height: 40px;
  width: 256px;
  padding: 4px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: ${(props) => `${props.opac}`};
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
  margin-left: ${(props) => `${props.mg}`}; ;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 0px;
  margin-left: 250px;
  height: 50px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
