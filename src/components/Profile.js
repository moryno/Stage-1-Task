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
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.section`
  text-align: center;
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
`;
