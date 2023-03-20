import styled from "styled-components";

export const List = styled.ul`
  background-color: ${({ theme }) => theme.color.teal};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 20px;
`;
