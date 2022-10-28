import React from "react";
import styled from "styled-components";

const Links = () => {
  return (
    <Container>
      <a
        id="btn_zuri"
        href="https://training.zuri.team/"
        target="_blank"
        rel="noreferrer"
      >
        Twitter Link
      </a>
      <a
        id="btn_zuri"
        href="https://training.zuri.team/"
        target="_blank"
        rel="noreferrer"
      >
        Zuri Team
      </a>
      <a
        id="books"
        href="http://books.zuri.team/"
        target="_blank"
        rel="noreferrer"
      >
        Zuri Books
      </a>
      <a
        id="book_python"
        href="https://books.zuri.team/"
        target="_blank"
        rel="noreferrer"
      >
        Python Books
      </a>
      <a
        id="pitch"
        href="https://background.zuri.team/"
        target="_blank"
        rel="noreferrer"
      >
        Background Check for Coders
      </a>
      <a
        id="book_design"
        href="https://books.zuri.team/design-rules"
        target="_blank"
        rel="noreferrer"
      >
        Design Books
      </a>
    </Container>
  );
};

export default Links;

const Container = styled.main`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  a {
    padding: 1.5rem;
    border-radius: 5px;
    background-color: #eaecf0;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
  }
`;
