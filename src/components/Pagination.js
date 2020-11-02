import React from 'react';

const Pagination = (props) => {
    //Array to hold the pagination links
    const pageLinks = []

    //If we are on a page higher than the initial 10 pages displayed, display page 1 and formatting
    if(props.currentPage > 10) {
        
        pageLinks.push(<li className={`waves-effect`} key={1} onClick={() => props.nextPage(1)}>...</li>)

        //update pagination so that 5 pages are shown on either side of current page
        for(let i = props.currentPage - 5; i <= props.currentPage + 5; i++){
            let active = props.currentPage === i ? 'active' : '';    
            pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#top">{i}</a></li>)
        }
    } else {
    
    //display initial 10 pages in pagination bar
    for(let i = 1; i <= 10; i++) {
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#top">{i}</a></li>)
    }
    }

    //If there are more than 5 pages before max page, display formatting and max page 
    if(props.currentPage < props.pages - 5) {
        pageLinks.push(<li className={`waves-effect`} key={props.pages} onClick={() => props.nextPage(props.pages)}>...</li>)
    }

    //display pagination bar with Prev and Next links when applicable
    return (
        <div className="container">
            <div className="row">
                <ul className="pagination center-align">
                    { props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#top">Prev</a></li> : ''}
                    { pageLinks }
                    { props.currentPage < props.pages ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#top">Next</a></li> : ''}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;
