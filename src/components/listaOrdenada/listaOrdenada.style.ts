import styled from "styled-components";
import background from "../../assets/images/aulas/backgound.jpeg";

export const Container = styled.div`
  background-color: #222b35;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media only screen and (max-width: 350px){
    text-align: center;  }

`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8f8f8;
  font-size: 35px;
  margin: 0 0 4rem 0;
`;

export const SectionCard = styled.div`
  justify-content: center;
  display: flex;
  padding: 4px;
  @media only screen and (max-width: 650px) {
    display: table-row;
  }
  .guitarPlayer {
    display: flex;
    margin: 0px;
    padding: 0px;
    width: 604px;
    height: 604px;
    @media only screen and (max-width: 800px) {
      width: 400px;
      height: 400px;
    }
    @media only screen and (max-width: 650px) {
      display: none;
    }
  }
  .list-row{
    padding: 4px;
  }

  div img {
    height: 75%;
  }

  .aside {
    max-width: 50%;
    padding: 4px;
    @media only screen and (max-width: 650px){
        max-width: 80%;}
  }

  .numberCircle {
    display: flex;
    color: #f8f8f8;
  }

  .number {
    font-size: 25px;
    border: solid 1px #6c5ece;
    border-radius: 50%;
    padding: 0 8px 0px;
    margin: 0 0rem 2rem 0;
  }

  .numberCircle p {
    font-size: 25px;
    margin-left: 0;
  }

  span {
    color: #f8f8f8;
    font-size: 14px;
  }

  hr {
    color: #6c5ece;
  }
`;
