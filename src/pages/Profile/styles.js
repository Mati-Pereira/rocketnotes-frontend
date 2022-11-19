import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 9rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 7.75rem;
    @media screen and (max-width: 480px) {
      padding: 0 2rem;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -6.5rem auto 0;
  div:nth-child(4) {
    margin-top: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    max-width: 250px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 2rem;
  width: 186px;
  height: 186px;
  > img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }
  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0.4375rem;
    right: 0.4375rem;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
