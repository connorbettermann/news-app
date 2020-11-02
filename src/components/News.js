import React, { useState } from 'react';

const News = (props) => {
    const [isTruncated, setIsTruncated] = useState(true)

    //If no thumbnail image is present, display news article card with placeholder image
    if(props.image == null){
        return (
        <div className="col s6">
            <div className="card hoverable"><a href={props.url} target="__blank" rel="noopener">
                <div className="card-image waves-effect waves-block waves-light">
                    <img src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianBLACK.png" alt="thumbnail" height="282.75px"></img>
                    <span className="card-title blue-grey darken-3 truncate">{props.title}</span>
                </div>
               </a>
            </div>
        </div>
        )
    } else {
    //Display regular news article card, truncate title by default, expand on mouseover
    return (
        <div className="col s12 m12 l6 xl6">
            <div className="card hoverable"><a href={props.url} target="__blank" rel="noopener">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fkahoot.com%2Fkahoot-news%2F25-best-video-games-to-help-you-socialise-while-self-isolating%2F&psig=AOvVaw3Zuw8___sL8XCtC95_cRww&ust=1604351831161000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDKhu-v4uwCFQAAAAAdAAAAABAD`} alt="thumbnail"/> : <img src={`${props.image}`} alt="thumbnail"/>
                    }
                    <span className={`card-title blue-grey darken-3 ${isTruncated ? "truncate" : ""}`} onMouseEnter={() => setIsTruncated(false)} onMouseLeave={() => setIsTruncated(true)}>{props.title}</span>
                </div>
                </a>
            </div>
        </div>
    )
}
}

export default News;