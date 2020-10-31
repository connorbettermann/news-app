import React, { Component } from 'react';
import NewSingle from './NewSingle';


class News extends Component {
    constructor(props) {
      super(props);
      this.state = {
        news: []
      };
    }
  
    componentDidMount() {
      const url = 'https://content.guardianapis.com/search?api-key=1608a221-3887-40b9-be08-b111fe2a92d7';
      fetch(url)
        .then((response) => { 
          return response.json();
        })
        .then((data) => {
          this.setState({
            news: data.response.results
          })
        })
        .catch((error) => console.log(error));
    }
  
    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ));
    }
  
    render() {
      return (
        <ul>
          {this.renderItems()}
        </ul>
      );
    }
}

export default News;
