import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/blog.css";

import { getBlogBySlug, getRelatedBlogs } from "../../api/blogApi";
import { topicData } from "../Blog/blogTopics";

import ArticleNotFound from "./ArticleNotFound";
import Loading from "../../components/Loading/Loading";
import Hero from "./Hero";
import ArticleContent from "./ArticleContent";
import AuthorSection from "./AuthorSection";
import RelatedArticles from "./RelatedArticles";


const BlogArticle = () => {
    const { slug } = useParams();

    const [article, setArticle] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadArticle = async () => {
            setLoading(true);
            const blog = await getBlogBySlug(slug);            
            if (blog) {
                setArticle(blog);
                const related = await getRelatedBlogs(slug);
                setRelatedBlogs(related);
            }
            setLoading(false);
        };

        loadArticle();
    }, [slug]);

    if (loading) {
        return <Loading text="Preparing your experience" />;
    }

    if (!article) {
        return (
            <>
                <Helmet>
                    <title>Article Not Found | Guru and Goodness</title>
                </Helmet>

                <ArticleNotFound />
            </>
        );
    }

    const category = topicData[article.categorySlug];

    return (
        <>
            <Helmet>
                <title>{`${article.title} | Guru and Goodness`}</title>
            </Helmet>

            <Hero article={article} />
            <ArticleContent article={article} />
            <AuthorSection />
            <RelatedArticles blogs={relatedBlogs} category={category} />
        </>
    );
};

export default BlogArticle;