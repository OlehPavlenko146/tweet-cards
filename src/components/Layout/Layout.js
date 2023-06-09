import { Outlet } from "react-router-dom";
import { Container, Header, NavList, Link } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/" end>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
