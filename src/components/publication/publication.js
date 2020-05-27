import React from "react";
import "./publication.css";

import data from "./data.json"

const publications = data.articles;

function Publication() {
    return (
        <div className="pubContainer">
            {
            publications.map((article, i) => {
                return (
                    <div className="cardContainer" style={{borderBottomColor: article.isPaper ?  "var(--text-title)": "var(--text-secondary)"}}>
                        <div style={{backgroundImage: `url(${article.imgUrl})`}} className="cardImg">                        </div>
                        <div className="cardBody">
                            <p className="cardTitle">
                                {article.title}
                            </p>
                            <span className="badge" style={{backgroundColor: article.isPaper ? "var(--text-title)": "#01c4ff"}}>{article.isPaper ? "Paper": "Article"}</span>
                            <span className="badge" style={{backgroundColor: article.published ? "var(--text-title)": "#fffb01"}}>{article.published ? "Published": "Pending"}</span>
                                
                            <p className="cardDesc">
                                {article.description}
                            </p>
                        </div>
                        <div className="cardFooter">
                            <a href={article.url} type="button" className="cardBtn" rel="noopener" target="_blank">
                                {article.published ? `Read More`: `Stay Tuned`}
                            </a>
                        </div>
                    </div>
                    );
                })
            }
        </div>                
    );
}

export default Publication;