import { useMediaQuery } from "react-responsive";
import Nav from "../components/Nav";

import { NavMobile } from "../components/NavMD";

const Navigation = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  if (isLargeScreen) {
    return <Nav />;
  } else {
    return <NavMobile />;
  }
};

export default Navigation;
