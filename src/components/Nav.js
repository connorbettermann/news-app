import React from 'react';

const Nav = () => {
    //Display Nav bar with logo
    return (
        <div className="navbar-fixed">
            <nav className="blue-grey darken-3">
                <div className="nav-wrapper container">
                    <a href="https://www.theguardian.com/us" target="__blank" rel="noopener" className="brand-logo"><b>The Guardian</b> News Feed</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://github.com/connorbettermann/news-app" target="__blank" rel="noopener">Source</a></li>
                        <li><a href="https://connorbettermann.github.io/" target="__blank" rel="noopener">Portfolio</a></li>
                        <li><a href="https://reactjs.org/docs/getting-started.html" target="__blank" rel="noopener">React Docs</a></li>
                        <li><a href="https://materializecss.com/getting-started.html" target="__blank" rel="noopener">Materialize Docs</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
