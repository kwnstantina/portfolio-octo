import {  createBrowserRouter} from 'react-router-dom';
import App from '../App';
import { Outlet } from 'react-router-dom';
import NavBar from "../features/navBar/navBar";
import Header from "../features/header/header";
import Skills from "../features/skills/skills";

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
                element:<Skills />,
            }]
    },
]);

export default routers;
