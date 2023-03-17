import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gallery};
  align-items: center;
  padding: 10px;
  padding-left: 0;
  color: ${({ theme }) => theme.color.teal};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.crimson};
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.parsley};
      color: ${({ theme }) => theme.color.white};
      transition: 0.4s;

      &:hover {
        filter: brightness(120%);
      }

      &:active {
        filter: brightness(140%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      color: ${({ theme }) => theme.color.white};
      transition: 1s;

      &:hover {
        filter: brightness(120%);
      }

      &:active {
        filter: brightness(140%);
      }
    `}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: teal;
`