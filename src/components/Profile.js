import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <Wrapper>
      <img
        id="profile_img"
        src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
        alt="profileImage"
      />
      <p id="twitter">Annette Black</p>
      <p id="slack">@AnneteBlack</p>
      <div>
        <i class="fas fa-share"></i>
      </div>
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.section`
  text-align: center;
  position: relative;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }
  #twitter {
    margin: 1rem 0;
    font-weight: 600;
    font-size: 1.3rem;
  }
  #slack {
    display: none;
  }
  div {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: lightgray;
    border: 0.5px dotted lightgray;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0;
    right: 30%;
  }
`;
