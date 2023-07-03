import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
    Add,
    Gig,
    Gigs,
    Home,
    Login,
    Message,
    Messages,
    MyGigs,
    Orders,
    Register,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient();
    const Layout = () => {
        return (
            <div className="app">
                <QueryClientProvider client={queryClient}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </QueryClientProvider>
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
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/register",
                    element: <Register />,
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
