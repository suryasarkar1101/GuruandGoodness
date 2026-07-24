import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { topicData } from "../Blog/blogTopics";
import { useEffect, useState, useRef, useMemo } from "react";

import { getAllBlogsByCategory } from "../../api/blogApi";

import Hero from "./Hero";
import AllArticles from "./AllArticles";
import FeaturedArticles from "./FeaturedArticles";
import OtherCategories from "./OtherCategories";


import "../../styles/blog.css";

const BlogCategory = () => {

    const { topic } = useParams();
    const [blogs, setBlogs] = useState([]);
    const articlesRef = useRef(null);

    const scrollToArticles = () => {
        articlesRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await getAllBlogsByCategory(topic);
            setBlogs(data);
        };

        loadBlogs();
    }, [topic]);
    const featuredBlogs = blogs.filter(blog => blog.featured);

    const category = useMemo(() => {
        return topicData[topic] || topicData["spiritual-wisdom"];
    }, [topic]);

    const otherTopics = Object.entries(topicData).filter(([key]) => key !== topic).map(([key, value]) => ({
        key,
        ...value,
    }));

    return (
        <>
            <Helmet>
                <title>{`${category.title} | Guru & Goodness`}</title>
            </Helmet>

            <Hero category={category} onExploreClick={scrollToArticles} />
            <FeaturedArticles blogs={featuredBlogs} category={category} />
            <AllArticles blogs={blogs} category={category} ref={articlesRef} />
            <OtherCategories topics={otherTopics} />
        </>
    );
};

export default BlogCategory;