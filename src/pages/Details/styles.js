import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 6.5625rem auto;
  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem 0;
    @media screen and (max-width: 480px) {
      padding: 2rem;
    }
  }
`;

export const Links = styled.ul`
  list-style: none;
  > li {
    margin-top: 0.75rem;
    > a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 2.25rem;
    font-weight: 500;
    padding-top: 4rem;
    @media screen and (max-width: 480px) {
      margin-top: -3rem;
    }
  }
  > p {
    font-size: 1rem;
    margin-top: 1rem;
    text-align: justify;
  }
`;
