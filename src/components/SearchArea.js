import React from 'react';
//Display search bar and Category/Search string above returned articles
const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix">search</i>
                            <input placeholder="Search news" type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
            <div className="center-align blue-grey-text text-darken-1">
                <h4>{props.currentSection}</h4>
            </div>
        </div>
    )
}

export default SearchArea;
