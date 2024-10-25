import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sweeper from "./components/Beranda/Sweeper";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Sweeper/>
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
