import { toAuthor, toTasks } from "../../routes";
import { StyledNavLink } from "../../styled";
import { Item, List } from "./styled";

export default () => {
    return (
 <nav>
<List>
  <Item>
    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
  </Item>
  <Item>
    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
  </Item>
</List>
</nav>
);
};