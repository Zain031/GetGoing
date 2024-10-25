import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sweeper from "./components/Beranda/Sweeper";
import Populer from "./components/Beranda/SedangPopuler";
import KotaPopuler from "./components/Beranda/KotaPopuler";
import Footer from "./components/Footer";
import PrivateTrip from "./components/Beranda/PrivateTrip";
import Navbar_1 from "./components/Beranda/Navbar_1";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar_1 />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
