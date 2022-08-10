import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.625rem;
  font-weight: 500;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`;
