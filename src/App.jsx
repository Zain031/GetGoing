import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sweeper from "./components/Beranda/Sweeper";
import Populer from "./components/Beranda/SedangPopuler";
import KotaPopuler from "./components/Beranda/KotaPopuler";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<KotaPopuler/>
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
