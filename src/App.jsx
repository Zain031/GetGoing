import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sweeper from "./components/Beranda/Sweeper";
import Populer from "./components/Beranda/SedangPopuler";
import KotaPopuler from "./components/Beranda/KotaPopuler";
import Footer from "./components/Footer";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Footer />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
