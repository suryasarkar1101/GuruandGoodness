import { useEffect, useState } from "react";

import lotusDivider from "../../assets/images/icons/lotus-divider.png";

const TableOfContents = ({ content }) => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        if (!content) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");

        const blocks = doc.querySelectorAll(".gg-content-block");

        const items = [];

        blocks.forEach((block) => {
            const heading = block.querySelector("h2");

            if (!heading || !block.id) return;

            items.push({
                id: block.id,
                title: heading.textContent,
            });
        });

        setHeadings(items);
    }, [content]);

    return (
        <div className="gg-toc-card">
            <div className="gg-sidebar-title">
                <img src={lotusDivider} alt="" />
                <span>TABLE OF CONTENTS</span>
            </div>

            <ul className="gg-toc-list">
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <a href={`#${heading.id}`}>
                            {heading.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;