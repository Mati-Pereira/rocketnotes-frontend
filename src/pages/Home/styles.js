import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
  }
`;
export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 4rem;
  text-align: center;
  > li {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  @media screen and (max-width: 480px) {
    padding-top: 1.5rem;
    width: 100%;
  }
`;
export const Search = styled.div`
  grid-area: search;
  padding: 4rem 4rem 0;
  @media screen and (max-width: 480px) {
    padding: 2rem;
  }
`;
export const Content = styled.div`
  grid-area: content;
  padding: 4rem 4rem 0;
  overflow-y: auto;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0rem 2rem;
    margin: 0;
  }
`;
export const NewNote = styled(Link)`
  grid-area: newnote;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const Toggler = styled.button`
  background: none;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
  svg {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  @media screen and (min-width: 480px) {
    display: none;
  }
`;
