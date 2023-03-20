import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
&.${activeClassName} {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
}
`; 