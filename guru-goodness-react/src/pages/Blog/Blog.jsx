import { Helmet } from "react-helmet-async";
import "../../styles/blog.css";
import Hero from "./Hero";
import Topics from "./Topics";
import Articles from "./Articles";
import CTA from "./CTA";
import { useRef } from "react";


const Blog = () => {
    const articlesRef = useRef(null);

    const scrollToArticles = () => {
        articlesRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <>
            <Helmet>
                <title>Blog | Guru & Goodness</title>
            </Helmet>

            <Hero onExploreClick={scrollToArticles}/>
            <Topics/>
            <Articles ref={articlesRef}/>
            <CTA/>
        </>
    );
};

export default Blog;