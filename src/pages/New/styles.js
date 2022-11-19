import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  > main {
    overflow-y: auto;
  }
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0 2rem;
    height: auto;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 2.375rem auto;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.25rem;
    a {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
