import { Helmet } from "react-helmet-async";
import "../../styles/blog.css";
import Hero from "./Hero";
import Topics from "./Topics";
import Articles from "./Articles";
import CTA from "./CTA";


const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog | Guru & Goodness</title>
            </Helmet>

            <Hero/>
            <Topics/>
            <Articles/>
            <CTA/>
        </>
    );
};

export default Blog;