import React from 'react';

const News = (props) => {
    return (
        <div className="col s6">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="thumbnail"/> : <img src={`${props.image}`} alt="thumbnail"/>
                    }
                    <span className="card-title grey darken-3">{props.title}</span>
                </div>
                <div className="card-content">
                    
                </div>
            </div>
        </div>
    )
}

export default News;