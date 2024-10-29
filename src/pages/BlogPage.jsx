import { useEffect } from "react";
import Blog from "../components/Blog.jsx/Blog";
import Footer from "../components/Footer";

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return (
        <>
            <div className="justify-center h-screen">
                <Blog />
                <Footer />
            </div>
        </>
    );
};

export default BlogPage;
