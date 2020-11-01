import React from 'react';

const News = (props) => {
    if(props.image == null){
        return (
        <div className="col s6">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianBLACK.png" alt="thumbnail" height="100%"></img>
                    <span className="card-title grey darken-3"><a href={props.url} target="__blank" rel="noopener">{props.title}</a></span>
                </div>
                <div className="card-content">
                    
                </div>
            </div>
        </div>
        )
    } else {
    return (
        <div className="col s6">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fkahoot.com%2Fkahoot-news%2F25-best-video-games-to-help-you-socialise-while-self-isolating%2F&psig=AOvVaw3Zuw8___sL8XCtC95_cRww&ust=1604351831161000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDKhu-v4uwCFQAAAAAdAAAAABAD`} alt="thumbnail"/> : <img src={`${props.image}`} alt="thumbnail"/>
                    }
                    <span className="card-title grey darken-3"><a href={props.url} target="__blank" rel="noopener">{props.title}</a></span>
                </div>
                <div className="card-content">

                </div>
            </div>
        </div>
    )
}
}

export default News;