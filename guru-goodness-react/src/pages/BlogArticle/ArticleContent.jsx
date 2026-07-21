import divider from "../../assets/images/icons/lotus-divider.png";
import { lazy, Suspense, useEffect, useState } from "react";

const TableOfContents = lazy(() => import("./TableOfContents"));
const ReadingProgress = lazy(() => import("./ReadingProgress"));
import { getArticleContent } from "../../api/blogApi";
import Loading from "../../components/Loading/Loading";

const ArticleContent = ({ article }) => {

    const [content, setContent] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const html = await getArticleContent(article.content);
                setContent(html);
            } catch (error) {
                console.error("Failed to load article:", error);
            }
        };

        if (article?.content) {
            loadContent();
        }
    }, [article?.content]);

    return (
        <section className="gg-read-content">
            <div className="gg-read-container">

                <div
                    className="gg-article-intro"
                    id="articleIntro"
                    dangerouslySetInnerHTML={{
                        __html: article.intro,
                    }}
                />

                <div className="gg-content-divider">
                    <span></span>

                    <img
                        src={divider}
                        alt="Lotus Divider"
                    />

                    <span></span>
                </div>

                {content ? (
                    <div
                        id="article-body"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                ) : (
                    <Loading text="Loading article..." />
                )}

            </div>

            <aside className="gg-article-sidebar">

                <Suspense fallback={null}>
                    <TableOfContents content={content} />
                </Suspense>

                <Suspense fallback={null}>
                    <ReadingProgress slug={article.slug} />
                </Suspense>

            </aside>
        </section>
    );
};

export default ArticleContent;