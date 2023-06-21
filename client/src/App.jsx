import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
    Add,
    Gig,
    Gigs,
    Home,
    Message,
    Messages,
    MyGigs,
    Orders,
} from "./pages";

function App() {
    const Layout = () => {
        return (
            <div className="app">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/gigs",
                    element: <Gigs />,
                },
                {
                    path: "/gig/:id",
                    element: <Gig />,
                },
                {
                    path: "/orders",
                    element: <Orders />,
                },
                {
                    path: "/mygigs",
                    element: <MyGigs />,
                },
                {
                    path: "/add",
                    element: <Add />,
                },
                {
                    path: "/messages",
                    element: <Messages />,
                },
                {
                    path: "/message/:id",
                    element: <Message />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
