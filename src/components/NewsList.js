import React from 'react';
import News from './News';

const NewsList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.news.map((item, i) => {
                            return (
                                <News key={i} title={item.webTitle} image={item.fields.thumbnail}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
    

export default NewsList;
