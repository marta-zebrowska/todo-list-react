import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.color.gallery};
  padding: 10px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  cursor: pointer;
  transition: 1s;

  &:hover {
    filter: brightness(130%);
    transform: scale(1.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
  }
`;
