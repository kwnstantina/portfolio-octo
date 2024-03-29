import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Outlet } from "react-router-dom";
import NavBar from "../features/navBar/navBar";
import Header from "../features/header/header";
import SkillsWrapper from "../features/skills/skillsWrapper";
import CV from "../features/cv/cv";

const HeaderLayout = () => (
  <>
    <NavBar />
    <Header />
    <Outlet />
  </>
);

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/skills",
        element: <SkillsWrapper />,
      },
      {
        path: "/cv",
        element: <CV />,
      },
     
    ],
  },
]);

export default routers;
