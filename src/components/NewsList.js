import React from 'react';
import News from './News';

const NewsList = (props) => {
    //Create list of news articles from news sent in through props
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.news.map((item, i) => {
                            return (
                                <News key={i} item={item} url={item.webUrl} title={item.webTitle} image={item.fields ? item.fields.thumbnail : null}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
    

export default NewsList;
