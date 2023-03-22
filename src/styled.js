import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid;
  }

  &.${activeClassName} {
    font-weight: bold;
  }
`;
