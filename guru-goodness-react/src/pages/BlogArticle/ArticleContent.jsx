import divider from "../../assets/images/icons/lotus-divider.png";
import { useEffect, useState } from "react";

import TableOfContents from "./TableOfContents";
import ReadingProgress from "./ReadingProgress";
import { getArticleContent } from "../../api/blogApi";

const ArticleContent = ({ article }) => {

    const [content, setContent] = useState("");

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
    }, [article]);

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

                <div
                    id="article-body"
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />

            </div>

            <aside className="gg-article-sidebar">

                <TableOfContents content={content} />

                <ReadingProgress slug={article.slug} />

            </aside>
        </section>
    );
};

export default ArticleContent;