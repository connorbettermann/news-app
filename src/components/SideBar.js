import React from 'react';

const SideBar = (props) => {
    return (
        <div className="collection col s3">
            <a href="#!" className="collection-item" onClick={() => props.handleSection("", "Recent News")}>Recent News</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=world", "World News")}>World News</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=us-news", "US News")}>US News</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=politics", "Politics")}>Politics</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=football", "Football (Soccer)")}>Football (Soccer)</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=sport", "Sports")}>Sports</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=commentisfree", "Opinion")}>Opinion</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=lifeandstyle", "Life and Style")}>Life and Style</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=books", "Books")}>Books</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=education", "Education")}>Education</a>
            <a href="#!" className="collection-item" onClick={() => props.handleSection("&section=society", "Society")}>Society</a>
        </div>
    )
}

export default SideBar