import { Outlet } from "react-router";
import Container from "./components/pages/Container";
const WrapPage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default WrapPage;
