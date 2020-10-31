import React from 'react';

const NewSingle = ({item}) => (
   <div className="container">
   <div className="col s6">
        <div className="card">
            <div className="card-image">
                <img src={item.fields.thumbnail} alt={item.webTitle} />
                <span className="card-title grey darken-3">{item.webTitle}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red" href={item.webUrl} target="__blank" rel="noopener"><i class="material-icons">open_in_new</i></a>
            </div>
        </div>
        <div className="card-content">
            <p>{item.pillarName} - {item.sectionName} - {item.webPublicationDate}</p>
        </div>
    </div>
    </div>
    
);

export default NewSingle;