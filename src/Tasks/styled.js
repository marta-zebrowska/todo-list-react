import styled, { css } from "styled-components";

export const TasksList = styled.ul`
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
