import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  padding: 10px;
  line-height: 1.5;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    }
`;

export const Image = styled.img`
display: grid;
grid-template-columns: 1fr;
border-radius:25%;
box-shadow: 9px 5px 13px 0px rgba(73, 70, 89, 0.4);  
`;

export const Description = styled.p`
  line-height: 1.5;
`;