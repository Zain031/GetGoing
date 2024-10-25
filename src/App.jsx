import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sweeper from "./components/Beranda/Sweeper";
import Populer from "./components/Beranda/SedangPopuler";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Populer/>
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
