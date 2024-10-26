import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sweeper from "./components/Beranda/Sweeper";
import Populer from "./components/Beranda/SedangPopuler";
import KotaPopuler from "./components/Beranda/KotaPopuler";
import Footer from "./components/Footer";
import PrivateTrip from "./components/Beranda/PrivateTrip";
import Navbar_1 from "./components/Navbar_1";
import Beranda from "./pages/Beranda";
import Navbar_2 from "./components/Navbar_2";
import FormKonsultasi from "./components/ServiceKami/FormKonsultasi";
import JumlahPerjalanan from "./components/ServiceKami/JumlahPerjalanan";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <JumlahPerjalanan/>,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
