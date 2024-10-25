import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sweeper from "./components/Beranda/Sweeper";
import Populer from "./components/Beranda/SedangPopuler";
import KotaPopuler from "./components/Beranda/KotaPopuler";
import Footer from "./components/Footer";
import PrivateTrip from "./components/Beranda/PrivateTrip";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PrivateTrip />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
