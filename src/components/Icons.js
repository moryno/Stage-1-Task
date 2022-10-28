import React from "react";
import styled from "styled-components";

const Icons = () => {
  return (
    <Wrapper>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
        alt="slack-log"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="github-log"
      />
    </Wrapper>
  );
};

export default Icons;

const Wrapper = styled.section`
  justify-content: center;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
