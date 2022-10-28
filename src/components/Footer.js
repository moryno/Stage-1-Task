import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <img
          src="https://miro.medium.com/max/1400/1*p3ij-lkQ5b0TZb40jAH2CA.jpeg"
          alt="zuri-img"
        />
      </Left>
      <Center>
        <span>HNG Internship 9 Frontend Task</span>
      </Center>
      <Right>
        <img
          src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png"
          alt="footer-img"
        />
      </Right>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid lightgray;
  ${"" /* padding: 1rem 0; */}
`;

const Left = styled.article`
  img {
    width: 12rem;
  }
`;

const Center = styled.article`
  color: gray;
`;

const Right = styled.article`
  img {
    width: 8.5rem;
  }
`;
